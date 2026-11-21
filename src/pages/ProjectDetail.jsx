import { ArrowLeft, ArrowUpRight, Check, ExternalLink } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import { projects } from '../data/projects'
import SmartImage from '../components/ui/SmartImage'
import Button from '../components/ui/Button'

export default function ProjectDetail() {
  const { slug } = useParams()
  const projectIndex = projects.findIndex((item) => item.slug === slug)
  const project = projects[projectIndex]

  if (!project) {
    return (
      <main className="bg-paper px-4 py-32 text-center">
        <div className="mx-auto max-w-xl rounded-[28px] border border-ink/10 bg-white p-8 shadow-soft">
          <h1 className="text-hero text-ink">Project not found.</h1>
          <Link to="/" className="mt-5 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-button font-semibold text-white">
            <ArrowLeft className="h-4 w-4" /> Back home
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="bg-paper py-28">
      <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center justify-between gap-4">
          <Link to="/#projects" className="inline-flex items-center gap-2 text-button font-semibold text-ink">
            <ArrowLeft className="h-4 w-4" /> Back to work
          </Link>
          <a href={project.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-button font-semibold text-white">
            View live site <ExternalLink className="h-4 w-4" />
          </a>
        </div>

        <div className="overflow-hidden rounded-[32px] border border-ink/10 bg-white p-4 shadow-soft md:p-8">
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <div className="mb-4 inline-flex rounded-full bg-accent-soft px-3 py-1 text-xs font-semibold uppercase tracking-[0.1em] text-accent">
                {project.status}
              </div>
              <h1 className="text-hero text-ink">{project.name}</h1>
              <p className="mt-4 text-body text-muted">{project.description}</p>
              <div className="mt-6 rounded-[28px] border border-ink/10 bg-paper p-3">
                <SmartImage src={project.image} alt={`${project.name} project preview`} fallbackTitle={project.name} aspectRatio="aspect-[16/10]" className="rounded-[20px]" />
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-[28px] border border-ink/10 bg-paper p-5">
                <p className="text-eyebrow font-semibold uppercase text-accent">Project type</p>
                <p className="mt-3 text-xl font-semibold text-ink">{project.projectType}</p>
              </div>
              <div className="rounded-[28px] border border-ink/10 bg-paper p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Purpose</p>
                <p className="mt-3 text-body text-muted">{project.oneLinePurpose}</p>
              </div>
              <div className="rounded-[28px] border border-ink/10 bg-paper p-5">
                <p className="text-eyebrow font-semibold uppercase text-accent">Business problem</p>
                <p className="mt-3 text-body text-muted">{project.problem}</p>
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-[28px] border border-ink/10 bg-paper p-5">
              <h2 className="text-section text-ink">Key features</h2>
              <ul className="mt-5 space-y-3">
                {project.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-base text-muted">
                    <Check className="mt-1 h-4 w-4 text-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-[28px] border border-ink/10 bg-paper p-5">
              <h2 className="text-section text-ink">What the experience offers</h2>
              <p className="mt-4 text-body text-muted">The design focuses on clarity, trust, and a strong path from first visit to next action.</p>
              <Button
                to={`/?projectType=${encodeURIComponent(project.projectType)}#contact`}
                className="mt-6"
              >
                Want something like this?
              </Button>
            </div>
          </div>

          <nav aria-label="Project navigation" className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-ink/10 pt-6">
            <Link
              to={`/work/${projects[(projectIndex + projects.length - 1) % projects.length].slug}`}
              className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white px-4 py-2.5 text-button font-semibold text-ink transition hover:border-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
            >
              <ArrowLeft className="h-4 w-4" /> Previous project
            </Link>
            <Link
              to={`/work/${projects[(projectIndex + 1) % projects.length].slug}`}
              className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white px-4 py-2.5 text-button font-semibold text-ink transition hover:border-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
            >
              Next project <ArrowUpRight className="h-4 w-4" />
            </Link>
          </nav>
        </div>
      </div>
    </main>
  )
}
