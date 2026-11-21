// src/components/sections/Projects.jsx
import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowUpRight, ExternalLink, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import { projects } from "../../data/projects";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";
import SmartImage from "../ui/SmartImage";

/* ---------- Project Panel ---------- */
function ProjectPanel({ project, index, total, progress }) {
  // Distance from active center
  const d = useTransform(progress, (v) => index - v);
  // SCALE: Active is 1, neighbors drop to 0.7.
  const scale = useTransform(d, (v) => {
    const abs = Math.min(Math.abs(v), 2);
    return 1 - abs * 0.3;
  });

  // X POSITION: Shifts left or right gracefully
  const x = useTransform(d, (v) => {
    const clamp = Math.max(-2, Math.min(2, v));
    return `${clamp * 50}%`;
  });

  // OPACITY: center is exactly 1. Right neighbor stays secondary.
  // Left image fades fully out over one slot.
  const opacity = useTransform(d, (v) => {
    if (v < 0) return Math.max(0, 1 + v);
    return Math.max(0, 1 - Math.min(v, 2) * 0.6);
  });

  // 3D ROTATION: Very subtle tilt
  const rotateY = useTransform(d, (v) => {
    const clamp = Math.max(-2, Math.min(2, v));
    return clamp * 5;
  });

  // STACKING: the panel closest to the center is always on top
  const zIndex = useTransform(d, (v) =>
    Math.round((2 - Math.min(Math.abs(v), 2)) * 100),
  );

  // ADDED: only the centered panel can be clicked
  const pointerEvents = useTransform(d, (v) =>
    Math.abs(v) < 0.5 ? "auto" : "none",
  );

  // ADDED: side panels dim slightly; center stays at exactly 1
  const filter = useTransform(d, (v) => {
    const abs = Math.min(Math.abs(v), 1);
    return `brightness(${1 - abs * 0.35})`;
  });

  return (
    <motion.article
      style={{
        scale,
        x,
        opacity,
        rotateY,
        zIndex,
        pointerEvents, // ADDED
        filter, // ADDED
        transformPerspective: 1200,
      }}
      className="absolute inset-0 m-auto flex w-[75%] max-w-[800px] flex-col justify-center will-change-transform">
      <Link
        to={`/work/${project.slug}`}
        className="group relative block w-full overflow-hidden rounded-md border border-[#34383B] bg-[#1B1E21] shadow-[0_30px_80px_-30px_rgba(0,0,0,0.8)]">
        <div className="relative aspect-[16/9] w-full overflow-hidden">
          <SmartImage
            src={project.image}
            alt={`${project.name} project preview`}
            className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.02]"
            fallbackTitle={project.name}
            aspectRatio="aspect-[16/9]"
          />
        </div>
        <span className="absolute right-3 top-3 inline-flex h-7 w-7 items-center justify-center rounded-sm border border-white/30 bg-black/40 text-white backdrop-blur-sm transition-all duration-300 group-hover:bg-white group-hover:text-black">
          <ArrowUpRight className="h-3 w-3" />
        </span>
      </Link>

      <div className="mt-4 flex flex-col gap-4 border-t border-[#34383B] pt-3 sm:flex-row sm:items-start sm:justify-between">
        <div className="min-w-0 flex-1">
          <h3 className="text-[clamp(1.25rem,2vw,1.75rem)] font-medium leading-[1.05] tracking-tight text-[#F1F0EB]">
            {project.name}
          </h3>
          <p className="mt-1.5 max-w-[50ch] text-sm leading-relaxed text-[#A3A5A5]">
            {project.oneLinePurpose}
          </p>
        </div>
        <div className="flex shrink-0 items-center gap-4 sm:flex-col sm:items-end sm:gap-2">
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 border-b border-white/30 pb-0.5 text-[0.65rem] font-medium uppercase tracking-[0.14em] text-[#F1F0EB]/85 transition-colors duration-300 hover:border-[#F1F0EB] hover:text-[#F1F0EB]">
            Live <ExternalLink className="h-3 w-3" />
          </a>
          <Link
            to={`/work/${project.slug}`}
            className="inline-flex items-center gap-1.5 border-b border-white/30 pb-0.5 text-[0.65rem] font-medium uppercase tracking-[0.14em] text-[#A3A5A5] transition-colors duration-300 hover:border-[#F1F0EB] hover:text-[#F1F0EB]">
            Details <Eye className="h-3 w-3" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

/* ---------- Main Section ---------- */
export default function Projects() {
  const containerRef = useRef(null);
  const total = projects.length;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Smooth spring logic
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Map 0-1 progress to 0-4 (project index)
  const activeIndex = useTransform(smoothProgress, [0, 1], [0, total - 1]);

  return (
    <section id="projects" className="relative bg-[#111315] text-[#F1F0EB]">
      {/* Header */}
      <div className="mx-auto max-w-site px-4 pt-24 sm:px-6 lg:px-8 pb-12">
        <Reveal>
          <div className="border-b border-white/10 pb-6">
            <SectionHeading
              eyebrow="Recent work"
              title="See what's possible."
              description="Real projects we've designed and built. Each one shows the kind of experience your business could have."
              dark
            />
          </div>
        </Reveal>
      </div>

      {/* THE PINNED STAGE: height is total * 100vh for scroll room */}
      <div
        ref={containerRef}
        className="relative"
        style={{ height: `${100 + (total - 1) * 50}vh` }}>
        <div className="sticky top-0 flex h-screen w-full items-center justify-center overflow-hidden bg-[#111315]">
          <div className="relative flex h-full w-full items-center justify-center pt-24 pb-12">
            {projects.map((project, index) => (
              <ProjectPanel
                key={project.slug}
                project={project}
                index={index}
                total={total}
                progress={activeIndex}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
