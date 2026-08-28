import {
  ACESFilmicToneMapping,
  BufferAttribute,
  BufferGeometry,
  Clock,
  EllipseCurve,
  Group,
  Line,
  LineBasicMaterial,
  LineLoop,
  LineSegments,
  MathUtils,
  PerspectiveCamera,
  Points,
  PointsMaterial,
  Scene,
  SRGBColorSpace,
  Vector2,
  Vector3,
  WebGLRenderer,
} from "three";
import gsap from "gsap";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js";

/**
 * Full-page WebGL backdrop.
 *
 * No hero object. The picture is a drifting starfield plus a few orbital
 * paths. Intro is a short warp (stretched stars, camera rushing in), then
 * the field keeps moving with the pointer and the page scroll.
 * `prefers-reduced-motion` skips the warp and freezes the ornaments.
 */
const BG = 0x010104;

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
  const geometry = new BufferGeometry();
  geometry.setAttribute("position", new BufferAttribute(positions, 3));
  geometry.setAttribute("color", new BufferAttribute(colors, 3));
  return geometry;
}

function starMaterial(size, attenuation = false) {
  return new PointsMaterial({
    size,
    sizeAttenuation: attenuation,
    vertexColors: true,
    transparent: true,
    opacity: 0.95,
    depthWrite: false,
  });
}

function lineMaterial(opacity, vertexColors = false) {
  return new LineBasicMaterial({
    color: 0xd5dae2,
    vertexColors,
    transparent: true,
    opacity,
    depthWrite: false,
  });
}

/** Sparse ticks in the far sphere. They lean toward the pointer. */
function createFieldTicks(count, radiusMin, radiusMax) {
  const centers = new Float32Array(count * 3);
  for (let i = 0; i < count; i += 1) {
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    const radius = radiusMin + Math.random() * (radiusMax - radiusMin);
    centers[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
    centers[i * 3 + 1] = radius * Math.cos(phi);
    centers[i * 3 + 2] = radius * Math.sin(phi) * Math.sin(theta);
  }
  const positions = new Float32Array(count * 6);
  const colors = new Float32Array(count * 6);
  const geometry = new BufferGeometry();
  geometry.setAttribute("position", new BufferAttribute(positions, 3));
  geometry.setAttribute("color", new BufferAttribute(colors, 3));
  const mesh = new LineSegments(geometry, lineMaterial(0.2, true));
  return { mesh, centers, positions, colors, geometry };
}

/** Large ellipses sitting in the sky, not around a planet. */
function createOrbits() {
  const paths = [
    { rx: 16, rz: 5.8, rotX: 0.68, rotZ: 0.2, opacity: 0.13, speed: 0.045 },
    { rx: 21.5, rz: 7.4, rotX: 0.4, rotZ: -0.28, opacity: 0.08, speed: 0.03 },
    { rx: 12.8, rz: 10.2, rotX: 1.04, rotZ: 0.1, opacity: 0.1, speed: 0.055 },
    { rx: 26, rz: 8.6, rotX: 0.22, rotZ: 0.5, opacity: 0.06, speed: 0.022 },
  ];
  const group = new Group();
  paths.forEach((path) => {
    const hold = new Group();
    hold.rotation.set(path.rotX, 0, path.rotZ);
    const curve = new EllipseCurve(0, 0, path.rx, path.rz, 0, Math.PI * 2, false, 0);
    const points = curve.getPoints(160).map((point) => new Vector3(point.x, 0, point.y));
    const mesh = new LineLoop(
      new BufferGeometry().setFromPoints(points),
      lineMaterial(path.opacity),
    );
    mesh.material.color.setHex(0xb4bcc8);
    hold.add(mesh);
    group.add(hold);
  });

  const dustCount = paths.length * 3;
  const dustPositions = new Float32Array(dustCount * 3);
  const dustGeometry = new BufferGeometry();
  dustGeometry.setAttribute("position", new BufferAttribute(dustPositions, 3));
  const dust = new Points(
    dustGeometry,
    new PointsMaterial({
      color: 0xd7dbe3,
      size: 0.09,
      sizeAttenuation: true,
      transparent: true,
      opacity: 0.7,
      depthWrite: false,
    }),
  );
  group.add(dust);
  return { group, dust, dustPositions, dustGeometry, paths };
}

/** Constellation segments, filled each frame from nearby bright stars. */
function createTraceLines(maxPairs) {
  const positions = new Float32Array(maxPairs * 6);
  const geometry = new BufferGeometry();
  geometry.setAttribute("position", new BufferAttribute(positions, 3));
  geometry.setDrawRange(0, 0);
  const mesh = new LineSegments(geometry, lineMaterial(0.16));
  mesh.material.color.setHex(0x9aa8c2);
  return { mesh, positions, geometry, maxPairs };
}

/** A faint horizon line that breathes with time and pointer. */
function createSignalArc(count) {
  const positions = new Float32Array(count * 3);
  const geometry = new BufferGeometry();
  geometry.setAttribute("position", new BufferAttribute(positions, 3));
  const mesh = new Line(geometry, lineMaterial(0.08));
  mesh.material.color.setHex(0x8b93a3);
  const energy = new Float32Array(count);
  return { mesh, positions, geometry, energy, count };
}

export function createHeroScene(canvas, { reducedMotion = false } = {}) {
  const mobile = window.matchMedia("(max-width: 720px)").matches;
  const dpr = Math.min(window.devicePixelRatio || 1, mobile ? 1.15 : 1.6);

  const renderer = new WebGLRenderer({
    canvas,
    antialias: !mobile,
    alpha: false,
    powerPreference: "high-performance",
  });
  renderer.setPixelRatio(dpr);
  renderer.setClearColor(BG, 1);
  renderer.toneMapping = ACESFilmicToneMapping;
  renderer.toneMappingExposure = reducedMotion ? 1.05 : 0.06;
  renderer.outputColorSpace = SRGBColorSpace;

  const scene = new Scene();
  const startZ = reducedMotion ? 6.2 : mobile ? 28 : 42;
  const startFov = reducedMotion ? 48 : mobile ? 22 : 16;
  const camera = new PerspectiveCamera(startFov, 1, 0.08, 240);
  camera.position.set(
    reducedMotion || mobile ? 0 : -4.8,
    reducedMotion ? 0.2 : mobile ? 1.1 : 1.7,
    startZ,
  );

  const warpStars = !reducedMotion;
  const stars = new Points(
    makeStars(mobile ? 2400 : 6800, 16, 58),
    starMaterial(warpStars ? (mobile ? 0.055 : 0.08) : 1.05, warpStars),
  );
  const bright = new Points(
    makeStars(mobile ? 90 : 200, 18, 50),
    starMaterial(warpStars ? (mobile ? 0.11 : 0.16) : 1.8, warpStars),
  );
  const milky = new Points(
    makeStars(mobile ? 1000 : 2600, 20, 48, true),
    starMaterial(warpStars ? (mobile ? 0.05 : 0.075) : 1.05, warpStars),
  );
  milky.rotation.z = 0.55;
  const starField = new Group();
  starField.add(stars, bright, milky);
  if (warpStars) starField.scale.set(1, 1, 4.8);
  scene.add(starField);

  const field = createFieldTicks(mobile ? 90 : 180, 18, 48);
  const orbits = createOrbits();
  const trace = createTraceLines(mobile ? 28 : 48);
  const signal = createSignalArc(mobile ? 56 : 88);
  scene.add(field.mesh, orbits.group, trace.mesh, signal.mesh);

  const atmos = { fade: reducedMotion ? 0.75 : 0 };
  field.mesh.material.opacity = 0;
  orbits.group.children.forEach((child) => {
    if (child.material) child.material.opacity = 0;
    child.children?.forEach((line) => {
      if (line.material) line.material.opacity = 0;
    });
  });
  trace.mesh.material.opacity = 0;
  signal.mesh.material.opacity = 0;

  const _attractor = new Vector3();
  const _center = new Vector3();
  const _screen = new Vector3();
  const _star = new Vector3();
  const _dust = new Vector3();
  const nearStars = [];

  const meteorCount = 16;
  const meteorPos = new Float32Array(meteorCount * 3);
  const meteorGeo = new BufferGeometry();
  meteorGeo.setAttribute("position", new BufferAttribute(meteorPos, 3));
  const meteor = new Points(
    meteorGeo,
    new PointsMaterial({
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
    origin: new Vector3(8, 4, -6),
    dir: new Vector3(-1, -0.35, 0.2),
  };

  const pointer = { x: 0, y: 0 };
  const target = { x: 0, y: 0 };
  const bloom = { strength: 0.12 };
  const rig = {
    x: camera.position.x,
    y: camera.position.y,
    z: camera.position.z,
    fov: camera.fov,
    lookY: reducedMotion ? 0.05 : 0.45,
    starSpin: reducedMotion ? 0.006 : 0.2,
    pathSpin: reducedMotion ? 0.004 : 0.08,
  };
  let scroll = 0;
  let introLock = !reducedMotion;
  let running = true;
  let raf = 0;
  let frameCount = 0;
  const clock = new Clock();
  let composer = null;
  let bloomPass = null;

  if (!reducedMotion && !mobile) {
    composer = new EffectComposer(renderer);
    composer.addPass(new RenderPass(scene, camera));
    bloomPass = new UnrealBloomPass(new Vector2(1, 1), bloom.strength, 0.55, 0.2);
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

  const setAtmosOpacity = (visible) => {
    field.mesh.material.opacity = 0.22 * visible;
    orbits.paths.forEach((path, index) => {
      const hold = orbits.group.children[index];
      const line = hold?.children?.[0];
      if (line?.material) line.material.opacity = path.opacity * visible;
    });
    if (orbits.dust.material) orbits.dust.material.opacity = 0.65 * visible;
    trace.mesh.material.opacity = 0.18 * visible;
    signal.mesh.material.opacity = 0.09 * visible;
  };

  const tickField = () => {
    _attractor.set(pointer.x, pointer.y, 0.62).unproject(camera);
    const count = field.centers.length / 3;
    for (let i = 0; i < count; i += 1) {
      _center.fromArray(field.centers, i * 3);
      const dx = _attractor.x - _center.x;
      const dy = _attractor.y - _center.y;
      const dz = _attractor.z - _center.z;
      const dist = Math.hypot(dx, dy, dz) || 1;
      const near = Math.max(0, 1 - dist / 28);
      const length = 0.28 + near * 0.7;
      const ox = (dx / dist) * length;
      const oy = (dy / dist) * length;
      const oz = (dz / dist) * length;
      const p = i * 6;
      field.positions[p] = _center.x - ox;
      field.positions[p + 1] = _center.y - oy;
      field.positions[p + 2] = _center.z - oz;
      field.positions[p + 3] = _center.x + ox;
      field.positions[p + 4] = _center.y + oy;
      field.positions[p + 5] = _center.z + oz;
      const tone = 0.62 + near * 0.28;
      const cool = near * 0.12;
      for (let k = 0; k < 2; k += 1) {
        const c = i * 6 + k * 3;
        field.colors[c] = tone - cool;
        field.colors[c + 1] = tone - cool * 0.4;
        field.colors[c + 2] = Math.min(1, tone + cool);
      }
    }
    field.geometry.attributes.position.needsUpdate = true;
    field.geometry.attributes.color.needsUpdate = true;
  };

  const tickOrbits = (time) => {
    orbits.group.rotation.y = time * rig.pathSpin;
    orbits.group.rotation.z = Math.sin(time * 0.07) * 0.04;
    orbits.paths.forEach((path, index) => {
      const hold = orbits.group.children[index];
      if (hold) hold.rotation.y = time * path.speed;
    });
    const dustCount = orbits.dustPositions.length / 3;
    for (let i = 0; i < dustCount; i += 1) {
      const path = orbits.paths[i % orbits.paths.length];
      const hold = orbits.group.children[i % orbits.paths.length];
      const angle = time * (0.12 + (i % 3) * 0.05) + i * 1.7;
      _dust.set(Math.cos(angle) * path.rx, 0, Math.sin(angle) * path.rz);
      if (hold) _dust.applyEuler(hold.rotation);
      orbits.dustPositions[i * 3] = _dust.x;
      orbits.dustPositions[i * 3 + 1] = _dust.y;
      orbits.dustPositions[i * 3 + 2] = _dust.z;
    }
    orbits.dustGeometry.attributes.position.needsUpdate = true;
  };

  const tickTrace = () => {
    bright.updateMatrixWorld();
    const source = bright.geometry.attributes.position;
    nearStars.length = 0;
    for (let i = 0; i < source.count; i += 1) {
      _star.fromBufferAttribute(source, i).applyMatrix4(bright.matrixWorld);
      _screen.copy(_star).project(camera);
      if (_screen.z > 1) continue;
      const dist = Math.hypot(_screen.x - pointer.x, _screen.y - pointer.y);
      if (dist > 0.4) continue;
      nearStars.push(_star.x, _star.y, _star.z, dist);
    }
    let drawn = 0;
    const reach = 4.8;
    for (let i = 0; i < nearStars.length; i += 4) {
      for (let j = i + 4; j < nearStars.length; j += 4) {
        if (drawn >= trace.maxPairs) break;
        const span = Math.hypot(
          nearStars[i] - nearStars[j],
          nearStars[i + 1] - nearStars[j + 1],
          nearStars[i + 2] - nearStars[j + 2],
        );
        if (span > reach) continue;
        if ((nearStars[i + 3] + nearStars[j + 3]) * 0.5 > 0.36) continue;
        const p = drawn * 6;
        trace.positions[p] = nearStars[i];
        trace.positions[p + 1] = nearStars[i + 1];
        trace.positions[p + 2] = nearStars[i + 2];
        trace.positions[p + 3] = nearStars[j];
        trace.positions[p + 4] = nearStars[j + 1];
        trace.positions[p + 5] = nearStars[j + 2];
        drawn += 1;
      }
      if (drawn >= trace.maxPairs) break;
    }
    trace.geometry.setDrawRange(0, drawn * 2);
    trace.geometry.attributes.position.needsUpdate = true;
  };

  const tickSignal = (time) => {
    const sweep = (time * 0.04 + pointer.x * 0.16) % 1;
    const count = signal.count;
    for (let i = 0; i < count; i += 1) {
      const t = i / (count - 1);
      signal.energy[i] *= 0.94;
      const wave = Math.sin(i * 0.22 + time * 0.7) * 0.12;
      const pulse = Math.max(0, 1 - Math.abs(t - sweep) * 9);
      if (pulse > 0.45) signal.energy[i] = Math.max(signal.energy[i], pulse);
      const lift = 0.05 + (signal.energy[i] + wave) * 0.18;
      signal.positions[i * 3] = -22 + t * 44;
      signal.positions[i * 3 + 1] = -3.2 + lift;
      signal.positions[i * 3 + 2] = -18 + Math.sin(t * Math.PI) * 2.4;
    }
    const hover = (pointer.x + 1) * 0.5;
    const index = Math.max(0, Math.min(count - 1, Math.floor(hover * count)));
    signal.energy[index] = 1;
    if (index > 0) signal.energy[index - 1] = Math.max(signal.energy[index - 1], 0.55);
    if (index < count - 1) signal.energy[index + 1] = Math.max(signal.energy[index + 1], 0.55);
    signal.geometry.attributes.position.needsUpdate = true;
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
        meteorPos[i * 3] =
          meteorState.origin.x +
          meteorState.dir.x * along * 4.5 +
          (1 - meteorState.life) * meteorState.dir.x * 10;
        meteorPos[i * 3 + 1] =
          meteorState.origin.y +
          meteorState.dir.y * along * 4.5 +
          (1 - meteorState.life) * meteorState.dir.y * 10;
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
      milky.rotation.y = time * (rig.starSpin + 0.002);
      milky.rotation.x = Math.sin(time * 0.05) * 0.03;
      if (!introLock) {
        starField.position.x = pointer.x * 0.35;
        starField.position.y = pointer.y * 0.18 - scroll * 1.4;
        starField.rotation.z = pointer.x * 0.04;
        orbits.group.position.x = pointer.x * 0.22;
        orbits.group.position.y = pointer.y * 0.1 - scroll * 0.8;
      }
      tickMeteor(delta);
    }

    const visible = atmos.fade * (0.62 + 0.38 * (1 - MathUtils.smoothstep(scroll, 0.2, 0.75)));
    setAtmosOpacity(visible);
    if (!introLock && visible > 0.02 && !reducedMotion) {
      tickField();
      tickOrbits(time);
      if (frameCount % 2 === 0) tickTrace();
      tickSignal(time);
    }

    if (!introLock) {
      if (reducedMotion) {
        rig.x = 0;
        rig.y = 0.2;
        rig.z = 6.2;
        rig.lookY = 0.05;
      } else {
        rig.x = pointer.x * 0.28;
        rig.y = 0.18 + pointer.y * 0.14;
        rig.z = 6.4 + scroll * 1.6;
        rig.lookY = 0.04 - scroll * 0.22;
      }
    }

    camera.position.set(rig.x, rig.y, rig.z);
    if (Math.abs(camera.fov - rig.fov) > 0.01) {
      camera.fov = rig.fov;
      camera.updateProjectionMatrix();
    }
    camera.lookAt(0, rig.lookY, -8);

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

  tickField();
  tickOrbits(0);
  tickSignal(0);
  resize();
  tick();

  /** Warp in, then hand control back to pointer / scroll. */
  const playIntro = () => {
    if (reducedMotion) {
      introLock = false;
      setAtmosOpacity(atmos.fade);
      return Promise.resolve();
    }
    meteorState.wait = 0.55;
    renderer.toneMappingExposure = 0.05;
    return new Promise((resolve) => {
      const tl = gsap.timeline({
        onComplete() {
          introLock = false;
          gsap.to(atmos, { fade: 1, duration: 1.6, ease: "power2.out" });
          resolve();
        },
      });
      tl.to(
        rig,
        {
          x: 0,
          y: 0.16,
          z: 6.2,
          fov: 50,
          lookY: 0.02,
          starSpin: 0.018,
          pathSpin: 0.01,
          duration: 2.85,
          ease: "power4.inOut",
        },
        0,
      );
      tl.to(
        rig,
        {
          y: 0.18,
          z: 6.4,
          fov: 48,
          lookY: 0.04,
          duration: 0.5,
          ease: "power2.out",
        },
        2.85,
      );
      tl.to(
        starField.scale,
        {
          z: 1,
          duration: 3.05,
          ease: "power3.out",
        },
        0,
      );
      tl.to(
        renderer,
        {
          toneMappingExposure: 1.18,
          duration: 2.3,
          ease: "power2.out",
        },
        0.12,
      );
      tl.to(
        renderer,
        {
          toneMappingExposure: 1.02,
          duration: 0.7,
          ease: "power1.out",
        },
        2.6,
      );
      if (bloomPass) {
        tl.to(bloom, { strength: 0.42, duration: 1.5, ease: "power2.out" }, 0.15);
        tl.to(bloom, { strength: 0.18, duration: 1, ease: "power2.inOut" }, 2.1);
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
      gsap.killTweensOf(starField.scale);
      gsap.killTweensOf(renderer);
      gsap.killTweensOf(bloom);
      gsap.killTweensOf(atmos);
      observer.disconnect();
      composer?.dispose();
      window.removeEventListener("pointermove", onPointer);
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
