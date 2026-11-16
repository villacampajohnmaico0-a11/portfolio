import { ArrowRight } from 'lucide-react'
import { industries } from '../../data/industries'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'

export default function Industries() {
  return (
    <section className="bg-ink py-24 text-white md:py-28">
      <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Built for real businesses"
            title="The kind of work your business needs."
            description="A website should make your offer feel clear, trustworthy, and easy to buy from. These are the common cases I build for."
            dark
          />
        </Reveal>

        <div className="mt-12 flex flex-wrap gap-3">
          {industries.map((industry, index) => (
            <Reveal key={industry.name} delay={index * 0.08}>
              <div className="max-w-full rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur-sm">
                <span className="font-semibold text-white">{industry.name}</span>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {industries.map((industry, index) => (
            <Reveal key={`${industry.name}-card`} delay={index * 0.08}>
              <article className="rounded-[28px] border border-white/10 bg-white/5 p-5 text-left">
                <div className="mb-4 h-12 w-12 rounded-full bg-accent-soft text-center text-lg font-bold leading-[3rem] text-accent">
                  {industry.name.charAt(0)}
                </div>
                <h3 className="font-display text-2xl tracking-[-0.04em] text-white">{industry.name}</h3>
                <p className="mt-3 text-base leading-7 text-white/70">{industry.description}</p>
                <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white">
                  Explore solutions <ArrowRight className="h-4 w-4" />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
