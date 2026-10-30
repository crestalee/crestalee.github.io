<template>
  <header class="header">
    <a class="header-mark" href="#top">{{ site.mark }}</a>
    <nav>
      <a href="#work">{{ t.nav.work }}</a>
      <a href="#note">{{ t.nav.note }}</a>
      <LangToggle />
    </nav>
  </header>
</template>

<script setup>
import { site } from "../data/site.js";
import { useLocale } from "../composables/useLocale.js";
import LangToggle from "./LangToggle.vue";

const { t } = useLocale();
</script>
