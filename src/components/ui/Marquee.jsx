export default function Marquee({ items, className = '' }) {
  const list = [...items, ...items]

  return (
    <div className={`overflow-hidden ${className}`}>
      <div className="flex min-w-max animate-[marquee_18s_linear_infinite] items-center gap-8 whitespace-nowrap py-4 text-[clamp(1.5rem,2vw,3rem)] font-display uppercase tracking-[-0.05em] text-ink/80">
        {list.map((item, index) => (
          <span key={`${item}-${index}`} className="inline-flex items-center gap-5">
            <span className="font-semibold">{item}</span>
            <span className="text-accent">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}
