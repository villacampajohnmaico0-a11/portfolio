import { useEffect, useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { images } from "../../data/images";
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

export default function HeroShowcase() {
  // Unique photos only. If there are fewer than 5, the list repeats so the
  // loop always has a photo waiting off-screen. Each item gets its own id.
  const photos = useMemo(() => {
    const seen = new Set();
    const unique = Object.values(images).filter((img) => {
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
        <div className="relative h-[380px] w-full overflow-hidden sm:h-[480px] lg:h-[560px]">
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
                className="absolute bottom-0 block overflow-hidden bg-ink/5 p-0"
                style={{ cursor: isBig ? "default" : "pointer" }}>
                <img
                  src={img.src}
                  alt={img.alt}
                  draggable={false}
                  className="h-full w-full object-cover"
                  style={{ objectPosition: img.focalPoint }}
                />
              </motion.button>
            );
          })}
        </div>

        <div className="mt-4 flex items-center justify-between gap-4">
          <p className="truncate text-sm text-muted">{photos[active]?.alt}</p>
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
                  i === active ? "w-10 bg-accent" : "w-4 bg-ink/20"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </ParallaxLayer>
  );
}
