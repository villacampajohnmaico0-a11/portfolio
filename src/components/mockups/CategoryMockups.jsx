import { ArrowRight, Calendar, CreditCard, Image, Mail, Rocket, UserCircle } from 'lucide-react'

export function WeddingInvitation() {
  return (
    <div className="rounded-[24px] border border-[#c9b8ff]/40 bg-[#c9b8ff]/10 p-6 shadow-soft text-[#5b4bff]">
      <div className="flex items-center justify-between mb-6">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#c9b8ff] text-white text-xs font-bold">N</div>
        <div className="text-right">
          <p className="text-xs uppercase tracking-widest text-[#5b4bff]/70">You are invited</p>
          <p className="text-xl font-semibold">Harper &amp; Leo</p>
        </div>
      </div>
      <div className="rounded-[20px] bg-white/60 p-4 border border-[#c9b8ff]/30">
        <p className="mb-4 text-center text-[#5b4bff]">Saturday, 14 June 2025 · 4:00 PM</p>
        <div className="grid gap-3 sm:grid-cols-2 text-sm">
          <div className="p-3 rounded-[14px] bg-[#c9b8ff]/20 border border-[#c9b8ff]/20">
            <Calendar className="h-5 w-5 mb-2 text-[#c9b8ff]" />
            <p className="font-semibold">The Garden Hall</p>
            <p className="text-xs text-[#5b4bff]/60">12 Bloom Lane, Eastside</p>
          </div>
          <div className="p-3 rounded-[14px] bg-[#c9b8ff]/20 border border-[#c9b8ff]/20">
            <Mail className="h-5 w-5 mb-2 text-[#c9b8ff]" />
            <p className="font-semibold">RSVP by 1 June</p>
            <p className="text-xs text-[#5b4bff]/60">harperandleo.example</p>
          </div>
        </div>
      </div>
      <div className="mt-6 flex items-center gap-2 text-[#c9b8ff]">
        <ArrowRight className="h-4 w-4" /> View full invitation
      </div>
    </div>
  )
}

export function Storefront() {
  return (
    <div className="rounded-[24px] border border-[#ffe58a]/40 bg-[#ffe58a]/12 p-6 shadow-soft text-[#8a6d00]">
      <div className="flex items-center justify-between mb-6">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#ffe58a] text-white text-xs font-bold">N</div>
        <div className="text-right">
          <p className="text-xs uppercase tracking-widest text-[#8a6d00]/70">Your store</p>
          <p className="text-xl font-semibold">New Collection</p>
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-[20px] bg-white/60 p-4 border border-[#ffe58a]/30">
          <div className="mb-3 h-32 rounded-[16px] bg-[#ffe58a]/40" />
          <p className="text-sm font-semibold">Coastal Tote</p>
          <p className="mt-1 text-xs text-[#8a6d00]/60">View item</p>
        </div>
        <div className="rounded-[20px] bg-white/60 p-4 border border-[#ffe58a]/30">
          <div className="mb-3 h-32 rounded-[16px] bg-[#ffe58a]/40" />
          <p className="text-sm font-semibold">Cityline Jacket</p>
          <p className="mt-1 text-xs text-[#8a6d00]/60">View item</p>
        </div>
        <div className="rounded-[20px] bg-white/60 p-4 border border-[#ffe58a]/30">
          <div className="mb-3 h-32 rounded-[16px] bg-[#ffe58a]/40" />
          <p className="text-sm font-semibold">Field Coat</p>
          <p className="mt-1 text-xs text-[#8a6d00]/60">View item</p>
        </div>
        <div className="rounded-[20px] bg-white/60 p-4 border border-[#ffe58a]/30 flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold">Checkout</p>
            <p className="text-xs text-[#8a6d00]/60">Secure payment</p>
          </div>
          <CreditCard className="h-5 w-5 text-[#8a6d00]" />
        </div>
      </div>
    </div>
  )
}

export function BookingCalendar() {
  return (
    <div className="rounded-[24px] border border-[#bdefd8]/40 bg-[#bdefd8]/12 p-6 shadow-soft text-[#1f8a55]">
      <div className="flex items-center justify-between mb-6">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#bdefd8] text-white text-xs font-bold">N</div>
        <div className="text-right">
          <p className="text-xs uppercase tracking-widest text-[#1f8a55]/70">Book a table</p>
          <p className="text-xl font-semibold">Friday, 18 July</p>
        </div>
      </div>
      <div className="grid gap-2 sm:grid-cols-4">
        {[10, 11, 12, 13, 14, 15, 16, 17].map((hour) => (
          <button
            key={hour}
            className={`px-3 py-2 rounded-[12px] text-sm font-medium transition ${
              hour % 2 === 0
                ? 'bg-[#bdefd8] text-white'
                : 'border border-[#bdefd8]/40 text-[#1f8a55] hover:bg-[#bdefd8]/30'
            }`}
          >
            {hour}:00
          </button>
        ))}
      </div>
      <div className="mt-6 rounded-[20px] bg-white/60 p-4 border border-[#bdefd8]/30">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-semibold">Confirmation</span>
          <span className="text-xs font-semibold text-[#1f8a55]">Confirmed</span>
        </div>
        <p className="text-sm text-[#1f8a55]/70">Table for 4 · 7:00 PM · You will receive a confirmation by email.</p>
      </div>
    </div>
  )
}

export function RestaurantMenu() {
  return (
    <div className="rounded-[24px] border border-[#ff6b4a]/40 bg-[#ff6b4a]/12 p-6 shadow-soft text-[#c03a20]">
      <div className="flex items-center justify-between mb-6">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#ff6b4a] text-white text-xs font-bold">N</div>
        <div className="text-right">
          <p className="text-xs uppercase tracking-widest text-[#c03a20]/70">Today's menu</p>
          <p className="text-xl font-semibold">Olive &amp; Vine</p>
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-[20px] bg-white/60 p-4 border border-[#ff6b4a]/30">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-semibold">Margherita Pizza</span>
            <span className="text-xs font-semibold text-[#c03a20]">$16</span>
          </div>
          <p className="text-xs text-[#c03a20]/60">Tomato, mozzarella, basil</p>
        </div>
        <div className="rounded-[20px] bg-white/60 p-4 border border-[#ff6b4a]/30">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-semibold">Caesar Salad</span>
            <span className="text-xs font-semibold text-[#c03a20]">$12</span>
          </div>
          <p className="text-xs text-[#c03a20]/60">Romaine, parmesan, croutons</p>
        </div>
        <div className="rounded-[20px] bg-white/60 p-4 border border-[#ff6b4a]/30 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image className="h-5 w-5 text-[#c03a20]" />
            <span className="text-sm font-semibold">Scan QR to order</span>
          </div>
          <div className="text-right">
            <p className="text-xs font-semibold text-[#c03a20]">Table 6</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export function Dashboard() {
  return (
    <div className="rounded-[24px] border border-[#14151a]/20 bg-[#14151a]/5 p-6 shadow-soft text-[#14151a]">
      <div className="flex items-center justify-between mb-6">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#14151a] text-white text-xs font-bold">N</div>
        <div className="text-right">
          <p className="text-xs uppercase tracking-widest text-[#14151a]/50">Operations</p>
          <p className="text-xl font-semibold">Ops dashboard</p>
        </div>
      </div>
      <div className="grid gap-3 sm:grid-cols-3">
        {['Orders', 'New leads', 'Avg. time'].map((label) => (
          <div key={label} className="rounded-[16px] bg-white p-3 border border-[#14151a]/10">
            <div className="mb-2 text-xs uppercase tracking-[0.2em] text-[#14151a]/50">{label}</div>
            <div className="text-2xl font-bold">—</div>
          </div>
        ))}
      </div>
      <div className="mt-6 rounded-[18px] bg-white p-3 border border-[#14151a]/10">
        <div className="mb-3 flex items-center justify-between text-xs uppercase tracking-[0.2em] text-[#14151a]/50">
          <span>Performance</span>
          <span>Current period</span>
        </div>
        <div className="flex h-24 items-end gap-2">
          {[35, 52, 42, 68, 80, 62, 90].map((height) => (
            <div
              key={height}
              className="flex-1 rounded-t-[12px] bg-gradient-to-t from-[#2f4bff] to-[#a9b4ff]"
              style={{ height: `${height}%` }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export function BusinessSite() {
  return (
    <div className="rounded-[24px] border border-[#2f4bff]/40 bg-[#2f4bff]/10 p-6 shadow-soft text-[#1a33cc]">
      <div className="flex items-center justify-between mb-6">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2f4bff] text-white text-xs font-bold">N</div>
        <div className="text-right">
          <p className="text-xs uppercase tracking-widest text-[#1a33cc]/70">Business site</p>
          <p className="text-xl font-semibold">Rey Islakila</p>
        </div>
      </div>
      <div className="rounded-[20px] bg-white/60 p-4 border border-[#2f4bff]/30">
        <div className="mb-4 grid gap-3 md:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-[16px] bg-gradient-to-br from-[#dfe7ff] to-[#f5efe8] p-4">
            <div className="mb-3 h-24 rounded-[14px] bg-[#1a33cc]/20" />
            <div className="space-y-2">
              <div className="h-2.5 w-24 rounded-full bg-[#1a33cc]/30" />
              <div className="h-2.5 w-16 rounded-full bg-[#1a33cc]/20" />
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-sm font-semibold text-[#1a33cc]">Services</p>
            <p className="text-xs text-[#1a33cc]/60 mt-1">Web design · Branding</p>
            <p className="text-xs text-[#1a33cc]/60 mt-2">Portfolio · About</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export function CoursePlatform() {
  return (
    <div className="rounded-[24px] border border-[#c6f432]/45 bg-[#c6f432]/16 p-6 shadow-soft text-[#6f9a00]">
      <div className="flex items-center justify-between mb-6">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#c6f432] text-[#6f9a00] text-xs font-bold">N</div>
        <div className="text-right">
          <p className="text-xs uppercase tracking-widest text-[#6f9a00]/70">Learn online</p>
          <p className="text-xl font-semibold">Design Foundations</p>
        </div>
      </div>
      <div className="rounded-[20px] bg-white/60 p-4 border border-[#c6f432]/35">
        <div className="mb-4">
          <p className="text-xs uppercase tracking-widest text-[#6f9a00]/70">Module 1 · Layout</p>
          <div className="h-2 w-full rounded-full bg-[#c6f432]/30 mb-2">
            <div className="h-full rounded-full bg-[#c6f432]" style={{ width: '65%' }} />
          </div>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 text-sm">
          <div className="p-3 rounded-[14px] bg-[#c6f432]/25 border border-[#c6f432]/30">
            <p className="font-semibold">Lesson 1</p>
            <p className="text-xs text-[#6f9a00]/60">Grid and spacing</p>
          </div>
          <div className="p-3 rounded-[14px] bg-[#c6f432]/25 border border-[#c6f432]/30">
            <p className="font-semibold">Lesson 2</p>
            <p className="text-xs text-[#6f9a00]/60">Typography basics</p>
          </div>
          <div className="p-3 rounded-[14px] bg-[#c6f432]/25 border border-[#c6f432]/30">
            <p className="font-semibold">Certificate</p>
            <p className="text-xs text-[#6f9a00]/60">Earn on completion</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export function CustomerPortal() {
  return (
    <div className="rounded-[24px] border border-[#ede7da]/40 bg-[#ede7da]/15 p-6 shadow-soft text-[#14151a]">
      <div className="flex items-center justify-between mb-6">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#14151a] text-white text-xs font-bold">N</div>
        <div className="text-right">
          <p className="text-xs uppercase tracking-widest text-[#14151a]/50">Client portal</p>
          <p className="text-xl font-semibold">Your account</p>
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-[18px] bg-white p-4 border border-[#14151a]/10">
          <UserCircle className="h-6 w-6 mb-2 text-[#14151a]" />
          <p className="text-sm font-semibold">Profile</p>
          <p className="mt-1 text-xs text-[#14151a]/60">Edit your details</p>
        </div>
        <div className="rounded-[18px] bg-white p-4 border border-[#14151a]/10">
          <CreditCard className="h-6 w-6 mb-2 text-[#14151a]" />
          <p className="text-sm font-semibold">Invoices</p>
          <p className="mt-1 text-xs text-[#14151a]/60">View and download</p>
        </div>
        <div className="rounded-[18px] bg-white p-4 border border-[#14151a]/10">
          <Mail className="h-6 w-6 mb-2 text-[#14151a]" />
          <p className="text-sm font-semibold">Support</p>
          <p className="mt-1 text-xs text-[#14151a]/60">Open a ticket</p>
        </div>
        <div className="rounded-[18px] bg-white p-4 border border-[#14151a]/10">
          <Rocket className="h-6 w-6 mb-2 text-[#14151a]" />
          <p className="text-sm font-semibold">Orders</p>
          <p className="mt-1 text-xs text-[#14151a]/60">Track status</p>
        </div>
      </div>
    </div>
  )
}