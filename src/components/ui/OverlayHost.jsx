import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import { useEffect, useId, useRef } from 'react'
import { createPortal } from 'react-dom'
import { useOverlay } from '../../hooks/useOverlay'

function getFocusableElements(container) {
  return [...container.querySelectorAll(
    'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
  )].filter((element) => element.getAttribute('aria-hidden') !== 'true')
}

function OverlayContent({ overlay, closeOverlay, titleId, panelRef }) {
  if (overlay.type === 'menu') {
    return (
      <motion.div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        tabIndex={-1}
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 18 }}
        transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-0 z-[var(--z-mobile-menu)] overflow-y-auto bg-ink/95 px-5 py-6 text-white backdrop-blur-sm"
      >
        {overlay.content}
      </motion.div>
    )
  }

  return (
    <motion.section
      ref={panelRef}
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      tabIndex={-1}
      initial={{ opacity: 0, scale: 0.97, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.97, y: 20 }}
      transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
      className={`relative z-[var(--z-modal)] max-h-[96dvh] w-full overflow-y-auto overscroll-contain rounded-t-[28px] bg-white p-5 shadow-soft sm:max-h-[90dvh] sm:rounded-[28px] sm:p-7 ${overlay.maxWidth || 'max-w-2xl'}`}
    >
      <div className="mb-5 flex items-start justify-between gap-4">
        <h2 id={titleId} className="text-card text-ink">{overlay.title}</h2>
        <button
          type="button"
          data-overlay-close
          onClick={closeOverlay}
          className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-ink/10 bg-white text-ink transition hover:bg-paper focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
          aria-label="Close dialog"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
      {overlay.content}
    </motion.section>
  )
}

export default function OverlayHost() {
  const { overlay, overlayActive, closeOverlay, finishOverlay } = useOverlay()
  const panelRef = useRef(null)
  const titleId = useId()

  useEffect(() => {
    if (!overlayActive) return undefined

    const body = document.body
    const previousOverflow = body.style.overflow
    const previousPaddingRight = body.style.paddingRight
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth
    const currentPadding = Number.parseFloat(window.getComputedStyle(body).paddingRight) || 0

    body.style.overflow = 'hidden'
    if (scrollbarWidth > 0) body.style.paddingRight = `${currentPadding + scrollbarWidth}px`

    return () => {
      body.style.overflow = previousOverflow
      body.style.paddingRight = previousPaddingRight
    }
  }, [overlayActive])

  useEffect(() => {
    if (!overlay) return undefined

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        closeOverlay()
        return
      }

      if (event.key !== 'Tab' || !panelRef.current) return
      const focusable = getFocusableElements(panelRef.current)
      if (!focusable.length) {
        event.preventDefault()
        panelRef.current.focus()
        return
      }

      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (event.shiftKey && (document.activeElement === first || !panelRef.current.contains(document.activeElement))) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && (document.activeElement === last || !panelRef.current.contains(document.activeElement))) {
        event.preventDefault()
        first.focus()
      }
    }

    window.addEventListener('keydown', onKeyDown)
    const frame = requestAnimationFrame(() => {
      const closeButton = panelRef.current?.querySelector('[data-overlay-close]')
      const initialFocus = closeButton || getFocusableElements(panelRef.current || document.body)[0]
      if (initialFocus) initialFocus.focus()
      else panelRef.current?.focus()
    })

    return () => {
      window.cancelAnimationFrame(frame)
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [overlay, closeOverlay])

  if (typeof document === 'undefined') return null

  return createPortal(
    <AnimatePresence onExitComplete={finishOverlay}>
      {overlay && (
        <motion.div
          key="site-overlay"
          className="fixed inset-0 z-[var(--z-backdrop)] flex items-end justify-center bg-ink/65 p-0 backdrop-blur-sm sm:items-center sm:p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
          onClick={(event) => {
            if (event.target === event.currentTarget) closeOverlay()
          }}
        >
          <OverlayContent
            overlay={overlay}
            closeOverlay={closeOverlay}
            titleId={titleId}
            panelRef={panelRef}
          />
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  )
}
