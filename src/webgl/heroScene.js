import * as THREE from "three";
import gsap from "gsap";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js";

const BG = 0x010104;
const MOON_YAW = -Math.PI / 2;

function prepTexture(texture, srgb = false) {
  texture.colorSpace = srgb ? THREE.SRGBColorSpace : THREE.NoColorSpace;
  texture.anisotropy = 8;
  texture.wrapS = THREE.ClampToEdgeWrapping;
  texture.wrapT = THREE.ClampToEdgeWrapping;
  return texture;
}

async function loadMoonMaps() {
  const loader = new THREE.TextureLoader();
  const base = import.meta.env.BASE_URL;
  const [map, bumpMap] = await Promise.all([
    loader.loadAsync(`${base}space/moon-color.jpg`),
    loader.loadAsync(`${base}space/moon-height.jpg`),
  ]);
  return {
    map: prepTexture(map, true),
    bumpMap: prepTexture(bumpMap),
  };
}

function makeStars(count, radiusMin, radiusMax, band = false) {
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);
  for (let i = 0; i < count; i += 1) {
    const theta = Math.random() * Math.PI * 2;
    const phi = band
      ? Math.PI / 2 + (Math.random() - 0.5) * 0.38
      : Math.acos(2 * Math.random() - 1);
    const radius = radiusMin + Math.random() * (radiusMax - radiusMin);
    positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
    positions[i * 3 + 1] = radius * Math.cos(phi);
    positions[i * 3 + 2] = radius * Math.sin(phi) * Math.sin(theta);
    const shade = 0.72 + Math.random() * 0.28;
    colors[i * 3] = shade;
    colors[i * 3 + 1] = shade;
    colors[i * 3 + 2] = Math.min(1, shade + 0.04);
  }
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
  return geometry;
}

function starMaterial(size, attenuation = false) {
  return new THREE.PointsMaterial({
    size,
    sizeAttenuation: attenuation,
    vertexColors: true,
    transparent: true,
    opacity: 0.95,
    depthWrite: false,
  });
}

export async function createHeroScene(canvas, { reducedMotion = false } = {}) {
  const mobile = window.matchMedia("(max-width: 720px)").matches;
  const dpr = Math.min(window.devicePixelRatio || 1, mobile ? 1.15 : 1.6);
  const { map: moonMap, bumpMap: moonBump } = await loadMoonMaps();

  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: !mobile,
    alpha: false,
    powerPreference: "high-performance",
  });
  renderer.setPixelRatio(dpr);
  renderer.setClearColor(BG, 1);
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = reducedMotion ? 1.05 : 0.06;
  renderer.outputColorSpace = THREE.SRGBColorSpace;

  const scene = new THREE.Scene();
  const startZ = reducedMotion ? 8.4 : mobile ? 32 : 48;
  const startFov = reducedMotion ? 42 : mobile ? 20 : 15;
  const camera = new THREE.PerspectiveCamera(startFov, 1, 0.08, 240);
  camera.position.set(
    reducedMotion || mobile ? 0 : -6.2,
    reducedMotion ? 0.15 : mobile ? 1.35 : 2.05,
    startZ,
  );

  const sun = new THREE.DirectionalLight(0xfff1dc, 4.4);
  sun.position.set(-5.2, 1.5, 2.4);
  const fill = new THREE.HemisphereLight(0x10182a, 0x020203, 0.08);
  const rim = new THREE.DirectionalLight(0x9aa6c4, 0.28);
  rim.position.set(5.2, -0.6, -4.2);
  scene.add(sun, fill, rim);

  const warpStars = !reducedMotion;
  const stars = new THREE.Points(
    makeStars(mobile ? 2200 : 6200, 16, 58),
    starMaterial(warpStars ? (mobile ? 0.055 : 0.08) : 1.05, warpStars),
  );
  const bright = new THREE.Points(
    makeStars(mobile ? 80 : 180, 18, 50),
    starMaterial(warpStars ? (mobile ? 0.11 : 0.16) : 1.8, warpStars),
  );
  const milky = new THREE.Points(
    makeStars(mobile ? 900 : 2400, 20, 48, true),
    starMaterial(warpStars ? (mobile ? 0.05 : 0.075) : 1.05, warpStars),
  );
  milky.rotation.z = 0.55;
  const starField = new THREE.Group();
  starField.add(stars, bright, milky);
  if (warpStars) starField.scale.set(1, 1, 4.4);
  scene.add(starField);

  const moon = new THREE.Mesh(
    new THREE.SphereGeometry(1.28, mobile ? 80 : 160, mobile ? 80 : 160),
    new THREE.MeshStandardMaterial({
      map: moonMap,
      bumpMap: moonBump,
      bumpScale: 0.24,
      displacementMap: mobile ? null : moonBump,
      displacementScale: mobile ? 0 : 0.028,
      displacementBias: mobile ? 0 : -0.01,
      color: 0xffffff,
      roughness: 1,
      metalness: 0,
    }),
  );
  moon.position.set(mobile ? 0 : 1.15, 0.18, 0);
  moon.rotation.y = MOON_YAW;

  const atmosphere = new THREE.Mesh(
    new THREE.SphereGeometry(1.32, mobile ? 48 : 80, mobile ? 48 : 80),
    new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      side: THREE.BackSide,
      vertexShader: `
        varying vec3 vNormal;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        varying vec3 vNormal;
        void main() {
          float rim = pow(1.0 - abs(dot(vNormal, vec3(0.0, 0.0, 1.0))), 5.2);
          gl_FragColor = vec4(0.78, 0.8, 0.86, clamp(rim * 0.16, 0.0, 0.16));
        }
      `,
    }),
  );
  atmosphere.position.copy(moon.position);

  const world = new THREE.Group();
  world.add(moon, atmosphere);
  if (!reducedMotion) world.scale.setScalar(0.04);
  scene.add(world);

  const meteorCount = 16;
  const meteorPos = new Float32Array(meteorCount * 3);
  const meteorGeo = new THREE.BufferGeometry();
  meteorGeo.setAttribute("position", new THREE.BufferAttribute(meteorPos, 3));
  const meteor = new THREE.Points(
    meteorGeo,
    new THREE.PointsMaterial({
      color: 0xe8eef8,
      size: 1.2,
      sizeAttenuation: false,
      transparent: true,
      opacity: 0,
      depthWrite: false,
    }),
  );
  scene.add(meteor);
  const meteorState = {
    wait: 3,
    life: 0,
    origin: new THREE.Vector3(8, 4, -6),
    dir: new THREE.Vector3(-1, -0.35, 0.2),
  };

  const pointer = { x: 0, y: 0 };
  const target = { x: 0, y: 0 };
  const bloom = { strength: 0.18 };
  const rig = {
    x: camera.position.x,
    y: camera.position.y,
    z: camera.position.z,
    fov: camera.fov,
    lookY: reducedMotion ? 0.1 : 0.68,
    starSpin: reducedMotion ? 0.004 : 0.18,
    moonSpin: reducedMotion ? 0.02 : 0.14,
  };
  let scroll = 0;
  let introLock = !reducedMotion;
  let running = true;
  let raf = 0;
  const clock = new THREE.Clock();
  let composer = null;
  let bloomPass = null;

  if (!reducedMotion && !mobile) {
    composer = new EffectComposer(renderer);
    composer.addPass(new RenderPass(scene, camera));
    bloomPass = new UnrealBloomPass(new THREE.Vector2(1, 1), bloom.strength, 0.62, 0.16);
    composer.addPass(bloomPass);
  }

  const onPointer = (event) => {
    target.x = (event.clientX / window.innerWidth) * 2 - 1;
    target.y = (event.clientY / window.innerHeight) * 2 - 1;
  };

  const resize = () => {
    const width = canvas.clientWidth || window.innerWidth;
    const height = canvas.clientHeight || window.innerHeight;
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    composer?.setSize(width, height);
    bloomPass?.setSize(width, height);
  };

  const tickMeteor = (delta) => {
    meteorState.wait -= delta;
    if (meteorState.wait < 0 && meteorState.life <= 0) {
      meteorState.life = 1;
      meteorState.origin.set(6 + Math.random() * 4, 2 + Math.random() * 3, -8);
      meteorState.dir.set(-1.2, -0.25 - Math.random() * 0.2, 0.15);
      meteorState.wait = 5 + Math.random() * 8;
    }
    if (meteorState.life > 0) {
      meteorState.life -= delta * 0.85;
      meteor.material.opacity = Math.max(0, meteorState.life);
      for (let i = 0; i < meteorCount; i += 1) {
        const along = i / meteorCount;
        meteorPos[i * 3] = meteorState.origin.x + meteorState.dir.x * along * 4.5 + (1 - meteorState.life) * meteorState.dir.x * 10;
        meteorPos[i * 3 + 1] = meteorState.origin.y + meteorState.dir.y * along * 4.5 + (1 - meteorState.life) * meteorState.dir.y * 10;
        meteorPos[i * 3 + 2] = meteorState.origin.z + meteorState.dir.z * along * 2;
      }
      meteorGeo.attributes.position.needsUpdate = true;
    } else {
      meteor.material.opacity = 0;
    }
  };

  const tick = () => {
    const delta = Math.min(clock.getDelta(), 0.05);
    const time = clock.elapsedTime;
    pointer.x += (target.x - pointer.x) * 0.04;
    pointer.y += (target.y - pointer.y) * 0.04;

    if (!reducedMotion) {
      stars.rotation.y = time * rig.starSpin;
      bright.rotation.y = time * rig.starSpin;
      milky.rotation.y = time * (rig.starSpin + 0.001);
      moon.rotation.y = MOON_YAW + time * rig.moonSpin;
      if (!introLock) {
        world.position.y = Math.sin(time * 0.22) * 0.04 - scroll * 1.1;
        world.position.x = (mobile ? 0 : 0.15) + pointer.x * 0.18;
        sun.position.set(-5.2 + pointer.x * 2.2, 1.5 + pointer.y * 1.2, 2.4);
      }
      tickMeteor(delta);
    }

    if (!introLock) {
      if (reducedMotion) {
        rig.x = 0;
        rig.y = 0.15;
        rig.z = 8.4;
        rig.lookY = 0.1;
      } else {
        rig.x = pointer.x * 0.35;
        rig.y = 0.15 + pointer.y * 0.16;
        rig.z = 8.4 + scroll * 2.2;
        rig.lookY = 0.1 - scroll * 0.4;
      }
    }

    camera.position.set(rig.x, rig.y, rig.z);
    if (Math.abs(camera.fov - rig.fov) > 0.01) {
      camera.fov = rig.fov;
      camera.updateProjectionMatrix();
    }
    camera.lookAt(moon.position.x * 0.35, rig.lookY, 0);

    if (bloomPass) bloomPass.strength = bloom.strength;
    if (composer) composer.render();
    else renderer.render(scene, camera);

    if (running) raf = requestAnimationFrame(tick);
  };

  const observer = new ResizeObserver(resize);
  observer.observe(canvas);
  window.addEventListener("pointermove", onPointer, { passive: true });
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      running = false;
      cancelAnimationFrame(raf);
      return;
    }
    if (!running) {
      running = true;
      clock.getDelta();
      tick();
    }
  });

  resize();
  tick();

  const playIntro = () => {
    if (reducedMotion) {
      introLock = false;
      return Promise.resolve();
    }
    meteorState.wait = 0.55;
    renderer.toneMappingExposure = 0.05;
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
          x: 0,
          y: 0.12,
          z: 7.55,
          fov: 47,
          lookY: 0.06,
          starSpin: 0.006,
          moonSpin: 0.028,
          duration: 2.95,
          ease: "power4.inOut",
        },
        0,
      );
      tl.to(
        rig,
        {
          y: 0.15,
          z: 8.4,
          fov: 42,
          lookY: 0.1,
          duration: 0.55,
          ease: "power2.out",
        },
        2.95,
      );
      tl.to(
        world.scale,
        {
          x: 1,
          y: 1,
          z: 1,
          duration: 2.95,
          ease: "power4.inOut",
        },
        0,
      );
      tl.to(
        starField.scale,
        {
          z: 1,
          duration: 3.15,
          ease: "power3.out",
        },
        0,
      );
      tl.to(
        renderer,
        {
          toneMappingExposure: 1.28,
          duration: 2.4,
          ease: "power2.out",
        },
        0.15,
      );
      tl.to(
        renderer,
        {
          toneMappingExposure: 1.05,
          duration: 0.75,
          ease: "power1.out",
        },
        2.7,
      );
      if (bloomPass) {
        tl.to(bloom, { strength: 1.22, duration: 1.6, ease: "power2.out" }, 0.2);
        tl.to(bloom, { strength: 0.42, duration: 1.1, ease: "power2.inOut" }, 2.15);
      }
    });
  };

  return {
    playIntro,
    setScroll(value) {
      scroll = value;
    },
    setActive(active) {
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
      gsap.killTweensOf(world.scale);
      gsap.killTweensOf(starField.scale);
      gsap.killTweensOf(renderer);
      gsap.killTweensOf(bloom);
      observer.disconnect();
      composer?.dispose();
      window.removeEventListener("pointermove", onPointer);
      moonMap.dispose();
      moonBump.dispose();
      scene.traverse((object) => {
        if (object.geometry) object.geometry.dispose();
        if (object.material) {
          const materials = Array.isArray(object.material) ? object.material : [object.material];
          materials.forEach((material) => material.dispose());
        }
      });
      renderer.dispose();
    },
  };
}
