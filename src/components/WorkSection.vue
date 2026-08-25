<template>
  <section id="work" class="section">
    <p class="section-kicker" data-reveal>{{ t.work.kicker }}</p>
    <article v-if="!projects.length" class="work-seal" data-reveal>
      <p class="work-stamp">{{ t.work.stamp }}</p>
      <div>
        <p class="work-empty">{{ t.work.empty }}</p>
        <p class="about-note">{{ t.work.emptyNote }}</p>
        <p class="work-seal-tag">{{ t.work.seal }}</p>
      </div>
    </article>
    <article v-for="item in projects" :key="item.id" class="work-item" data-reveal>
      <span class="work-index">{{ item.index }}</span>
      <div>
        <h2 class="work-name">{{ item.name }}</h2>
        <p class="work-lines">
          <template v-for="(line, i) in item.lines" :key="i">
            {{ line }}<br v-if="i < item.lines.length - 1" />
          </template>
        </p>
        <div class="work-foot">
          <p class="work-stack">{{ item.stack.join("  /  ") }}</p>
          <a v-if="item.href" class="work-link" :href="item.href" target="_blank" rel="noreferrer">
            {{ t.work.view }}
          </a>
        </div>
      </div>
    </article>
  </section>
</template>

<script setup>
import { projects } from "../data/projects.js";
import { useLocale } from "../composables/useLocale.js";

const { t } = useLocale();
</script>
