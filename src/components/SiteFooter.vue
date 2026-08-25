<template>
  <footer class="footer">
    <span>{{ site.mark }}</span>
    <div class="footer-links">
      <a :href="site.github" target="_blank" rel="noreferrer">{{ t.footer.github }}</a>
      <a :href="`mailto:${site.email}`">{{ t.footer.email }}</a>
    </div>
    <span>{{ site.year }}</span>
  </footer>
</template>

<script setup>
import { site } from "../data/site.js";
import { useLocale } from "../composables/useLocale.js";

const { t } = useLocale();
</script>
