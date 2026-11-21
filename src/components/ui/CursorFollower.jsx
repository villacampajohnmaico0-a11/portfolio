import { useEffect, useState } from 'react'
import { useOverlay } from '../../hooks/useOverlay'

export default function CursorFollower() {
  const { overlayActive } = useOverlay()
  const [isVisible, setIsVisible] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [label, setLabel] = useState('View')

  useEffect(() => {
    const mediaQuery = window.matchMedia('(pointer: coarse)')
    if (mediaQuery.matches) return undefined

    const move = (event) => {
      setPosition({ x: event.clientX, y: event.clientY })
      setIsVisible(true)

      const target = event.target
      if (target instanceof HTMLElement) {
        const tag = target.tagName.toLowerCase()
        if (tag === 'a' || tag === 'button' || target.closest('button, a, input, textarea, select')) {
          setLabel('Open')
        } else if (target.closest('[data-drag]')) {
          setLabel('Drag')
        } else {
          setLabel('View')
        }
      }
    }

    const leave = () => setIsVisible(false)

    window.addEventListener('pointermove', move)
    window.addEventListener('pointerleave', leave)

    return () => {
      window.removeEventListener('pointermove', move)
      window.removeEventListener('pointerleave', leave)
    }
  }, [])

  if (typeof window === 'undefined' || overlayActive) return null

  return (
    <div
      className={`pointer-events-none fixed left-0 top-0 z-[var(--z-cursor)] hidden -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-ink/10 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.1em] text-ink shadow-soft md:flex ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
    >
      {label}
    </div>
  )
}
