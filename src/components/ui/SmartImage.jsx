import { useState } from 'react'

export default function SmartImage({ src, alt, className = '', fallbackTitle = '', aspectRatio = 'aspect-[16/10]' }) {
  const [hasError, setHasError] = useState(false)

  if (!src || hasError) {
    return (
      <div className={`${aspectRatio} ${className} flex items-center justify-center overflow-hidden rounded-[24px] bg-gradient-to-br from-accent-soft via-white to-paper-2`}>
        <div className="flex flex-col items-center gap-2 text-center text-ink">
          <div className="h-10 w-10 rounded-full border border-ink/10 bg-white/80" />
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-muted">
            {fallbackTitle || 'Project preview'}
          </span>
        </div>
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      className={`${className} ${aspectRatio} w-full object-cover`}
      onError={() => setHasError(true)}
    />
  )
}
