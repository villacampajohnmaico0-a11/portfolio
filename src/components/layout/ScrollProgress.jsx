import { motion, useScroll, useSpring } from 'framer-motion'

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 20 })

  return (
    <motion.div className="fixed inset-x-0 top-0 z-40 h-1 origin-left bg-accent" style={{ scaleX }} />
  )
}
