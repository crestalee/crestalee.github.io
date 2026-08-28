<template>
  <button
    class="lang-btn"
    type="button"
    :aria-label="t.langSwitch"
    @mouseenter="playHover"
    @click="handleClick"
  >
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="9.2" fill="none" stroke="currentColor" stroke-width="1.2" />
      <path
        d="M3.8 12h16.4M12 2.8c2.6 2.9 3.9 6 3.9 9.2s-1.3 6.3-3.9 9.2c-2.6-2.9-3.9-6-3.9-9.2s1.3-6.3 3.9-9.2z"
        fill="none"
        stroke="currentColor"
        stroke-width="1.2"
      />
    </svg>
    <span>{{ t.langTarget }}</span>
  </button>
</template>

<script setup>
import { useLocale } from "../composables/useLocale.js";
import { useSound } from "../composables/useSound.js";

const { t, toggle } = useLocale();
const { playHover, playClick } = useSound();

function handleClick() {
  playClick();
  toggle();
}
</script>
