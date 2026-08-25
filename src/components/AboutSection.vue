<template>
  <section id="about" class="section">
    <p class="section-kicker" data-reveal>{{ t.about.kicker }}</p>
    <p class="about-copy" data-reveal>{{ t.about.lead }}</p>
    <div class="about-facts" data-reveal>
      <div v-for="fact in t.about.facts" :key="fact.k" class="about-fact">
        <span>{{ fact.k }}</span>
        <strong>{{ fact.v }}</strong>
      </div>
    </div>
    <p v-for="note in t.about.notes" :key="note" class="about-note" data-reveal>
      {{ note }}
    </p>
  </section>
</template>

<script setup>
import { useLocale } from "../composables/useLocale.js";

const { t } = useLocale();
</script>
