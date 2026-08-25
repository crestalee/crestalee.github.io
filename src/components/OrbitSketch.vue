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
  const rings = [0.42, 0.62, 0.82, 1];
  const bodies = 14;

  const resize = () => {
    const rect = canvas.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    canvas.width = Math.floor(rect.width * dpr);
    canvas.height = Math.floor(rect.height * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  };

  const draw = () => {
    const { width, height } = canvas.getBoundingClientRect();
    ctx.fillStyle = "rgba(1,1,4,0.28)";
    ctx.fillRect(0, 0, width, height);
    const cx = width * 0.5 + pull.x;
    const cy = height * 0.5 + pull.y;
    const radius = Math.min(width, height) * 0.3;

    rings.forEach((scale, i) => {
      ctx.strokeStyle = i === 2 ? "rgba(78,140,255,0.28)" : "rgba(243,243,238,0.14)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.ellipse(cx, cy, radius * scale, radius * scale * 0.58, 0, 0, Math.PI * 2);
      ctx.stroke();
    });

    ctx.fillStyle = "#d5d8de";
    ctx.beginPath();
    ctx.arc(cx, cy, 6, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "rgba(78,140,255,0.28)";
    ctx.beginPath();
    ctx.arc(cx - 1, cy - 1, 12, 0, Math.PI * 2);
    ctx.fill();

    for (let i = 0; i < bodies; i += 1) {
      const ring = rings[i % rings.length];
      const a = angle * (0.55 + (i % 4) * 0.16) + i * 0.7;
      const x = cx + Math.cos(a) * radius * ring;
      const y = cy + Math.sin(a) * radius * ring * 0.58;
      ctx.fillStyle = i % 4 === 0 ? "#4e8cff" : "rgba(243,243,238,0.75)";
      ctx.beginPath();
      ctx.arc(x, y, i % 4 === 0 ? 2.8 : 1.6, 0, Math.PI * 2);
      ctx.fill();
    }

    if (!reduced) angle += 0.007;
    pull.x *= 0.94;
    pull.y *= 0.94;
    if (running && !reduced) raf = requestAnimationFrame(draw);
  };

  const onMove = (event) => {
    const rect = canvas.getBoundingClientRect();
    pull.x = ((event.clientX - rect.left) / rect.width - 0.5) * 48;
    pull.y = ((event.clientY - rect.top) / rect.height - 0.5) * 30;
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
