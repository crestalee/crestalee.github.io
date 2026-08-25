<template>
  <header class="header">
    <a class="header-mark" href="#top">{{ site.mark }}</a>
    <div class="header-end">
      <nav>
        <a href="#experiments">{{ t.nav.lab }}</a>
        <a href="#practice">{{ t.nav.practice }}</a>
        <a href="#work">{{ t.nav.work }}</a>
        <a href="#technology">{{ t.nav.tech }}</a>
        <a href="#about">{{ t.nav.about }}</a>
      </nav>
      <LangToggle />
    </div>
  </header>
</template>

<script setup>
import { site } from "../data/site.js";
import { useLocale } from "../composables/useLocale.js";
import LangToggle from "./LangToggle.vue";

const { t } = useLocale();
</script>
