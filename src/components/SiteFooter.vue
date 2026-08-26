<template>
  <footer class="footer">
    <span>{{ site.mark }}</span>
    <div class="footer-links">
      <a class="footer-github" :href="site.github" target="_blank" rel="noreferrer">
        <GitHubMark />
        <span>{{ t.footer.github }}</span>
      </a>
      <a :href="`mailto:${site.email}`">{{ t.footer.email }}</a>
    </div>
    <span>{{ site.year }}</span>
  </footer>
</template>

<script setup>
import { site } from "../data/site.js";
import { useLocale } from "../composables/useLocale.js";
import GitHubMark from "./GitHubMark.vue";

const { t } = useLocale();
</script>
