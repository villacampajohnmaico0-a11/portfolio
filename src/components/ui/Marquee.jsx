import { useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { images } from "../../data/images";
import { useReducedMotion } from "../../hooks/useReducedMotion";

const HOLD_BUFFER = 0.02;
const MAX_ITEMS = 7;
const EASE = [0.22, 1, 0.36, 1];

// Scroll length per word, in screen heights. Lower = faster, higher = slower.
const VH_PER_WORD = 55;
// Share of the scroll used by the words. The rest is the exit fade.
const WORDS_END = 0.88;

// Spring that smooths the raw scroll. Lower stiffness = smoother/slower.
const SCROLL_SPRING = {
  stiffness: 80,
  damping: 28,
  mass: 0.5,
  restDelta: 0.0005,
};
// Spring used for the words and the photo tilt.
const WORD_SPRING = { type: "spring", stiffness: 170, damping: 26, mass: 0.8 };
const TILT_SPRING = { type: "spring", stiffness: 90, damping: 18, mass: 0.9 };

const ACCENT = "#2f4bff";
const FILL_OFF = "rgba(47, 75, 255, 0)";
const STROKE_OFF = "rgba(20, 21, 26, 0.28)";

const SERVICES = [
  {
    label: "Online Stores",
    image: images.artStores,
    offset: "-2rem",
    tilt: -3,
  },
  {
    label: "Booking Systems",
    image: images.artBooking,
    offset: "8rem",
    tilt: 2.5,
  },
  {
    label: "Dashboards",
    image: images.artDashboard,
    offset: "12rem",
    tilt: -2,
  },
  {
    label: "Restaurant Menus",
    image: images.artMenus,
    offset: "-10rem",
    tilt: 3,
  },
  {
    label: "Property Listings",
    image: images.artProperty,
    offset: "6rem",
    tilt: -2.5,
  },
  {
    label: "Portfolio Sites",
    image: images.artPortfolio,
    offset: "10rem",
    tilt: 2,
  },
  {
    label: "Client Portals",
    image: images.artPortal,
    offset: "-4rem",
    tilt: -3.5,
  },
].map((s, i) => ({ ...s, index: String(i + 1).padStart(2, "0") }));

const TYPE =
  "block origin-left text-[length:clamp(2.25rem,min(7vw,calc((100vh_-_11rem)/7.2)),5.6rem)] leading-[0.95] tracking-[-0.03em] font-bold uppercase";

const FILLER_STROKE = "rgba(20, 21, 26, 0.16)";

function FillerWord({ label }) {
  return (
    <span
      aria-hidden="true"
      className={`${TYPE} select-none`}
      style={{
        color: "transparent",
        WebkitTextStroke: "1px",
        WebkitTextStrokeColor: FILLER_STROKE,
      }}>
      {label}
    </span>
  );
}

function ServiceRow({
  service,
  leftFillers = [],
  rightFillers = [],
  active,
  reduced,
}) {
  const transition = reduced
    ? { duration: 0 }
    : {
        default: WORD_SPRING,
        color: { duration: 0.5, ease: EASE },
      };

  return (
    <li
      className={`pointer-events-none relative flex w-full items-center gap-4 whitespace-nowrap py-0.5 sm:py-1 ${
        active ? "z-20" : "z-0"
      }`}
      style={{ "--x": service.offset }}>
      <div className="relative flex items-center gap-4 translate-x-[calc(var(--x)*0.35)] sm:translate-x-[var(--x)]">
        {/* LEFT FILLERS */}
        <div
          aria-hidden="true"
          className="absolute right-full top-1/2 flex -translate-y-1/2 items-center gap-6 whitespace-nowrap pr-6">
          {leftFillers.map((label, k) => (
            <FillerWord key={`l-${label}-${k}`} label={label} />
          ))}
        </div>

        {/* MAIN LABEL: the only one that highlights */}
        <motion.span
          initial={false}
          animate={{
            x: active ? 18 : 0,
            scale: active ? 0.94 : 1,
            color: active ? ACCENT : FILL_OFF,
          }}
          transition={transition}
          className={`${TYPE} will-change-transform`}
          style={{
            WebkitTextStroke: "1px",
            WebkitTextStrokeColor: active ? ACCENT : STROKE_OFF,
            transition: "-webkit-text-stroke-color 500ms ease",
          }}>
          {service.label}
        </motion.span>

        {/* RIGHT FILLERS */}
        {rightFillers.map((label, k) => (
          <div key={`r-${label}-${k}`} className="ml-6">
            <FillerWord label={label} />
          </div>
        ))}
      </div>
    </li>
  );
}

export default function Marquee({ items, className = "" }) {
  const sectionRef = useRef(null);
  const reducedMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);

  // Hard cap: never more than 7, even if the parent passes more.
  const services =
    items && items.length
      ? items.slice(0, MAX_ITEMS).map((label, i) => ({
          ...SERVICES[i % SERVICES.length],
          index: String(i + 1).padStart(2, "0"),
          label,
        }))
      : SERVICES;

  const count = services.length;

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Smoothed progress: everything below follows this, not the raw scroll.
  const smoothProgress = useSpring(scrollYProgress, SCROLL_SPRING);
  const progress = reducedMotion ? scrollYProgress : smoothProgress;

  const railScale = useTransform(progress, [0, 1], [0, 1]);
  // Whole pinned scene fades out during the last stretch of scrolling.
  const exitOpacity = useTransform(progress, [0.9, 1], [1, 0]);

  useMotionValueEvent(progress, "change", (value) => {
    const raw = Math.min(Math.max(value, 0) / WORDS_END, 0.999) * count;
    setActiveIndex((current) => {
      if (raw >= current - HOLD_BUFFER && raw < current + 1 + HOLD_BUFFER) {
        return current;
      }
      return Math.min(count - 1, Math.max(0, Math.floor(raw)));
    });
  });

  const activeService = services[activeIndex];
  const imgDur = reducedMotion ? 0 : 0.8;

  return (
    <section
      ref={sectionRef}
      style={{ height: `${100 + count * VH_PER_WORD}vh` }}
      aria-label="What I can build for you"
      className={`relative mb-0 mt-20 bg-paper sm:mb-4 sm:mt-24 md:mt-32 lg:mt-36 ${className}`}>
      <motion.div
        style={{ opacity: exitOpacity }}
        className="sticky top-0 box-border flex h-screen items-center justify-center overflow-hidden bg-paper pt-24 sm:pt-28">
        {/* Guide lines */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0">
          <div className="absolute left-1/2 top-0 h-full w-px bg-ink/[0.06]" />
          <div className="absolute left-6 top-0 hidden h-full w-px bg-ink/[0.04] sm:block" />
          <div className="absolute right-6 top-0 hidden h-full w-px bg-ink/[0.04] sm:block" />
          <div className="absolute left-0 right-0 top-1/2 h-px bg-ink/[0.05]" />
        </div>

        {/* Soft glow that drifts with the active item */}
        <motion.div
          aria-hidden="true"
          animate={{ opacity: 1, x: activeIndex % 2 ? "12%" : "-12%" }}
          transition={
            reducedMotion
              ? { duration: 0 }
              : { type: "spring", stiffness: 25, damping: 18, mass: 1.2 }
          }
          className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C9B8FF]/40 blur-3xl will-change-transform"
        />

        {/* Vignette */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,transparent_55%,rgba(20,21,26,0.06)_100%)]"
        />

        {/* Edge fades */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 z-[15] h-24 bg-gradient-to-b from-paper to-transparent"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 z-[15] h-24 bg-gradient-to-t from-paper to-transparent"
        />

        {/* Scroll progress rail */}
        <div
          aria-hidden="true"
          className="absolute right-3 top-1/2 z-20 hidden h-40 w-px -translate-y-1/2 bg-ink/10 sm:block md:right-6">
          <motion.div
            style={{ scaleY: railScale }}
            className="h-full w-px origin-top bg-accent"
          />
        </div>

        {/* Big counter (right side) */}
        <div
          aria-hidden="true"
          className="absolute bottom-6 right-4 z-20 text-right font-mono text-xs tracking-[0.3em] text-ink/50 sm:bottom-10 sm:right-10">
          <span className="text-2xl font-bold text-ink sm:text-4xl">
            {activeService.index}
          </span>{" "}
          / {String(count).padStart(2, "0")}
        </div>

        {/* LAYER 1: word stack */}
        <div className="relative flex w-full max-w-[1200px] items-center justify-center px-4 sm:px-6">
          <ol className="relative flex w-full flex-col items-stretch justify-center">
            {services.map((service, i) => {
              const pick = (steps) =>
                steps
                  .map((step) => services[(i + step) % count])
                  .filter((s) => s.label !== service.label)
                  .map((s) => s.label);

              // Different mixes on each side so rows don't look like a repeating pattern
              const rightFillers = pick([4, 6, 2, 5, 3, 1]);
              const leftFillers = pick([3, 5, 1, 6, 2, 4]);

              return (
                <ServiceRow
                  key={service.label}
                  service={service}
                  leftFillers={leftFillers}
                  rightFillers={rightFillers}
                  active={i === activeIndex}
                  reduced={reducedMotion}
                />
              );
            })}
          </ol>
        </div>

        {/* LAYER 2: pinned card (no borders) */}
        <div className="pointer-events-none absolute left-1/2 top-[calc(50%+3rem)] z-10 w-[220px] max-w-[48vh] -translate-x-1/2 -translate-y-1/2 sm:top-[calc(50%+3.5rem)] sm:w-[340px] md:w-[380px] lg:w-[420px]">
          <motion.div
            className="will-change-transform"
            animate={{ rotate: reducedMotion ? 0 : activeService.tilt }}
            transition={reducedMotion ? { duration: 0 } : TILT_SPRING}>
            <div
              className="relative aspect-[3/4] overflow-hidden rounded-none bg-paper-2 shadow-soft"
              style={{ backgroundColor: activeService.image.fallbackColor }}>
              <AnimatePresence mode="popLayout" initial={false}>
                <motion.img
                  key={activeService.image.src}
                  src={activeService.image.src}
                  alt={activeService.image.alt}
                  initial={{
                    clipPath: "inset(100% 0 0 0)",
                    scale: 1.12,
                    opacity: 0.6,
                  }}
                  animate={{
                    clipPath: "inset(0% 0 0 0)",
                    scale: 1,
                    opacity: 1,
                  }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{
                    duration: imgDur,
                    ease: EASE,
                  }}
                  className="absolute inset-0 h-full w-full object-cover will-change-transform"
                  style={{ objectPosition: activeService.image.focalPoint }}
                />
              </AnimatePresence>

              {/* Artistic tint overlay */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-[#C9B8FF]/25 mix-blend-multiply"
              />

              {/* Caption strip (label only, no number) */}
              <div className="absolute inset-x-0 bottom-0 flex items-center justify-center bg-gradient-to-t from-black/60 to-transparent px-3 pb-2 pt-8 font-mono text-[0.6rem] uppercase tracking-[0.25em] text-white">
                <span>{activeService.label}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <div className="sr-only" aria-live="polite">
        {services.map((s) => `${s.index} ${s.label}`).join(", ")}
      </div>
    </section>
  );
}
