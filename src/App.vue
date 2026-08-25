<template>
  <div class="site">
    <div class="grain" aria-hidden="true" />
    <SiteHeader />
    <main>
      <HeroSection />
      <WorkSection />
      <ExperimentsSection />
      <TechnologySection />
      <AboutSection />
    </main>
    <SiteFooter />
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from "vue";
import SiteHeader from "./components/SiteHeader.vue";
import HeroSection from "./components/HeroSection.vue";
import WorkSection from "./components/WorkSection.vue";
import ExperimentsSection from "./components/ExperimentsSection.vue";
import TechnologySection from "./components/TechnologySection.vue";
import AboutSection from "./components/AboutSection.vue";
import SiteFooter from "./components/SiteFooter.vue";
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
