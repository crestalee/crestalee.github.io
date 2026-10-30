import {
  ACESFilmicToneMapping,
  BackSide,
  Clock,
  Mesh,
  PerspectiveCamera,
  PlaneGeometry,
  Scene,
  ShaderMaterial,
  SphereGeometry,
  SRGBColorSpace,
  Vector2,
  Vector3,
  WebGLRenderer,
} from "three";
import gsap from "gsap";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { OutputPass } from "three/examples/jsm/postprocessing/OutputPass.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js";

/**
 * One shot: a camera low over an ocean at dusk.
 *
 * The scroll position is a dolly, not a dashboard. It eases from the opener
 * into blue hour. Bloom only catches the sun and the reflection path.
 * `prefers-reduced-motion` renders a single still and does not keep drawing.
 */

const CLEAR = 0x07060c;

/** Hero frame the intro lands on. Later beats are SHOTS[0]. */
const HERO = {
  x: 0.28,
  y: 2.02,
  z: 7.5,
  lx: 0.02,
  ly: 0.42,
  lz: -18,
  fov: 34,
  sunY: 0.1,
  night: 0,
};

/** Opener: tighter lens, closer to the water, sun nearer the middle. */
const INTRO_FROM = {
  x: -0.7,
  y: 1.62,
  z: 4.5,
  lx: 1.6,
  ly: 0.95,
  lz: -12,
  fov: 22,
};

const SHOTS = [
  { t: 0, ...HERO },
  {
    t: 0.2,
    x: 0.5,
    y: 2.3,
    z: 8.4,
    lx: 0.15,
    ly: 0.36,
    lz: -17,
    fov: 36,
    sunY: 0.086,
    night: 0.04,
  },
  {
    t: 0.42,
    x: -1.15,
    y: 2.85,
    z: 10,
    lx: -0.45,
    ly: 0.22,
    lz: -15,
    fov: 38,
    sunY: 0.06,
    night: 0.16,
  },
  {
    t: 0.66,
    x: 1.35,
    y: 3.45,
    z: 11.2,
    lx: 1.2,
    ly: 0.08,
    lz: -13,
    fov: 40,
    sunY: 0.02,
    night: 0.4,
  },
  {
    t: 0.86,
    x: 0.1,
    y: 4.25,
    z: 12.4,
    lx: 0.15,
    ly: -0.08,
    lz: -12,
    fov: 42,
    sunY: -0.02,
    night: 0.68,
  },
  {
    t: 1,
    x: -0.25,
    y: 5.05,
    z: 13.2,
    lx: -0.1,
    ly: -0.28,
    lz: -10,
    fov: 38,
    sunY: -0.09,
    night: 0.9,
  },
];

const SHARED = /* glsl */ `
precision highp float;

uniform float uTime;
uniform float uNight;
uniform vec3 uSunDir;
uniform vec2 uResolution;

vec3 skyColor(vec3 dir, vec3 sunDir, float night) {
  vec3 n = normalize(dir);
  vec3 s = normalize(sunDir);
  float elev = s.y;

  vec3 zenithDusk = vec3(0.05, 0.055, 0.13);
  vec3 zenithNight = vec3(0.008, 0.012, 0.028);
  vec3 zenith = mix(zenithDusk, zenithNight, night);

  vec3 horDusk = vec3(0.62, 0.34, 0.24);
  vec3 horNight = vec3(0.05, 0.07, 0.11);
  vec3 horizon = mix(horDusk, horNight, night);

  vec2 xz = normalize(n.xz + vec2(0.0001));
  vec2 sxz = normalize(s.xz + vec2(0.0001));
  float sunSide = pow(max(dot(xz, sxz), 0.0), 2.2);
  horizon = mix(horizon, vec3(0.86, 0.48, 0.28), sunSide * (1.0 - night) * 0.7);

  float h = n.y;
  vec3 col = mix(horizon, zenith, smoothstep(0.0, 0.5, pow(max(h, 0.0), 0.6)));
  float below = smoothstep(0.02, -0.35, h);
  col = mix(col, mix(horizon * 0.22, zenith * 0.35, below), below);

  float band = exp(-pow((h - 0.0) * 18.0, 2.0));
  col += vec3(0.72, 0.4, 0.26) * band * 0.16 * (1.0 - night);

  float sunVis = smoothstep(-0.12, 0.08, elev) * (1.0 - night);
  float sunDot = max(dot(n, s), 0.0);
  float glow = pow(sunDot, 36.0);
  float aura = pow(sunDot, 140.0);
  float disc = smoothstep(0.9995, 0.99982, sunDot);
  col += vec3(1.0, 0.72, 0.42) * glow * 0.55 * sunVis;
  col += vec3(2.2, 1.45, 0.7) * aura * sunVis;
  col += vec3(5.5, 4.6, 3.2) * disc * sunVis;

  float ang = atan(n.y - s.y, n.x - s.x);
  float streak = pow(0.5 + 0.5 * sin(ang * 6.0 + uTime * 0.08), 14.0);
  float shaft = pow(sunDot, 8.0) * (0.4 + 0.6 * streak);
  shaft *= smoothstep(0.0, 0.28, h);
  col += vec3(0.9, 0.42, 0.18) * shaft * 0.32 * sunVis;

  vec3 cell = floor(n * 460.0);
  float hs = fract(sin(dot(cell, vec3(127.1, 311.7, 74.7))) * 43758.5453);
  float star = step(0.9984, hs);
  float tw = 0.72 + 0.28 * sin(uTime * 0.45 + hs * 38.0);
  col += vec3(0.9, 0.94, 1.0) * star * tw * 1.35 * smoothstep(0.22, 0.7, night) * smoothstep(0.04, 0.22, h);

  return col;
}

vec3 grade(vec3 col) {
  vec2 uv = gl_FragCoord.xy / max(uResolution, vec2(1.0));
  vec2 p = (uv - 0.5) * vec2(uResolution.x / max(uResolution.y, 1.0), 1.0);
  float vig = smoothstep(1.2, 0.32, length(p));
  col *= mix(0.58, 1.0, vig);
  float g = fract(sin(dot(gl_FragCoord.xy + vec2(uTime * 13.0, uTime * 7.0), vec2(12.9898, 78.233))) * 43758.5453);
  col += (g - 0.5) * 0.022;
  return col;
}
`;

const OCEAN_VERT = /* glsl */ `
precision highp float;

uniform float uTime;
varying vec3 vWorld;
varying vec3 vNormal;
varying float vHeight;

void applyWave(inout vec3 pos, inout vec3 normal, vec2 xz0, vec2 dir, float amp, float length, float steep, float speed, float fade) {
  float a = amp * fade;
  vec2 d = normalize(dir);
  float w = 6.28318530718 / length;
  float phase = w * dot(d, xz0) - uTime * speed * w;
  float s = sin(phase);
  float c = cos(phase);
  pos.x += steep * a * d.x * c;
  pos.z += steep * a * d.y * c;
  pos.y += a * s;
  float wa = w * a;
  normal.x -= d.x * wa * c;
  normal.z -= d.y * wa * c;
  normal.y -= steep * wa * s;
}

void main() {
  vec3 pos = position;
  vec2 xz0 = position.xz;
  vec3 normal = vec3(0.0, 1.0, 0.0);
  float dist = length(xz0 - cameraPosition.xz);
  float detail = exp(-dist * 0.045);

  applyWave(pos, normal, xz0, vec2(0.97, 0.24), 0.4, 24.0, 0.46, 0.55, 1.0);
  applyWave(pos, normal, xz0, vec2(0.1, 1.0), 0.18, 13.0, 0.4, 0.72, 1.0);
  applyWave(pos, normal, xz0, vec2(-0.7, 0.62), 0.08, 6.8, 0.34, 0.95, mix(0.45, 1.0, detail));
  applyWave(pos, normal, xz0, vec2(0.62, -0.78), 0.028, 3.4, 0.3, 1.15, detail);

  vec4 world = modelMatrix * vec4(pos, 1.0);
  vWorld = world.xyz;
  vNormal = normalize(mat3(modelMatrix) * normal);
  vHeight = pos.y;
  gl_Position = projectionMatrix * viewMatrix * world;
}
`;

const OCEAN_FRAG = /* glsl */ `
${SHARED}

varying vec3 vWorld;
varying vec3 vNormal;
varying float vHeight;

void main() {
  vec3 n = normalize(vNormal);
  vec3 s = normalize(uSunDir);
  vec3 view = normalize(cameraPosition - vWorld);
  vec3 I = -view;
  float night = uNight;
  float sunVis = smoothstep(-0.14, 0.06, s.y) * (1.0 - night);

  float ndv = clamp(dot(n, view), 0.0, 1.0);
  float fresnel = 0.02 + 0.98 * pow(1.0 - ndv, 5.0);

  vec3 deep = mix(vec3(0.015, 0.04, 0.07), vec3(0.008, 0.014, 0.026), night);
  vec3 shallow = mix(vec3(0.03, 0.12, 0.15), vec3(0.015, 0.03, 0.045), night);
  float shade = clamp(dot(n, s), 0.0, 1.0);
  vec3 water = mix(deep, shallow, 0.08 + shade * 0.7);

  vec3 refl = reflect(I, n);
  vec3 reflected = skyColor(refl, s, night);
  vec3 col = mix(water, reflected, fresnel);

  float wrap = pow(clamp(dot(view, s), 0.0, 1.0), 3.0);
  col += vec3(0.85, 0.38, 0.16) * wrap * (1.0 - ndv) * 0.18 * sunVis;

  vec3 H = normalize(s + view);
  float spec = pow(clamp(dot(n, H), 0.0, 1.0), 280.0);
  float path = pow(clamp(dot(n, H), 0.0, 1.0), 14.0);
  col += vec3(2.4, 1.7, 1.05) * spec * sunVis;
  col += vec3(0.95, 0.55, 0.28) * path * 0.2 * sunVis;

  float crest = smoothstep(0.22, 0.55, vHeight);
  col = mix(col, vec3(0.78, 0.74, 0.68), crest * fresnel * 0.22);

  vec3 hor = normalize(vec3(view.x, 0.06, view.z));
  vec3 fogCol = skyColor(hor, s, night);
  float dist = length(cameraPosition - vWorld);
  float distFog = 1.0 - exp(-dist * (0.012 + night * 0.01));
  float graze = pow(1.0 - clamp(view.y, 0.0, 1.0), 3.4);
  float fog = clamp(max(distFog, graze * 0.72), 0.0, 1.0);
  col = mix(col, fogCol, fog);

  col = grade(col);
  gl_FragColor = vec4(col, 1.0);
}
`;

const SKY_VERT = /* glsl */ `
varying vec3 vDir;
void main() {
  vec4 world = modelMatrix * vec4(position, 1.0);
  vDir = world.xyz - cameraPosition;
  gl_Position = projectionMatrix * viewMatrix * world;
}
`;

const SKY_FRAG = /* glsl */ `
${SHARED}
varying vec3 vDir;
void main() {
  vec3 col = grade(skyColor(normalize(vDir), uSunDir, uNight));
  gl_FragColor = vec4(col, 1.0);
}
`;

function sampleShot(t) {
  const time = Math.min(Math.max(t, 0), 1);
  if (time <= SHOTS[0].t) return SHOTS[0];
  for (let i = 0; i < SHOTS.length - 1; i += 1) {
    const a = SHOTS[i];
    const b = SHOTS[i + 1];
    if (time > b.t) continue;
    const u = (time - a.t) / (b.t - a.t);
    const s = u * u * (3 - 2 * u);
    const out = { t: time };
    Object.keys(HERO).forEach((key) => {
      out[key] = a[key] + (b[key] - a[key]) * s;
    });
    return out;
  }
  return SHOTS[SHOTS.length - 1];
}

export function createHeroScene(canvas, { reducedMotion = false } = {}) {
  const mobile = window.matchMedia("(max-width: 760px)").matches;
  const saveData = navigator.connection?.saveData === true;
  let pixelRatio = Math.min(window.devicePixelRatio || 1, mobile ? 1.15 : 1.35);

  const renderer = new WebGLRenderer({
    canvas,
    antialias: false,
    alpha: false,
    powerPreference: "high-performance",
  });
  if (!renderer.getContext()) {
    renderer.dispose();
    throw new Error("WebGL unavailable");
  }
  renderer.setPixelRatio(pixelRatio);
  renderer.setClearColor(CLEAR, 1);
  renderer.outputColorSpace = SRGBColorSpace;
  renderer.toneMapping = ACESFilmicToneMapping;
  renderer.toneMappingExposure = reducedMotion ? 0.98 : 0.5;

  const scene = new Scene();
  const camera = new PerspectiveCamera(HERO.fov, 1, 0.1, 1400);
  const sun = new Vector3();

  const uniforms = {
    uTime: { value: reducedMotion ? 16 : 0 },
    uNight: { value: 0 },
    uSunDir: { value: sun },
    uResolution: { value: new Vector2(1, 1) },
  };

  const sky = new Mesh(
    new SphereGeometry(520, 24, 16),
    new ShaderMaterial({
      uniforms,
      vertexShader: SKY_VERT,
      fragmentShader: SKY_FRAG,
      side: BackSide,
      depthWrite: false,
    }),
  );
  sky.frustumCulled = false;
  sky.renderOrder = -1;

  const segments = mobile ? 72 : 140;
  const ocean = new Mesh(
    new PlaneGeometry(190, 190, segments, segments),
    new ShaderMaterial({
      uniforms,
      vertexShader: OCEAN_VERT,
      fragmentShader: OCEAN_FRAG,
    }),
  );
  ocean.geometry.rotateX(-Math.PI / 2);
  ocean.frustumCulled = false;
  scene.add(sky, ocean);

  const rig = {
    ...INTRO_FROM,
    sunY: HERO.sunY,
    night: HERO.night,
  };
  const grade = { exposure: renderer.toneMappingExposure };
  const pointer = { x: 0, y: 0 };
  const pointerTarget = { x: 0, y: 0 };
  let scroll = 0;
  let introLock = !reducedMotion;
  let running = !reducedMotion;
  let raf = 0;
  let frames = 0;
  let hotFrames = 0;
  const clock = new Clock();

  const bloomOn = !reducedMotion && !mobile && !saveData;
  let composer = null;
  let bloomPass = null;
  try {
    composer = new EffectComposer(renderer);
    composer.addPass(new RenderPass(scene, camera));
    if (bloomOn) {
      bloomPass = new UnrealBloomPass(new Vector2(1, 1), 0.16, 0.42, 1.15);
      composer.addPass(bloomPass);
    }
    composer.addPass(new OutputPass());
  } catch (error) {
    console.error(error);
    composer = null;
  }

  const applySun = (sunY) => {
    sun.set(0.2, sunY, -1).normalize();
  };

  const applyRig = (shot, driftX = 0, driftY = 0, lookX = 0, lookY = 0) => {
    const aspect = camera.aspect || 1;
    const fovBoost = aspect < 1 ? (1 - aspect) * 14 : 0;
    const lookLift = aspect < 0.85 ? 1.2 : 0;
    camera.fov = shot.fov + fovBoost;
    camera.updateProjectionMatrix();
    camera.position.set(shot.x + driftX, shot.y + driftY, shot.z);
    camera.lookAt(shot.lx + lookX, shot.ly + lookY + lookLift, shot.lz);
    applySun(shot.sunY);
    uniforms.uNight.value = shot.night;
  };

  const resize = () => {
    const width = canvas.clientWidth || window.innerWidth;
    const height = canvas.clientHeight || window.innerHeight;
    renderer.setPixelRatio(pixelRatio);
    renderer.setSize(width, height, false);
    camera.aspect = width / Math.max(height, 1);
    camera.updateProjectionMatrix();
    composer?.setSize(width, height);
    const buffer = new Vector2();
    renderer.getDrawingBufferSize(buffer);
    uniforms.uResolution.value.copy(buffer);
  };

  let composerFailed = false;
  const draw = () => {
    renderer.toneMappingExposure = grade.exposure;
    if (composer && !composerFailed) {
      try {
        composer.render();
        return;
      } catch (error) {
        console.error(error);
        composerFailed = true;
      }
    }
    renderer.render(scene, camera);
  };

  const onPointer = (event) => {
    pointerTarget.x = (event.clientX / window.innerWidth) * 2 - 1;
    pointerTarget.y = (event.clientY / window.innerHeight) * 2 - 1;
  };

  const onVisibility = () => {
    if (document.hidden) {
      running = false;
      cancelAnimationFrame(raf);
      return;
    }
    if (!running && !reducedMotion) {
      running = true;
      clock.getDelta();
      tick();
    }
  };

  const tick = () => {
    const delta = Math.min(clock.getDelta(), 0.05);
    const time = clock.elapsedTime;
    frames += 1;
    uniforms.uTime.value = time;

    if (frames > 90) {
      if (delta > 0.022) hotFrames += 1;
      else hotFrames = Math.max(0, hotFrames - 1);
      if (hotFrames > 30 && pixelRatio > 1.05) {
        pixelRatio = Math.max(1, Math.round((pixelRatio - 0.15) * 100) / 100);
        resize();
        hotFrames = 0;
      }
    }

    pointer.x += (pointerTarget.x - pointer.x) * 0.04;
    pointer.y += (pointerTarget.y - pointer.y) * 0.04;

    if (introLock) {
      applyRig(rig);
    } else {
      const shot = sampleShot(scroll);
      const driftX = Math.sin(time * 0.07) * 0.22 + pointer.x * 0.28;
      const driftY = Math.sin(time * 0.05) * 0.035 + pointer.y * 0.05;
      const lookX = pointer.x * 0.45;
      const lookY = pointer.y * 0.1;
      applyRig(
        {
          ...shot,
          x: shot.x,
          y: shot.y,
          z: shot.z,
          lx: shot.lx,
          ly: shot.ly,
          lz: shot.lz,
          fov: shot.fov,
          sunY: shot.sunY,
          night: shot.night,
        },
        driftX,
        driftY,
        lookX,
        lookY,
      );
    }

    draw();
    if (running) raf = requestAnimationFrame(tick);
  };

  const observer = new ResizeObserver(resize);
  observer.observe(canvas);
  window.addEventListener("pointermove", onPointer, { passive: true });
  document.addEventListener("visibilitychange", onVisibility);
  resize();

  if (reducedMotion) {
    introLock = false;
    applyRig(HERO);
    uniforms.uTime.value = 16;
    draw();
  } else {
    applyRig(rig);
    tick();
  }

  const playIntro = () => {
    if (reducedMotion) return Promise.resolve();
    return new Promise((resolve) => {
      const tl = gsap.timeline({
        onComplete() {
          introLock = false;
          resolve();
        },
      });
      tl.to(
        rig,
        {
          x: HERO.x,
          y: HERO.y,
          z: HERO.z,
          lx: HERO.lx,
          ly: HERO.ly,
          lz: HERO.lz,
          fov: HERO.fov,
          duration: 4.4,
          ease: "power3.inOut",
        },
        0,
      );
      tl.to(grade, { exposure: 0.98, duration: 3.15, ease: "power2.out" }, 0.25);
    });
  };

  return {
    playIntro,
    setScroll(value) {
      scroll = Math.min(Math.max(value, 0), 1);
    },
    setActive(active) {
      if (reducedMotion) return;
      if (active) {
        if (!running && !document.hidden) {
          running = true;
          clock.getDelta();
          tick();
        }
        return;
      }
      running = false;
      cancelAnimationFrame(raf);
    },
    destroy() {
      running = false;
      cancelAnimationFrame(raf);
      gsap.killTweensOf(rig);
      gsap.killTweensOf(grade);
      observer.disconnect();
      window.removeEventListener("pointermove", onPointer);
      document.removeEventListener("visibilitychange", onVisibility);
      composer?.dispose();
      sky.geometry.dispose();
      ocean.geometry.dispose();
      sky.material.dispose();
      ocean.material.dispose();
      renderer.dispose();
    },
  };
}
