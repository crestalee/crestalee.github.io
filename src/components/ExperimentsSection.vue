<template>
  <section id="experiments" class="section">
    <p class="section-kicker" data-reveal>EXPERIMENTS</p>
    <div class="experiments">
      <div class="exp-panel" data-reveal>
        <div class="exp-head">
          <span class="exp-index">01</span>
          <p class="exp-title">FIELD</p>
        </div>
        <FieldSketch />
      </div>
      <div class="exp-panel" data-reveal>
        <div class="exp-head">
          <span class="exp-index">02</span>
          <p class="exp-title">SIGNAL</p>
        </div>
        <SignalSketch />
      </div>
    </div>
  </section>
</template>

<script setup>
import FieldSketch from "./FieldSketch.vue";
import SignalSketch from "./SignalSketch.vue";
</script>
