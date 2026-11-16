import { ArrowRight, BadgeCheck, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'
import { site } from '../../data/site'
import { images } from '../../data/images'
import Button from '../ui/Button'
import Magnetic from '../ui/Magnetic'
import Marquee from '../ui/Marquee'
import ParallaxLayer from '../ui/ParallaxLayer'
import SplitText from '../ui/SplitText'

const marqueeItems = ['Online stores', 'Booking systems', 'Business websites', 'Dashboards', 'Restaurant menus']

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-paper pb-16 pt-28 md:pt-32 md:pb-20">
      <div className="absolute inset-x-0 top-0 h-56 bg-[radial-gradient(circle_at_top,_rgba(47,75,255,0.12),_transparent_55%)]" />
      <div className="absolute -left-16 top-24 h-64 w-64 rounded-full bg-[#C9B8FF]/35 blur-3xl" />
      <div className="absolute right-0 top-10 h-72 w-72 rounded-full bg-[#FF6B4A]/12 blur-3xl" />

      <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="relative z-10">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-white/75 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.28em] text-accent backdrop-blur-sm">
              <BadgeCheck className="h-3.5 w-3.5" />
              Business growth partner
            </div>

            <h1 className="max-w-xl font-display text-[clamp(3.2rem,8vw,8rem)] leading-[0.8] tracking-[-0.06em] text-ink">
              <SplitText
                text="Your business deserves"
                className="mb-2 block"
              />
              <span className="mt-2 block">
                <SplitText
                  text="more than"
                  className="mr-3 inline-block"
                />
                <span className="font-serif italic text-accent">just a website.</span>
              </span>
            </h1>

            <div className="mt-6 flex items-center gap-4">
              <svg viewBox="0 0 180 24" className="h-5 w-32 text-accent" aria-hidden="true">
                <path d="M5 16c32-16 65-16 96 0 16 8 28 8 48 0 17-8 26-8 38 0" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-muted">Client-first design</span>
            </div>

            <p className="mt-6 max-w-xl text-lg leading-8 text-muted">
              {site.hero.supportingText}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Magnetic>
                <Button href="#contact">Build My Website</Button>
              </Magnetic>
              <Magnetic>
                <Button href="#projects" variant="secondary">Explore Our Work</Button>
              </Magnetic>
              <div className="flex items-center gap-3 rounded-full border border-ink/10 bg-white/80 px-3 py-2 shadow-soft">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-accent text-white">
                  <Sparkles className="h-4 w-4" />
                </div>
                <div className="text-left">
                  <div className="text-[10px] uppercase tracking-[0.22em] text-muted">Studio</div>
                  <div className="text-sm font-semibold text-ink">Strategy-led builds</div>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {site.hero.chips.map((chip) => (
                <span key={chip} className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white/80 px-3 py-1.5 text-sm text-ink shadow-sm">
                  <span className="h-2 w-2 rounded-full bg-pop" />
                  {chip}
                </span>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[620px]">
            <div className="relative flex min-h-[560px] items-center justify-center">
              <ParallaxLayer className="absolute left-0 top-10 z-10 w-[54%] -rotate-6" offset={18}>
                <div className="overflow-hidden rounded-[30px] border border-ink/10 bg-white p-2 shadow-soft">
                  <img src={images.storefront.src} alt={images.storefront.alt} className="h-52 w-full rounded-[22px] object-cover" style={{ objectPosition: images.storefront.focalPoint }} />
                  <div className="mt-3 rounded-[18px] bg-paper p-3">
                    <div className="mb-2 flex items-center justify-between text-[10px] uppercase tracking-[0.22em] text-muted">
                      <span>Spring edit</span>
                      <span>New arrival</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-sm text-ink">
                      <div className="rounded-[14px] bg-[#F0E3D8] p-2">
                        <div className="mb-2 h-12 rounded-[10px] bg-[#D9E2FF]" />
                        <div className="font-semibold">Coastal tote</div>
                        <div className="text-muted">$84</div>
                      </div>
                      <div className="rounded-[14px] bg-[#EDE7DA] p-2">
                        <div className="mb-2 h-12 rounded-[10px] bg-[#DDE3FF]" />
                        <div className="font-semibold">Cityline</div>
                        <div className="text-muted">$68</div>
                      </div>
                    </div>
                  </div>
                </div>
              </ParallaxLayer>

              <ParallaxLayer className="absolute right-0 top-4 z-20 w-[50%] rotate-3" offset={28}>
                <div className="rounded-[30px] bg-[#111827] p-3 shadow-soft">
                  <div className="mb-4 flex items-center justify-between text-white">
                    <div>
                      <div className="text-[10px] uppercase tracking-[0.22em] text-white/60">Overview</div>
                      <div className="text-lg font-semibold">Ops dashboard</div>
                    </div>
                    <span className="rounded-full bg-white/10 px-2 py-1 text-[10px] uppercase tracking-[0.2em] text-white/80">Live</span>
                  </div>
                  <div className="rounded-[20px] bg-white/5 p-3">
                    <div className="flex h-20 items-end gap-2">
                      {[30, 50, 44, 70, 82, 64, 96].map((height) => (
                        <div key={height} className="flex-1 rounded-t-[10px] bg-gradient-to-t from-accent to-[#A9B4FF]" style={{ height: `${height}%` }} />
                      ))}
                    </div>
                    <div className="mt-3 grid grid-cols-2 gap-2 text-white">
                      <div className="rounded-[12px] bg-white/5 p-2 text-xs">128 orders</div>
                      <div className="rounded-[12px] bg-white/5 p-2 text-xs">34 leads</div>
                    </div>
                  </div>
                </div>
              </ParallaxLayer>

              <ParallaxLayer className="absolute bottom-10 left-10 z-30 w-[38%]" offset={30}>
                <div className="rounded-[28px] bg-[#f5efe8] p-3 shadow-soft">
                  <div className="mb-3 flex items-center justify-between">
                    <div>
                      <div className="text-[10px] uppercase tracking-[0.22em] text-muted">Stay</div>
                      <div className="text-lg font-semibold text-ink">Harbor View</div>
                    </div>
                    <span className="rounded-full bg-[#FFF1B5] px-2 py-1 text-xs font-semibold text-ink">4.9</span>
                  </div>
                  <div className="overflow-hidden rounded-[18px]">
                    <img src={images.hotel.src} alt={images.hotel.alt} className="h-28 w-full object-cover" style={{ objectPosition: images.hotel.focalPoint }} />
                  </div>
                  <div className="mt-3 grid grid-cols-2 gap-2 text-sm text-ink">
                    <div className="rounded-[12px] bg-white p-2">Jun 18</div>
                    <div className="rounded-[12px] bg-white p-2">Jun 22</div>
                  </div>
                  <button type="button" className="mt-3 w-full rounded-full bg-accent px-4 py-2 text-sm font-semibold text-white">Check availability</button>
                </div>
              </ParallaxLayer>

              <ParallaxLayer className="absolute bottom-0 right-4 z-40 w-[28%]" offset={24}>
                <div className="rounded-[28px] bg-[#121522] p-2.5 shadow-soft">
                  <div className="mb-2 flex items-center justify-between rounded-[18px] bg-[#1c2233] px-2 py-2 text-white">
                    <span className="text-xs font-semibold">La Maison</span>
                    <span className="h-2.5 w-2.5 rounded-full bg-pop" />
                  </div>
                  <div className="rounded-[18px] bg-[#F5EFE7] p-2">
                    <img src={images.cafe.src} alt={images.cafe.alt} className="h-28 w-full rounded-[12px] object-cover" style={{ objectPosition: images.cafe.focalPoint }} />
                    <div className="mt-2 space-y-2 text-[11px] text-ink">
                      <div className="flex items-center justify-between rounded-full bg-white px-2 py-1"><span>Roasted pasta</span><span>$18</span></div>
                      <div className="flex items-center justify-between rounded-full bg-white px-2 py-1"><span>Salmon</span><span>$24</span></div>
                    </div>
                  </div>
                </div>
              </ParallaxLayer>

              <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }} className="absolute left-1/2 top-6 -translate-x-1/2 rounded-full border border-ink/10 bg-white/80 px-3 py-1.5 text-[10px] uppercase tracking-[0.22em] text-ink shadow-soft">New booking</motion.div>
              <motion.div animate={{ y: [0, 12, 0] }} transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }} className="absolute right-6 top-1/3 rounded-full border border-ink/10 bg-white/80 px-3 py-1.5 text-[10px] uppercase tracking-[0.22em] text-ink shadow-soft">Order placed</motion.div>
              <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }} className="absolute bottom-14 right-12 rounded-full border border-ink/10 bg-white/80 px-3 py-1.5 text-[10px] uppercase tracking-[0.22em] text-ink shadow-soft">Mobile ready</motion.div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 border-y border-ink/10 bg-white/40 backdrop-blur-sm">
        <Marquee items={marqueeItems} />
      </div>

      <a href="#contact" className="fixed bottom-5 left-1/2 z-50 -translate-x-1/2 rounded-full bg-accent px-4 py-3 text-sm font-semibold text-white shadow-soft md:hidden">
        Start a Project
      </a>
    </section>
  )
}
