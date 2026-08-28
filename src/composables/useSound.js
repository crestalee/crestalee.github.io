import { ref } from "vue";

const STORAGE_KEY = "crestalee-sound";
export const soundEnabled = ref(false);

// Initialize sound preference
if (typeof window !== "undefined") {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved !== null) {
    soundEnabled.value = saved === "true";
  }
}

let ctx = null;

function getContext() {
  if (typeof window === "undefined") return null;
  if (!ctx) {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (AudioCtx) {
      ctx = new AudioCtx();
    }
  }
  if (ctx && ctx.state === "suspended") {
    ctx.resume();
  }
  return ctx;
}

export function useSound() {
  const toggleSound = () => {
    soundEnabled.value = !soundEnabled.value;
    localStorage.setItem(STORAGE_KEY, String(soundEnabled.value));
    if (soundEnabled.value) {
      getContext();
      playSuccess();
    }
  };

  const playHover = () => {
    if (!soundEnabled.value) return;
    const audio = getContext();
    if (!audio) return;

    try {
      const osc = audio.createOscillator();
      const gain = audio.createGain();
      const now = audio.currentTime;

      osc.type = "sine";
      osc.frequency.setValueAtTime(1200, now);
      osc.frequency.exponentialRampToValueAtTime(1800, now + 0.035);

      gain.gain.setValueAtTime(0.018, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.035);

      osc.connect(gain);
      gain.connect(audio.destination);

      osc.start(now);
      osc.stop(now + 0.035);
    } catch {
      // Audio context error fallback
    }
  };

  const playClick = () => {
    if (!soundEnabled.value) return;
    const audio = getContext();
    if (!audio) return;

    try {
      const osc = audio.createOscillator();
      const gain = audio.createGain();
      const now = audio.currentTime;

      osc.type = "triangle";
      osc.frequency.setValueAtTime(440, now);
      osc.frequency.exponentialRampToValueAtTime(880, now + 0.045);

      gain.gain.setValueAtTime(0.04, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.045);

      osc.connect(gain);
      gain.connect(audio.destination);

      osc.start(now);
      osc.stop(now + 0.045);
    } catch {
      // Audio fallback
    }
  };

  const playBeep = () => {
    if (!soundEnabled.value) return;
    const audio = getContext();
    if (!audio) return;

    try {
      const osc = audio.createOscillator();
      const gain = audio.createGain();
      const now = audio.currentTime;

      osc.type = "square";
      osc.frequency.setValueAtTime(800 + Math.random() * 200, now);

      gain.gain.setValueAtTime(0.015, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.025);

      osc.connect(gain);
      gain.connect(audio.destination);

      osc.start(now);
      osc.stop(now + 0.025);
    } catch {
      // Audio fallback
    }
  };

  const playSuccess = () => {
    if (!soundEnabled.value) return;
    const audio = getContext();
    if (!audio) return;

    try {
      const now = audio.currentTime;
      [523.25, 659.25, 783.99, 1046.5].forEach((freq, i) => {
        const osc = audio.createOscillator();
        const gain = audio.createGain();
        const start = now + i * 0.045;

        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, start);

        gain.gain.setValueAtTime(0.03, start);
        gain.gain.exponentialRampToValueAtTime(0.0001, start + 0.12);

        osc.connect(gain);
        gain.connect(audio.destination);

        osc.start(start);
        osc.stop(start + 0.12);
      });
    } catch {
      // Audio fallback
    }
  };

  return {
    soundEnabled,
    toggleSound,
    playHover,
    playClick,
    playBeep,
    playSuccess,
  };
}
