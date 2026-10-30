<template>
  <section id="top" class="hero">
    <div class="hero-shade" aria-hidden="true" />
    <div class="hero-copy">
      <h1 class="hero-title">Cresta Lee</h1>
      <p class="hero-line">{{ t.hero.line }}</p>
    </div>
    <a class="scroll-cue" href="#work">
      <span class="sr">{{ t.hero.scroll }}</span>
    </a>
  </section>
</template>

<script setup>
/**
 * Title card. The picture plays first; the name comes in after the camera
 * has started to settle. Scroll stays locked until that beat is over.
 */
import { onMounted, onUnmounted } from "vue";
import gsap from "gsap";
import { useLocale } from "../composables/useLocale.js";

const { t } = useLocale();

let started = false;
let fallback = 0;

function finishIntro() {
  document.documentElement.classList.remove("is-intro");
  window.dispatchEvent(new CustomEvent("crestalee-intro-end"));
}

function playTitle() {
  if (started) return;
  started = true;
  window.clearTimeout(fallback);
  window.removeEventListener("crestalee-scene-ready", playTitle);

  gsap.set(".hero-title, .hero-line", { autoAlpha: 0, y: 18 });
  gsap.set(".header, .scroll-cue", { autoAlpha: 0 });

  const tl = gsap.timeline({ onComplete: finishIntro });
  tl.to(".hero-title", { autoAlpha: 1, y: 0, duration: 1.7, ease: "power3.out" }, 1.55);
  tl.to(".hero-line", { autoAlpha: 1, y: 0, duration: 1.25, ease: "power2.out" }, 2.65);
  tl.to(".header, .scroll-cue", { autoAlpha: 1, duration: 1.05, ease: "power2.out" }, 3.35);
}

onMounted(() => {
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduced) return;

  document.documentElement.classList.add("is-intro");
  window.addEventListener("crestalee-scene-ready", playTitle, { once: true });
  fallback = window.setTimeout(playTitle, 2600);
});

onUnmounted(() => {
  window.removeEventListener("crestalee-scene-ready", playTitle);
  window.clearTimeout(fallback);
  document.documentElement.classList.remove("is-intro");
  gsap.killTweensOf(".hero-title, .hero-line, .header, .scroll-cue");
});
</script>
