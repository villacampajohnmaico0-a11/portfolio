import { Check } from 'lucide-react'
import { useOverlay } from '../../hooks/useOverlay'
import Button from './Button'
import {
  BookingMockup,
  BusinessSiteMockup,
  DashboardMockup,
  PropertyMockup,
  RestaurantMockup,
  StorefrontMockup,
} from '../mockups/Mockups'

const mockups = {
  'business-websites': BusinessSiteMockup,
  ecommerce: StorefrontMockup,
  booking: BookingMockup,
  restaurant: RestaurantMockup,
  dashboard: DashboardMockup,
  property: PropertyMockup,
}

export default function SolutionPreview({ solution }) {
  const { requestQuote } = useOverlay()
  const SolutionMockup = mockups[solution.id]

  return (
    <div className="space-y-6">
      <p className="text-body text-muted">{solution.description}</p>
      <div className="grid gap-6 md:grid-cols-[1.05fr_0.95fr]">
        <div className="self-start rounded-[24px] border border-ink/10 bg-paper p-3">
          <SolutionMockup />
        </div>
        <div className="space-y-5">
          <div>
            <p className="mb-2 text-eyebrow font-semibold uppercase text-accent">Best for</p>
            <p className="text-body text-ink">{solution.label.replace(/^For /, '')}</p>
          </div>
          <div>
            <h3 className="mb-3 text-small-heading text-ink">Included features</h3>
            <ul className="space-y-2 text-body text-ink">
              {solution.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-accent" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-3 text-small-heading text-ink">Project goals</h3>
            <ul className="space-y-2 text-body text-ink/80">
              {solution.benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-2">
                  <span aria-hidden="true" className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <Button onClick={() => requestQuote(solution.projectType)}>Request a Quote</Button>
    </div>
  )
}
