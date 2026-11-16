import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { useRef } from 'react'

function StackCardItem({ card, index, topOffset, total, scrollYProgress }) {
  const smooth = useSpring(scrollYProgress, { stiffness: 100, damping: 18 })
  const scale = useTransform(smooth, [index / total - 0.08, index / total, (index + 1) / total], [0.96, 1, 0.97])
  const opacity = useTransform(smooth, [index / total - 0.06, index / total, (index + 1) / total, 1], [0.35, 1, 0.8, 0.3])

  return (
    <motion.article
      key={card.id || index}
      style={{
        top: `calc(${topOffset}px + ${index * 28}px)`,
        scale,
        opacity,
      }}
      className="sticky overflow-hidden rounded-[34px] border border-ink/10 bg-white p-4 shadow-soft md:p-6"
    >
      {card.content}
    </motion.article>
  )
}

export default function StackCard({ cards, topOffset = 96 }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] })

  return (
    <div ref={ref} className="relative">
      {cards.map((card, index) => (
        <StackCardItem
          key={card.id || index}
          card={card}
          index={index}
          topOffset={topOffset}
          total={cards.length}
          scrollYProgress={scrollYProgress}
        />
      ))}
    </div>
  )
}
