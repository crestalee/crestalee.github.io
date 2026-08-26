<template>
  <section id="top" class="hero">
    <div class="hero-shade" />
    <div class="hero-veil" />
    <div class="hero-hud">
      <span>{{ t.hero.index }}</span>
      <span>{{ t.hero.system }}</span>
    </div>
    <a class="scroll-cue" href="#work">{{ t.hero.scroll }}</a>
    <div class="hero-copy" :style="shift">
      <h1 class="hero-brand">CRESTALEE<span class="reg">®</span></h1>
    </div>
    <div class="hero-status">
      <span>WEBGL</span>
      <span>{{ t.hero.live }}</span>
    </div>
  </section>
</template>

<script setup>
/**
 * Title card over the canvas. Waits for `crestalee-scene-ready`, then
 * fades in with the warp. Fallback timer covers a WebGL init failure.
 */
import { computed, onMounted, onUnmounted, reactive, ref } from "vue";
import gsap from "gsap";
import { useLocale } from "../composables/useLocale.js";

const { t } = useLocale();
const offset = reactive({ x: 0, y: 0 });
const live = ref(false);
const shift = computed(() =>
  live.value
    ? { transform: `translate3d(${offset.x}px, ${offset.y}px, 0)` }
    : {},
);

const onMove = (event) => {
  if (!live.value) return;
  offset.x = (event.clientX / window.innerWidth - 0.5) * 12;
  offset.y = (event.clientY / window.innerHeight - 0.5) * 6;
};

let started = false;
let fallback = 0;

function finishIntro() {
  live.value = true;
  document.documentElement.classList.remove("is-intro");
  window.dispatchEvent(new CustomEvent("crestalee-intro-end"));
}

function playTitle() {
  if (started) return;
  started = true;
  window.clearTimeout(fallback);
  window.removeEventListener("crestalee-scene-ready", playTitle);

  const chrome = [".header", ".hero-hud", ".hero-status", ".scroll-cue", ".frame"];
  gsap.set(chrome, { opacity: 0 });
  gsap.set(".hero-brand", { opacity: 0, y: 18 });
  gsap.to(".hero-veil", { opacity: 0, duration: 1.85, delay: 0.08, ease: "power2.out" });
  gsap.to(".hero-brand", {
    opacity: 1,
    y: 0,
    duration: 1.1,
    delay: 1.7,
    ease: "power3.out",
  });
  gsap.to(chrome, {
    opacity: 1,
    duration: 0.9,
    delay: 2.85,
    ease: "power2.out",
    onComplete: finishIntro,
  });
}

onMounted(() => {
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (window.matchMedia("(pointer: fine)").matches) {
    window.addEventListener("pointermove", onMove, { passive: true });
  }
  if (reduced) {
    live.value = true;
    return;
  }

  document.documentElement.classList.add("is-intro");
  window.addEventListener("crestalee-scene-ready", playTitle, { once: true });
  fallback = window.setTimeout(playTitle, 800);
});

onUnmounted(() => {
  window.removeEventListener("pointermove", onMove);
  window.removeEventListener("crestalee-scene-ready", playTitle);
  window.clearTimeout(fallback);
  document.documentElement.classList.remove("is-intro");
  gsap.killTweensOf(".hero-brand, .hero-veil, .header, .hero-hud, .hero-status, .scroll-cue, .frame");
});
</script>
