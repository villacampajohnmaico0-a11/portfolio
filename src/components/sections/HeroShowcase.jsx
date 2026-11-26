import { useEffect, useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import hero1 from "../../assets/hero1.png";
import hero2 from "../../assets/hero2.png";
import hero3 from "../../assets/hero3.png";
import hero4 from "../../assets/hero4.png";
import hero5 from "../../assets/hero5.png";
import hero6 from "../../assets/hero6.png";
import ParallaxLayer from "../ui/ParallaxLayer";

const INTERVAL = 3800;

// Every slot is bottom-aligned, so the photos step down like a staircase.
// left / width / height are % of the stage, so it scales on any screen.
const SLOTS = [
  { left: "0%", width: "52%", height: "100%", opacity: 1 }, // big
  { left: "55%", width: "28%", height: "62%", opacity: 1 }, // smaller
  { left: "86%", width: "14%", height: "36%", opacity: 1 }, // smallest
];
const EXIT = { left: "-56%", width: "52%", height: "100%", opacity: 0 };
const WAIT = { left: "104%", width: "8%", height: "20%", opacity: 0 };

// The current project photos (unchanged). Only the layout above is the staircase.
const PHOTOS = [
  {
    src: hero1,
    alt: "Hero showcase image 1",
  },
  {
    src: hero2,
    alt: "Hero showcase image 2",
  },
  {
    src: hero3,
    alt: "Hero showcase image 3",
  },
  {
    src: hero4,
    alt: "Hero showcase image 4",
  },
  {
    src: hero5,
    alt: "Hero showcase image 5",
  },
  {
    src: hero6,
    alt: "Hero showcase image 6",
  },
];

export default function HeroShowcase() {
  // Unique photos only. If there are fewer than 5, the list repeats so the
  // loop always has a photo waiting off-screen. Each item gets its own id.
  const photos = useMemo(() => {
    const seen = new Set();
    const unique = PHOTOS.filter((img) => {
      if (!img?.src || seen.has(img.src)) return false;
      seen.add(img.src);
      return true;
    });
    if (unique.length === 0) return [];
    const list = [];
    while (list.length < Math.max(5, unique.length)) {
      list.push(unique[list.length % unique.length]);
    }
    return list.map((img, i) => ({ ...img, id: `${i}-${img.src}` }));
  }, []);

  const count = photos.length;
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (paused || count < 4) return;
    const id = setInterval(() => setActive((a) => (a + 1) % count), INTERVAL);
    return () => clearInterval(id);
  }, [paused, count]);

  const slotFor = (i) => {
    const rel = (i - active + count) % count;
    if (rel < SLOTS.length) return SLOTS[rel];
    if (rel === count - 1) return EXIT;
    return WAIT;
  };

  return (
    <ParallaxLayer offset={24} className="w-full">
      <div
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}>
        <div className="relative h-[300px] w-full overflow-hidden sm:h-[460px] lg:h-[min(560px,calc(100svh_-_11.5rem))] lg:min-h-[400px]">
          {photos.map((img, i) => {
            const slot = slotFor(i);
            const isBig = (i - active + count) % count === 0;
            return (
              <motion.button
                key={img.id}
                type="button"
                onClick={() => setActive(i)}
                aria-label={`Show ${img.alt}`}
                aria-current={isBig}
                initial={false}
                animate={slot}
                transition={{
                  duration: reduce ? 0.3 : 1,
                  ease: [0.76, 0, 0.24, 1],
                }}
                className="absolute bottom-0 block overflow-hidden bg-white/5 p-0 shadow-[0_18px_40px_-18px_rgba(0,0,0,0.8)] ring-1 ring-white/10"
                style={{ cursor: isBig ? "default" : "pointer" }}>
                <img
                  src={img.src}
                  alt={img.alt}
                  draggable={false}
                  className="h-full w-full object-cover object-top"
                />
              </motion.button>
            );
          })}
        </div>

        <div className="mt-3 flex items-center justify-between gap-4">
          <p className="truncate text-sm text-[#EDE7DA]/60">
            {photos[active]?.alt}
          </p>
          <div className="flex items-center gap-2" role="tablist">
            {photos.map((img, i) => (
              <button
                key={img.id}
                type="button"
                role="tab"
                aria-selected={i === active}
                aria-label={`Photo ${i + 1}`}
                onClick={() => setActive(i)}
                className={`h-[3px] transition-all duration-500 ${
                  i === active ? "w-10 bg-[#E2B866]" : "w-4 bg-white/25"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </ParallaxLayer>
  );
}
