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

  const bars = 72;
  const energy = new Float32Array(bars);
  let raf = 0;
  let running = false;
  let sweep = 0;
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
    const mid = height * 0.5;
    const gap = width / bars;
    sweep = (sweep + 0.006) % 1;

    ctx.strokeStyle = "rgba(243,243,238,0.08)";
    ctx.beginPath();
    ctx.moveTo(0, mid);
    ctx.lineTo(width, mid);
    ctx.stroke();

    for (let i = 0; i < bars; i += 1) {
      energy[i] *= 0.93;
      const wave = Math.sin(i * 0.18 + sweep * Math.PI * 2) * 0.08;
      const h = 5 + (energy[i] + wave) * (height * 0.4);
      const x = i * gap + gap * 0.35;
      ctx.fillStyle = energy[i] > 0.1 ? "rgba(78,140,255,0.88)" : "rgba(243,243,238,0.24)";
      ctx.fillRect(x, mid - h, Math.max(1, gap * 0.28), h * 2);
    }

    const sx = sweep * width;
    ctx.strokeStyle = "rgba(78,140,255,0.45)";
    ctx.beginPath();
    ctx.moveTo(sx, 8);
    ctx.lineTo(sx, height - 8);
    ctx.stroke();

    if (running && !reduced) raf = requestAnimationFrame(draw);
  };

  const onMove = (event) => {
    const rect = canvas.getBoundingClientRect();
    const t = (event.clientX - rect.left) / rect.width;
    const index = Math.max(0, Math.min(bars - 1, Math.floor(t * bars)));
    energy[index] = 1;
    if (index > 0) energy[index - 1] = Math.max(energy[index - 1], 0.62);
    if (index < bars - 1) energy[index + 1] = Math.max(energy[index + 1], 0.62);
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
  const io = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) start();
    else stop();
  }, { threshold: 0.1 });
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
