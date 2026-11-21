import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { industries } from "../../data/industries";
import { solutions } from "../../data/solutions";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";
import SolutionPreview from "../ui/SolutionPreview";
import { useOverlay } from "../../hooks/useOverlay";
import { useReducedMotion } from "../../hooks/useReducedMotion";

const unsplash = (id) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1400&q=80`;

// Photos that already load in your project. Add more by pasting a link.
// healthcare / education / logistics use the gradient cards until you add one.
const INDUSTRY_MEDIA = {
  hospitality: {
    src: unsplash("photo-1505693416388-ac5ce068fe85"),
    alt: "Bright hotel bedroom with warm natural light",
  },
  "food-and-beverage": {
    src: unsplash("photo-1559339352-11d035aa65de"),
    alt: "Restaurant table with plated dishes",
  },
  property: {
    src: unsplash("photo-1494526585095-c41746248156"),
    alt: "Modern home exterior and landscaped property",
  },
  retail: {
    src: unsplash("photo-1441986300917-64674bd600d8"),
    alt: "Boutique retail interior with products on display",
  },
  "professional-services": {
    src: unsplash("photo-1497366754035-f200968a6e72"),
    alt: "Creative office workspace",
  },
  // healthcare: { src: "PASTE_LINK_HERE", alt: "Modern healthcare interior" },
  // education: { src: "PASTE_LINK_HERE", alt: "University campus" },
  // logistics: { src: "PASTE_LINK_HERE", alt: "Warehouse and distribution" },
};

// Gradient art used when a card has no photo (or its photo fails).
const PALETTES = {
  healthcare:
    "radial-gradient(circle at 80% 15%, rgba(94,234,212,0.35), transparent 50%), linear-gradient(145deg,#12303a,#0b1519)",
  education:
    "radial-gradient(circle at 20% 20%, rgba(201,184,255,0.4), transparent 55%), linear-gradient(145deg,#2a1f4d,#120e22)",
  logistics:
    "radial-gradient(circle at 85% 85%, rgba(255,107,74,0.35), transparent 55%), linear-gradient(145deg,#3a2216,#17100b)",
  default:
    "radial-gradient(circle at 80% 20%, rgba(47,75,255,0.35), transparent 55%), linear-gradient(145deg,#1d2140,#0d0f1c)",
};

// Layout per tile (intro first). Every row adds up to 6 columns on desktop.
// Rows: 2+4 | 2+2+2 | 4+2 | 2+4
const LAYOUT = [
  "sm:col-span-2 lg:col-span-2", // intro
  "sm:col-span-2 lg:col-span-4", // hospitality (wide)
  "sm:col-span-1 lg:col-span-2", // food
  "sm:col-span-1 lg:col-span-2", // property
  "sm:col-span-2 lg:col-span-2", // retail
  "sm:col-span-2 lg:col-span-4", // professional (wide)
  "sm:col-span-1 lg:col-span-2", // healthcare
  "sm:col-span-1 lg:col-span-2", // education
  "sm:col-span-2 lg:col-span-4", // logistics (wide)
];
const EXTRA_LAYOUT = "sm:col-span-1 lg:col-span-3";
const WIDE_TILES = new Set([1, 5, 8]);

const slugify = (value = "") =>
  value
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

const normalizeSlug = (slug) =>
  slug === "food-beverage" ? "food-and-beverage" : slug;

function Pill({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/30 bg-black/30 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-white/90 backdrop-blur-sm">
      {children}
    </span>
  );
}

function ArrowButton() {
  return (
    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/40 text-white transition-all duration-300 group-hover:scale-105 group-hover:border-white group-hover:bg-white group-hover:text-black">
      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
    </span>
  );
}

function IntroTile() {
  return (
    <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-[14px] bg-[linear-gradient(150deg,#2f4bff,#1a2aa8)] p-6 text-white">
      <div
        aria-hidden="true"
        className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/15 blur-2xl"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-20 -left-10 h-48 w-48 rounded-full bg-[#C9B8FF]/30 blur-3xl"
      />

      <div className="relative">
        <h3 className="max-w-[14ch] text-[clamp(1.7rem,2.6vw,2.3rem)] font-medium leading-[1.05] tracking-[-0.04em]">
          Different businesses.{" "}
          <span className="font-serif italic text-white/70">
            Thoughtful digital experiences.
          </span>
        </h3>
        <p className="mt-4 max-w-[34ch] text-sm leading-relaxed text-white/75">
          From hospitality and retail to professional services, we create
          websites and digital tools shaped around how your business works.
        </p>
      </div>
    </div>
  );
}

function IndustryTile({ industry, media, palette, wide, onClick }) {
  const [failed, setFailed] = useState(false);
  const showPhoto = media && !failed;
  const watermark = industry.name.split(/[\s&]+/)[0];

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={`Preview ${industry.name} solution`}
      className="group relative block h-full w-full overflow-hidden rounded-[14px] bg-[#161616] text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-[#080808]">
      {showPhoto ? (
        <img
          src={media.src}
          alt={media.alt}
          loading="lazy"
          decoding="async"
          onError={() => setFailed(true)}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.05]"
        />
      ) : (
        <>
          <div
            aria-hidden="true"
            className="absolute inset-0 transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
            style={{ background: palette }}
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-3 -right-2 select-none text-[clamp(4rem,9vw,7.5rem)] font-bold uppercase leading-none tracking-[-0.04em]"
            style={{
              color: "transparent",
              WebkitTextStroke: "1px rgba(255,255,255,0.14)",
            }}>
            {watermark}
          </span>
        </>
      )}

      {/* readability gradient */}
      <span className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-black/10" />
      <span className="absolute inset-0 rounded-[14px] ring-1 ring-inset ring-white/10 transition-colors duration-300 group-hover:ring-white/30" />

      <span className="absolute inset-x-5 top-5 flex items-center justify-between gap-3">
        <Pill>Industry</Pill>
        <ArrowButton />
      </span>

      <span className="absolute inset-x-5 bottom-5 block">
        <span
          className={`block font-medium leading-[1.05] tracking-[-0.04em] text-white ${
            wide
              ? "text-[clamp(1.7rem,2.8vw,2.6rem)]"
              : "text-[clamp(1.4rem,2vw,1.9rem)]"
          }`}>
          {industry.name}
        </span>
        <span className="mt-2 block max-w-[38ch] text-sm leading-relaxed text-white/70">
          {industry.description}
        </span>
        <span className="mt-4 block h-px w-10 bg-white/50 transition-all duration-500 group-hover:w-24 group-hover:bg-white" />
      </span>
    </button>
  );
}

export default function Industries() {
  const { openOverlay } = useOverlay();
  const reduced = useReducedMotion();

  const openForIndustry = (industry) => {
    const solution = solutions.find((item) => item.id === industry.solutionId);
    if (!solution) {
      console.error(`Missing solution preview for ${industry.name}.`);
      return;
    }
    openOverlay({
      type: "dialog",
      title: `${industry.name} solutions`,
      maxWidth: "max-w-5xl",
      content: <SolutionPreview solution={solution} />,
    });
  };

  const findIndustry = (slug) =>
    industries.find(
      (industry) => normalizeSlug(slugify(industry.name)) === slug,
    );

  const featured = [
    "hospitality",
    "food-and-beverage",
    "property",
    "retail",
    "professional-services",
    "healthcare",
    "education",
    "logistics",
  ]
    .map(findIndustry)
    .filter(Boolean);

  const featuredNames = new Set(featured.map((i) => i.name));
  const extras = industries.filter((i) => !featuredNames.has(i.name));
  const ordered = [...featured, ...extras];

  // Tile 0 is the intro card, industries start at tile 1.
  const tiles = [
    { type: "intro" },
    ...ordered.map((industry) => ({ type: "industry", industry })),
  ];

  return (
    <section className="relative overflow-hidden bg-[#080808] py-20 text-white sm:py-24 lg:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-[#2f4bff]/15 blur-3xl"
      />

      <div className="relative mx-auto w-full max-w-site px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Built for real businesses"
            title="The kind of work your business needs."
            description="A website should make your offer feel clear, trustworthy, and easy to buy from. These are the industries we build for."
            dark
          />
        </Reveal>

        <div className="mt-12 grid auto-rows-[320px] grid-cols-1 gap-4 sm:grid-cols-2 sm:auto-rows-[300px] lg:grid-cols-6 lg:auto-rows-[340px]">
          {tiles.map((tile, index) => {
            const span = LAYOUT[index] ?? EXTRA_LAYOUT;
            const wide = WIDE_TILES.has(index);

            return (
              <motion.div
                key={tile.type === "intro" ? "intro" : tile.industry.name}
                className={`h-full ${span}`}
                initial={reduced ? false : { opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                  delay: (index % 3) * 0.06,
                }}>
                {tile.type === "intro" ? (
                  <IntroTile />
                ) : (
                  (() => {
                    const slug = normalizeSlug(slugify(tile.industry.name));
                    return (
                      <IndustryTile
                        industry={tile.industry}
                        media={INDUSTRY_MEDIA[slug]}
                        palette={PALETTES[slug] ?? PALETTES.default}
                        wide={wide}
                        onClick={() => openForIndustry(tile.industry)}
                      />
                    );
                  })()
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
