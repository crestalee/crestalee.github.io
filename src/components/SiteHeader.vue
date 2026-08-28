<template>
  <header class="header">
    <a class="header-mark" href="#top" @mouseenter="playHover" @click="playClick">
      {{ site.mark }}
    </a>

    <div class="header-end">
      <nav>
        <a href="#work" @mouseenter="playHover" @click="playClick">{{ t.nav.work }}</a>
        <a href="#radar" @mouseenter="playHover" @click="playClick">{{ t.nav.radar }}</a>
        <a href="#codex" @mouseenter="playHover" @click="playClick">{{ t.nav.codex }}</a>
        <a href="#contact" @mouseenter="playHover" @click="playClick">{{ t.nav.contact }}</a>
      </nav>

      <!-- Theme Switcher with Interactive Popover -->
      <div class="theme-menu-wrapper" @click.stop>
        <button
          type="button"
          class="header-action-btn theme-trigger-btn"
          :class="{ 'is-active': isThemeMenuOpen }"
          :title="t.themeSwitch"
          @mouseenter="playHover"
          @click="toggleThemeMenu"
        >
          <span
            class="theme-swatch"
            :style="{ backgroundColor: activeColor, boxShadow: `0 0 8px ${activeColor}` }"
          />
          <span class="btn-text">{{ activeLabel }}</span>
          <span class="theme-chevron" :class="{ 'is-open': isThemeMenuOpen }">▾</span>
        </button>

        <!-- Theme Popover Dropdown -->
        <div v-if="isThemeMenuOpen" class="theme-dropdown" role="menu">
          <div class="dropdown-header">
            <span class="dropdown-title">AESTHETIC PALETTES</span>
            <span class="dropdown-count">{{ THEMES.length }} PRESETS</span>
          </div>
          <div class="theme-options-list">
            <button
              v-for="item in THEMES"
              :key="item.id"
              type="button"
              class="theme-option"
              :class="{ 'is-active': item.id === currentTheme }"
              @mouseenter="playHover"
              @click="selectTheme(item.id)"
            >
              <div class="option-left">
                <span
                  class="option-swatch"
                  :style="{
                    backgroundColor: item.accent,
                    boxShadow: `0 0 10px ${item.accentGlow}`,
                  }"
                />
                <div class="option-info">
                  <span class="option-name">{{ locale === "zh" ? item.labelZh : item.name }}</span>
                  <span class="option-desc">{{ locale === "zh" ? item.descZh : item.descEn }}</span>
                </div>
              </div>
              <span v-if="item.id === currentTheme" class="option-check">✓</span>
            </button>
          </div>
        </div>
      </div>

      <!-- Terminal Trigger Button -->
      <button
        type="button"
        class="header-action-btn terminal-trigger-btn"
        :title="t.terminalBtn"
        @mouseenter="playHover"
        @click="openTerminal"
      >
        <svg class="header-icon" viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M4 17l6-5-6-5m8 10h8"
            fill="none"
            stroke="currentColor"
            stroke-width="1.8"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <span class="btn-text">⌘K</span>
      </button>

      <!-- Sound Toggle Button -->
      <button
        type="button"
        class="header-action-btn sound-trigger-btn"
        :class="{ 'is-active': soundEnabled }"
        :title="t.soundSwitch"
        @mouseenter="playHover"
        @click="toggleSound"
      >
        <span class="sound-bars" :class="{ 'is-playing': soundEnabled }">
          <i />
          <i />
          <i />
        </span>
        <span class="btn-text">{{ soundEnabled ? "SFX" : "MUTED" }}</span>
      </button>

      <!-- GitHub Link -->
      <a
        class="github-btn"
        :href="site.github"
        target="_blank"
        rel="noreferrer"
        :aria-label="t.footer.github"
        @mouseenter="playHover"
        @click="playClick"
      >
        <GitHubMark />
      </a>

      <!-- Language Toggle -->
      <LangToggle />
    </div>
  </header>
</template>

<script setup>
import { computed, onMounted, onUnmounted, ref } from "vue";
import { site } from "../data/site.js";
import { useLocale } from "../composables/useLocale.js";
import { useSound } from "../composables/useSound.js";
import { useTheme, THEMES } from "../composables/useTheme.js";
import GitHubMark from "./GitHubMark.vue";
import LangToggle from "./LangToggle.vue";

const { locale, t } = useLocale();
const { soundEnabled, toggleSound, playHover, playClick, playSuccess } = useSound();
const { currentTheme, setTheme } = useTheme();

const isThemeMenuOpen = ref(false);

const activeThemeObj = computed(() => {
  return THEMES.find((item) => item.id === currentTheme.value) || THEMES[0];
});

const activeColor = computed(() => activeThemeObj.value.accent);
const activeLabel = computed(() =>
  locale.value === "zh" ? activeThemeObj.value.labelZh : activeThemeObj.value.name,
);

function toggleThemeMenu() {
  playClick();
  isThemeMenuOpen.value = !isThemeMenuOpen.value;
}

function selectTheme(id) {
  setTheme(id);
  playSuccess();
  isThemeMenuOpen.value = false;
}

function closeMenu() {
  isThemeMenuOpen.value = false;
}

function openTerminal() {
  playClick();
  window.dispatchEvent(new CustomEvent("crestalee-open-terminal"));
}

onMounted(() => {
  window.addEventListener("click", closeMenu);
});

onUnmounted(() => {
  window.removeEventListener("click", closeMenu);
});
</script>
