import { ArrowLeft, ArrowUpRight, Check, ExternalLink } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import { projects } from '../data/projects'
import SmartImage from '../components/ui/SmartImage'

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = projects.find((item) => item.slug === slug)

  if (!project) {
    return (
      <main className="bg-paper px-4 py-32 text-center">
        <div className="mx-auto max-w-xl rounded-[28px] border border-ink/10 bg-white p-8 shadow-soft">
          <h1 className="font-display text-4xl tracking-[-0.04em] text-ink">Project not found.</h1>
          <Link to="/" className="mt-5 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-white">
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
          <Link to="/" className="inline-flex items-center gap-2 text-sm font-semibold text-ink">
            <ArrowLeft className="h-4 w-4" /> Back to work
          </Link>
          <a href={project.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-white">
            View live site <ExternalLink className="h-4 w-4" />
          </a>
        </div>

        <div className="overflow-hidden rounded-[32px] border border-ink/10 bg-white p-4 shadow-soft md:p-8">
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <div className="mb-4 inline-flex rounded-full bg-accent-soft px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-accent">
                {project.status}
              </div>
              <h1 className="font-display text-[clamp(2.2rem,4vw,4rem)] tracking-[-0.04em] text-ink">{project.name}</h1>
              <p className="mt-4 text-base leading-7 text-muted">{project.description}</p>
              <div className="mt-6 rounded-[28px] border border-ink/10 bg-paper p-3">
                <SmartImage src={project.image} alt={`${project.name} project preview`} fallbackTitle={project.name} aspectRatio="aspect-[16/10]" className="rounded-[20px]" />
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-[28px] border border-ink/10 bg-paper p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Project type</p>
                <p className="mt-3 text-xl font-semibold text-ink">{project.projectType}</p>
              </div>
              <div className="rounded-[28px] border border-ink/10 bg-paper p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Purpose</p>
                <p className="mt-3 text-base leading-7 text-muted">{project.oneLinePurpose}</p>
              </div>
              <div className="rounded-[28px] border border-ink/10 bg-paper p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Business problem</p>
                <p className="mt-3 text-base leading-7 text-muted">{project.problem}</p>
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-[28px] border border-ink/10 bg-paper p-5">
              <h2 className="font-display text-3xl tracking-[-0.04em] text-ink">Key features</h2>
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
              <h2 className="font-display text-3xl tracking-[-0.04em] text-ink">What the experience offers</h2>
              <p className="mt-4 text-base leading-7 text-muted">The design focuses on clarity, trust, and a strong path from first visit to next action.</p>
              <a href="/?projectType=Business%20Website#contact" className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-white">
                Want something like this? Start a project <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
