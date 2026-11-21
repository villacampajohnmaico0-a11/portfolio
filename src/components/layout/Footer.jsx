// src/components/sections/Footer.jsx
import { ArrowUp, ArrowUpRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { site } from "../../data/site";

const socials = [
  { label: "LinkedIn", href: site.linkedIn },
  { label: "Instagram", href: site.instagram },
  { label: "Facebook", href: site.facebook },
];

const headingClass =
  "font-mono text-[10px] font-semibold uppercase tracking-[0.3em] text-white/50";
const linkClass =
  "group/link inline-flex items-center gap-1.5 text-sm text-white/70 transition-colors duration-300 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white";

export default function Footer() {
  const [year] = useState(() => new Date().getFullYear());
  const location = useLocation();
  const onHome = location.pathname === "/";

  // Big outlined word: first word of the brand name
  const watermark = (site.brandName || "Northstar").split(" ")[0];

  return (
    <footer className="relative overflow-hidden bg-[#080808] text-white">
      {/* ambient glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 h-[380px] w-[720px] -translate-x-1/2 rounded-full bg-[#2f4bff]/15 blur-3xl"
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

      <div className="relative mx-auto max-w-site px-4 pt-16 sm:px-6 lg:px-8 lg:pt-20">
        {/* ---------- Top: brand + big line ---------- */}
        <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
          <div className="max-w-[22ch]">
            <Link
              to="/#home"
              className="flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#2f4bff] text-sm font-bold text-white">
                N
              </span>
              <span className="text-xl font-medium tracking-[-0.04em]">
                {site.brandName}
              </span>
            </Link>
            <p className="mt-5 text-sm leading-relaxed text-white/60">
              {site.businessDescription}
            </p>
          </div>

          <p className="max-w-[16ch] text-[clamp(1.9rem,4vw,3.4rem)] font-medium leading-[1.03] tracking-[-0.04em] lg:text-right">
            Let’s build something{" "}
            <span className="font-serif italic text-[#8EA0FF]">worth it.</span>
          </p>
        </div>

        <span className="my-12 block h-px w-full bg-white/10" />

        {/* ---------- Columns ---------- */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1.2fr_1fr]">
          <div>
            <h3 className={headingClass}>Navigate</h3>
            <ul className="mt-5 space-y-3">
              {site.footerLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={onHome ? link.href : `/${link.href}`}
                    className={linkClass}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className={headingClass}>Services</h3>
            <ul className="mt-5 space-y-3">
              {site.services.map((service) => (
                <li key={service}>
                  <Link
                    to={onHome ? "#solutions" : "/#solutions"}
                    className={linkClass}>
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="min-w-0">
            <h3 className={headingClass}>Contact</h3>
            <dl className="mt-5 space-y-4">
              <div>
                <dt className="text-[10px] uppercase tracking-[0.2em] text-white/35">
                  Email
                </dt>
                <dd className="mt-1 min-w-0">
                  <a
                    href={`mailto:${site.email}`}
                    className="break-all text-sm text-white underline decoration-white/25 underline-offset-4 transition-colors hover:decoration-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">
                    {site.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-[10px] uppercase tracking-[0.2em] text-white/35">
                  Phone
                </dt>
                <dd className="mt-1 text-sm text-white/80">{site.phone}</dd>
              </div>
              <div>
                <dt className="text-[10px] uppercase tracking-[0.2em] text-white/35">
                  Based
                </dt>
                <dd className="mt-1 text-sm text-white/80">Worldwide</dd>
              </div>
            </dl>
          </div>

          <div>
            <h3 className={headingClass}>Follow</h3>
            <ul className="mt-5 space-y-3">
              {socials
                .filter((item) => /^https?:\/\//i.test(item.href || ""))
                .map((social) => (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={linkClass}>
                      {social.label}
                      <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                    </a>
                  </li>
                ))}
            </ul>
          </div>
        </div>

        {/* ---------- Bottom bar ---------- */}
        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-6 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-white/50">
            © {year} {site.brandName}. All rights reserved.
          </p>

          <Link
            to="/#home"
            className="group/top inline-flex w-fit items-center gap-3 rounded-full border border-white/25 px-5 py-2.5 text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-white/80 transition-all duration-300 hover:border-white hover:bg-white hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">
            Back to top
            <ArrowUp className="h-3.5 w-3.5 transition-transform duration-300 group-hover/top:-translate-y-0.5" />
          </Link>
        </div>

        {/* ---------- Big outlined word ---------- */}
        <div
          aria-hidden="true"
          className="pointer-events-none mt-10 select-none overflow-hidden text-center lg:mt-14">
          <span
            className="-mb-[0.18em] block whitespace-nowrap text-[clamp(4.5rem,19vw,17rem)] font-bold uppercase leading-[0.85] tracking-[-0.05em]"
            style={{
              color: "transparent",
              WebkitTextStroke: "1px rgba(255,255,255,0.12)",
            }}>
            {watermark}
          </span>
        </div>
      </div>
    </footer>
  );
}
