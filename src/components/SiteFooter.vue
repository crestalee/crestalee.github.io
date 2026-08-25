<template>
  <footer class="footer">
    <span>{{ site.mark }}</span>
    <div class="footer-links">
      <a :href="site.github" target="_blank" rel="noreferrer">GITHUB ↗</a>
      <a :href="`mailto:${site.email}`">EMAIL ↗</a>
    </div>
    <span>{{ site.year }}</span>
  </footer>
</template>

<script setup>
import { site } from "../data/site.js";
</script>
