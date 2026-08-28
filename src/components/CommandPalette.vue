<template>
  <Teleport to="body">
    <div v-if="isOpen" class="terminal-overlay" @click.self="close" @keydown.esc="close">
      <div class="terminal-modal" role="dialog" aria-modal="true" :aria-label="t.terminal.title">
        <div class="terminal-topbar">
          <div class="terminal-dots">
            <span class="dot is-red" @click="close" />
            <span class="dot is-yellow" />
            <span class="dot is-green" />
          </div>
          <span class="terminal-title">{{ t.terminal.title }}</span>
          <span class="terminal-badge">{{ t.terminal.badge }}</span>
        </div>

        <div ref="outputRef" class="terminal-output">
          <div class="terminal-line is-dim">
            > SYSTEM INITIALIZED. TYPE <span class="accent-cmd">'help'</span> FOR AVAILABLE
            COMMANDS.
          </div>
          <div class="terminal-line is-dim">
            > PRESS <span class="accent-cmd">[ESC]</span> OR CLICK OUTSIDE TO CLOSE TERMINAL.
          </div>

          <div v-for="(item, i) in history" :key="i" class="terminal-entry">
            <div class="terminal-cmd">
              <span class="prompt-sym">➜</span>
              <span class="cmd-text">{{ item.cmd }}</span>
            </div>
            <div class="terminal-res" :class="item.type">
              <div v-if="typeof item.res === 'string'">{{ item.res }}</div>
              <div v-else-if="Array.isArray(item.res)">
                <div v-for="(line, idx) in item.res" :key="idx" class="res-row">
                  {{ line }}
                </div>
              </div>
            </div>
          </div>
        </div>

        <form class="terminal-input-row" @submit.prevent="handleSubmit">
          <span class="prompt-sym">➜</span>
          <input
            ref="inputRef"
            v-model="inputVal"
            type="text"
            class="terminal-input"
            :placeholder="t.terminal.placeholder"
            autocomplete="off"
            spellcheck="false"
            @keydown.up.prevent="navigateHistory('up')"
            @keydown.down.prevent="navigateHistory('down')"
            @input="playBeep"
          />
          <button type="submit" class="terminal-submit">RUN</button>
        </form>

        <div class="terminal-quick-tags">
          <span class="quick-label">QUICK:</span>
          <button
            v-for="q in quickCmds"
            :key="q"
            type="button"
            class="quick-btn"
            @click="runQuick(q)"
          >
            {{ q }}
          </button>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import { nextTick, onMounted, onUnmounted, ref } from "vue";
import { useLocale } from "../composables/useLocale.js";
import { useSound } from "../composables/useSound.js";
import { useTheme, THEMES } from "../composables/useTheme.js";
import { site } from "../data/site.js";
import { projects } from "../data/projects.js";

const { locale, t, toggle: toggleLang } = useLocale();
const { soundEnabled, toggleSound, playClick, playBeep, playSuccess } = useSound();
const { currentTheme, setTheme, nextTheme } = useTheme();

const isOpen = ref(false);
const inputVal = ref("");
const inputRef = ref(null);
const outputRef = ref(null);
const history = ref([]);
const cmdList = ref([]);
let cmdHistoryIndex = -1;

const quickCmds = ["help", "theme", "works", "radar", "codex", "sound", "contact", "clear"];

function open() {
  isOpen.value = true;
  playSuccess();
  nextTick(() => {
    inputRef.value?.focus();
  });
}

function close() {
  isOpen.value = false;
  playClick();
}

function runQuick(cmd) {
  inputVal.value = cmd;
  handleSubmit();
}

function navigateHistory(direction) {
  if (!cmdList.value.length) return;
  if (direction === "up") {
    if (cmdHistoryIndex < cmdList.value.length - 1) {
      cmdHistoryIndex++;
      inputVal.value = cmdList.value[cmdList.value.length - 1 - cmdHistoryIndex] || "";
    }
  } else if (direction === "down") {
    if (cmdHistoryIndex > 0) {
      cmdHistoryIndex--;
      inputVal.value = cmdList.value[cmdList.value.length - 1 - cmdHistoryIndex] || "";
    } else {
      cmdHistoryIndex = -1;
      inputVal.value = "";
    }
  }
}

function handleSubmit() {
  const raw = inputVal.value.trim();
  inputVal.value = "";
  if (!raw) return;

  playClick();
  cmdList.value.push(raw);
  cmdHistoryIndex = -1;

  const parts = raw.toLowerCase().split(/\s+/);
  const cmd = parts[0];
  const arg = parts[1];
  let res = "";
  let type = "info";

  if (cmd === "help") {
    res = [
      "AVAILABLE COMMANDS:",
      "  theme [name]      - Switch aesthetic palette (monolith, ice, vermilion, amethyst, titanium)",
      "  works / projects  - Browse engineered digital artifacts",
      "  radar / engines   - Exploration domains & technical architecture",
      "  codex / manifesto - Digital craftsmanship principles & telemetry",
      "  contact / email   - Copy transmission email to clipboard",
      "  github            - Open GitHub laboratory profile",
      "  sound             - Toggle Web Audio synthesizer SFX (ON/OFF)",
      "  lang              - Toggle EN / 中文 interface language",
      "  time              - Display current UTC & Local Sector time",
      "  clear             - Clear terminal display buffer",
      "  exit / close      - Close terminal window",
    ];
  } else if (cmd === "theme" || cmd === "color") {
    if (arg && THEMES.some((t) => t.id === arg)) {
      setTheme(arg);
      const found = THEMES.find((t) => t.id === arg);
      res = `Theme switched to: ${found.name} (${found.labelZh})`;
      type = "success";
    } else {
      nextTheme();
      const current = THEMES.find((t) => t.id === currentTheme.value);
      res = [
        `Theme cycled to: ${current.name} (${current.labelZh})`,
        `Available aesthetics: monolith (纯粹冷银), ice (冰川冷钢), vermilion (赤曜深红), amethyst (暮光深紫), titanium (香槟钛金)`,
      ];
      type = "success";
    }
  } else if (cmd === "works" || cmd === "projects") {
    res = [
      "LAB ARTIFACTS & EXPERIMENTS:",
      ...projects.map(
        (p) =>
          `  [${p.index}] ${p.name[locale.value]} — ${p.stack.join(" / ")} (${p.status[locale.value]})`,
      ),
      "  -> Scrolling to works viewport...",
    ];
    document.querySelector("#work")?.scrollIntoView({ behavior: "smooth" });
  } else if (cmd === "radar" || cmd === "engines" || cmd === "stack") {
    res = [
      "SYSTEM RADAR & ENGINES:",
      "  [01] REALTIME GRAPHICS & SHADERS (WebGL 2.0 / GLSL / Bloom / Kinematics)",
      "  [02] DETERMINISTIC SIMULATIONS (State Machines / Probability Graphs / Replay)",
      "  [03] LOCAL-FIRST & STEALTH CLIENTS (IndexedDB / Web Worker / Camouflage)",
      "  [04] DISTRIBUTED BACKBONE & CLOUD (Java/Go Microservices / Docker / Edge)",
    ];
    document.querySelector("#radar")?.scrollIntoView({ behavior: "smooth" });
  } else if (cmd === "codex" || cmd === "manifesto" || cmd === "about") {
    res = [
      "CRESTALEE® // SYSTEM CODEX & MANIFESTO",
      "  • Principle 01: Zero-bloat, Pure Speed (Every byte & frame budget counts)",
      "  • Principle 02: Deterministic Logic (Explicit state transitions & fault resilience)",
      "  • Principle 03: Tactile Luxury Aesthetics (Precision industrial machinery)",
      `  • Coordinates: 31.23°N 121.47°E | Email: ${site.email}`,
    ];
    document.querySelector("#codex")?.scrollIntoView({ behavior: "smooth" });
  } else if (cmd === "contact" || cmd === "email") {
    navigator.clipboard?.writeText(site.email);
    res = `✓ Transmission email '${site.email}' copied to clipboard!`;
    type = "success";
  } else if (cmd === "github") {
    window.open(site.github, "_blank", "noreferrer");
    res = `Connecting to ${site.github}...`;
  } else if (cmd === "sound") {
    toggleSound();
    res = `Web Audio synthesizer is now ${soundEnabled.value ? "ENABLED [ON]" : "MUTED [OFF]"}`;
    type = "success";
  } else if (cmd === "lang") {
    toggleLang();
    res = `Interface language switched to: ${locale.value === "zh" ? "中文 (Chinese)" : "English"}`;
    type = "success";
  } else if (cmd === "time" || cmd === "date") {
    const now = new Date();
    res = [
      `UTC:      ${now.toUTCString()}`,
      `SECTOR:   ${now.toLocaleString("zh-CN", { timeZone: "Asia/Shanghai" })} (Asia/Shanghai)`,
    ];
  } else if (cmd === "clear") {
    history.value = [];
    return;
  } else if (cmd === "exit" || cmd === "close" || cmd === "quit") {
    close();
    return;
  } else {
    res = `${t.value.terminal.unknownCmd} '${raw}'`;
    type = "warn";
  }

  history.value.push({ cmd: raw, res, type });

  nextTick(() => {
    if (outputRef.value) {
      outputRef.value.scrollTop = outputRef.value.scrollHeight;
    }
  });
}

function handleKeyDown(e) {
  if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
    e.preventDefault();
    if (isOpen.value) close();
    else open();
  }
}

onMounted(() => {
  window.addEventListener("keydown", handleKeyDown);
  window.addEventListener("crestalee-open-terminal", open);
});

onUnmounted(() => {
  window.removeEventListener("keydown", handleKeyDown);
  window.removeEventListener("crestalee-open-terminal", open);
});

defineExpose({ open, close });
</script>
