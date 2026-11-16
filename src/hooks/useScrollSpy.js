import { useEffect, useState } from 'react'

export function useScrollSpy(sectionIds = []) {
  const [activeId, setActiveId] = useState(sectionIds[0] || '')

  useEffect(() => {
    if (!sectionIds.length) return undefined

    const handleScroll = () => {
      const offsets = sectionIds
        .map((id) => {
          const element = document.getElementById(id)
          if (!element) return null
          const rect = element.getBoundingClientRect()
          return { id, top: Math.abs(rect.top) }
        })
        .filter(Boolean)
        .sort((a, b) => a.top - b.top)

      if (offsets.length) {
        setActiveId(offsets[0].id)
      }
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [sectionIds])

  return activeId
}
