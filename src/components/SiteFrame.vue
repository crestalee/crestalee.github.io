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
    <div class="frame-progress" :style="{ opacity: progress > 0.02 ? 1 : 0 }">
      <i :style="{ transform: `scaleX(${progress})` }" />
    </div>
  </div>
</template>

<script setup>
/** Corner marks and pointer readout. Hidden on small screens. */
import { onMounted, onUnmounted, ref } from "vue";
import { onSmoothScroll } from "../composables/useSmoothScroll.js";

const x = ref("0.500");
const y = ref("0.500");
const pct = ref("000");
const progress = ref(0);

const onMove = (event) => {
  x.value = (event.clientX / window.innerWidth).toFixed(3);
  y.value = (event.clientY / window.innerHeight).toFixed(3);
};

let offScroll = null;

onMounted(() => {
  if (!window.matchMedia("(pointer: fine)").matches) return;
  window.addEventListener("pointermove", onMove, { passive: true });
  offScroll = onSmoothScroll(({ progress: next }) => {
    progress.value = next;
    pct.value = String(Math.round(next * 100)).padStart(3, "0");
  });
});

onUnmounted(() => {
  window.removeEventListener("pointermove", onMove);
  offScroll?.();
});
</script>
