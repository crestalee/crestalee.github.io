import { createApp } from "vue";
import App from "./App.vue";
import { initLocale } from "./composables/useLocale.js";
import "./styles/main.css";

initLocale();
createApp(App).mount("#app");
