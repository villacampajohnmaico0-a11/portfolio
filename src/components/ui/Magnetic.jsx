import { useRef } from 'react'

export default function Magnetic({ children, className = '', disabled = false }) {
  const ref = useRef(null)

  const handleMove = (event) => {
    if (disabled || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const x = event.clientX - (rect.left + rect.width / 2)
    const y = event.clientY - (rect.top + rect.height / 2)
    ref.current.style.transform = `translate(${x * 0.12}px, ${y * 0.12}px)`
  }

  const handleLeave = () => {
    if (ref.current) ref.current.style.transform = 'translate(0, 0)'
  }

  return (
    <div ref={ref} onMouseMove={handleMove} onMouseLeave={handleLeave} className={`transition-transform duration-200 ${className}`}>
      {children}
    </div>
  )
}
