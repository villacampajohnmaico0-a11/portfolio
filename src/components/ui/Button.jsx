import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Button({ children, variant = 'primary', className = '', href, to, onClick, type = 'button', ...props }) {
  const base = 'group inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-button font-semibold transition-all duration-200 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2'
  const variants = {
    primary: 'bg-accent text-white shadow-soft hover:-translate-y-0.5 hover:bg-[#2140d7]',
    secondary: 'border border-ink/10 bg-white text-ink hover:-translate-y-0.5 hover:border-accent hover:shadow-soft',
    dark: 'bg-ink text-white hover:bg-ink-2',
    ghost: 'bg-transparent text-ink hover:bg-white/70',
  }

  const content = (
    <>
      <span>{children}</span>
      <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
    </>
  )

  if (to) {
    return (
      <Link to={to} className={`${base} ${variants[variant]} ${className}`} onClick={onClick} {...props}>
        {content}
      </Link>
    )
  }

  if (href) {
    return <a href={href} className={`${base} ${variants[variant]} ${className}`} onClick={onClick} {...props}>{content}</a>
  }

  return (
    <button type={type} onClick={onClick} className={`${base} ${variants[variant]} ${className}`} {...props}>
      {content}
    </button>
  )
}
