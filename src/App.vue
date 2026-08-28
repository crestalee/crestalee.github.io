<template>
  <div class="site">
    <SpaceCanvas />
    <SiteFrame />
    <SiteHeader />
    <main>
      <HeroSection />
      <WorkSection />
      <StackSection />
      <AboutSection />
    </main>
    <SiteFooter />
    <CommandPalette />
  </div>
</template>

<script setup>
/** Page order: canvas → frame → header → hero / work / stack / about → footer → command palette. */
import { onMounted, onUnmounted } from "vue";
import SpaceCanvas from "./components/SpaceCanvas.vue";
import SiteFrame from "./components/SiteFrame.vue";
import SiteHeader from "./components/SiteHeader.vue";
import HeroSection from "./components/HeroSection.vue";
import WorkSection from "./components/WorkSection.vue";
import StackSection from "./components/StackSection.vue";
import AboutSection from "./components/AboutSection.vue";
import SiteFooter from "./components/SiteFooter.vue";
import CommandPalette from "./components/CommandPalette.vue";
import { revealSections, startSmoothScroll } from "./composables/useSmoothScroll.js";

let scroll = null;

onMounted(() => {
  scroll = startSmoothScroll();
  revealSections(document.querySelector(".site"));
});

onUnmounted(() => {
  scroll?.destroy();
});
</script>
