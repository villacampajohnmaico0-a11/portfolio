import { X } from 'lucide-react'
import { useLocation, useNavigate } from 'react-router-dom'
import { site } from '../../data/site'
import { useOverlay } from '../../hooks/useOverlay'

export default function MobileMenu({ activeSection }) {
  const { closeOverlay } = useOverlay()
  const location = useLocation()
  const navigate = useNavigate()

  const navigateToSection = (event, href) => {
    event.preventDefault()
    closeOverlay({ restoreHistory: false, restoreFocus: false })
    navigate(location.pathname === '/' ? href : `/${href}`, { replace: true })
  }

  return (
    <div id="mobile-menu" className="mx-auto min-h-full w-full max-w-lg">
      <div className="flex items-center justify-between border-b border-white/10 pb-4">
        <div className="flex items-center gap-3 text-white">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-accent text-sm font-bold text-white">N</div>
          <span className="font-display text-xl tracking-[-0.04em]">{site.brandName}</span>
        </div>
        <button
          type="button"
          data-overlay-close
          onClick={closeOverlay}
          className="rounded-full border border-white/10 p-2 text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
          aria-label="Close menu"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      <nav aria-label="Mobile navigation" className="mt-8 flex flex-col gap-3">
        {site.nav.map((item) => {
          const href = location.pathname === '/' ? item.href : `/${item.href}`
          return (
            <a
              key={item.href}
              href={href}
              onClick={(event) => navigateToSection(event, item.href)}
              className={`rounded-2xl border px-4 py-3 text-lg font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white ${activeSection === item.href.replace('#', '') ? 'border-accent bg-accent text-white' : 'border-white/10 bg-white/5 text-white/80'}`}
            >
              {item.label}
            </a>
          )
        })}
        <a
          href={location.pathname === '/' ? '#contact' : '/#contact'}
          onClick={(event) => navigateToSection(event, '#contact')}
          className="mt-3 rounded-full bg-white px-5 py-3 text-center text-button font-semibold text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
        >
          Start a Project
        </a>
      </nav>
    </div>
  )
}
