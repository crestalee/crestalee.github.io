import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Titles arrive and leave with the scroll. The sea stays the picture.
 */
export function bindFilmMotion() {
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduced) return () => {};

  const triggers = [];

  const track = (tween) => {
    if (tween?.scrollTrigger) triggers.push(tween.scrollTrigger);
    return tween;
  };

  gsap.utils.toArray(".beat-copy").forEach((copy) => {
    track(
      gsap.fromTo(
        copy,
        { autoAlpha: 0, y: 28 },
        {
          autoAlpha: 1,
          y: 0,
          ease: "none",
          scrollTrigger: {
            trigger: copy,
            start: "top 88%",
            end: "top 58%",
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
        y: -24,
        autoAlpha: 0,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero",
          start: "center center",
          end: "bottom 35%",
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
