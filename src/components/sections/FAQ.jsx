// src/components/sections/FAQ.jsx
import { useState } from "react";
import { faqs } from "../../data/faqs";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";
import { ArrowRight } from "lucide-react";

function FaqRow({ faq, id, open, onToggle }) {
  return (
    <li className="border-b border-ink/15">
      <div
        className={`rounded-[14px] transition-all duration-500 ${
          open ? "my-2 bg-white shadow-soft" : "bg-transparent"
        }`}>
        <h3>
          <button
            type="button"
            onClick={onToggle}
            aria-expanded={open}
            aria-controls={`${id}-panel`}
            id={`${id}-button`}
            className="group flex w-full items-center justify-between gap-6 rounded-[14px] px-5 py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-paper sm:px-6">
            <span
              className={`text-[clamp(1.1rem,1.6vw,1.4rem)] font-medium leading-snug tracking-[-0.03em] transition-colors duration-300 ${
                open ? "text-accent" : "text-ink group-hover:text-accent"
              }`}>
              {faq.question}
            </span>

            {/* plus / minus */}
            <span
              aria-hidden="true"
              className={`relative grid h-10 w-10 shrink-0 place-items-center rounded-full border transition-all duration-300 ${
                open
                  ? "border-accent bg-accent"
                  : "border-ink/25 group-hover:border-ink group-hover:bg-ink"
              }`}>
              <span
                className={`absolute h-px w-3.5 transition-colors duration-300 ${
                  open ? "bg-white" : "bg-ink group-hover:bg-white"
                }`}
              />
              <span
                className={`absolute h-3.5 w-px transition-all duration-300 ${
                  open ? "scale-y-0 bg-white" : "bg-ink group-hover:bg-white"
                }`}
              />
            </span>
          </button>
        </h3>

        {/* smooth open / close */}
        <div
          id={`${id}-panel`}
          role="region"
          aria-labelledby={`${id}-button`}
          className={`grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${
            open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          }`}>
          <div className="overflow-hidden">
            <p
              className={`max-w-[60ch] px-5 pb-6 text-base leading-relaxed text-muted transition-opacity duration-500 sm:px-6 ${
                open ? "opacity-100" : "opacity-0"
              }`}>
              {faq.answer}
            </p>
          </div>
        </div>
      </div>
    </li>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section
      id="faq"
      className="relative overflow-x-clip bg-paper py-24 md:py-32">
      {/* ambient glows (same as hero) */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-56 bg-[radial-gradient(circle_at_top,_rgba(47,75,255,0.10),_transparent_55%)]" />
      <div className="pointer-events-none absolute -left-16 top-40 h-64 w-64 rounded-full bg-[#C9B8FF]/35 blur-3xl" />
      <div className="pointer-events-none absolute -right-10 bottom-20 h-72 w-72 rounded-full bg-[#FF6B4A]/12 blur-3xl" />

      {/* guide lines (same as marquee) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute left-1/2 top-0 h-full w-px bg-ink/[0.05]" />
        <div className="absolute left-6 top-0 hidden h-full w-px bg-ink/[0.04] lg:block" />
        <div className="absolute right-6 top-0 hidden h-full w-px bg-ink/[0.04] lg:block" />
      </div>

      <div className="relative mx-auto max-w-site px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          {/* ---------- Left: heading (sticks while you read) ---------- */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <SectionHeading
                eyebrow="FAQ"
                title="Questions people usually ask first."
              />
            </Reveal>

            {/* big outlined word, same style as the marquee */}
            <span
              aria-hidden="true"
              className="mt-8 hidden select-none text-[clamp(5rem,11vw,9rem)] font-bold uppercase leading-none tracking-[-0.04em] lg:block"
              style={{
                color: "transparent",
                WebkitTextStroke: "1px rgba(20, 21, 26, 0.16)",
              }}>
              Ask
            </span>

            <Reveal delay={0.1}>
              <div className="mt-8 lg:mt-6">
                <p className="text-sm text-muted">
                  Can&apos;t find your{" "}
                  <span className="font-serif italic text-accent">answer?</span>
                </p>
                <a
                  href="#contact"
                  className="group/btn mt-4 inline-flex items-center gap-3 rounded-full bg-accent px-6 py-3 text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-white shadow-soft transition-transform duration-300 hover:scale-[1.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-paper">
                  Ask me directly
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </a>
              </div>
            </Reveal>
          </div>

          {/* ---------- Right: questions ---------- */}
          <Reveal delay={0.06}>
            <ul className="border-t border-ink/15">
              {faqs.map((faq, index) => (
                <FaqRow
                  key={faq.question}
                  faq={faq}
                  id={`faq-${index}`}
                  open={openIndex === index}
                  onToggle={() =>
                    setOpenIndex(openIndex === index ? -1 : index)
                  }
                />
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
