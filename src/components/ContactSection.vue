<template>
  <section id="contact" class="section">
    <p class="section-kicker" data-reveal>{{ t.contact.kicker }}</p>
    <p class="about-copy" data-reveal>{{ t.contact.line }}</p>
    <div class="contact-links" data-reveal>
      <a :href="site.github" target="_blank" rel="noreferrer">{{ t.contact.github }}</a>
      <a :href="`mailto:${site.email}`">{{ site.email }}</a>
    </div>
  </section>
</template>

<script setup>
import { site } from "../data/site.js";
import { useLocale } from "../composables/useLocale.js";

const { t } = useLocale();
</script>
