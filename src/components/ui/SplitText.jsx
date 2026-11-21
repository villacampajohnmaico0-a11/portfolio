import { Fragment } from 'react'
import { motion } from 'framer-motion'
import { useReducedMotion } from '../../hooks/useReducedMotion'

export default function SplitText({ text, className = '', highlightText = null, highlightClassName = '' }) {
  const prefersReducedMotion = useReducedMotion()
  const words = text.split(' ')

  if (prefersReducedMotion) {
    return (
      <span className={className} aria-label={text}>
        {words.map((word, index) => (
          <Fragment key={`${word}-${index}`}>
            {index > 0 && ' '}
            {word === highlightText ? <span className={highlightClassName}>{word}</span> : word}
          </Fragment>
        ))}
      </span>
    )
  }

  return (
    <span className={className} aria-label={text}>
      {words.map((word, index) => {
        const isHighlighted = highlightText && word === highlightText
        return (
          <Fragment key={`${word}-${index}`}>
            {index > 0 && ' '}
            <motion.span
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className={isHighlighted ? `inline-block ${highlightClassName}` : 'inline-block'}
            >
              {word}
            </motion.span>
          </Fragment>
        )
      })}
    </span>
  )
}
