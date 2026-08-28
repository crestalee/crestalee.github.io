<template>
  <div class="space-layer" aria-hidden="true">
    <div v-if="!ready" class="space-fallback" />
    <canvas ref="canvasRef" class="space-canvas" />
  </div>
</template>

<script setup>
/**
 * Loads the WebGL scene after first paint so the CSS fallback can show.
 * Dispatches `crestalee-scene-ready` for the title intro in HeroSection.
 */
import { onMounted, onUnmounted, ref } from "vue";
import { onSmoothScroll } from "../composables/useSmoothScroll.js";

const canvasRef = ref(null);
const ready = ref(false);
let scene = null;
let offScroll = null;

onMounted(async () => {
  const canvas = canvasRef.value;
  if (!canvas) return;

  try {
    const { createHeroScene } = await import("../webgl/heroScene.js");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    scene = createHeroScene(canvas, { reducedMotion: reduced });
    ready.value = true;
    window.dispatchEvent(new CustomEvent("crestalee-scene-ready"));
    scene.playIntro?.();

    offScroll = onSmoothScroll(({ progress }) => {
      scene?.setScroll(progress);
    });
  } catch (error) {
    console.error(error);
  }
});

onUnmounted(() => {
  offScroll?.();
  scene?.destroy();
});
</script>
