import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import { site } from '../../data/site'

export default function MobileMenu({ isOpen, onClose, activeSection }) {
  useEffect(() => {
    if (!isOpen) return

    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [isOpen, onClose])

  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-ink/95 px-5 py-6 backdrop-blur-sm"
        >
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div className="flex items-center gap-3 text-white">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-accent text-sm font-bold text-white">N</div>
              <span className="font-display text-xl tracking-[-0.04em]">{site.brandName}</span>
            </div>
            <button type="button" onClick={onClose} className="rounded-full border border-white/10 p-2 text-white" aria-label="Close menu">
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="mt-8 flex flex-col gap-3">
            {site.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={onClose}
                className={`rounded-2xl border px-4 py-3 text-lg font-medium ${activeSection === item.href.replace('#', '') ? 'border-accent bg-accent text-white' : 'border-white/10 bg-white/5 text-white/80'}`}
              >
                {item.label}
              </a>
            ))}
            <a href="#contact" onClick={onClose} className="mt-3 rounded-full bg-white px-5 py-3 text-center text-sm font-semibold text-ink">
              Start a Project
            </a>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
