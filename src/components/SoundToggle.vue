<template>
  <button
    class="sound-btn"
    :class="{ 'is-on': audible }"
    type="button"
    data-sound-toggle
    :aria-pressed="audible"
    :aria-label="audible ? t.sound.mute : t.sound.play"
    @click="toggle"
  >
    <span class="sound-lamp" aria-hidden="true" />
    <span>{{ t.sound.label }}</span>
  </button>
</template>

<script setup>
import { useLocale } from "../composables/useLocale.js";
import { useScore } from "../composables/useScore.js";

const { t } = useLocale();
const { audible, toggle } = useScore();
</script>
