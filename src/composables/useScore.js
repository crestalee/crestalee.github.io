import { ref } from "vue";
import { score } from "../data/site.js";

/**
 * Looping picture score.
 *
 * Browsers will not start a page with the sound already open, so the track
 * begins muted (and already playing, when the browser allows that). The first
 * click or tap anywhere — or the sound control — fades it in. Muting from the
 * control is remembered, and later clicks leave it alone.
 */

const STORAGE = "crestalee-score";
/** Master is about −13 LUFS. A third keeps the storms soft. */
const LEVEL = 0.32;
const FADE_IN = 1.8;
const FADE_OUT = 0.65;

export const scoreAudible = ref(false);

let audio = null;
let ctx = null;
let gain = null;
let listening = false;
let active = false;
let token = 0;
let fadeTimer = 0;
let volumeFrame = 0;

function preference() {
  try {
    return localStorage.getItem(STORAGE);
  } catch {
    return null;
  }
}

function remember(value) {
  try {
    localStorage.setItem(STORAGE, value);
  } catch {
    // Private mode can reject storage. The session still behaves.
  }
}

function ensureAudio() {
  if (audio) return audio;
  const el = new Audio();
  el.className = "score-audio";
  el.src = score.src;
  el.loop = true;
  el.preload = "auto";
  el.muted = true;
  el.volume = 1;
  el.playsInline = true;
  el.setAttribute("playsinline", "");
  el.setAttribute("aria-hidden", "true");
  el.tabIndex = -1;
  document.body.appendChild(el);
  audio = el;
  return el;
}

function ensureGraph() {
  if (ctx && gain) return true;
  const Ctx = window.AudioContext || window.webkitAudioContext;
  if (!Ctx || !audio) return false;
  try {
    ctx = new Ctx();
    gain = ctx.createGain();
    // Default gain is 1. Hold silence before the element is connected.
    gain.gain.setValueAtTime(0, ctx.currentTime);
    const source = ctx.createMediaElementSource(audio);
    source.connect(gain);
    gain.connect(ctx.destination);
    return true;
  } catch {
    gain = null;
    if (ctx) ctx.close().catch(() => {});
    ctx = null;
    return false;
  }
}

function rampGain(to, seconds) {
  if (!ctx || !gain) return;
  const now = ctx.currentTime;
  const from = Math.max(gain.gain.value, 0.0001);
  const target = Math.max(to, 0.0001);
  gain.gain.cancelScheduledValues(now);
  gain.gain.setValueAtTime(from, now);
  if (Math.abs(from - target) < 0.0005) {
    gain.gain.setValueAtTime(to, now);
    return;
  }
  gain.gain.exponentialRampToValueAtTime(target, now + seconds);
}

function rampVolume(to, seconds) {
  cancelAnimationFrame(volumeFrame);
  const el = audio;
  if (!el) return;
  const from = el.volume;
  const t0 = performance.now();
  const tick = (now) => {
    if (audio !== el) return;
    const p = Math.min(1, (now - t0) / (seconds * 1000));
    const eased = 1 - (1 - p) ** 3;
    el.volume = from + (to - from) * eased;
    if (p < 1) volumeFrame = requestAnimationFrame(tick);
  };
  volumeFrame = requestAnimationFrame(tick);
}

function fadeTo(to, seconds) {
  if (gain && ctx) rampGain(to, seconds);
  else rampVolume(to, seconds);
}

function onGesture(event) {
  const target = event.target;
  if (target instanceof Element && target.closest("[data-sound-toggle]")) return;
  if (preference() === "off") {
    detachGestures();
    return;
  }
  enableScore();
}

function attachGestures() {
  if (listening) return;
  listening = true;
  document.addEventListener("click", onGesture, true);
}

function detachGestures() {
  if (!listening) return;
  listening = false;
  document.removeEventListener("click", onGesture, true);
}

export function enableScore() {
  if (scoreAudible.value) return;
  window.clearTimeout(fadeTimer);
  const my = ++token;
  const el = ensureAudio();
  const wired = ensureGraph();
  if (wired) el.volume = 1;
  else el.volume = 0;
  el.muted = false;
  scoreAudible.value = true;
  fadeTo(LEVEL, FADE_IN);
  // resume() and play() have to run inside the gesture, before any await.
  // play() may already be going from the muted start; wait for both anyway.
  const resumePromise = wired && ctx.state === "suspended" ? ctx.resume() : Promise.resolve();
  let playPromise = Promise.resolve();
  try {
    playPromise = Promise.resolve(el.play());
  } catch (error) {
    playPromise = Promise.reject(error);
  }
  Promise.all([playPromise, resumePromise])
    .then(() => {
      if (my !== token) return;
      if (wired && ctx && ctx.state !== "running") throw new Error("suspended");
      remember("on");
      detachGestures();
    })
    .catch(() => {
      if (my !== token) return;
      scoreAudible.value = false;
      el.muted = true;
      fadeTo(0, 0.05);
    });
}

export function disableScore() {
  const my = ++token;
  scoreAudible.value = false;
  remember("off");
  detachGestures();
  window.clearTimeout(fadeTimer);
  fadeTo(0, FADE_OUT);
  fadeTimer = window.setTimeout(
    () => {
      if (my !== token || !audio) return;
      audio.muted = true;
      audio.pause();
    },
    FADE_OUT * 1000 + 80,
  );
}

export function toggleScore() {
  if (scoreAudible.value) disableScore();
  else enableScore();
}

export function useScore() {
  return {
    audible: scoreAudible,
    toggle: toggleScore,
  };
}

/** Start the muted loop once the page is up. Returns a teardown. */
export function startScore() {
  if (active) return stopScore;
  active = true;
  const el = ensureAudio();
  if (preference() !== "off") {
    const pending = el.play();
    if (pending && typeof pending.catch === "function") pending.catch(() => {});
    attachGestures();
  }
  return stopScore;
}

function stopScore() {
  if (!active) return;
  active = false;
  token += 1;
  detachGestures();
  window.clearTimeout(fadeTimer);
  cancelAnimationFrame(volumeFrame);
  scoreAudible.value = false;
  if (audio) {
    audio.pause();
    audio.removeAttribute("src");
    audio.load();
    audio.remove();
    audio = null;
  }
  gain = null;
  if (ctx) {
    ctx.close().catch(() => {});
    ctx = null;
  }
}
