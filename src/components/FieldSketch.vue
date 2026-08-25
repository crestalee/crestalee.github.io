<template>
  <canvas ref="canvasRef" class="sketch" aria-hidden="true" />
</template>

<script setup>
import { onMounted, onUnmounted, ref } from "vue";

const canvasRef = ref(null);
let raf = 0;
let io = null;
let running = false;

onMounted(() => {
  const canvas = canvasRef.value;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const pointer = { x: 0.5, y: 0.5 };
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const cols = window.innerWidth < 820 ? 16 : 28;
  const rows = window.innerWidth < 820 ? 12 : 18;

  const resize = () => {
    const rect = canvas.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    canvas.width = Math.floor(rect.width * dpr);
    canvas.height = Math.floor(rect.height * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  };

  const draw = () => {
    const { width, height } = canvas.getBoundingClientRect();
    ctx.fillStyle = "rgba(1,1,4,0.22)";
    ctx.fillRect(0, 0, width, height);
    const gapX = width / (cols + 1);
    const gapY = height / (rows + 1);
    const mx = pointer.x * width;
    const my = pointer.y * height;

    ctx.beginPath();
    ctx.strokeStyle = "rgba(78,140,255,0.18)";
    ctx.arc(mx, my, 46, 0, Math.PI * 2);
    ctx.stroke();

    for (let y = 1; y <= rows; y += 1) {
      for (let x = 1; x <= cols; x += 1) {
        const px = x * gapX;
        const py = y * gapY;
        const dx = mx - px;
        const dy = my - py;
        const dist = Math.hypot(dx, dy) || 1;
        const angle = Math.atan2(dy, dx);
        const near = Math.max(0, 1 - dist / 240);
        const len = 8 + near * 14;
        ctx.strokeStyle = near > 0.16 ? `rgba(78, 140, 255, ${0.28 + near * 0.65})` : "rgba(243,243,238,0.2)";
        ctx.lineWidth = near > 0.4 ? 1.35 : 1;
        ctx.beginPath();
        ctx.moveTo(px - Math.cos(angle) * len, py - Math.sin(angle) * len);
        ctx.lineTo(px + Math.cos(angle) * len, py + Math.sin(angle) * len);
        ctx.stroke();
      }
    }
    if (running && !reduced) raf = requestAnimationFrame(draw);
  };

  const onMove = (event) => {
    const rect = canvas.getBoundingClientRect();
    pointer.x = (event.clientX - rect.left) / rect.width;
    pointer.y = (event.clientY - rect.top) / rect.height;
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
  io = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) start();
    else stop();
  }, { threshold: 0.1 });
  io.observe(canvas);
  if (reduced) draw();

  canvas._cleanup = () => {
    stop();
    io?.disconnect();
    window.removeEventListener("resize", resize);
    window.removeEventListener("pointermove", onMove);
  };
});

onUnmounted(() => {
  canvasRef.value?._cleanup?.();
});
</script>
