import { useState } from 'react'
import { faqs } from '../../data/faqs'
import Accordion from '../ui/Accordion'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="bg-paper py-24 md:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="FAQ"
            title="Questions people usually ask first."
            align="center"
          />
        </Reveal>

        <div className="mt-12">
          <Accordion items={faqs} openIndex={openIndex} onToggle={(index) => setOpenIndex(openIndex === index ? -1 : index)} />
        </div>
      </div>
    </section>
  )
}
