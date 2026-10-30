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
 * One shot: a camera among rolling storm waves.
 *
 * Light stays cold. Scroll only deepens the blue; it does not turn the
 * sea gold. `prefers-reduced-motion` renders a single still.
 */

const CLEAR = 0x0b1218;

/** Hero frame the intro lands on. Later beats ease away from this. */
const HERO = {
  x: 0.15,
  y: 4.15,
  z: 10.4,
  lx: -0.55,
  ly: 0.15,
  lz: -14,
  fov: 42,
  sunY: 0.95,
  night: 0,
};

/** Opener: lower, tighter, already inside the swell. */
const INTRO_FROM = {
  x: 0.85,
  y: 3.25,
  z: 6.6,
  lx: -1.4,
  ly: 0.85,
  lz: -9,
  fov: 30,
};

const SHOTS = [
  { t: 0, ...HERO },
  {
    t: 0.28,
    x: 0.35,
    y: 4.35,
    z: 11.2,
    lx: -0.2,
    ly: 0.05,
    lz: -14,
    fov: 43,
    sunY: 0.9,
    night: 0.04,
  },
  {
    t: 0.55,
    x: -0.15,
    y: 4.7,
    z: 12.2,
    lx: 0.15,
    ly: -0.05,
    lz: -13,
    fov: 44,
    sunY: 0.82,
    night: 0.16,
  },
  {
    t: 0.78,
    x: 0.2,
    y: 5.15,
    z: 13,
    lx: -0.05,
    ly: -0.2,
    lz: -12,
    fov: 42,
    sunY: 0.7,
    night: 0.4,
  },
  {
    t: 1,
    x: -0.1,
    y: 5.6,
    z: 13.6,
    lx: 0.05,
    ly: -0.35,
    lz: -11,
    fov: 40,
    sunY: 0.55,
    night: 0.78,
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

  vec3 zenithDay = vec3(0.07, 0.11, 0.18);
  vec3 zenithNight = vec3(0.012, 0.02, 0.04);
  vec3 zenith = mix(zenithDay, zenithNight, night);

  vec3 horDay = vec3(0.42, 0.52, 0.6);
  vec3 horNight = vec3(0.05, 0.08, 0.12);
  vec3 horizon = mix(horDay, horNight, night);

  vec2 xz = normalize(n.xz + vec2(0.0001));
  vec2 sxz = normalize(s.xz + vec2(0.0001));
  float sunSide = pow(max(dot(xz, sxz), 0.0), 2.4);
  horizon = mix(horizon, vec3(0.62, 0.7, 0.76), sunSide * (1.0 - night) * 0.45);

  float h = n.y;
  vec3 col = mix(horizon, zenith, smoothstep(0.0, 0.55, pow(max(h, 0.0), 0.65)));
  float below = smoothstep(0.02, -0.35, h);
  col = mix(col, mix(vec3(0.04, 0.07, 0.11), zenith, below), below);

  float band = exp(-pow((h - 0.02) * 16.0, 2.0));
  col += vec3(0.55, 0.64, 0.72) * band * 0.12 * (1.0 - night);

  float sunVis = smoothstep(-0.05, 0.25, elev) * (1.0 - night * 0.85);
  float sunDot = max(dot(n, s), 0.0);
  float glow = pow(sunDot, 12.0);
  float disc = smoothstep(0.998, 0.9994, sunDot);
  col += vec3(0.55, 0.64, 0.72) * glow * 0.28 * sunVis;
  col += vec3(1.35, 1.5, 1.65) * disc * sunVis;

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

  applyWave(pos, normal, xz0, vec2(0.98, 0.18), 1.05, 20.0, 0.58, 0.95, 1.0);
  applyWave(pos, normal, xz0, vec2(-0.28, 0.96), 0.62, 12.5, 0.5, 1.15, 1.0);
  applyWave(pos, normal, xz0, vec2(0.72, -0.62), 0.26, 6.6, 0.42, 1.35, mix(0.5, 1.0, detail));
  applyWave(pos, normal, xz0, vec2(-0.15, -1.0), 0.09, 3.4, 0.34, 1.55, detail);

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

  vec3 deep = mix(vec3(0.012, 0.04, 0.09), vec3(0.008, 0.018, 0.04), night);
  vec3 shallow = mix(vec3(0.05, 0.14, 0.22), vec3(0.02, 0.05, 0.09), night);
  float shade = clamp(dot(n, s) * 0.5 + 0.5, 0.0, 1.0);
  vec3 water = mix(deep, shallow, 0.15 + shade * 0.55);

  vec3 refl = reflect(I, n);
  vec3 reflected = skyColor(refl, s, night);
  float dist = length(cameraPosition - vWorld);
  vec3 col = mix(water, reflected, fresnel * mix(0.42, 0.88, smoothstep(6.0, 36.0, dist)));

  vec3 H = normalize(s + view);
  float spec = pow(clamp(dot(n, H), 0.0, 1.0), 90.0);
  col += vec3(0.75, 0.84, 0.92) * spec * 1.15 * sunVis;

  float crest = smoothstep(0.28, 0.9, vHeight);
  float chop = smoothstep(0.28, 0.72, 1.0 - n.y);
  float foam = clamp(crest * 0.75 + chop * 0.55, 0.0, 1.0);
  col = mix(col, vec3(0.82, 0.88, 0.92), foam * 0.82);

  vec3 hor = normalize(vec3(view.x, 0.06, view.z));
  vec3 fogCol = skyColor(hor, s, night);
  float distFog = 1.0 - exp(-dist * (0.01 + night * 0.012));
  float graze = pow(1.0 - clamp(view.y, 0.0, 1.0), 5.0);
  float fog = clamp(max(distFog * 0.8, graze * 0.4), 0.0, 1.0);
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
  renderer.toneMappingExposure = reducedMotion ? 1.05 : 0.55;

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

  const segments = mobile ? 96 : 168;
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
      bloomPass = new UnrealBloomPass(new Vector2(1, 1), 0.1, 0.35, 1.35);
      composer.addPass(bloomPass);
    }
    composer.addPass(new OutputPass());
  } catch (error) {
    console.error(error);
    composer = null;
  }

  const applySun = (sunY) => {
    sun.set(0.28, sunY, -0.42).normalize();
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
      tl.to(grade, { exposure: 1.05, duration: 3.15, ease: "power2.out" }, 0.25);
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
