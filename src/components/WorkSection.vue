<template>
  <section id="work" class="section">
    <p class="section-kicker" data-reveal>{{ t.work.kicker }}</p>
    <article v-if="!projects.length" class="work-seal" data-reveal>
      <p class="work-stamp">{{ t.work.stamp }}</p>
      <div>
        <p class="work-empty">{{ t.work.empty }}</p>
        <p class="work-seal-tag">{{ t.work.seal }}</p>
      </div>
    </article>
    <article
      v-for="(item, index) in projects"
      :key="item.id"
      class="work-showcase"
      :class="{ 'is-flip': index % 2 === 1, 'is-phone': item.shape === 'phone' }"
      data-reveal
    >
      <div class="work-preview" :class="{ 'is-phone': item.shape === 'phone' }">
        <div class="work-preview-glow" />
        <a
          v-if="item.href"
          class="work-preview-frame"
          :class="{ 'is-phone': item.shape === 'phone' }"
          :href="item.href"
          target="_blank"
          rel="noreferrer"
          :aria-label="item.previewAlt[locale]"
        >
          <img :src="item.preview" :alt="item.previewAlt[locale]" />
        </a>
        <div v-else class="work-preview-frame" :class="{ 'is-phone': item.shape === 'phone' }">
          <img :src="item.preview" :alt="item.previewAlt[locale]" />
        </div>
      </div>
      <div class="work-copy">
        <span class="work-index">{{ item.index }}</span>
        <h2 class="work-name">{{ item.name[locale] }}</h2>
        <div class="work-foot">
          <p class="work-stack">{{ item.stack.join("  /  ") }}</p>
          <a
            v-if="item.href"
            class="work-link"
            :href="item.href"
            target="_blank"
            rel="noreferrer"
          >
            {{ t.work.view }}
          </a>
          <span v-else class="work-seal-tag">{{ t.work.private }}</span>
        </div>
      </div>
    </article>
  </section>
</template>

<script setup>
/** `shape: "phone"` crops a vertical UI into a device frame. */
import { projects } from "../data/projects.js";
import { useLocale } from "../composables/useLocale.js";

const { locale, t } = useLocale();
</script>
