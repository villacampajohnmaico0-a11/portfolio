// src/components/sections/Process.jsx
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Button from "../ui/Button";
import { projectImages } from "../../data/images";

/* =====================================================================
   VIDEO ASSETS
   Replace these URLs with your own MP4 files and poster images.
   ===================================================================== */
const CINEMATIC_SCENES = [
  {
    id: "01",
    eyebrow: "Discovery",
    headline: ["EVERYTHING", "STARTS WITH", "AN IDEA."],
    description:
      "We start by understanding your business, your audience, and what you want to achieve.",
    align: "left",
    videoUrl: projectImages.neleus.video,
    posterUrl: projectImages.neleus.cover,
  },
  {
    id: "02",
    eyebrow: "Design",
    headline: ["GIVE YOUR", "VISION A", "FORM."],
    description:
      "We shape your idea into a clear direction, carefully planning the structure and experience.",
    align: "right",
    videoUrl: projectImages.staykila.video,
    posterUrl: projectImages.staykila.cover,
  },
  {
    id: "03",
    eyebrow: "Development",
    headline: ["TURN IDEAS", "INTO", "REALITY."],
    description:
      "We bring the approved direction to life, building an experience designed to work beautifully.",
    align: "left",
    videoUrl: projectImages.plasims.video,
    posterUrl: projectImages.plasims.cover,
  },
  {
    id: "04",
    eyebrow: "Launch",
    headline: ["MAKE YOUR", "NEXT", "MOVE."],
    description:
      "After testing and refinement, your finished website or system is ready for the real world.",
    align: "right",
    videoUrl: projectImages.pickleball.video,
    posterUrl: projectImages.pickleball.cover,
  },
];

/* ---------- Scene Component ---------- */
function CinematicScene({ scene, index, total }) {
  const containerRef = useRef(null);

  // Track the scroll of this specific scene to fade text in/out
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Slight parallax on the text and gentle fade
  const y = useTransform(scrollYProgress, [0, 1], ["15%", "-15%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  const isLeft = scene.align === "left";

  return (
    <div
      ref={containerRef}
      className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-[#0a0a0a]">
      {/* 1. Full-Bleed Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        poster={scene.posterUrl}
        className="absolute inset-0 h-full w-full object-cover">
        <source src={scene.videoUrl} type="video/mp4" />
      </video>

      {/* 2. Dark Cinematic Overlay for Readability */}
      <div className="absolute inset-0 bg-black/60 mix-blend-multiply" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-[#0a0a0a]/50" />

      {/* 3. Typography Layer (animated on scroll) */}
      <motion.div
        style={{ y, opacity }}
        className={`relative z-10 flex w-full max-w-[90vw] flex-col justify-center px-6 md:px-12 lg:px-20 ${
          isLeft ? "items-start text-left" : "items-end text-right"
        }`}>
        {/* Eyebrow / Counter */}
        <div
          className={`mb-6 flex items-center gap-4 ${isLeft ? "flex-row" : "flex-row-reverse"}`}>
          <span className="font-mono text-sm tabular-nums tracking-[0.3em] text-white/70">
            {scene.id} / {String(total).padStart(2, "0")}
          </span>
          <span className="h-px w-12 bg-white/30" />
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-white/90">
            {scene.eyebrow}
          </span>
        </div>

        {/* Oversized Editorial Headline */}
        <h2 className="flex flex-col font-sans text-[clamp(3rem,8vw,8rem)] font-bold uppercase leading-[0.85] tracking-[-0.04em] text-white">
          {scene.headline.map((line, i) => (
            <span key={i} className="block">
              {line}
            </span>
          ))}
        </h2>

        {/* Supporting Description */}
        <p className="mt-8 max-w-lg text-base leading-relaxed text-white/80 md:text-lg lg:mt-12">
          {scene.description}
        </p>
      </motion.div>
    </div>
  );
}

/* ---------- Main Section ---------- */
export default function Process() {
  return (
    <section id="process" className="relative bg-[#0a0a0a]">
      {/* 
        Render the 4 full-screen scenes. 
        Because they are each h-screen, they will scroll naturally one after the other.
      */}
      {CINEMATIC_SCENES.map((scene, index) => (
        <CinematicScene
          key={scene.id}
          scene={scene}
          index={index}
          total={CINEMATIC_SCENES.length}
        />
      ))}

      {/* 
        Optional: A closing CTA area at the very bottom of the section 
        to transition into the next part of the website.
      */}
      <div className="relative z-10 flex flex-col items-center justify-center bg-[#0a0a0a] py-32 text-center">
        <h3 className="mb-8 text-2xl font-medium tracking-tight text-white md:text-3xl">
          Ready to see your vision come to life?
        </h3>
        <Button
          to="#contact"
          variant="primary"
          className="!px-8 !py-4 !text-lg">
          Start Your Project
        </Button>
      </div>
    </section>
  );
}
