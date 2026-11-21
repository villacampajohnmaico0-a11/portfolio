import { motion, useScroll, useSpring } from 'framer-motion'
import { useOverlay } from '../../hooks/useOverlay'

export default function ScrollProgress() {
  const { overlayActive } = useOverlay()
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 20 })

  if (overlayActive) return null

  return (
    <motion.div className="fixed inset-x-0 top-0 z-[var(--z-scroll-progress)] h-1 origin-left bg-accent" style={{ scaleX }} />
  )
}
