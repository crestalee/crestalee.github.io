<template>
  <section id="codex" class="section codex-section">
    <!-- Codex Header & Bio -->
    <div class="section-header" data-reveal>
      <p class="section-kicker">{{ t.codex.kicker }}</p>
      <h2 class="section-title">{{ t.codex.title }}</h2>
      <p class="codex-bio-lead">{{ t.codex.bio }}</p>
    </div>

    <!-- Core Engineering Manifestos -->
    <div class="manifestos-grid" data-reveal>
      <div
        v-for="m in t.codex.manifestos"
        :key="m.index"
        class="manifesto-card"
        @mouseenter="playHover"
      >
        <div class="manifesto-num">{{ m.index }}</div>
        <h3 class="manifesto-title">{{ m.name }}</h3>
        <p class="manifesto-desc">{{ m.desc }}</p>
      </div>
    </div>

    <!-- Telemetry Coordinates -->
    <div class="codex-telemetry" data-reveal>
      <div
        v-for="item in t.codex.telemetry"
        :key="item.label"
        class="telemetry-card"
        @mouseenter="playHover"
      >
        <span class="telemetry-label">{{ item.label }}</span>
        <strong class="telemetry-val">{{ item.val }}</strong>
      </div>
    </div>

    <!-- Contact & Transmission CTA Box -->
    <div id="contact" class="contact-cta-card" data-reveal>
      <div class="contact-header">
        <p class="contact-kicker">{{ t.contact.kicker }}</p>
        <h3 class="contact-title">{{ t.contact.title }}</h3>
        <p class="contact-desc">{{ t.contact.desc }}</p>
      </div>

      <div class="contact-actions">
        <button
          type="button"
          class="contact-btn is-primary"
          @mouseenter="playHover"
          @click="copyEmail"
        >
          <svg class="btn-icon" viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"
              fill="none"
              stroke="currentColor"
              stroke-width="1.8"
            />
            <rect
              x="8"
              y="2"
              width="8"
              height="4"
              rx="1"
              ry="1"
              fill="none"
              stroke="currentColor"
              stroke-width="1.8"
            />
          </svg>
          <span>{{ copied ? t.contact.copied : t.contact.emailBtn }}</span>
        </button>

        <a
          class="contact-btn is-outline"
          :href="site.github"
          target="_blank"
          rel="noreferrer"
          @mouseenter="playHover"
          @click="playClick"
        >
          <GitHubMark class="btn-icon" />
          <span>{{ t.contact.githubBtn }}</span>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { site } from "../data/site.js";
import { useLocale } from "../composables/useLocale.js";
import { useSound } from "../composables/useSound.js";
import GitHubMark from "./GitHubMark.vue";

const { t } = useLocale();
const { playHover, playClick, playSuccess } = useSound();
const copied = ref(false);

function copyEmail() {
  navigator.clipboard?.writeText(site.email);
  copied.value = true;
  playSuccess();
  setTimeout(() => {
    copied.value = false;
  }, 3000);
}
</script>
