<template>
  <canvas ref="canvasRef" class="hero-canvas" aria-hidden="true" />
</template>

<script setup>
import { onMounted, onUnmounted, ref } from "vue";

const emit = defineEmits(["ready"]);
const canvasRef = ref(null);
let scene = null;
let io = null;

onMounted(async () => {
  const canvas = canvasRef.value;
  if (!canvas) return;

  try {
    const { createHeroScene } = await import("../webgl/heroScene.js");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    scene = createHeroScene(canvas, { reducedMotion: reduced });
    emit("ready");

    io = new IntersectionObserver(
      ([entry]) => {
        if (entry) scene?.setActive(entry.isIntersecting);
      },
      { threshold: 0 },
    );
    io.observe(canvas.parentElement || canvas);

    const onScroll = () => {
      const max = window.innerHeight || 1;
      scene?.setScroll(Math.min(window.scrollY / max, 1));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    canvas._offScroll = () => window.removeEventListener("scroll", onScroll);
  } catch (error) {
    console.error(error);
    document.documentElement.dataset.heroError = String(error?.message || error);
    canvas.style.display = "none";
  }
});

onUnmounted(() => {
  io?.disconnect();
  canvasRef.value?._offScroll?.();
  scene?.destroy();
});
</script>
