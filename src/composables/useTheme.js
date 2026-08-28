import { ref } from "vue";

const STORAGE_KEY = "crestalee-theme";

export const THEMES = [
  {
    id: "monolith",
    name: "MONOLITH",
    labelZh: "纯粹冷银",
    descEn: "Swiss cold monochrome. Timeless, ultra-minimal & zero visual fatigue.",
    descZh: "瑞士极简冷白银与纯黑底，经久耐看、永不过时。",
    accent: "#eceff4",
    accentGlow: "rgba(236, 239, 244, 0.24)",
    accentLight: "#ffffff",
  },
  {
    id: "ice",
    name: "ICE STEEL",
    labelZh: "冰川冷钢",
    descEn: "Nordic glacier frost. Crystal-clear, sharp futuristic engineering.",
    descZh: "极地冰霜冷钢，清冷通透、理性纯净的未来感。",
    accent: "#8ec5fc",
    accentGlow: "rgba(142, 197, 252, 0.26)",
    accentLight: "#c2e0ff",
  },
  {
    id: "vermilion",
    name: "VERMILION",
    labelZh: "赤曜深红",
    descEn: "Neo-noir cinematic crimson. Deep obsidian with restrained blood-orange embers.",
    descZh: "电影级黑曜石赤红，深邃内敛的赛博新浪潮质感。",
    accent: "#ff5238",
    accentGlow: "rgba(255, 82, 56, 0.26)",
    accentLight: "#ff826e",
  },
  {
    id: "amethyst",
    name: "AMETHYST",
    labelZh: "暮光深紫",
    descEn: "Cosmic nebula & starlight. High-tech mystical digital atelier.",
    descZh: "深空星云紫与幽夜相融，神秘深邃的高阶科技美学。",
    accent: "#b085f5",
    accentGlow: "rgba(176, 133, 245, 0.26)",
    accentLight: "#cfb0ff",
  },
  {
    id: "titanium",
    name: "TITANIUM",
    labelZh: "香槟钛金",
    descEn: "Brushed luxury titanium metal. Warm precision craftsmanship.",
    descZh: "典雅内敛的香槟金属色泽，经典高定工坊质感。",
    accent: "#dfb572",
    accentGlow: "rgba(223, 181, 114, 0.24)",
    accentLight: "#f1d29d",
  },
  {
    id: "cyber",
    name: "CYBER CYAN",
    labelZh: "电光苍青",
    descEn: "Electric high-density HUD telemetry. Pure sci-fi interface hue.",
    descZh: "高精 HUD 遥测电光青，纯正硬核科幻交互界面。",
    accent: "#00e5ff",
    accentGlow: "rgba(0, 229, 255, 0.26)",
    accentLight: "#67f0ff",
  },
];

export const currentTheme = ref(THEMES[0].id);

function applyTheme(themeId) {
  const theme = THEMES.find((t) => t.id === themeId) || THEMES[0];
  currentTheme.value = theme.id;
  if (typeof document !== "undefined") {
    document.documentElement.setAttribute("data-theme", theme.id);
    document.documentElement.style.setProperty("--accent", theme.accent);
    document.documentElement.style.setProperty("--accent-glow", theme.accentGlow);
    document.documentElement.style.setProperty("--accent-light", theme.accentLight);
  }
}

export function initTheme() {
  if (typeof window === "undefined") return;
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved && THEMES.some((t) => t.id === saved)) {
    applyTheme(saved);
    return;
  }
  // Default to Monolith (纯粹冷银，最耐看极简)
  applyTheme("monolith");
}

export function useTheme() {
  const setTheme = (themeId) => {
    applyTheme(themeId);
    localStorage.setItem(STORAGE_KEY, themeId);
  };

  const nextTheme = () => {
    const currentIndex = THEMES.findIndex((t) => t.id === currentTheme.value);
    const nextIndex = (currentIndex + 1) % THEMES.length;
    setTheme(THEMES[nextIndex].id);
  };

  return {
    currentTheme,
    THEMES,
    setTheme,
    nextTheme,
  };
}
