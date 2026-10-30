<template>
  <button class="lang-btn" type="button" :aria-label="t.langSwitch" @click="toggle">
    {{ t.langTarget }}
  </button>
</template>

<script setup>
import { useLocale } from "../composables/useLocale.js";

const { t, toggle } = useLocale();
</script>
