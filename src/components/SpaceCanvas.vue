<template>
  <div class="space-layer" aria-hidden="true">
    <div v-if="!ready" class="space-fallback" />
    <canvas ref="canvasRef" class="space-canvas" />
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from "vue";

const canvasRef = ref(null);
const ready = ref(false);
let scene = null;

onMounted(async () => {
  const canvas = canvasRef.value;
  if (!canvas) return;

  try {
    const { createHeroScene } = await import("../webgl/heroScene.js");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    scene = createHeroScene(canvas, { reducedMotion: reduced });
    ready.value = true;

    const onScroll = () => {
      const max = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
      scene?.setScroll(Math.min(window.scrollY / max, 1));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    canvas._offScroll = () => window.removeEventListener("scroll", onScroll);
  } catch (error) {
    console.error(error);
  }
});

onUnmounted(() => {
  canvasRef.value?._offScroll?.();
  scene?.destroy();
});
</script>
