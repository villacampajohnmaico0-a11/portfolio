export default function SectionHeading({ eyebrow, title, description, align = 'left', dark = false }) {
  const alignClasses = align === 'center' ? 'mx-auto text-center' : 'text-left'
  return (
    <div className={`max-w-2xl ${alignClasses}`}>
      {eyebrow && (
        <p className={`mb-3 text-xs font-semibold uppercase tracking-[0.22em] ${dark ? 'text-white/70' : 'text-accent'}`}>
          {eyebrow}
        </p>
      )}
      <h2 className={`font-display text-[clamp(2rem,4.5vw,3.75rem)] leading-[0.95] tracking-[-0.04em] ${dark ? 'text-white' : 'text-ink'}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-5 text-base leading-7 ${dark ? 'text-white/75' : 'text-muted'}`}>{description}</p>
      )}
    </div>
  )
}
