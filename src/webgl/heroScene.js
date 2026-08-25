import * as THREE from "three";
import { RoomEnvironment } from "three/addons/environments/RoomEnvironment.js";
import { EffectComposer } from "three/addons/postprocessing/EffectComposer.js";
import { RenderPass } from "three/addons/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/addons/postprocessing/UnrealBloomPass.js";
import { ShaderPass } from "three/addons/postprocessing/ShaderPass.js";
import { RGBShiftShader } from "three/addons/shaders/RGBShiftShader.js";
import { OutputPass } from "three/addons/postprocessing/OutputPass.js";

const BG = 0x050505;

export function createHeroScene(canvas, { reducedMotion = false } = {}) {
  const mobile = window.matchMedia("(max-width: 720px)").matches;
  const dpr = Math.min(window.devicePixelRatio || 1, mobile ? 1.2 : 1.7);

  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: !mobile,
    alpha: false,
    powerPreference: "high-performance",
  });
  renderer.setPixelRatio(dpr);
  renderer.setClearColor(BG, 1);
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.02;
  renderer.outputColorSpace = THREE.SRGBColorSpace;

  const scene = new THREE.Scene();
  scene.fog = new THREE.Fog(BG, 7, 15);

  const camera = new THREE.PerspectiveCamera(30, 1, 0.1, 40);
  camera.position.set(0, 0.12, 7.1);

  const pmrem = new THREE.PMREMGenerator(renderer);
  let env = null;
  try {
    env = pmrem.fromScene(new RoomEnvironment(), 0.06).texture;
    scene.environment = env;
  } catch {
    scene.environment = null;
  }

  const key = new THREE.DirectionalLight(0xdce6ff, 3.4);
  key.position.set(3.6, 2.8, 3.2);
  const accent = new THREE.DirectionalLight(0x4e8cff, 2.8);
  accent.position.set(-2.8, 1.4, 2.2);
  const rim = new THREE.DirectionalLight(0xf3f3ee, 1.15);
  rim.position.set(-3.2, -1.4, -3.4);
  const fill = new THREE.AmbientLight(0x2a2d36, 0.7);
  const coreLight = new THREE.PointLight(0x4e8cff, 8, 6, 2);
  coreLight.position.set(0, 0, 0);
  scene.add(key, accent, rim, fill, coreLight);

  const group = new THREE.Group();
  scene.add(group);

  const core = new THREE.Mesh(
    new THREE.IcosahedronGeometry(1.28, 0),
    new THREE.MeshPhysicalMaterial({
      color: 0x2a303a,
      metalness: 0.97,
      roughness: 0.18,
      envMapIntensity: 1.8,
      clearcoat: 1,
      clearcoatRoughness: 0.08,
    }),
  );
  group.add(core);

  const glass = new THREE.Mesh(
    new THREE.IcosahedronGeometry(1.34, 0),
    new THREE.MeshPhysicalMaterial({
      color: 0x9bb4d8,
      metalness: 0.1,
      roughness: 0.04,
      transmission: 0.72,
      thickness: 0.55,
      ior: 1.45,
      transparent: true,
      opacity: 0.22,
      envMapIntensity: 2,
    }),
  );
  group.add(glass);

  const shell = new THREE.Mesh(
    new THREE.IcosahedronGeometry(1.38, 0),
    new THREE.MeshBasicMaterial({
      color: 0xc5d2ea,
      wireframe: true,
      transparent: true,
      opacity: 0.28,
    }),
  );
  group.add(shell);

  const ember = new THREE.Mesh(
    new THREE.OctahedronGeometry(0.42, 0),
    new THREE.MeshStandardMaterial({
      color: 0x07101d,
      emissive: 0x4e8cff,
      emissiveIntensity: 3.2,
      roughness: 0.28,
      metalness: 0.1,
    }),
  );
  group.add(ember);

  const ringMat = new THREE.MeshPhysicalMaterial({
    color: 0xd5dbe6,
    metalness: 1,
    roughness: 0.12,
    envMapIntensity: 1.4,
  });
  const rings = [0, 1, 2].map((i) => {
    const mesh = new THREE.Mesh(new THREE.TorusGeometry(1.78 + i * 0.24, 0.018, 16, 128), ringMat);
    mesh.rotation.set(0.2 + i * 0.55, i * 0.8, i * 0.35);
    group.add(mesh);
    return mesh;
  });

  const shardGeo = new THREE.TetrahedronGeometry(0.07);
  const shardMat = new THREE.MeshPhysicalMaterial({
    color: 0x1a1e28,
    metalness: 0.96,
    roughness: 0.18,
  });
  const shardCount = mobile || reducedMotion ? 5 : 9;
  const shards = Array.from({ length: shardCount }, (_, i) => {
    const mesh = new THREE.Mesh(shardGeo, shardMat);
    mesh.userData = {
      a: (i / shardCount) * Math.PI * 2,
      r: 2.02 + (i % 3) * 0.14,
      s: 0.35 + i * 0.06,
    };
    group.add(mesh);
    return mesh;
  });

  const pCount = mobile || reducedMotion ? 36 : 96;
  const pPos = new Float32Array(pCount * 3);
  for (let i = 0; i < pCount; i += 1) {
    const r = 1.7 + Math.random() * 2.1;
    const t = Math.random() * Math.PI * 2;
    const p = (Math.random() - 0.5) * Math.PI;
    pPos[i * 3] = Math.cos(t) * Math.cos(p) * r;
    pPos[i * 3 + 1] = Math.sin(p) * r * 0.62;
    pPos[i * 3 + 2] = Math.sin(t) * Math.cos(p) * r;
  }
  const dust = new THREE.Points(
    new THREE.BufferGeometry().setAttribute("position", new THREE.BufferAttribute(pPos, 3)),
    new THREE.PointsMaterial({
      color: 0xc6cad3,
      size: 0.016,
      transparent: true,
      opacity: 0.42,
      depthWrite: false,
    }),
  );
  group.add(dust);

  let composer = null;
  if (!mobile && !reducedMotion) {
    try {
      composer = new EffectComposer(renderer);
      composer.addPass(new RenderPass(scene, camera));
      composer.addPass(new UnrealBloomPass(new THREE.Vector2(1, 1), 0.22, 0.62, 0.78));
      const rgb = new ShaderPass(RGBShiftShader);
      rgb.uniforms.amount.value = 0.0007;
      composer.addPass(rgb);
      composer.addPass(new OutputPass());
    } catch {
      composer = null;
    }
  }

  const pointer = { x: 0, y: 0 };
  const target = { x: 0, y: 0 };
  let scroll = 0;
  let running = true;
  let raf = 0;
  const clock = new THREE.Clock();

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
  };

  const tick = () => {
    const time = clock.getElapsedTime();
    pointer.x += (target.x - pointer.x) * 0.045;
    pointer.y += (target.y - pointer.y) * 0.045;

    if (!reducedMotion) {
      group.rotation.y = time * 0.075 + pointer.x * 0.32;
      group.rotation.x = pointer.y * 0.16 + Math.sin(time * 0.28) * 0.035;
      group.rotation.z = scroll * 0.35;
      group.position.y = Math.sin(time * 0.42) * 0.05;
      ember.rotation.y = -time * 0.32;
      ember.rotation.x = time * 0.18;
      shell.rotation.y = time * 0.05;
      rings.forEach((ring, i) => {
        ring.rotation.z += 0.0011 * (i + 1);
        ring.rotation.x += 0.00035;
      });
      shards.forEach((shard) => {
        const angle = shard.userData.a + time * shard.userData.s * 0.14;
        shard.position.set(
          Math.cos(angle) * shard.userData.r,
          Math.sin(angle * 1.35) * 0.32,
          Math.sin(angle) * shard.userData.r,
        );
        shard.lookAt(0, 0, 0);
      });
      dust.rotation.y = time * 0.028;
    }

    camera.position.x = pointer.x * 0.22;
    camera.position.y = 0.12 + pointer.y * 0.1;
    camera.lookAt(0, 0, 0);

    if (composer) composer.render();
    else renderer.render(scene, camera);

    if (running) raf = requestAnimationFrame(tick);
  };

  const observer = new ResizeObserver(resize);
  observer.observe(canvas);
  window.addEventListener("pointermove", onPointer, { passive: true });

  const onVisibility = () => {
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
  };
  document.addEventListener("visibilitychange", onVisibility);

  resize();
  tick();

  return {
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
      observer.disconnect();
      window.removeEventListener("pointermove", onPointer);
      document.removeEventListener("visibilitychange", onVisibility);
      scene.traverse((object) => {
        if (object.geometry) object.geometry.dispose();
        if (object.material) {
          const materials = Array.isArray(object.material) ? object.material : [object.material];
          materials.forEach((material) => material.dispose());
        }
      });
      env?.dispose();
      pmrem.dispose();
      composer?.dispose();
      renderer.dispose();
    },
  };
}
