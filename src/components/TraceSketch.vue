<template>
  <canvas ref="canvasRef" class="sketch" aria-hidden="true" />
</template>

<script setup>
import { onMounted, onUnmounted, ref } from "vue";

const canvasRef = ref(null);

onMounted(() => {
  const canvas = canvasRef.value;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  let raf = 0;
  let running = false;
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const count = window.innerWidth < 820 ? 46 : 78;
  const nodes = Array.from({ length: count }, () => ({
    x: Math.random(),
    y: Math.random(),
    vx: (Math.random() - 0.5) * 0.00035,
    vy: (Math.random() - 0.5) * 0.00035,
  }));
  const pointer = { x: 0.5, y: 0.5, on: false };

  const resize = () => {
    const rect = canvas.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    canvas.width = Math.floor(rect.width * dpr);
    canvas.height = Math.floor(rect.height * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  };

  const draw = () => {
    const { width, height } = canvas.getBoundingClientRect();
    ctx.clearRect(0, 0, width, height);
    const mx = pointer.x * width;
    const my = pointer.y * height;
    const reach = Math.min(width, height) * 0.22;

    nodes.forEach((node) => {
      if (!reduced) {
        node.x += node.vx;
        node.y += node.vy;
        if (node.x < 0.02 || node.x > 0.98) node.vx *= -1;
        if (node.y < 0.04 || node.y > 0.96) node.vy *= -1;
      }
      const px = node.x * width;
      const py = node.y * height;
      const dist = Math.hypot(mx - px, my - py);
      const hot = pointer.on && dist < reach;
      ctx.fillStyle = hot ? "rgba(78,140,255,0.95)" : "rgba(243,243,238,0.55)";
      ctx.beginPath();
      ctx.arc(px, py, hot ? 2.2 : 1.15, 0, Math.PI * 2);
      ctx.fill();
    });

    for (let i = 0; i < nodes.length; i += 1) {
      const ax = nodes[i].x * width;
      const ay = nodes[i].y * height;
      for (let j = i + 1; j < nodes.length; j += 1) {
        const bx = nodes[j].x * width;
        const by = nodes[j].y * height;
        const span = Math.hypot(ax - bx, ay - by);
        if (span > reach * 0.95) continue;
        const mid = Math.hypot((ax + bx) * 0.5 - mx, (ay + by) * 0.5 - my);
        if (!pointer.on || mid > reach * 1.15) continue;
        const alpha = Math.max(0, 1 - mid / (reach * 1.15)) * 0.55;
        ctx.strokeStyle = `rgba(78,140,255,${alpha})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(ax, ay);
        ctx.lineTo(bx, by);
        ctx.stroke();
      }
    }

    if (running && !reduced) raf = requestAnimationFrame(draw);
  };

  const onMove = (event) => {
    const rect = canvas.getBoundingClientRect();
    const nx = (event.clientX - rect.left) / rect.width;
    const ny = (event.clientY - rect.top) / rect.height;
    pointer.on = nx >= 0 && nx <= 1 && ny >= 0 && ny <= 1;
    pointer.x = nx;
    pointer.y = ny;
  };

  const start = () => {
    if (running) return;
    running = true;
    draw();
  };
  const stop = () => {
    running = false;
    cancelAnimationFrame(raf);
  };

  resize();
  window.addEventListener("resize", resize);
  window.addEventListener("pointermove", onMove, { passive: true });
  const io = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) start();
      else stop();
    },
    { threshold: 0.1 },
  );
  io.observe(canvas);
  if (reduced) draw();

  canvas._cleanup = () => {
    stop();
    io.disconnect();
    window.removeEventListener("resize", resize);
    window.removeEventListener("pointermove", onMove);
  };
});

onUnmounted(() => {
  canvasRef.value?._cleanup?.();
});
</script>
