// src/components/sections/Solutions.jsx
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { solutions } from "../../data/solutions";
import SectionHeading from "../ui/SectionHeading";
import StackCard from "../ui/StackCard";
import SolutionPreview from "../ui/SolutionPreview";
import { useOverlay } from "../../hooks/useOverlay";
import {
  BookingMockup,
  BusinessSiteMockup,
  DashboardMockup,
  PropertyMockup,
  RestaurantMockup,
  StorefrontMockup,
} from "../mockups/Mockups";

const mockupByIndex = [
  BusinessSiteMockup,
  StorefrontMockup,
  BookingMockup,
  RestaurantMockup,
  DashboardMockup,
  PropertyMockup,
];

// One accent per card, taken from your palette
const ACCENTS = [
  { color: "#2f4bff", glow: "rgba(47,75,255,0.38)" }, // blue
  { color: "#FF6B4A", glow: "rgba(255,107,74,0.34)" }, // coral
  { color: "#C9B8FF", glow: "rgba(201,184,255,0.34)" }, // lavender
  { color: "#FFE58A", glow: "rgba(255,229,138,0.28)" }, // yellow
  { color: "#BDEFD8", glow: "rgba(189,239,216,0.28)" }, // mint
  { color: "#2f4bff", glow: "rgba(47,75,255,0.38)" }, // blue
];

export default function Solutions() {
  const { openOverlay, requestQuote } = useOverlay();

  const stackCards = solutions.map((solution, index) => {
    const Mockup = mockupByIndex[index];
    const accent = ACCENTS[index % ACCENTS.length];
    // Big outlined word, same style as the marquee
    const watermark = solution.title.split(/[\s/&]+/)[0];

    return {
      id: solution.id,
      content: (
        <div className="group/card relative flex h-full flex-col overflow-hidden rounded-[14px] bg-[#101116] lg:flex-row">
          {/* accent glows */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full blur-3xl transition-transform duration-1000 group-hover/card:scale-110"
            style={{ background: accent.glow }}
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-[#C9B8FF]/10 blur-3xl"
          />

          {/* big outlined word */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute bottom-2 left-4 select-none text-[clamp(4rem,10vw,9rem)] font-bold uppercase leading-none tracking-[-0.04em] transition-transform duration-700 group-hover/card:translate-x-2"
            style={{
              color: "transparent",
              WebkitTextStroke: "1px rgba(255,255,255,0.08)",
            }}>
            {watermark}
          </span>

          {/* ---------- Left: text ---------- */}
          <div className="relative z-10 flex w-full flex-col justify-center p-7 sm:p-9 lg:w-[45%] lg:p-10">
            <h3 className="max-w-[14ch] text-[clamp(2.2rem,3.4vw,3.2rem)] font-medium leading-[1.02] tracking-[-0.04em] text-white">
              {solution.title}
            </h3>

            <p className="mt-5 max-w-[38ch] text-base leading-relaxed text-white/65">
              {solution.description}
            </p>

            <ul className="mt-6 flex flex-col gap-2">
              {solution.benefits.map((benefit) => (
                <li
                  key={benefit}
                  className="flex items-center gap-3 text-sm text-white/70">
                  <span
                    aria-hidden="true"
                    className="h-1.5 w-1.5 shrink-0 rounded-full"
                    style={{ background: accent.color }}
                  />
                  {benefit}
                </li>
              ))}
            </ul>

            <span
              aria-hidden="true"
              className="mt-6 block h-px w-10 bg-white/40 transition-all duration-500 group-hover/card:w-28"
            />

            {/* Actions */}
            <div className="mt-6 flex flex-wrap items-center gap-5">
              <button
                type="button"
                onClick={() =>
                  openOverlay({
                    type: "dialog",
                    title: solution.title,
                    maxWidth: "max-w-5xl",
                    content: <SolutionPreview solution={solution} />,
                  })
                }
                className="group/btn inline-flex items-center gap-2 rounded-full px-6 py-3 text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-[#14151A] transition-transform duration-300 hover:scale-[1.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-[#101116]"
                style={{ background: accent.color }}>
                Explore solution
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/btn:translate-x-1" />
              </button>

              <button
                type="button"
                onClick={() => requestQuote(solution.projectType)}
                className="group/btn inline-flex items-center gap-2 text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-white/60 transition-colors duration-300 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-[#101116]">
                Request quote
                <span className="grid h-8 w-8 place-items-center rounded-full border border-white/30 transition-all duration-300 group-hover/btn:border-white group-hover/btn:bg-white group-hover/btn:text-black">
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
                </span>
              </button>
            </div>
          </div>

          {/* ---------- Right: mockup ---------- */}
          <div className="relative z-10 flex flex-1 items-center justify-center overflow-hidden p-6 sm:p-10 lg:p-12">
            <span
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
              style={{ background: accent.glow }}
            />
            <div className="relative w-full transform-gpu transition-transform duration-700 ease-out group-hover/card:-rotate-1 group-hover/card:scale-[1.03]">
              {Mockup ? <Mockup /> : null}
            </div>
          </div>
        </div>
      ),
    };
  });

  return (
    <section
      id="solutions"
      className="relative overflow-x-clip bg-[#080808] py-24 text-white md:py-32">
      {/* ambient glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-[#2f4bff]/15 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-1/3 h-72 w-72 rounded-full bg-[#C9B8FF]/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-1/2 h-72 w-72 rounded-full bg-[#FF6B4A]/10 blur-3xl"
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
        <div className="mb-14">
          <SectionHeading
            eyebrow="What I do"
            title="What can I build for your business?"
            description="Pick the solution closest to what you need. Every project is shaped around how your business actually works."
            dark
          />
        </div>

        <div className="[&_.stack-card]:!border-none">
          <StackCard
            cards={stackCards}
            topOffset={96}
            cardHeight={640}
            mobileStack
            mobileTopOffset={80}
            mobileCardHeight={640}
            mobileAutoHeight
          />
        </div>
      </div>

      <div className="relative mx-auto mt-16 flex max-w-site justify-center px-4 sm:px-6 lg:px-8">
        <a
          href="#project-types"
          className="group inline-flex items-center gap-3 rounded-full border border-white/25 px-6 py-3 text-[0.78rem] font-medium uppercase tracking-[0.14em] text-white/80 transition-all duration-300 hover:border-white hover:bg-white hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#080808]">
          Browse specific project types
          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
        </a>
      </div>
    </section>
  );
}
