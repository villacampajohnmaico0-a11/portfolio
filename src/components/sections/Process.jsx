import { ArrowRight } from 'lucide-react'
import { processSteps } from '../../data/process'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'

export default function Process() {
  return (
    <section id="process" className="bg-paper-2 py-24 md:py-28">
      <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="How it works"
            title="From idea to launch in four clear steps."
          />
        </Reveal>

        <div className="relative mt-12">
          <div className="absolute left-3 top-0 hidden h-[calc(100%-20px)] w-px bg-ink/15 md:block" />
          <div className="space-y-8 md:space-y-10">
            {processSteps.map((step, index) => (
              <Reveal key={step.id} delay={index * 0.08}>
                <div className="relative grid gap-4 rounded-[28px] border border-ink/10 bg-white p-5 shadow-soft md:grid-cols-[120px_1fr] md:items-center md:gap-8">
                  <div className="md:pl-6">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-accent-soft text-lg font-bold text-accent">
                      {step.id}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-display text-2xl tracking-[-0.04em] text-ink md:text-3xl">{step.name}</h3>
                    <p className="mt-2 max-w-2xl text-base leading-7 text-muted">{step.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-white">
            Ready for step one? <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
