<template>
  <section id="work" class="section work-section">
    <div class="section-header" data-reveal>
      <p class="section-kicker">{{ t.work.kicker }}</p>
      <h2 class="section-title">{{ t.work.title }}</h2>
    </div>

    <article v-if="!projects.length" class="work-seal" data-reveal>
      <p class="work-stamp">{{ t.work.stamp }}</p>
      <div>
        <p class="work-empty">{{ t.work.empty }}</p>
        <p class="work-seal-tag">{{ t.work.seal }}</p>
      </div>
    </article>

    <div class="work-list">
      <article
        v-for="(item, index) in projects"
        :key="item.id"
        class="work-showcase"
        :class="{
          'is-flip': index % 2 === 1,
          'is-phone': item.shape === 'phone',
        }"
        data-reveal
      >
        <!-- Project Visual Preview -->
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
            @mouseenter="playHover"
            @click="playClick"
          >
            <img :src="item.preview" :alt="item.previewAlt[locale]" loading="lazy" />
            <div class="preview-overlay">
              <span class="preview-badge">{{ t.work.view }}</span>
            </div>
          </a>
          <div v-else class="work-preview-frame" :class="{ 'is-phone': item.shape === 'phone' }">
            <img :src="item.preview" :alt="item.previewAlt[locale]" loading="lazy" />
            <div class="preview-overlay">
              <span class="preview-badge is-locked">{{ t.work.private }}</span>
            </div>
          </div>
        </div>

        <!-- Project Descriptive Copy & Specs -->
        <div class="work-copy">
          <div class="work-meta-row">
            <span class="work-index">{{ item.index }}</span>
            <span class="work-status-badge">{{ item.status[locale] }}</span>
          </div>

          <h3 class="work-name">{{ item.name[locale] }}</h3>
          <p class="work-tagline">{{ item.tagline[locale] }}</p>
          <p class="work-description">{{ item.description[locale] }}</p>

          <!-- Core Feature Highlights -->
          <div class="work-features">
            <span class="features-label">{{ t.work.highlights }}:</span>
            <div class="feature-tags">
              <span v-for="feat in item.features[locale]" :key="feat" class="feature-tag">
                {{ feat }}
              </span>
            </div>
          </div>

          <!-- Stack Tags & Action Links -->
          <div class="work-foot">
            <div class="work-stack-pills">
              <span v-for="tech in item.stack" :key="tech" class="stack-pill">
                {{ tech }}
              </span>
            </div>

            <div class="work-actions">
              <a
                v-if="item.href"
                class="work-link-btn"
                :href="item.href"
                target="_blank"
                rel="noreferrer"
                @mouseenter="playHover"
                @click="playClick"
              >
                <span>{{ t.work.view }}</span>
              </a>
              <span v-else class="work-seal-tag">{{ t.work.private }}</span>
            </div>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup>
/** `shape: "phone"` crops a vertical UI into a device frame. */
import { projects } from "../data/projects.js";
import { useLocale } from "../composables/useLocale.js";
import { useSound } from "../composables/useSound.js";

const { locale, t } = useLocale();
const { playHover, playClick } = useSound();
</script>
