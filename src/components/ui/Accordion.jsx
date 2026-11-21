import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useId } from 'react'

export default function Accordion({ items, openIndex, onToggle }) {
  const id = useId()

  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const panelId = `${id}-${index}`
        const isOpen = index === openIndex
        return (
          <div key={item.question} className="overflow-hidden rounded-3xl border border-ink/10 bg-white shadow-soft">
            <button
              type="button"
              className="flex w-full items-center justify-between gap-5 px-5 py-4 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-inset md:px-6"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => onToggle(index)}
            >
              <span className="font-semibold text-ink">{item.question}</span>
              <ChevronDown className={`h-5 w-5 text-ink transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={panelId}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: 'easeInOut' }}
                >
                  <div className="border-t border-ink/10 px-5 py-4 text-base leading-7 text-muted md:px-6">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}
