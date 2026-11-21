// src/components/sections/Pricing.jsx
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { pricingPackages } from "../../data/pricing";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";
import { useReducedMotion } from "../../hooks/useReducedMotion";

const EASE = [0.22, 1, 0.36, 1];

// Accent for the non-featured cards, from your palette
const ACCENTS = [
  { color: "#C9B8FF", glow: "rgba(201,184,255,0.30)" }, // lavender
  { color: "#2f4bff", glow: "rgba(47,75,255,0.38)" }, // blue
  { color: "#FFE58A", glow: "rgba(255,229,138,0.26)" }, // yellow
  { color: "#BDEFD8", glow: "rgba(189,239,216,0.26)" }, // mint
];

function PricingCard({ pkg, accent }) {
  const featured = Boolean(pkg.featured);
  const watermark = pkg.name.split(/[\s/&]+/)[0];
  const dot = featured ? "#ffffff" : accent.color;

  return (
    <article
      className={`group relative flex h-full flex-col overflow-hidden rounded-[14px] p-6 pb-24 transition-shadow duration-500 sm:p-8 sm:pb-28 ${
        featured
          ? "bg-[linear-gradient(150deg,#2f4bff,#1a2aa8)] text-white hover:shadow-[0_30px_70px_-30px_rgba(47,75,255,0.8)]"
          : "bg-[#101116] text-white ring-1 ring-inset ring-white/10 hover:ring-white/25"
      }`}>
      {/* glows */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full blur-3xl transition-transform duration-1000 group-hover:scale-110"
        style={{
          background: featured ? "rgba(255,255,255,0.18)" : accent.glow,
        }}
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -left-16 h-56 w-56 rounded-full bg-[#C9B8FF]/15 blur-3xl"
      />

      {/* big outlined word */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-2 left-4 select-none text-[clamp(3.5rem,6vw,5.5rem)] font-bold uppercase leading-none tracking-[-0.04em] transition-transform duration-700 group-hover:translate-x-2"
        style={{
          color: "transparent",
          WebkitTextStroke: `1px ${
            featured ? "rgba(255,255,255,0.22)" : "rgba(255,255,255,0.08)"
          }`,
        }}>
        {watermark}
      </span>

      <div className="relative z-10 flex flex-1 flex-col">
        {featured ? (
          <span className="mb-5 flex items-center gap-2 font-mono text-[10px] font-semibold uppercase tracking-[0.3em] text-white/80">
            <span className="h-1.5 w-1.5 rounded-full bg-white" />
            Most popular
          </span>
        ) : (
          <span className="mb-5 block font-mono text-[10px] font-semibold uppercase tracking-[0.3em] text-white/45">
            {pkg.tag}
          </span>
        )}

        <h3 className="text-[clamp(1.8rem,2.6vw,2.4rem)] font-medium leading-[1.05] tracking-[-0.04em]">
          {pkg.name}
        </h3>

        {featured && pkg.tag ? (
          <p className="mt-2 font-serif text-base italic text-white/75">
            {pkg.tag}
          </p>
        ) : null}

        <p
          className={`mt-4 max-w-[40ch] text-sm leading-relaxed ${
            featured ? "text-white/80" : "text-white/65"
          }`}>
          {pkg.description}
        </p>

        <span
          aria-hidden="true"
          className={`mt-6 block h-px w-10 transition-all duration-500 group-hover:w-28 ${
            featured ? "bg-white/60" : "bg-white/40"
          }`}
        />

        <ul className="mt-6 flex flex-col gap-2.5">
          {pkg.deliverables.map((item) => (
            <li
              key={item}
              className={`flex items-start gap-3 text-sm leading-snug ${
                featured ? "text-white/90" : "text-white/70"
              }`}>
              <span
                aria-hidden="true"
                className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 rounded-full"
                style={{ background: dot }}
              />
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-8">
          <Link
            to={`/?projectType=${encodeURIComponent(pkg.type)}#contact`}
            className={`group/btn inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-[0.75rem] font-semibold uppercase tracking-[0.14em] transition-all duration-300 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 ${
              featured
                ? "bg-white text-[#14151A] hover:scale-[1.02] focus-visible:ring-offset-[#2f4bff]"
                : "border border-white/30 text-white hover:border-white hover:bg-white hover:text-black focus-visible:ring-offset-[#101116]"
            }`}>
            {pkg.cta}
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/btn:translate-x-1" />
          </Link>
        </div>
      </div>
    </article>
  );
}

export default function Pricing() {
  const reduced = useReducedMotion();

  // keep the featured card from reusing the blue accent
  const others = ACCENTS;
  let otherIndex = 0;

  return (
    <section
      id="pricing"
      className="relative overflow-x-clip bg-[#080808] py-24 text-white md:py-32">
      {/* ambient glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-[#2f4bff]/15 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-1/2 h-72 w-72 rounded-full bg-[#C9B8FF]/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-1/3 h-72 w-72 rounded-full bg-[#FF6B4A]/10 blur-3xl"
      />

      {/* guide lines (same as marquee) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute left-1/2 top-0 h-full w-px bg-white/[0.04]" />
        <div className="absolute left-6 top-0 hidden h-full w-px bg-white/[0.03] lg:block" />
        <div className="absolute right-6 top-0 hidden h-full w-px bg-white/[0.03] lg:block" />
      </div>

      <div className="relative mx-auto max-w-site px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Pricing"
            title="Packages shaped around your project."
            description="Every business is different, so pricing depends on your requirements and complexity. Tell me what you need and I'll send a clear quote."
            dark
          />
        </Reveal>

        <div className="mt-14 grid items-stretch gap-4 lg:grid-cols-3 lg:gap-5">
          {pricingPackages.map((pkg, index) => {
            const accent = pkg.featured
              ? ACCENTS[1]
              : others[otherIndex++ % others.length];

            return (
              <motion.div
                key={pkg.name}
                className={`h-full ${pkg.featured ? "lg:-translate-y-4" : ""}`}
                initial={reduced ? false : { opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.7,
                  ease: EASE,
                  delay: index * 0.08,
                }}>
                <PricingCard pkg={pkg} accent={accent} />
              </motion.div>
            );
          })}
        </div>

        {/* consultation strip */}
        <Reveal delay={0.1}>
          <div className="relative mt-12 flex flex-col items-start justify-between gap-5 overflow-hidden rounded-[14px] bg-[#101116] p-6 ring-1 ring-inset ring-white/10 sm:p-8 md:flex-row md:items-center">
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#2f4bff]/25 blur-3xl"
            />
            <div className="relative">
              <p className="text-[clamp(1.3rem,2vw,1.7rem)] font-medium leading-tight tracking-[-0.03em]">
                Not sure which{" "}
                <span className="font-serif italic text-[#8EA0FF]">fits?</span>
              </p>
              <p className="mt-2 text-sm text-white/65">
                Final pricing depends on scope, features, and timeline.
              </p>
            </div>

            <Link
              to="/#contact"
              className="group/btn relative inline-flex items-center gap-3 rounded-full border border-white/30 px-6 py-3 text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-white transition-all duration-300 hover:border-white hover:bg-white hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#101116]">
              Get a free consultation
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/btn:translate-x-1" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
