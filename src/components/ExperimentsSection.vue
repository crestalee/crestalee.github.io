<template>
  <section id="experiments" class="section">
    <p class="section-kicker" data-reveal>{{ t.experiments.kicker }}</p>
    <div class="experiments">
      <div class="exp-panel" data-reveal>
        <div class="exp-head">
          <span class="exp-index">{{ t.experiments.items[0].index }}</span>
          <p class="exp-title">{{ t.experiments.items[0].name }}</p>
        </div>
        <FieldSketch />
      </div>
      <div class="exp-panel" data-reveal>
        <div class="exp-head">
          <span class="exp-index">{{ t.experiments.items[1].index }}</span>
          <p class="exp-title">{{ t.experiments.items[1].name }}</p>
        </div>
        <SignalSketch />
      </div>
      <div class="exp-panel" data-reveal>
        <div class="exp-head">
          <span class="exp-index">{{ t.experiments.items[2].index }}</span>
          <p class="exp-title">{{ t.experiments.items[2].name }}</p>
        </div>
        <OrbitSketch />
      </div>
      <div class="exp-panel" data-reveal>
        <div class="exp-head">
          <span class="exp-index">{{ t.experiments.items[3].index }}</span>
          <p class="exp-title">{{ t.experiments.items[3].name }}</p>
        </div>
        <TraceSketch />
      </div>
    </div>
  </section>
</template>

<script setup>
import FieldSketch from "./FieldSketch.vue";
import SignalSketch from "./SignalSketch.vue";
import OrbitSketch from "./OrbitSketch.vue";
import TraceSketch from "./TraceSketch.vue";
import { useLocale } from "../composables/useLocale.js";

const { t } = useLocale();
</script>
