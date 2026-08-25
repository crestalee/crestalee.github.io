<template>
  <section id="practice" class="section">
    <p class="section-kicker" data-reveal>{{ t.practice.kicker }}</p>
    <p class="section-intro" data-reveal>{{ t.practice.intro }}</p>
    <article v-for="item in t.practice.items" :key="item.index" class="practice-item" data-reveal>
      <span class="work-index">{{ item.index }}</span>
      <h2 class="practice-name">{{ item.name }}</h2>
      <p class="practice-text">{{ item.text }}</p>
    </article>
  </section>
</template>

<script setup>
import { useLocale } from "../composables/useLocale.js";

const { t } = useLocale();
</script>
