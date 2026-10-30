<template>
  <section id="note" class="close">
    <div class="close-copy">
      <p class="close-place">{{ t.close.place }}</p>
      <h2>Cresta Lee</h2>
      <p class="close-line">{{ t.close.line }}</p>
      <div class="close-links">
        <a class="mail" :href="`mailto:${site.email}`">{{ site.email }}</a>
        <button type="button" class="text-btn" aria-live="polite" @click="copyEmail">
          {{ copied ? t.close.copied : t.close.copy }}
        </button>
        <a class="text-btn" :href="site.github" target="_blank" rel="noreferrer noopener">
          {{ t.close.github }}
        </a>
      </div>
    </div>
    <footer class="footer">
      <p class="score-credit">
        <span>{{ t.footer.music }}</span>
        <span aria-hidden="true"> · </span>
        <a
          :href="score.page"
          :title="`${score.title} — ${score.artist}`"
          target="_blank"
          rel="noreferrer noopener"
          >{{ score.title }}</a
        >
        <span aria-hidden="true"> — </span>
        <span>{{ score.artist }}</span>
        <span aria-hidden="true"> · </span>
        <a
          :href="score.licenseUrl"
          :title="score.license"
          target="_blank"
          rel="noreferrer noopener"
        >
          Mixkit
          <span class="sr"> {{ score.license }}</span>
        </a>
      </p>
      <div class="footer-bar">
        <a href="#top">{{ t.footer.top }}</a>
        <span>© {{ site.year }}</span>
      </div>
    </footer>
  </section>
</template>

<script setup>
import { onUnmounted, ref } from "vue";
import { score, site } from "../data/site.js";
import { useLocale } from "../composables/useLocale.js";

const { t } = useLocale();
const copied = ref(false);
let timer = 0;

function markCopied() {
  copied.value = true;
  window.clearTimeout(timer);
  timer = window.setTimeout(() => {
    copied.value = false;
  }, 2200);
}

async function copyEmail() {
  try {
    await navigator.clipboard.writeText(site.email);
    markCopied();
    return;
  } catch {
    const field = document.createElement("textarea");
    field.value = site.email;
    field.setAttribute("readonly", "");
    field.style.position = "fixed";
    field.style.left = "-9999px";
    document.body.appendChild(field);
    field.select();
    const ok = document.execCommand("copy");
    field.remove();
    if (ok) markCopied();
  }
}

onUnmounted(() => {
  window.clearTimeout(timer);
});
</script>
