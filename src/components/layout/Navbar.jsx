import { Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { site } from "../../data/site";
import { useOverlay } from "../../hooks/useOverlay";
import { useScrollSpy } from "../../hooks/useScrollSpy";
import Button from "../ui/Button";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { openOverlay, overlay } = useOverlay();
  const location = useLocation();
  const activeSection = useScrollSpy([
    "home",
    "solutions",
    "projects",
    "process",
    "pricing",
    "contact",
  ]);
  const menuOpen = overlay?.type === "menu";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-[var(--z-navbar)]">
      <div
        className={`mx-auto max-w-site px-4 transition-all duration-300 sm:px-6 lg:px-8 ${scrolled ? "pt-4" : "pt-5"}`}>
        <nav
          className={`flex items-center justify-between rounded-full border px-3 py-2.5 transition-all duration-300 ${scrolled ? "border-ink/10 bg-white/75 shadow-soft backdrop-blur-md" : "border-white/30 bg-transparent"}`}>
          <Link
            to={location.pathname === "/" ? "#home" : "/#home"}
            className="flex items-center gap-3 text-ink">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-sm font-bold text-white">
              N
            </div>
            <div className="font-display text-xl tracking-[-0.04em]">
              {site.brandName}
            </div>
          </Link>

          <div className="hidden items-center gap-1 rounded-full border border-ink/10 bg-white/55 p-1 lg:flex">
            {site.nav.map((item) => (
              <Link
                key={item.href}
                to={location.pathname === "/" ? item.href : `/${item.href}`}
                className={`rounded-full px-3.5 py-2 text-sm font-medium transition ${activeSection === item.href.replace("#", "") ? "bg-ink text-white shadow-sm" : "text-ink/70 hover:text-ink"}`}>
                {item.label}
              </Link>
            ))}
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <Button
              to={location.pathname === "/" ? "#contact" : "/#contact"}
              variant="primary"
              className="!px-4 !py-2.5 !text-button">
              Start a Project
            </Button>
          </div>

          <button
            type="button"
            onClick={() =>
              openOverlay({
                type: "menu",
                content: <MobileMenu activeSection={activeSection} />,
              })
            }
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-ink/10 bg-white/80 text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 lg:hidden"
            aria-label={menuOpen ? "Menu open" : "Open menu"}
            aria-expanded={menuOpen}>
            <Menu className="h-5 w-5" />
          </button>
        </nav>
      </div>
    </header>
  );
}
