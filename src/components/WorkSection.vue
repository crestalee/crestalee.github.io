<template>
  <section class="works" :aria-label="t.work.label">
    <article
      v-for="(item, index) in projects"
      :id="index === 0 ? 'work' : undefined"
      :key="item.id"
      class="beat"
      :class="{ 'is-flip': index % 2 === 1 }"
    >
      <div class="beat-copy">
        <p class="beat-index">{{ item.index }}</p>
        <h2>{{ item.name[locale] }}</h2>
        <p class="beat-line">{{ item.line[locale] }}</p>
        <p class="beat-detail">{{ item.detail[locale] }}</p>
        <p class="beat-stack">{{ item.stack }}</p>
        <p v-if="item.href" class="beat-action">
          <a :href="item.href" target="_blank" rel="noreferrer noopener">
            {{ item.link === "source" ? t.work.source : t.work.open }}
          </a>
        </p>
        <p v-else class="beat-note">{{ t.work.unreleased }}</p>
      </div>

      <figure class="still" :class="{ 'is-phone': item.shape === 'phone' }">
        <a
          v-if="item.href"
          :href="item.href"
          target="_blank"
          rel="noreferrer noopener"
          :aria-label="item.previewAlt[locale]"
        >
          <img
            :src="item.preview"
            :alt="item.previewAlt[locale]"
            :width="item.width"
            :height="item.height"
            :loading="index === 0 ? 'eager' : 'lazy'"
            decoding="async"
          />
        </a>
        <img
          v-else
          :src="item.preview"
          :alt="item.previewAlt[locale]"
          :width="item.width"
          :height="item.height"
          :loading="index === 0 ? 'eager' : 'lazy'"
          decoding="async"
        />
      </figure>
    </article>
  </section>
</template>

<script setup>
import { projects } from "../data/projects.js";
import { useLocale } from "../composables/useLocale.js";

const { locale, t } = useLocale();
</script>
