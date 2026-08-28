import { createApp } from "vue";
import App from "./App.vue";
import { initLocale } from "./composables/useLocale.js";
import { initTheme } from "./composables/useTheme.js";
import "./styles/main.css";

initLocale();
initTheme();
createApp(App).mount("#app");
