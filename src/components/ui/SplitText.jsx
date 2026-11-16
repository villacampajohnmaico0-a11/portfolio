import { motion } from 'framer-motion'
import { useReducedMotion } from '../../hooks/useReducedMotion'

export default function SplitText({ text, className = '', highlightText = null, highlightClassName = '' }) {
  const prefersReducedMotion = useReducedMotion()
  const words = text.split(' ')

  if (prefersReducedMotion) {
    return <span className={className}>{text}</span>
  }

  return (
    <span className={className} aria-label={text}>
      {words.map((word, index) => {
        const isHighlighted = highlightText && word === highlightText
        return (
          <motion.span
            key={`${word}-${index}`}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
            className={isHighlighted ? `inline-block ${highlightClassName}` : 'inline-block'}
          >
            {word}
            {index < words.length - 1 ? ' ' : ''}
          </motion.span>
        )
      })}
    </span>
  )
}
