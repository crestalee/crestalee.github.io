<template>
  <section id="technology" class="section">
    <p class="section-kicker" data-reveal>TECHNOLOGY</p>
    <ul class="tech-list">
      <li v-for="item in technologies" :key="item.name" class="tech-item" data-reveal>
        <span class="tech-name">{{ item.name }}</span>
        <span class="tech-ghosts">
          <span v-for="ghost in item.ghosts" :key="ghost">{{ ghost }}</span>
        </span>
      </li>
    </ul>
  </section>
</template>

<script setup>
import { technologies } from "../data/technology.js";
</script>
