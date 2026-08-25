<template>
  <section id="practice" class="section">
    <p class="section-kicker" data-reveal>{{ t.practice.kicker }}</p>
    <article v-for="item in t.practice.items" :key="item.index" class="practice-item" data-reveal>
      <span class="work-index">{{ item.index }}</span>
      <div>
        <h2 class="practice-name">{{ item.name }}</h2>
        <p class="practice-text">{{ item.text }}</p>
      </div>
    </article>
  </section>
</template>

<script setup>
import { useLocale } from "../composables/useLocale.js";

const { t } = useLocale();
</script>
