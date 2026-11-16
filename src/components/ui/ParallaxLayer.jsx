import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function ParallaxLayer({ children, className = '', offset = 24, disabled = false }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const smooth = useSpring(scrollYProgress, { stiffness: 80, damping: 18, mass: 0.4 })
  const y = useTransform(smooth, [0, 1], [0, offset])

  return (
    <motion.div ref={ref} className={className} style={disabled ? undefined : { y }}>
      {children}
    </motion.div>
  )
}
