<template>
  <div class="frame" aria-hidden="true">
    <i class="frame-corner is-tl" />
    <i class="frame-corner is-tr" />
    <i class="frame-corner is-bl" />
    <i class="frame-corner is-br" />
    <div class="frame-readout">
      <span>X {{ x }}</span>
      <span>Y {{ y }}</span>
      <span>{{ pct }}</span>
    </div>
    <div class="frame-progress">
      <i :style="{ transform: `scaleX(${progress})` }" />
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from "vue";

const x = ref("0.500");
const y = ref("0.500");
const pct = ref("000");
const progress = ref(0);

const onMove = (event) => {
  x.value = (event.clientX / window.innerWidth).toFixed(3);
  y.value = (event.clientY / window.innerHeight).toFixed(3);
};

const onScroll = () => {
  const max = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
  const next = Math.min(window.scrollY / max, 1);
  progress.value = next;
  pct.value = String(Math.round(next * 100)).padStart(3, "0");
};

onMounted(() => {
  if (!window.matchMedia("(pointer: fine)").matches) return;
  window.addEventListener("pointermove", onMove, { passive: true });
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
});

onUnmounted(() => {
  window.removeEventListener("pointermove", onMove);
  window.removeEventListener("scroll", onScroll);
});
</script>
