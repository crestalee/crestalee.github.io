import { computed, ref } from "vue";
import { copy } from "../data/copy.js";

/** Shared across header, hero, work, about, footer. */
const STORAGE = "crestalee-lang";
const locale = ref("en");

function apply(next) {
  locale.value = next;
  document.documentElement.lang = next === "zh" ? "zh-CN" : "en";
}

export function initLocale() {
  const saved = localStorage.getItem(STORAGE);
  if (saved === "zh" || saved === "en") {
    apply(saved);
    return;
  }
  apply(navigator.language?.toLowerCase().startsWith("zh") ? "zh" : "en");
}

export function useLocale() {
  const t = computed(() => copy[locale.value]);

  const toggle = () => {
    const next = locale.value === "zh" ? "en" : "zh";
    localStorage.setItem(STORAGE, next);
    apply(next);
  };

  return { locale, t, toggle };
}
