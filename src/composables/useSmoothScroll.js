import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const listeners = new Set();

/** Register a centralized smooth scroll subscriber. */
export function onSmoothScroll(fn) {
  listeners.add(fn);
  return () => listeners.delete(fn);
}

function notifyScroll(data) {
  listeners.forEach((fn) => {
    try {
      fn(data);
    } catch (e) {
      console.error(e);
    }
  });
}

/** Lenis stays stopped until the intro unlocks the page. */
export function startSmoothScroll() {
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduced) {
    const onNativeScroll = () => {
      const max = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
      const progress = Math.min(Math.max(window.scrollY / max, 0), 1);
      notifyScroll({ progress, scroll: window.scrollY });
    };
    window.addEventListener("scroll", onNativeScroll, { passive: true });
    onNativeScroll();
    return {
      lenis: null,
      destroy() {
        window.removeEventListener("scroll", onNativeScroll);
      },
    };
  }

  const lenis = new Lenis({
    lerp: 0.075,
    smoothWheel: true,
    syncTouch: false,
  });

  if (document.documentElement.classList.contains("is-intro")) {
    lenis.stop();
    window.addEventListener("crestalee-intro-end", () => lenis.start(), { once: true });
  }

  lenis.on("scroll", (e) => {
    ScrollTrigger.update();
    notifyScroll({ progress: e.progress ?? 0, scroll: e.scroll ?? 0, velocity: e.velocity ?? 0 });
  });

  const ticker = (time) => {
    lenis.raf(time * 1000);
  };
  gsap.ticker.add(ticker);
  gsap.ticker.lagSmoothing(0);

  const onClick = (event) => {
    const link = event.target.closest('a[href^="#"]');
    if (!link) return;
    const target = document.querySelector(link.getAttribute("href"));
    if (!target) return;
    event.preventDefault();
    lenis.scrollTo(target, { offset: 0 });
  };
  document.addEventListener("click", onClick);

  return {
    lenis,
    destroy() {
      document.removeEventListener("click", onClick);
      gsap.ticker.remove(ticker);
      lenis.destroy();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    },
  };
}

/** Fade sections in once, when they first enter the viewport. */
export function revealSections(root) {
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const nodes = root.querySelectorAll("[data-reveal]");
  if (reduced) {
    nodes.forEach((node) => {
      node.style.opacity = "1";
      node.style.transform = "none";
    });
    return;
  }

  nodes.forEach((node) => {
    gsap.from(node, {
      y: 36,
      autoAlpha: 0,
      duration: 1.35,
      ease: "power2.out",
      immediateRender: false,
      scrollTrigger: {
        trigger: node,
        start: "top 88%",
        once: true,
      },
    });
  });
}
