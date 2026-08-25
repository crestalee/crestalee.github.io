<template>
  <section id="experiments" class="section">
    <p class="section-kicker" data-reveal>{{ t.experiments.kicker }}</p>
    <div class="experiments">
      <div class="exp-panel" data-reveal>
        <div class="exp-head">
          <span class="exp-index">{{ t.experiments.items[0].index }}</span>
          <p class="exp-title">{{ t.experiments.items[0].name }}</p>
        </div>
        <p class="exp-note">{{ t.experiments.items[0].note }}</p>
        <FieldSketch />
      </div>
      <div class="exp-panel" data-reveal>
        <div class="exp-head">
          <span class="exp-index">{{ t.experiments.items[1].index }}</span>
          <p class="exp-title">{{ t.experiments.items[1].name }}</p>
        </div>
        <p class="exp-note">{{ t.experiments.items[1].note }}</p>
        <SignalSketch />
      </div>
    </div>
  </section>
</template>

<script setup>
import FieldSketch from "./FieldSketch.vue";
import SignalSketch from "./SignalSketch.vue";
import { useLocale } from "../composables/useLocale.js";

const { t } = useLocale();
</script>
