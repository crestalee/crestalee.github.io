<template>
  <section class="works" :aria-label="t.work.label">
    <article
      v-for="(item, index) in projects"
      :id="index === 0 ? 'work' : undefined"
      :key="item.id"
      class="beat"
    >
      <div class="beat-copy">
        <h2>{{ item.name[locale] }}</h2>
        <p class="beat-line">{{ item.line[locale] }}</p>
        <p v-if="item.href" class="beat-action">
          <a :href="item.href" target="_blank" rel="noreferrer noopener">
            {{ item.link === "source" ? t.work.source : t.work.open }}
          </a>
        </p>
        <p v-else class="beat-note">{{ t.work.unreleased }}</p>
      </div>
    </article>
  </section>
</template>

<script setup>
import { projects } from "../data/projects.js";
import { useLocale } from "../composables/useLocale.js";

const { locale, t } = useLocale();
</script>
