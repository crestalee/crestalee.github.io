import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Scroll is a cut. The title leaves with the first beat.
 * Stills drift a little against the camera.
 */
export function bindFilmMotion() {
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduced) return () => {};

  const triggers = [];

  const track = (tween) => {
    if (tween?.scrollTrigger) triggers.push(tween.scrollTrigger);
    return tween;
  };

  gsap.utils.toArray(".still").forEach((still) => {
    track(
      gsap.fromTo(
        still,
        { y: 32 },
        {
          y: -24,
          ease: "none",
          scrollTrigger: {
            trigger: still,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        },
      ),
    );
  });

  const armHero = () => {
    const hero = document.querySelector(".hero-copy");
    if (!hero) return;
    track(
      gsap.to(hero, {
        y: -28,
        autoAlpha: 0,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero",
          start: "center center",
          end: "bottom top",
          scrub: true,
        },
      }),
    );
  };

  if (document.documentElement.classList.contains("is-intro")) {
    window.addEventListener("crestalee-intro-end", armHero, { once: true });
  } else {
    armHero();
  }

  return () => {
    window.removeEventListener("crestalee-intro-end", armHero);
    triggers.forEach((trigger) => trigger.kill());
  };
}
