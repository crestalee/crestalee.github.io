<template>
  <header class="header">
    <a class="header-mark" href="#top">{{ site.mark }}</a>
    <div class="header-end">
      <nav>
        <a href="#experiments">{{ t.nav.lab }}</a>
        <a href="#work">{{ t.nav.work }}</a>
        <a href="#about">{{ t.nav.about }}</a>
      </nav>
      <a
        class="github-btn"
        :href="site.github"
        target="_blank"
        rel="noreferrer"
        :aria-label="t.contact.github"
      >
        <GitHubMark />
      </a>
      <LangToggle />
    </div>
  </header>
</template>

<script setup>
import { site } from "../data/site.js";
import { useLocale } from "../composables/useLocale.js";
import GitHubMark from "./GitHubMark.vue";
import LangToggle from "./LangToggle.vue";

const { t } = useLocale();
</script>
