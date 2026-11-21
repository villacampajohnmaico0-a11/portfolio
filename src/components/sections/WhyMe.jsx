// src/components/sections/WhyMe.jsx
import {
  ArrowUpRight,
  CheckCircle2,
  MessageSquareText,
  MonitorSmartphone,
  Rocket,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";
import { motion } from "framer-motion";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";
import { useReducedMotion } from "../../hooks/useReducedMotion";

/* ---------- Tokens (same family as Hero / Marquee / Industries) ---------- */

const ACCENT = "#2f4bff";
const EASE = [0.22, 1, 0.36, 1];

const STROKE_DARK = "rgba(20, 21, 26, 0.16)";
const STROKE_LIGHT = "rgba(255, 255, 255, 0.24)";

/* ---------- Small pieces ---------- */

function Pill({ children, light }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] backdrop-blur-sm ${
        light
          ? "border-white/30 bg-black/20 text-white/90"
          : "border-ink/20 bg-white/40 text-ink/70"
      }`}>
      {children}
    </span>
  );
}

function ArrowButton({ light }) {
  return (
    <span
      className={`grid h-10 w-10 shrink-0 place-items-center rounded-full border transition-all duration-300 group-hover:scale-105 ${
        light
          ? "border-white/40 text-white group-hover:border-white group-hover:bg-white group-hover:text-black"
          : "border-ink/25 text-ink group-hover:border-ink group-hover:bg-ink group-hover:text-white"
      }`}
      aria-hidden="true">
      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
    </span>
  );
}

/* Big outlined word, same style as the marquee */
function Watermark({ children, light, className = "" }) {
  return (
    <span
      aria-hidden="true"
      className={`pointer-events-none absolute select-none font-bold uppercase leading-none tracking-[-0.04em] text-[clamp(3.5rem,8vw,6.5rem)] transition-transform duration-700 group-hover:-translate-x-2 ${className}`}
      style={{
        color: "transparent",
        WebkitTextStroke: `1px ${light ? STROKE_LIGHT : STROKE_DARK}`,
      }}>
      {children}
    </span>
  );
}

/* ---------- Little CSS art for each tile ---------- */

function ArtBuilt() {
  // layered browser wireframe
  return (
    <div
      aria-hidden="true"
      className="absolute -right-6 top-20 hidden w-[46%] rotate-[-4deg] transition-transform duration-700 group-hover:rotate-[-1deg] group-hover:-translate-y-1 sm:block">
      <div className="rounded-xl border border-white/25 bg-white/10 p-3 backdrop-blur-md">
        <div className="flex gap-1.5">
          <span className="h-2 w-2 rounded-full bg-white/50" />
          <span className="h-2 w-2 rounded-full bg-white/30" />
          <span className="h-2 w-2 rounded-full bg-white/30" />
        </div>
        <div className="mt-3 h-14 rounded-md bg-gradient-to-br from-white/30 to-white/5" />
        <div className="mt-2 grid grid-cols-3 gap-1.5">
          <div className="h-5 rounded bg-white/15" />
          <div className="h-5 rounded bg-white/15" />
          <div className="h-5 rounded bg-white/15" />
        </div>
      </div>
    </div>
  );
}

function ArtDesign() {
  // overlapping circles + hand-drawn squiggle (like the hero)
  return (
    <div aria-hidden="true" className="absolute right-5 top-20">
      <div className="relative h-20 w-24">
        <span className="absolute left-0 top-0 h-16 w-16 rounded-full bg-[#2f4bff]/80 mix-blend-multiply transition-transform duration-700 group-hover:-translate-x-1" />
        <span className="absolute left-8 top-4 h-16 w-16 rounded-full bg-[#FF6B4A]/80 mix-blend-multiply transition-transform duration-700 group-hover:translate-x-1" />
      </div>
      <svg viewBox="0 0 180 24" className="mt-1 h-4 w-24 text-ink/60">
        <path
          d="M5 16c32-16 65-16 96 0 16 8 28 8 48 0 17-8 26-8 38 0"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

function ArtMobile() {
  return (
    <div
      aria-hidden="true"
      className="absolute -right-3 top-16 w-[86px] rotate-6 rounded-[1.4rem] border-[3px] border-ink bg-paper p-2 shadow-soft transition-transform duration-700 group-hover:rotate-2 group-hover:-translate-y-1">
      <div className="mx-auto h-1 w-6 rounded-full bg-ink/40" />
      <div className="mt-2 h-10 rounded-md bg-accent" />
      <div className="mt-1.5 grid grid-cols-2 gap-1">
        <div className="h-5 rounded bg-ink/10" />
        <div className="h-5 rounded bg-ink/10" />
      </div>
    </div>
  );
}

function ArtEasy() {
  return (
    <div aria-hidden="true" className="absolute right-5 top-20 space-y-2">
      <div className="flex h-7 w-12 items-center rounded-full bg-ink/20 p-1">
        <div className="h-5 w-5 rounded-full bg-ink transition-transform duration-500 group-hover:translate-x-5" />
      </div>
      <div className="h-1.5 w-12 rounded-full bg-ink/25" />
      <div className="h-1.5 w-8 rounded-full bg-ink/15" />
    </div>
  );
}

function ArtGrow() {
  return (
    <div
      aria-hidden="true"
      className="absolute right-5 top-20 flex h-16 items-end gap-1.5">
      {[30, 48, 40, 66, 56, 90].map((h, i) => (
        <span
          key={i}
          className="w-3 origin-bottom rounded-sm transition-transform duration-700 group-hover:scale-y-110"
          style={{
            height: `${h}%`,
            background: i === 5 ? ACCENT : "rgba(255,255,255,0.22)",
            transitionDelay: `${i * 40}ms`,
          }}
        />
      ))}
    </div>
  );
}

function ArtDirect() {
  return (
    <div aria-hidden="true" className="absolute right-5 top-20 space-y-2">
      <div className="ml-auto w-24 rounded-2xl rounded-br-sm bg-accent px-3 py-2">
        <div className="h-1.5 w-14 rounded-full bg-white/80" />
      </div>
      <div className="w-20 rounded-2xl rounded-bl-sm bg-ink/10 px-3 py-2 transition-transform duration-500 group-hover:translate-x-1">
        <div className="h-1.5 w-12 rounded-full bg-ink/40" />
      </div>
    </div>
  );
}

function ArtSupport() {
  return (
    <div
      aria-hidden="true"
      className="absolute right-6 top-20 grid h-16 w-16 place-items-center">
      <span className="absolute h-16 w-16 rounded-full border border-ink/30 transition-transform duration-700 group-hover:scale-125" />
      <span className="absolute h-10 w-10 rounded-full border border-ink/30 transition-transform duration-700 group-hover:scale-110" />
      <span className="h-3 w-3 rounded-full bg-ink" />
    </div>
  );
}

/* ---------- Data ---------- */

const TILES = [
  {
    id: "built",
    pill: "Built around you",
    icon: Workflow,
    title: "Built around your business needs.",
    description:
      "No cookie-cutter templates. We start with how your business works and build from there.",
    watermark: "Yours",
    art: ArtBuilt,
    light: true,
    wide: true,
    span: "sm:col-span-2 lg:col-span-4",
    surface: "bg-[linear-gradient(150deg,#2f4bff,#1a2aa8)] text-white",
    glow: "bg-[#C9B8FF]/30",
  },
  {
    id: "design",
    pill: "Design",
    icon: Sparkles,
    title: "Modern, professional design.",
    description: "A look that makes customers trust you at first glance.",
    watermark: "Style",
    art: ArtDesign,
    span: "sm:col-span-1 lg:col-span-2",
    surface: "bg-[#C9B8FF] text-ink",
    glow: "bg-white/40",
  },
  {
    id: "mobile",
    pill: "Every screen",
    icon: MonitorSmartphone,
    title: "Mobile-friendly experiences.",
    description:
      "Your customers get a smooth experience on phones, tablets, and computers.",
    watermark: "Mobile",
    art: ArtMobile,
    span: "sm:col-span-1 lg:col-span-2",
    surface: "bg-white text-ink ring-1 ring-inset ring-ink/10",
    glow: "bg-[#C9B8FF]/40",
  },
  {
    id: "easy",
    pill: "Usability",
    icon: CheckCircle2,
    title: "Easy-to-use interfaces.",
    description: "Simple for your customers and simple for your team.",
    watermark: "Simple",
    art: ArtEasy,
    span: "sm:col-span-1 lg:col-span-2",
    surface: "bg-[#FF6B4A] text-ink",
    glow: "bg-[#FFE58A]/60",
  },
  {
    id: "grow",
    pill: "Grow",
    icon: Rocket,
    title: "Solutions that grow with you.",
    description:
      "Start small, then add features like online ordering or booking when you are ready.",
    watermark: "Grow",
    art: ArtGrow,
    light: true,
    span: "sm:col-span-1 lg:col-span-2",
    surface: "bg-[#14151A] text-white",
    glow: "bg-[#2f4bff]/40",
  },
  {
    id: "direct",
    pill: "Direct line",
    icon: MessageSquareText,
    title: "Direct communication.",
    description:
      "You talk to the person building your project, with no layers in between.",
    watermark: "Real",
    art: ArtDirect,
    span: "sm:col-span-1 lg:col-span-3",
    surface: "bg-[#FFE58A] text-ink",
    glow: "bg-white/50",
  },
  {
    id: "support",
    pill: "After launch",
    icon: ShieldCheck,
    title: "Ongoing support and improvements.",
    description:
      "Launch is the beginning. Support and updates can be arranged as agreed.",
    watermark: "Care",
    art: ArtSupport,
    span: "sm:col-span-2 lg:col-span-3",
    surface: "bg-[#BDEFD8] text-ink",
    glow: "bg-white/50",
  },
];

/* ---------- Tile ---------- */

function Tile({ tile }) {
  const { icon: Icon, art: Art, light, wide } = tile;
  const sub = light ? "text-white/75" : "text-ink/70";

  return (
    <a
      href="#contact"
      className={`group relative flex h-full w-full flex-col justify-between overflow-hidden rounded-[14px] p-5 transition-shadow duration-500 hover:shadow-[0_28px_60px_-28px_rgba(20,21,26,0.5)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-paper sm:p-6 ${tile.surface}`}>
      {/* soft glow */}
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute -bottom-16 -left-10 h-48 w-48 rounded-full blur-3xl transition-transform duration-700 group-hover:scale-125 ${tile.glow}`}
      />

      <Watermark light={light} className="-bottom-2 right-3 z-0 opacity-90">
        {tile.watermark}
      </Watermark>

      <Art />

      {/* top row */}
      <div className="relative z-10 flex items-start justify-between gap-3">
        <div className="flex items-center gap-2">
          <Pill light={light}>{tile.pill}</Pill>
        </div>
        <ArrowButton light={light} />
      </div>

      {/* text */}
      <div className="relative z-10">
        <span
          aria-hidden="true"
          className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-black/10">
          <Icon className="h-4 w-4" />
        </span>
        <h3
          className={`font-medium leading-[1.05] tracking-[-0.04em] ${
            wide
              ? "max-w-[18ch] text-[clamp(1.7rem,3vw,2.6rem)]"
              : "max-w-[20ch] text-[clamp(1.25rem,1.8vw,1.6rem)]"
          }`}>
          {tile.title}
        </h3>
        <p className={`mt-2 max-w-[34ch] text-sm leading-relaxed ${sub}`}>
          {tile.description}
        </p>
        <span
          className={`mt-4 block h-px w-10 transition-all duration-500 group-hover:w-24 ${
            light
              ? "bg-white/50 group-hover:bg-white"
              : "bg-ink/40 group-hover:bg-ink"
          }`}
        />
      </div>
    </a>
  );
}

/* ---------- Section ---------- */

export default function WhyMe() {
  const reduced = useReducedMotion();

  return (
    <section className="relative overflow-x-clip bg-paper py-24 md:py-32">
      {/* ambient glows (same as hero) */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-56 bg-[radial-gradient(circle_at_top,_rgba(47,75,255,0.10),_transparent_55%)]" />
      <div className="pointer-events-none absolute -left-16 top-40 h-64 w-64 rounded-full bg-[#C9B8FF]/35 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-24 h-72 w-72 rounded-full bg-[#FF6B4A]/12 blur-3xl" />

      {/* guide lines (same as marquee) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute left-1/2 top-0 h-full w-px bg-ink/[0.05]" />
        <div className="absolute left-6 top-0 hidden h-full w-px bg-ink/[0.04] lg:block" />
        <div className="absolute right-6 top-0 hidden h-full w-px bg-ink/[0.04] lg:block" />
      </div>

      <div className="relative mx-auto max-w-site px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Why work together"
            title="What you get when we work together."
            description="The goal is simple: a clearer online presence, smoother customer journeys, and a better experience for your team."
          />
        </Reveal>

        {/* masthead rule */}
        <Reveal delay={0.04}>
          <div className="mb-8 mt-12 flex items-center gap-4">
            <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.3em] text-ink/50">
              Seven principles
            </span>
            <span className="h-px flex-1 bg-ink/15" />
            <span className="hidden font-serif text-sm italic text-accent sm:inline">
              Northstar Studio
            </span>
          </div>
        </Reveal>

        <div className="grid auto-rows-[300px] grid-cols-1 gap-4 sm:auto-rows-[290px] sm:grid-cols-2 lg:auto-rows-[320px] lg:grid-cols-6">
          {TILES.map((tile, index) => (
            <motion.div
              key={tile.id}
              className={`h-full ${tile.span}`}
              initial={reduced ? false : { opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.7,
                ease: EASE,
                delay: (index % 3) * 0.06,
              }}>
              <Tile tile={tile} />
            </motion.div>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-12 flex flex-col items-start justify-between gap-5 border-t border-ink/15 pt-6 md:flex-row md:items-center">
            <p className="max-w-[52ch] text-sm text-muted">
              Seven principles, one working relationship. Every decision is
              shaped around{" "}
              <span className="font-serif italic text-accent">your</span>{" "}
              business, never the other way round.
            </p>
            <Button href="#contact">Talk through your project</Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
