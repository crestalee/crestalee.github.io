<template>
  <div class="site">
    <SpaceCanvas />
    <div class="shade-top" aria-hidden="true" />
    <div class="letterbox is-top" aria-hidden="true" />
    <div class="letterbox is-bottom" aria-hidden="true" />
    <SiteHeader />
    <main>
      <HeroSection />
      <WorkSection />
      <CloseSection />
    </main>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from "vue";
import SpaceCanvas from "./components/SpaceCanvas.vue";
import SiteHeader from "./components/SiteHeader.vue";
import HeroSection from "./components/HeroSection.vue";
import WorkSection from "./components/WorkSection.vue";
import CloseSection from "./components/CloseSection.vue";
import { startSmoothScroll } from "./composables/useSmoothScroll.js";
import { bindFilmMotion } from "./composables/useFilmMotion.js";
import { startScore } from "./composables/useScore.js";

let scroll = null;
let unbind = null;
let stopScore = null;

onMounted(() => {
  scroll = startSmoothScroll();
  unbind = bindFilmMotion();
  stopScore = startScore();
});

onUnmounted(() => {
  stopScore?.();
  unbind?.();
  scroll?.destroy();
});
</script>
