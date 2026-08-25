<template>
  <section id="top" class="hero">
    <div class="hero-shade" />
    <p class="scroll-cue">{{ t.hero.scroll }}</p>
    <div class="hero-copy" :style="shift">
      <h1 class="hero-brand">
        CRESTALEE<span class="reg">®</span>
      </h1>
      <div class="hero-meta">
        <p>{{ t.hero.role }}<br />{{ t.hero.stack }}</p>
        <p class="manifesto">
          {{ t.hero.manifesto[0] }}<br />{{ t.hero.manifesto[1] }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, onMounted, onUnmounted, reactive } from "vue";
import { useLocale } from "../composables/useLocale.js";

const { t } = useLocale();
const offset = reactive({ x: 0, y: 0 });
const shift = computed(() => ({
  transform: `translate3d(${offset.x}px, ${offset.y}px, 0)`,
}));

const onMove = (event) => {
  offset.x = (event.clientX / window.innerWidth - 0.5) * 12;
  offset.y = (event.clientY / window.innerHeight - 0.5) * 6;
};

onMounted(() => {
  if (window.matchMedia("(pointer: fine)").matches) {
    window.addEventListener("pointermove", onMove, { passive: true });
  }
});

onUnmounted(() => {
  window.removeEventListener("pointermove", onMove);
});
</script>
