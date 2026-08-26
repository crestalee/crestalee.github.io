<template>
  <section id="contact" class="section">
    <p class="section-kicker" data-reveal>{{ t.contact.kicker }}</p>
    <div class="contact-links" data-reveal>
      <a class="contact-github" :href="site.github" target="_blank" rel="noreferrer">
        <GitHubMark />
        <span>{{ t.contact.github }}</span>
      </a>
      <a :href="`mailto:${site.email}`">{{ site.email }}</a>
    </div>
  </section>
</template>

<script setup>
import { site } from "../data/site.js";
import { useLocale } from "../composables/useLocale.js";
import GitHubMark from "./GitHubMark.vue";

const { t } = useLocale();
</script>
