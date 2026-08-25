<template>
  <section id="work" class="section">
    <p class="section-kicker" data-reveal>SELECTED WORK</p>
    <article v-if="!projects.length" class="work-empty" data-reveal>
      NOTHING PUBLIC YET.
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
            VIEW PROJECT ↗
          </a>
        </div>
      </div>
    </article>
  </section>
</template>

<script setup>
import { projects } from "../data/projects.js";
</script>
