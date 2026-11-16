import { ArrowUpRight, ExternalLink, Eye } from 'lucide-react'
import { Link } from 'react-router-dom'
import { projects } from '../../data/projects'
import Button from '../ui/Button'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'
import SmartImage from '../ui/SmartImage'

export default function Projects() {
  return (
    <section id="projects" className="bg-[#11151d] py-24 text-white md:py-28">
      <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Recent work"
            title="See what's possible."
            description="Real projects I've designed and built. Each one shows the kind of experience your business could have."
            dark
          />
        </Reveal>

        <div className="mt-12 space-y-8">
          <Reveal>
            <div className="overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-4 md:p-6">
              <div className="grid items-center gap-6 lg:grid-cols-[1.2fr_0.8fr]">
                <div className="overflow-hidden rounded-[24px] border border-white/10 bg-[#1c2332] p-3">
                  <SmartImage src={projects[0].image} alt={`${projects[0].name} project preview`} className="rounded-[20px]" fallbackTitle={projects[0].name} aspectRatio="aspect-[16/10]" />
                </div>
                <div>
                  <div className="mb-3 inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/70">
                    {projects[0].category}
                  </div>
                  <h3 className="font-display text-3xl tracking-[-0.04em] text-white md:text-5xl">{projects[0].name}</h3>
                  <p className="mt-4 text-base leading-7 text-white/75">{projects[0].oneLinePurpose}</p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <a href={projects[0].url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-ink">
                      View Live Site <ExternalLink className="h-4 w-4" />
                    </a>
                    <Link to={`/work/${projects[0].slug}`} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-transparent px-4 py-2.5 text-sm font-semibold text-white">
                      View Details <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {projects.slice(1).map((project, index) => (
              <Reveal key={project.slug} delay={index * 0.08}>
                <article className="group overflow-hidden rounded-[28px] border border-white/10 bg-white/5 p-3 transition hover:-translate-y-1">
                  <div className="overflow-hidden rounded-[22px] border border-white/10 bg-[#1a1f2d]">
                    <SmartImage src={project.image} alt={`${project.name} preview`} className="rounded-[20px]" fallbackTitle={project.name} aspectRatio="aspect-[4/3]" />
                  </div>
                  <div className="mt-4">
                    <div className="mb-2 inline-flex rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/70">
                      {project.category}
                    </div>
                    <h3 className="font-display text-2xl tracking-[-0.04em] text-white">{project.name}</h3>
                    <p className="mt-2 text-sm leading-6 text-white/70">{project.oneLinePurpose}</p>
                    <div className="mt-4 flex items-center justify-between gap-2">
                      <a href={project.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-sm font-semibold text-white">
                        View Live Site <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                      <Link to={`/work/${project.slug}`} className="inline-flex items-center gap-1 text-sm font-semibold text-white/80">
                        Details <Eye className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
