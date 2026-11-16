import { Menu } from 'lucide-react'
import { useEffect, useState } from 'react'
import { site } from '../../data/site'
import { useScrollSpy } from '../../hooks/useScrollSpy'
import Button from '../ui/Button'
import MobileMenu from './MobileMenu'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const activeSection = useScrollSpy(['home', 'solutions', 'projects', 'process', 'pricing', 'contact'])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-40">
      <div className={`mx-auto max-w-site px-4 transition-all duration-300 sm:px-6 lg:px-8 ${scrolled ? 'pt-4' : 'pt-5'}`}>
        <nav className={`flex items-center justify-between rounded-full border px-3 py-2.5 transition-all duration-300 ${scrolled ? 'border-ink/10 bg-white/75 shadow-soft backdrop-blur-md' : 'border-white/30 bg-transparent'}`}>
          <a href="#home" className="flex items-center gap-3 text-ink">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-sm font-bold text-white">N</div>
            <div className="font-display text-xl tracking-[-0.04em]">{site.brandName}</div>
          </a>

          <div className="hidden items-center gap-1 rounded-full border border-ink/10 bg-white/55 p-1 md:flex">
            {site.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`rounded-full px-3.5 py-2 text-sm font-medium transition ${activeSection === item.href.replace('#', '') ? 'bg-ink text-white shadow-sm' : 'text-ink/70 hover:text-ink'}`}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <Button href="#contact" variant="primary" className="!px-4 !py-2.5 !text-xs">Start a Project</Button>
          </div>

          <button type="button" onClick={() => setMenuOpen((value) => !value)} className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-ink/10 bg-white/80 text-ink md:hidden" aria-label="Open menu">
            <Menu className="h-5 w-5" />
          </button>
        </nav>
      </div>
      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} activeSection={activeSection} />
    </header>
  )
}
