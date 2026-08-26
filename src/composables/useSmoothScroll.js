import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function startSmoothScroll() {
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduced) {
    return {
      lenis: null,
      destroy() {},
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

  lenis.on("scroll", ScrollTrigger.update);
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
