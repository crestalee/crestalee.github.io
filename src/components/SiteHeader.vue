<template>
  <header class="header">
    <a class="header-mark" href="#top">{{ site.mark }}</a>
    <nav>
      <a href="#work">Work</a>
      <a href="#experiments">Lab</a>
      <a href="#technology">Tech</a>
      <a href="#about">About</a>
    </nav>
  </header>
</template>

<script setup>
import { site } from "../data/site.js";
</script>
