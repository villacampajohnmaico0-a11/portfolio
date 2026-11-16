import { ArrowUp, Globe, Mail, MapPin, MessageCircle, Send } from 'lucide-react'
import { site } from '../../data/site'

const socials = [
  { label: 'LinkedIn', href: site.linkedIn || '#', icon: Globe },
  { label: 'Instagram', href: site.instagram || '#', icon: Send },
  { label: 'Facebook', href: site.facebook || '#', icon: MessageCircle },
]

export default function Footer() {
  const year = new Date().getFullYear()

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-[#0d1117] text-white">
      <div className="mx-auto max-w-site px-4 py-14 sm:px-6 lg:px-8">
        <div className="rounded-[32px] border border-white/10 bg-white/5 p-6 sm:p-8">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-sm font-bold text-white">N</div>
                <div>
                  <div className="font-display text-xl tracking-[-0.04em]">{site.brandName}</div>
                  <div className="text-sm text-white/70">{site.businessDescription}</div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white/60">Navigate</h3>
              <ul className="mt-4 space-y-2 text-sm text-white/75">
                {site.footerLinks.map((link) => (
                  <li key={link.label}><a href={link.href}>{link.label}</a></li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white/60">Services</h3>
              <ul className="mt-4 space-y-2 text-sm text-white/75">
                {site.services.map((service) => (
                  <li key={service}><a href="#solutions">{service}</a></li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white/60">Contact</h3>
              <ul className="mt-4 space-y-3 text-sm text-white/75">
                <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> <a href={`mailto:${site.email}`}>{site.email}</a></li>
                <li className="flex items-center gap-2"><MapPin className="h-4 w-4" /> <span>Worldwide</span></li>
                <li className="flex items-center gap-2"><MessageCircle className="h-4 w-4" /> <span>{site.phone}</span></li>
              </ul>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-4 border-t border-white/10 pt-6 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-3">
              {socials.filter((item) => item.href && item.href !== '#').map((social) => {
                const Icon = social.icon
                return (
                  <a key={social.label} href={social.href} target="_blank" rel="noreferrer" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/80 transition hover:bg-white hover:text-ink">
                    <Icon className="h-4 w-4" />
                  </a>
                )
              })}
            </div>
            <div className="text-sm text-white/70">© {year} {site.brandName}. All rights reserved.</div>
            <button type="button" onClick={handleScrollTop} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white">
              Back to top <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
