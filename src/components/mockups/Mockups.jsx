import { Check, Search, ShoppingBag } from 'lucide-react'

export function StorefrontMockup() {
  return (
    <div className="rounded-[28px] border border-ink/10 bg-[#f8f3ec] p-4 shadow-soft">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-ink text-center text-xs font-bold leading-8 text-white">N</div>
          <span className="font-semibold text-ink">Your store</span>
        </div>
        <div className="flex gap-2 text-ink/60">
          <Search className="h-4 w-4" />
          <ShoppingBag className="h-4 w-4" />
        </div>
      </div>
      <div className="rounded-[22px] bg-white p-3">
        <div className="mb-3 flex items-center justify-between text-xs uppercase tracking-[0.2em] text-muted">
          <span>New Collection</span>
          <span>Current collection</span>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="overflow-hidden rounded-[22px] bg-gradient-to-br from-[#f0e2d7] to-[#dfe7ff] p-3">
            <div className="mb-3 h-32 rounded-[18px] bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.9),_rgba(0,0,0,0.08))]" />
            <div className="space-y-2">
              <div className="h-2.5 w-16 rounded-full bg-ink/20" />
              <div className="h-2.5 w-10 rounded-full bg-accent/30" />
              <div className="flex items-center justify-between text-sm font-semibold text-ink">
                <span>Coastal Tote</span>
                <span>View item</span>
              </div>
            </div>
          </div>
          <div className="space-y-3">
            {['Sandstone', 'Cityline', 'Field Coat'].map((item, index) => (
              <div key={item} className="rounded-[18px] bg-paper p-3">
                <div className={`mb-3 h-16 rounded-[14px] ${index % 2 ? 'bg-[#ede7da]' : 'bg-[#dde3ff]'}`} />
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium text-ink">{item}</span>
                  <span className="text-muted">View item</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export function BusinessSiteMockup() {
  return (
    <div className="rounded-[28px] border border-ink/10 bg-white p-4 shadow-soft">
      <div className="mb-4 flex items-center justify-between rounded-2xl border border-ink/10 bg-paper px-3 py-2">
        <div className="flex items-center gap-2">
          <div className="h-7 w-7 rounded-full bg-accent-soft text-center text-xs font-bold leading-7 text-accent">N</div>
          <span className="font-semibold text-ink">Islakila</span>
        </div>
        <div className="hidden gap-3 text-xs text-muted sm:flex">
          <span>Services</span>
          <span>Portfolio</span>
          <span>About</span>
        </div>
      </div>
      <div className="rounded-[24px] bg-paper p-3">
        <div className="mb-4 grid gap-3 md:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-[20px] bg-gradient-to-br from-[#dfe7ff] to-[#f5efe8] p-4">
            <div className="mb-4 h-2.5 w-24 rounded-full bg-ink/20" />
            <div className="mb-3 h-3.5 w-40 rounded-full bg-ink/15" />
            <div className="mb-5 h-24 rounded-[16px] bg-white/60" />
            <div className="flex gap-2">
              <span className="rounded-full bg-white px-3 py-1 text-xs text-ink">Web design</span>
              <span className="rounded-full bg-white px-3 py-1 text-xs text-ink">Strategy</span>
            </div>
          </div>
          <div className="space-y-3">
            <div className="rounded-[20px] bg-white p-3">
              <div className="mb-2 h-2.5 w-16 rounded-full bg-ink/20" />
              <div className="h-14 rounded-[14px] bg-[#f0e7d7]" />
            </div>
            <div className="rounded-[20px] bg-ink p-3 text-white">
              <div className="mb-2 h-2.5 w-20 rounded-full bg-white/40" />
              <div className="h-12 rounded-[14px] bg-white/10" />
            </div>
          </div>
        </div>
        <div className="grid gap-3 md:grid-cols-3">
          {['Brand strategy', 'Web presence', 'Growth systems'].map((item) => (
            <div key={item} className="rounded-[18px] bg-white p-3">
              <div className="mb-2 h-2.5 w-12 rounded-full bg-accent/20" />
              <div className="h-16 rounded-[14px] bg-paper-2" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export function BookingMockup() {
  return (
    <div className="rounded-[28px] bg-[#f4efe9] p-4 shadow-soft">
      <div className="rounded-[24px] bg-white p-4">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-muted">Stay</div>
            <div className="text-xl font-bold text-ink">Your stay</div>
          </div>
          <div className="flex items-center gap-1 rounded-full bg-[#fff7d6] px-2 py-1 text-xs font-medium text-ink">
            <span>Availability</span>
          </div>
        </div>
        <div className="mb-4 rounded-[20px] bg-[#e8eefc] p-3">
          <div className="mb-2 h-20 rounded-[16px] bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.9),_rgba(99,123,181,0.25))]" />
          <div className="grid grid-cols-2 gap-3 text-sm text-ink">
            <div className="rounded-[14px] bg-white p-2">
              <div className="mb-1 text-xs uppercase tracking-[0.1em] text-muted">Check in</div>
              <div className="font-semibold">Choose a date</div>
            </div>
            <div className="rounded-[14px] bg-white p-2">
              <div className="mb-1 text-xs uppercase tracking-[0.1em] text-muted">Check out</div>
              <div className="font-semibold">Choose a date</div>
            </div>
          </div>
        </div>
        <div className="mb-4 flex items-center justify-between rounded-2xl border border-ink/10 p-3">
          <div>
            <div className="text-sm font-semibold text-ink">Available room</div>
            <div className="text-xs text-muted">Room details</div>
          </div>
          <div className="text-right">
            <div className="text-xs text-muted">from</div>
            <div className="text-sm font-bold text-ink">View rates</div>
          </div>
        </div>
        <span aria-hidden="true" className="block w-full rounded-full bg-accent px-4 py-3 text-center text-button font-semibold text-white">
          Check availability
        </span>
      </div>
    </div>
  )
}

export function RestaurantMockup() {
  return (
    <div className="mx-auto max-w-[230px] rounded-[28px] bg-[#121522] p-3 shadow-soft">
      <div className="mb-3 flex items-center justify-between rounded-[18px] bg-[#1c2233] px-3 py-2 text-white">
        <div className="text-sm font-semibold">Your restaurant</div>
        <div className="h-2.5 w-2.5 rounded-full bg-pop" />
      </div>
      <div className="rounded-[20px] bg-[#f5efe7] p-3">
        <div className="mb-3 flex items-center justify-between text-xs font-medium text-muted">
          <span>Popular</span>
          <span>12 min</span>
        </div>
        <div className="space-y-3">
          {[
            ['Roasted tomato pasta', 'Menu item'],
            ['Citrus salmon', 'Menu item'],
            ['Garden herb salad', 'Menu item'],
          ].map(([item, cost]) => (
            <div key={item} className="rounded-[14px] bg-white p-2">
              <div className="mb-2 h-14 rounded-[12px] bg-gradient-to-br from-[#f3d7b7] via-[#ffe5d3] to-[#e7e7ef]" />
              <div className="flex items-center justify-between">
                <span className="font-medium text-ink">{item}</span>
                <span className="text-sm font-semibold text-ink">{cost}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export function DashboardMockup() {
  return (
    <div className="rounded-[28px] border border-ink/10 bg-[#111827] p-4 shadow-soft">
      <div className="mb-4 flex items-center justify-between text-white">
        <div>
          <div className="text-xs uppercase tracking-[0.2em] text-white/60">Overview</div>
          <div className="text-lg font-semibold">Ops dashboard</div>
        </div>
        <div className="rounded-full bg-white/10 px-2 py-1 text-xs text-white/80">Live</div>
      </div>
      <div className="grid gap-3 sm:grid-cols-3">
        {['Orders', 'New leads', 'Avg. time'].map((label) => (
          <div key={label} className="rounded-[18px] bg-white/5 p-3 text-white">
            <div className="mb-2 text-xs uppercase tracking-[0.2em] text-white/50">{label}</div>
            <div className="text-2xl font-bold">—</div>
          </div>
        ))}
      </div>
      <div className="mt-4 rounded-[18px] bg-white/5 p-3">
        <div className="mb-3 flex items-center justify-between text-xs uppercase tracking-[0.2em] text-white/50">
          <span>Performance</span>
          <span>Current period</span>
        </div>
        <div className="flex h-24 items-end gap-2">
          {[35, 52, 42, 68, 80, 62, 90].map((height) => (
            <div key={height} className="flex-1 rounded-t-[12px] bg-gradient-to-t from-accent to-[#a9b4ff]" style={{ height: `${height}%` }} />
          ))}
        </div>
      </div>
    </div>
  )
}

export function PropertyMockup() {
  return (
    <div className="rounded-[28px] border border-ink/10 bg-white p-4 shadow-soft">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <div className="text-xs uppercase tracking-[0.2em] text-muted">Featured</div>
          <div className="text-xl font-bold text-ink">Your property</div>
        </div>
        <div className="rounded-full bg-[#f0f3ff] px-2 py-1 text-xs font-semibold text-accent">Property details</div>
      </div>
      <div className="grid gap-3 md:grid-cols-2">
        <div className="rounded-[20px] bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.75),_rgba(109,132,184,0.18))] p-3">
          <div className="mb-3 h-24 rounded-[16px] bg-[#dfe7ff]" />
          <div className="space-y-2">
            <div className="h-2.5 w-24 rounded-full bg-ink/20" />
            <div className="h-2.5 w-14 rounded-full bg-accent/30" />
          </div>
        </div>
        <div className="space-y-3">
          {['2 Bed', 'City views', 'Private terrace'].map((item) => (
            <div key={item} className="rounded-[16px] bg-paper p-3">
              <div className="mb-2 h-10 rounded-[12px] bg-paper-2" />
              <div className="flex items-center justify-between">
                <span className="font-medium text-ink">{item}</span>
                <Check className="h-4 w-4 text-accent" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
