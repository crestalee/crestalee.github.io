<template>
  <footer class="footer">
    <div class="footer-brand">
      <span class="footer-mark">{{ site.mark }}</span>
      <span class="footer-rights">{{ t.footer.rights }}</span>
    </div>

    <div class="footer-end">
      <a
        class="back-to-top"
        href="#top"
        :aria-label="t.footer.top"
        @mouseenter="playHover"
        @click="playClick"
      >
        <span class="top-arrow">↑</span>
        <span>{{ t.footer.top }}</span>
      </a>
      <span class="footer-year">© {{ site.year }}</span>
    </div>
  </footer>
</template>

<script setup>
import { site } from "../data/site.js";
import { useLocale } from "../composables/useLocale.js";
import { useSound } from "../composables/useSound.js";

const { t } = useLocale();
const { playHover, playClick } = useSound();
</script>
