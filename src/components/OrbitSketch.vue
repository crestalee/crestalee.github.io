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
  let angle = 0;
  let pull = { x: 0, y: 0 };
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

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
    const cx = width * 0.5 + pull.x;
    const cy = height * 0.5 + pull.y;
    const radius = Math.min(width, height) * 0.28;

    ctx.strokeStyle = "rgba(243,243,238,0.2)";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.arc(cx, cy, radius, 0, Math.PI * 2);
    ctx.stroke();

    ctx.fillStyle = "#c8ccd4";
    ctx.beginPath();
    ctx.arc(cx, cy, 7, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "rgba(78,140,255,0.35)";
    ctx.beginPath();
    ctx.arc(cx - 2, cy - 2, 11, 0, Math.PI * 2);
    ctx.fill();

    for (let i = 0; i < 3; i += 1) {
      const a = angle * (0.7 + i * 0.18) + i * 1.7;
      const r = radius * (0.55 + i * 0.22);
      const x = cx + Math.cos(a) * r;
      const y = cy + Math.sin(a) * r * 0.62;
      ctx.fillStyle = i === 0 ? "#4e8cff" : "rgba(243,243,238,0.7)";
      ctx.beginPath();
      ctx.arc(x, y, i === 0 ? 3.2 : 2, 0, Math.PI * 2);
      ctx.fill();
    }

    if (!reduced) angle += 0.008;
    pull.x *= 0.94;
    pull.y *= 0.94;
    if (running && !reduced) raf = requestAnimationFrame(draw);
  };

  const onMove = (event) => {
    const rect = canvas.getBoundingClientRect();
    pull.x = ((event.clientX - rect.left) / rect.width - 0.5) * 36;
    pull.y = ((event.clientY - rect.top) / rect.height - 0.5) * 24;
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
  canvas.addEventListener("pointermove", onMove, { passive: true });
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
    canvas.removeEventListener("pointermove", onMove);
  };
});

onUnmounted(() => {
  canvasRef.value?._cleanup?.();
});
</script>
