import { Home } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <main className="bg-paper px-4 py-32">
      <div className="mx-auto max-w-xl rounded-[28px] border border-ink/10 bg-white p-8 text-center shadow-soft">
        <h1 className="text-hero text-ink">Page not found.</h1>
        <p className="mt-4 text-body text-muted">The page you were looking for does not exist.</p>
        <Link to="/" className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-button font-semibold text-white">
          <Home className="h-4 w-4" /> Return home
        </Link>
      </div>
    </main>
  )
}
