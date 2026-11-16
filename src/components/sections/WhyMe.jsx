import { ArrowRight, CheckCircle2, MessageSquareText, MonitorSmartphone, Rocket, ShieldCheck, Sparkles, Workflow } from 'lucide-react'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'

const benefits = [
  {
    icon: Workflow,
    title: 'Built around your business needs.',
    description: 'No cookie-cutter templates. We start with how your business works and build from there.',
  },
  {
    icon: Sparkles,
    title: 'Modern, professional design.',
    description: 'A look that makes customers trust you at first glance.',
  },
  {
    icon: MonitorSmartphone,
    title: 'Mobile-friendly experiences.',
    description: 'Your customers get a smooth experience on phones, tablets, and computers.',
  },
  {
    icon: CheckCircle2,
    title: 'Easy-to-use interfaces.',
    description: 'Simple for your customers and simple for your team.',
  },
  {
    icon: Rocket,
    title: 'Solutions that grow with you.',
    description: 'Start small, then add features like online ordering or booking when you are ready.',
  },
  {
    icon: MessageSquareText,
    title: 'Direct communication.',
    description: 'You talk to the person building your project, with no layers in between.',
  },
  {
    icon: ShieldCheck,
    title: 'Ongoing support and improvements.',
    description: 'Launch is the beginning. Support and updates can be arranged as agreed.',
  },
]

export default function WhyMe() {
  return (
    <section className="bg-paper py-24 md:py-28">
      <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Why work together"
            title="What you get when we work together."
            description="The goal is simple: a clearer online presence, smoother customer journeys, and a better experience for your team."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <Reveal key={benefit.title} delay={index * 0.08}>
                <article className="rounded-[28px] border border-ink/10 bg-white p-5 shadow-soft">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent-soft text-accent">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-2xl tracking-[-0.04em] text-ink">{benefit.title}</h3>
                  <p className="mt-3 text-base leading-7 text-muted">{benefit.description}</p>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
