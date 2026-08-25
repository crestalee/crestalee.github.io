<template>
  <section id="about" class="section">
    <p class="section-kicker" data-reveal>{{ t.about.kicker }}</p>
    <p v-for="line in t.about.lines" :key="line" class="about-copy" data-reveal>
      {{ line }}
    </p>
    <p v-for="note in t.about.notes" :key="note" class="about-note" data-reveal>
      {{ note }}
    </p>
  </section>
</template>

<script setup>
import { useLocale } from "../composables/useLocale.js";

const { t } = useLocale();
</script>
