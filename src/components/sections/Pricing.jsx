import { ArrowRight, Check } from 'lucide-react'
import { pricingPackages } from '../../data/pricing'
import Button from '../ui/Button'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'

export default function Pricing() {
  return (
    <section id="pricing" className="bg-ink py-24 text-white md:py-28">
      <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Pricing"
            title="Packages shaped around your project."
            description="Every business is different, so pricing depends on your requirements and complexity. Tell me what you need and I'll send a clear quote."
            dark
          />
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {pricingPackages.map((pkg, index) => (
            <Reveal key={pkg.name} delay={index * 0.08}>
              <article className={`rounded-[30px] border p-6 ${pkg.featured ? 'border-accent bg-white text-ink shadow-soft' : 'border-white/10 bg-white/5 text-white'}`}>
                <div className="mb-4 flex items-center justify-between gap-4">
                  <div>
                    <h3 className={`font-display text-3xl tracking-[-0.04em] ${pkg.featured ? 'text-ink' : 'text-white'}`}>{pkg.name}</h3>
                    <p className={`mt-2 text-sm ${pkg.featured ? 'text-muted' : 'text-white/70'}`}>{pkg.tag}</p>
                  </div>
                  {pkg.featured && (
                    <span className="rounded-full bg-accent-soft px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-accent">
                      Popular
                    </span>
                  )}
                </div>
                <p className={`mb-5 text-base leading-7 ${pkg.featured ? 'text-muted' : 'text-white/75'}`}>{pkg.description}</p>
                <div className="space-y-3">
                  {pkg.deliverables.map((deliverable) => (
                    <div key={deliverable} className="flex items-start gap-3">
                      <span className={`mt-1 flex h-5 w-5 items-center justify-center rounded-full ${pkg.featured ? 'bg-accent-soft text-accent' : 'bg-white/10 text-white'}`}>
                        <Check className="h-3.5 w-3.5" />
                      </span>
                      <span className={pkg.featured ? 'text-muted' : 'text-white/80'}>{deliverable}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6">
                  <a href={`/?projectType=${encodeURIComponent(pkg.type)}#contact`} className={`inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold ${pkg.featured ? 'bg-accent text-white' : 'border border-white/10 bg-transparent text-white'}`}>
                    {pkg.cta} <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 rounded-[28px] border border-white/10 bg-white/5 p-6 text-center">
          <p className="text-xl font-semibold text-white">
            Not sure which fits? <span className="text-pop">Get a Free Consultation</span>
          </p>
          <p className="mt-3 text-sm text-white/70">Final pricing depends on scope, features, and timeline.</p>
        </div>
      </div>
    </section>
  )
}
