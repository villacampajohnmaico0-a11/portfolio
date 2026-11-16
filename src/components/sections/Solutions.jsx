import { useState } from 'react'
import { ArrowRight, Check } from 'lucide-react'
import { solutions } from '../../data/solutions'
import Modal from '../ui/Modal'
import StackCard from '../ui/StackCard'
import {
  BusinessSiteMockup,
  StorefrontMockup,
  BookingMockup,
  RestaurantMockup,
  DashboardMockup,
  PropertyMockup,
} from '../mockups/Mockups'

const mockups = {
  'business-websites': BusinessSiteMockup,
  ecommerce: StorefrontMockup,
  booking: BookingMockup,
  restaurant: RestaurantMockup,
  dashboard: DashboardMockup,
  property: PropertyMockup,
}

const cardColors = ['bg-[#F7F1E7]', 'bg-[#EAF0FF]', 'bg-[#FFF3D9]', 'bg-[#F3E7FF]', 'bg-[#E8F8EE]', 'bg-[#FEE9E3]']

export default function Solutions() {
  const [selected, setSelected] = useState(null)

  const stackCards = solutions.map((solution, index) => ({
    id: solution.id,
    content: (
      <div className={`grid overflow-hidden rounded-[30px] border border-ink/10 ${cardColors[index % cardColors.length]} p-4 md:min-h-[420px] md:grid-cols-[0.95fr_1.05fr]`}>
        <div className="flex flex-col justify-between p-3 md:p-5">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white/70 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-ink/70">
              {solution.label}
            </div>
            <div className="mb-4 text-[10px] font-semibold uppercase tracking-[0.32em] text-ink/50">0{index + 1}</div>
            <h3 className="font-display text-[clamp(2.2rem,4vw,4rem)] leading-[0.9] tracking-[-0.06em] text-ink">{solution.title}</h3>
            <p className="mt-4 max-w-md text-base leading-7 text-ink/70">{solution.description}</p>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {solution.benefits.map((benefit) => (
              <span key={benefit} className="rounded-full border border-ink/10 bg-white/70 px-2.5 py-1 text-xs text-ink/80">
                {benefit}
              </span>
            ))}
          </div>

          <div className="mt-8 flex items-center gap-3">
            <button type="button" onClick={() => setSelected(solution)} className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2.5 text-sm font-semibold text-white">
              Explore Solution <ArrowRight className="h-4 w-4" />
            </button>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white/60 px-4 py-2.5 text-sm font-semibold text-ink">
              Request a Quote
            </a>
          </div>
        </div>

        <div className="relative mt-6 overflow-hidden rounded-[28px] border border-ink/10 bg-white/50 p-3 md:mt-0">
          <div className="absolute inset-x-8 top-5 h-12 rounded-full bg-accent/10 blur-2xl" />
          <div className="relative h-full min-h-[260px]">
            {index === 0 && <div className="h-full rounded-[20px] bg-white/50 p-3"><BusinessSiteMockup /></div>}
            {index === 1 && <div className="h-full rounded-[20px] bg-white/50 p-3"><StorefrontMockup /></div>}
            {index === 2 && <div className="h-full rounded-[20px] bg-white/50 p-3"><BookingMockup /></div>}
            {index === 3 && <div className="h-full rounded-[20px] bg-white/50 p-3"><RestaurantMockup /></div>}
            {index === 4 && <div className="h-full rounded-[20px] bg-white/50 p-3"><DashboardMockup /></div>}
            {index === 5 && <div className="h-full rounded-[20px] bg-white/50 p-3"><PropertyMockup /></div>}
          </div>
          <div className="pointer-events-none absolute left-5 top-5 rounded-full border border-ink/10 bg-white px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-ink/70">Live preview</div>
        </div>
      </div>
    ),
  }))

  return (
    <section id="solutions" className="bg-paper py-24 md:py-28">
      <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-2xl">
          <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.28em] text-accent">What I do</p>
          <h2 className="font-display text-[clamp(2.4rem,4vw,4rem)] leading-[0.9] tracking-[-0.06em] text-ink">What can I build for your business?</h2>
          <p className="mt-4 text-base leading-7 text-muted">Pick the solution closest to what you need. Every project is shaped around how your business actually works.</p>
        </div>

        <StackCard cards={stackCards} topOffset={96} />
      </div>

      <Modal isOpen={Boolean(selected)} onClose={() => setSelected(null)} title={selected?.title || 'Solution details'} maxWidth="max-w-3xl">
        {selected && (
          <div className="space-y-6">
            <p className="text-base leading-7 text-muted">{selected.description}</p>
            <div className="grid gap-6 md:grid-cols-[1.15fr_0.85fr]">
              <div className="rounded-[24px] border border-ink/10 bg-paper p-3">
                {(() => {
                  const SolutionMockup = mockups[selected.id]
                  return <SolutionMockup />
                })()}
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="mb-3 font-display text-2xl tracking-[-0.04em] text-ink">Included features</h4>
                  <ul className="space-y-2 text-sm text-ink">
                    {selected.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <Check className="mt-0.5 h-4 w-4 text-accent" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <a href="#contact" className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-white">
                  Request a Quote <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </section>
  )
}
