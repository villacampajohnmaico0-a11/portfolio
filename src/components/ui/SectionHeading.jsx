export default function SectionHeading({ eyebrow, title, description, align = 'left', dark = false }) {
  const alignClasses = align === 'center' ? 'mx-auto text-center' : 'text-left'
  return (
    <div className={`max-w-2xl ${alignClasses}`}>
      {eyebrow && (
        <p className={`mb-3 text-eyebrow font-semibold uppercase ${dark ? 'text-white/80' : 'text-accent'}`}>
          {eyebrow}
        </p>
      )}
      <h2 className={`text-section ${dark ? 'text-white' : 'text-ink'}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-5 text-body-lg ${dark ? 'text-white/80' : 'text-muted'}`}>{description}</p>
      )}
    </div>
  )
}
