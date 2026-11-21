import { site } from "../../data/site";
import Button from "../ui/Button";
import Magnetic from "../ui/Magnetic";
import Marquee from "../ui/Marquee";
import SplitText from "../ui/SplitText";
import HeroShowcase from "./HeroShowcase";

const marqueeItems = [
  "Online Stores",
  "Booking Systems",
  "Dashboards",
  "Restaurant Menus",
  "Property Listings",
  "Portfolio Sites",
  "Client Portals",
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-x-clip bg-paper pb-16 pt-28 md:pt-32 md:pb-20">
      <div className="absolute inset-x-0 top-0 h-56 bg-[radial-gradient(circle_at_top,_rgba(47,75,255,0.12),_transparent_55%)]" />
      <div className="absolute -left-16 top-24 h-64 w-64 rounded-full bg-[#C9B8FF]/35 blur-3xl" />
      <div className="absolute right-0 top-10 h-72 w-72 rounded-full bg-[#FF6B4A]/12 blur-3xl" />

      <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="relative z-[var(--z-hero-copy)]">
            <h1 className="max-w-xl text-hero text-ink">
              <SplitText
                text={"Your business deserves\u00a0more than just a website."}
                highlightText="website."
                highlightClassName="font-serif italic text-accent"
              />
            </h1>

            <div className="mt-6 flex items-center gap-4">
              <svg
                viewBox="0 0 180 24"
                className="h-5 w-32 text-accent"
                aria-hidden="true">
                <path
                  d="M5 16c32-16 65-16 96 0 16 8 28 8 48 0 17-8 26-8 38 0"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
              <span className="text-xs font-semibold uppercase tracking-[0.12em] text-muted">
                Client-first design
              </span>
            </div>

            <p className="mt-6 max-w-[65ch] text-body-lg text-muted">
              {site.hero.supportingText}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Magnetic>
                <Button href="#contact">Build My Website</Button>
              </Magnetic>
              <Magnetic>
                <Button href="#projects" variant="secondary">
                  Explore Our Work
                </Button>
              </Magnetic>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[620px]">
            <HeroShowcase />
          </div>
        </div>
      </div>

      {/* Mobile CTA: placed ABOVE the long pinned marquee so it's actually seen */}
      <div className="mt-10 flex justify-center px-4 md:hidden">
        <a
          href="#contact"
          className="inline-flex w-fit rounded-full bg-accent px-4 py-3 text-button font-semibold text-white shadow-soft">
          Start a Project
        </a>
      </div>

      <Marquee items={marqueeItems} className="mt-10 md:mt-20" />
    </section>
  );
}
