<template>
  <section id="radar" class="section radar-section">
    <div class="section-header" data-reveal>
      <p class="section-kicker">{{ t.radar.kicker }}</p>
      <h2 class="section-title">{{ t.radar.title }}</h2>
      <p class="section-desc">{{ t.radar.desc }}</p>
    </div>

    <div class="radar-grid" data-reveal>
      <div
        v-for="cat in t.radar.categories"
        :key="cat.id"
        class="radar-card"
        @mouseenter="playHover"
      >
        <div class="radar-card-header">
          <span class="radar-tag">{{ cat.tag }}</span>
          <h3 class="radar-category-name">{{ cat.name }}</h3>
        </div>

        <p class="radar-category-desc">{{ cat.desc }}</p>

        <ul class="radar-items-list">
          <li v-for="item in cat.items" :key="item" class="radar-item">
            <span class="item-bullet">›</span>
            <span class="item-text">{{ item }}</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useLocale } from "../composables/useLocale.js";
import { useSound } from "../composables/useSound.js";

const { t } = useLocale();
const { playHover } = useSound();
</script>
