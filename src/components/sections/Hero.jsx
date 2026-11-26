import heroBackground from "../../assets/herobackground.jpg";
import Button from "../ui/Button";
import Magnetic from "../ui/Magnetic";
import Marquee from "../ui/Marquee";
import SplitText from "../ui/SplitText";
import HeroShowcase from "./HeroShowcase";

// Hero palette (kept small on purpose, pulled from the photo itself):
//   base   #050403  warm near-black, matches the photo's dark edges
//   text   #EDE7DA  warm cream (your --paper-2), softer than pure white
//   gold   #E2B866  soft brass, only for the italic highlight and the squiggle
//   blue   bg-accent (rgb(47 75 255)) for the buttons, same as the navbar button

// Marquee items mirror the real projects in the showcase:
// Islakila, StayKila, Plas IMS, Patao Pocket Patio, Pickleball, Neleus.
const marqueeItems = [
  "Online Stores",
  "Booking Systems",
  "Inventory Dashboards",
  "Restaurant Menus",
  "Property Listings",
  "Club Websites",
  "Client Portals",
  "Web Apps",
];

export default function Hero() {
  return (
    <>
      <section
        id="home"
        className="relative flex min-h-[100svh] items-center overflow-x-clip bg-[#050403] pb-12 pt-32 sm:pb-16 md:pb-20 lg:pt-28">
        {/* Background photo (src/assets/herobackground.jpg): fills the hero edge to edge */}
        <img
          src={heroBackground}
          alt=""
          aria-hidden="true"
          draggable={false}
          className="pointer-events-none absolute inset-0 z-0 h-full w-full select-none object-cover object-center"
        />
        {/* Shade for phones/tablets: darker behind the text at the top, lighter lower down */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-b from-[#050403]/85 via-[#050403]/60 to-[#050403]/35 lg:hidden"
        />
        {/* Shade for desktop: darker behind the text, lets the photo show on the right */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 hidden bg-gradient-to-r from-[#050403]/90 via-[#050403]/55 to-[#050403]/10 lg:block"
        />
        {/* Top shade under the navbar */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 z-0 h-28 bg-gradient-to-b from-[#050403]/80 to-transparent"
        />
        {/* Bottom fade into the base colour */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-40 bg-gradient-to-b from-transparent to-[#050403]"
        />

        <div className="relative z-10 mx-auto w-full max-w-site px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-8 sm:gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-14">
            {/* Copy */}
            <div className="relative z-[var(--z-hero-copy)] min-w-0">
              <h1 className="max-w-[12em] text-balance text-[clamp(2rem,6.2vw,4rem)] font-semibold leading-[1.05] tracking-tight text-[#EDE7DA]">
                <SplitText
                  text="Websites that sell. Systems that keep things running."
                  highlightText="keep things running."
                  highlightClassName="font-serif italic text-[#E2B866]"
                />
              </h1>

              <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 sm:mt-6">
                <svg
                  viewBox="0 0 180 24"
                  className="h-5 w-24 shrink-0 text-[#E2B866] sm:w-32"
                  aria-hidden="true">
                  <path
                    d="M5 16c32-16 65-16 96 0 16 8 28 8 48 0 17-8 26-8 38 0"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>
                <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#EDE7DA]/60 sm:text-xs">
                  Web developer & system builder
                </span>
              </div>

              <p className="mt-5 max-w-[60ch] text-base leading-relaxed text-[#EDE7DA]/75 sm:mt-6 sm:text-lg lg:text-[1.2rem]">
                I&rsquo;ve built online stores, booking platforms, inventory
                systems and restaurant sites. Tell me what your business needs,
                and I&rsquo;ll take it from first sketch to launch day.
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-3 sm:mt-8 sm:gap-4">
                <Magnetic>
                  <Button
                    href="#contact"
                    className="!bg-accent !text-white !shadow-none hover:!bg-accent/90">
                    Start a Project
                  </Button>
                </Magnetic>
                <Magnetic>
                  <Button
                    href="#projects"
                    variant="secondary"
                    className="!border !border-accent !bg-transparent !text-[#EDE7DA] !shadow-none hover:!bg-accent hover:!text-white">
                    See My Work
                  </Button>
                </Magnetic>
              </div>
            </div>

            {/* Staircase showcase */}
            <div className="relative mx-auto w-full min-w-0 max-w-[620px]">
              <HeroShowcase />
            </div>
          </div>
        </div>
      </section>

      {/* Marquee sits AFTER the hero, not inside it (it is ~5 screens tall). !mt-0 removes the gap. */}
      <Marquee items={marqueeItems} className="!mt-0" />
    </>
  );
}
