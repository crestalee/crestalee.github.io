import { computed, ref } from "vue";
import { copy } from "../data/copy.js";

/** Shared across the header, the title card, the work, and the closing note. */
const STORAGE = "crestalee-lang";
const locale = ref("en");

function apply(next) {
  locale.value = next;
  document.documentElement.lang = next === "zh" ? "zh-CN" : "en";

  const meta = copy[next]?.meta;
  if (meta && typeof document !== "undefined") {
    document.title = meta.title;
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", meta.description);
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute("content", meta.description);
    const twitterDesc = document.querySelector('meta[name="twitter:description"]');
    if (twitterDesc) twitterDesc.setAttribute("content", meta.description);
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", meta.title);
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) twitterTitle.setAttribute("content", meta.title);
  }
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
