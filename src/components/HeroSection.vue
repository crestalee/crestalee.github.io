<template>
  <section id="top" class="hero">
    <div class="hero-shade" />
    <div class="hero-veil" />

    <!-- Top Left HUD Telemetry -->
    <div class="hero-hud">
      <div class="hud-item">
        <span class="hud-label">SYS_INDEX</span>
        <span class="hud-val">{{ t.hero.index }}</span>
      </div>
      <div class="hud-divider">/</div>
      <div class="hud-item">
        <span class="hud-label">STATUS</span>
        <span class="hud-val text-accent"><i class="status-pulse" />{{ t.hero.live }}</span>
      </div>
      <div class="hud-divider">/</div>
      <div class="hud-item hide-mobile">
        <span class="hud-label">TIME (CST)</span>
        <span class="hud-val font-mono">{{ timeCst }}</span>
      </div>
    </div>

    <!-- Right Side HUD Diagnostics -->
    <div class="hero-status">
      <div class="hud-item">
        <span class="hud-label">PIPELINE</span>
        <span class="hud-val">THREE.JS // WEBGL 2.0</span>
      </div>
      <div class="hud-divider">/</div>
      <div class="hud-item hide-mobile">
        <span class="hud-label">FPS_BUDGET</span>
        <span class="hud-val text-accent font-mono">{{ t.hero.fpsLabel }}</span>
      </div>
      <div class="hud-divider hide-mobile">/</div>
      <div class="hud-item hide-mobile">
        <span class="hud-label">NODE</span>
        <span class="hud-val">{{ t.hero.locLabel }}</span>
      </div>
    </div>

    <a class="scroll-cue" href="#work" @mouseenter="playHover" @click="playClick">
      <span class="cue-arrow">↓</span>
      <span>{{ t.hero.scroll }}</span>
    </a>

    <!-- Center Brand & Role Manifesto -->
    <div class="hero-copy" :style="shift">
      <p class="hero-role">{{ t.hero.role }}</p>
      <h1 class="hero-brand">CRESTALEE<span class="reg">®</span></h1>
      <p class="hero-tagline">{{ t.hero.tagline }}</p>

      <!-- Interactive Actions -->
      <div class="hero-actions">
        <a class="hero-btn is-primary" href="#work" @mouseenter="playHover" @click="playClick">
          <span>{{ t.hero.viewWork }}</span>
        </a>
        <button
          type="button"
          class="hero-btn is-outline"
          @mouseenter="playHover"
          @click="openTerminal"
        >
          <svg class="btn-icon" viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M4 17l6-5-6-5m8 10h8"
              fill="none"
              stroke="currentColor"
              stroke-width="1.8"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <span>{{ t.hero.openTerminal }}</span>
        </button>
        <button
          type="button"
          class="hero-btn is-sound"
          :class="{ 'is-active': soundEnabled }"
          :aria-label="t.soundSwitch"
          @mouseenter="playHover"
          @click="toggleSound"
        >
          <span class="sound-wave" :class="{ 'is-playing': soundEnabled }">
            <i />
            <i />
            <i />
          </span>
          <span>{{ soundEnabled ? t.soundOn : t.soundOff }}</span>
        </button>
      </div>
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
import { useSound } from "../composables/useSound.js";

const { t } = useLocale();
const { soundEnabled, toggleSound, playHover, playClick } = useSound();

const offset = reactive({ x: 0, y: 0 });
const live = ref(false);
const timeCst = ref("00:00:00");
let timer = null;

function updateTime() {
  const now = new Date();
  timeCst.value = now.toLocaleTimeString("en-GB", {
    timeZone: "Asia/Shanghai",
    hour12: false,
  });
}

function openTerminal() {
  playClick();
  window.dispatchEvent(new CustomEvent("crestalee-open-terminal"));
}

const shift = computed(() =>
  live.value ? { transform: `translate3d(${offset.x}px, ${offset.y}px, 0)` } : {},
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

  const chrome = [
    ".header",
    ".hero-hud",
    ".hero-status",
    ".scroll-cue",
    ".frame",
    ".hero-role",
    ".hero-tagline",
    ".hero-actions",
  ];
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
  updateTime();
  timer = setInterval(updateTime, 1000);

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
  clearInterval(timer);
  window.removeEventListener("pointermove", onMove);
  window.removeEventListener("crestalee-scene-ready", playTitle);
  window.clearTimeout(fallback);
  document.documentElement.classList.remove("is-intro");
  gsap.killTweensOf(
    ".hero-brand, .hero-veil, .header, .hero-hud, .hero-status, .scroll-cue, .frame, .hero-role, .hero-tagline, .hero-actions",
  );
});
</script>
