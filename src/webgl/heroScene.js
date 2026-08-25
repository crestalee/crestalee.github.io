import * as THREE from "three";

const BG = 0x010104;

function makeMoonTexture(size = 768) {
  const canvas = document.createElement("canvas");
  canvas.width = canvas.height = size;
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = "#8a8d96";
  ctx.fillRect(0, 0, size, size);

  for (let i = 0; i < 90; i += 1) {
    const x = Math.random() * size;
    const y = Math.random() * size;
    const r = 6 + Math.random() * 48;
    const glow = ctx.createRadialGradient(x - r * 0.25, y - r * 0.25, 0, x, y, r);
    glow.addColorStop(0, "rgba(168, 172, 186, 0.5)");
    glow.addColorStop(0.45, "rgba(52, 56, 68, 0.45)");
    glow.addColorStop(1, "rgba(0, 0, 0, 0)");
    ctx.fillStyle = glow;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();
  }

  const image = ctx.getImageData(0, 0, size, size);
  for (let i = 0; i < image.data.length; i += 4) {
    const n = (Math.random() - 0.5) * 22;
    image.data[i] += n;
    image.data[i + 1] += n * 0.95;
    image.data[i + 2] += n * 1.05;
  }
  ctx.putImageData(image, 0, 0);
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 4;
  return texture;
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

function starMaterial(size) {
  return new THREE.PointsMaterial({
    size,
    sizeAttenuation: false,
    vertexColors: true,
    transparent: true,
    opacity: 0.95,
    depthWrite: false,
  });
}

export function createHeroScene(canvas, { reducedMotion = false } = {}) {
  const mobile = window.matchMedia("(max-width: 720px)").matches;
  const dpr = Math.min(window.devicePixelRatio || 1, mobile ? 1.15 : 1.6);

  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: !mobile,
    alpha: false,
    powerPreference: "high-performance",
  });
  renderer.setPixelRatio(dpr);
  renderer.setClearColor(BG, 1);
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.05;
  renderer.outputColorSpace = THREE.SRGBColorSpace;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 120);
  camera.position.set(0, 0.15, 8.4);

  const sun = new THREE.DirectionalLight(0xf4f6ff, 4.6);
  sun.position.set(-2.4, 1.4, 6.4);
  const fill = new THREE.HemisphereLight(0x1b2744, 0x050508, 0.55);
  const rim = new THREE.DirectionalLight(0xc8cdd8, 0.28);
  rim.position.set(4.5, -0.6, -3.2);
  scene.add(sun, fill, rim);

  const stars = new THREE.Points(
    makeStars(mobile ? 2200 : 5600, 18, 46),
    starMaterial(1.05),
  );
  const bright = new THREE.Points(
    makeStars(mobile ? 80 : 160, 20, 40),
    starMaterial(1.8),
  );
  const milky = new THREE.Points(
    makeStars(mobile ? 900 : 2200, 22, 38, true),
    starMaterial(1.05),
  );
  milky.rotation.z = 0.55;
  scene.add(stars, bright, milky);

  const moonMap = makeMoonTexture(mobile ? 512 : 768);
  const moon = new THREE.Mesh(
    new THREE.SphereGeometry(1.28, mobile ? 48 : 80, mobile ? 48 : 80),
    new THREE.MeshStandardMaterial({
      map: moonMap,
      color: 0xf0f2f6,
      roughness: 0.86,
      metalness: 0.02,
    }),
  );
  moon.position.set(mobile ? 0 : 1.15, 0.18, 0);

  const world = new THREE.Group();
  world.add(moon);
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
      stars.rotation.y = time * 0.004;
      bright.rotation.y = time * 0.004;
      milky.rotation.y = time * 0.005;
      moon.rotation.y = time * 0.02;
      world.position.y = Math.sin(time * 0.22) * 0.04 - scroll * 1.1;
      world.position.x = (mobile ? 0 : 0.15) + pointer.x * 0.18;
      tickMeteor(delta);
    }

    camera.position.x = pointer.x * 0.35;
    camera.position.y = 0.15 + pointer.y * 0.16;
    camera.position.z = 8.4 + scroll * 2.2;
    camera.lookAt(moon.position.x * 0.35, 0.1 - scroll * 0.4, 0);

    renderer.render(scene, camera);

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
      moonMap.dispose();
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
