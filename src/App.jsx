import { Route, Routes, useLocation } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import Lenis from 'lenis'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import ScrollProgress from './components/layout/ScrollProgress'
import CursorFollower from './components/ui/CursorFollower'
import OverlayHost from './components/ui/OverlayHost'
import { useOverlay } from './hooks/useOverlay'
import Home from './pages/Home'
import ProjectDetail from './pages/ProjectDetail'
import NotFound from './pages/NotFound'

function App() {
  const location = useLocation()
  const previousPath = useRef(location.pathname)
  const lenisRef = useRef(null)
  const { overlayActive } = useOverlay()

  useEffect(() => {
    const lenis = new Lenis({ duration: 1.1, smoothWheel: true })
    lenisRef.current = lenis
    let rafId = null

    const raf = (time) => {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }

    rafId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
      lenisRef.current = null
    }
  }, [])

  useEffect(() => {
    if (overlayActive) lenisRef.current?.stop()
    else lenisRef.current?.start()
  }, [overlayActive])

  useEffect(() => {
    const pathChanged = previousPath.current !== location.pathname
    previousPath.current = location.pathname

    const frame = requestAnimationFrame(() => {
      if (location.hash) {
        document.getElementById(decodeURIComponent(location.hash.slice(1)))?.scrollIntoView({
          behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
          block: 'start',
        })
      } else if (pathChanged) {
        window.scrollTo({ top: 0, behavior: 'auto' })
      }
    })

    return () => cancelAnimationFrame(frame)
  }, [location.pathname, location.hash])

  return (
    <>
      <div className="min-h-screen bg-paper text-ink">
        <CursorFollower />
        <ScrollProgress />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work/:slug" element={<ProjectDetail />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
      <OverlayHost />
    </>
  )
}

export default App
