import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { OverlayContext } from './OverlayContext'

export function OverlayProvider({ children }) {
  const [overlay, setOverlay] = useState(null)
  const [overlayActive, setOverlayActive] = useState(false)
  const overlayRef = useRef(null)
  const hasOverlayHistory = useRef(false)
  const openerRef = useRef(null)
  const restoreFocusRef = useRef(true)
  const location = useLocation()
  const navigate = useNavigate()

  const openOverlay = useCallback((nextOverlay) => {
    if (!overlayRef.current) {
      openerRef.current = document.activeElement
      restoreFocusRef.current = true
      hasOverlayHistory.current = true
      setOverlayActive(true)
      navigate(`${location.pathname}${location.search}${location.hash}`, {
        state: { ...location.state, __overlay: true },
      })
    }

    overlayRef.current = nextOverlay
    setOverlay(nextOverlay)
  }, [location, navigate])

  const closeOverlay = useCallback(({ restoreHistory = true, restoreFocus = true } = {}) => {
    if (!overlayRef.current) return

    overlayRef.current = null
    restoreFocusRef.current = restoreFocus
    openerRef.current = restoreFocus ? openerRef.current : null
    setOverlay(null)

    if (restoreHistory && hasOverlayHistory.current) {
      hasOverlayHistory.current = false
      navigate(-1)
    } else {
      hasOverlayHistory.current = false
    }
  }, [navigate])

  const requestQuote = useCallback((projectType) => {
    const replaceCurrentEntry = hasOverlayHistory.current
    closeOverlay({ restoreHistory: false, restoreFocus: false })
    navigate({
      pathname: '/',
      search: `?projectType=${encodeURIComponent(projectType)}`,
      hash: '#contact',
    }, { replace: replaceCurrentEntry })
  }, [closeOverlay, navigate])

  const restoreFocus = useCallback(() => {
    if (!restoreFocusRef.current) return
    openerRef.current?.focus?.()
    openerRef.current = null
    restoreFocusRef.current = true
  }, [])

  const finishOverlay = useCallback(() => {
    if (overlayRef.current) return
    setOverlayActive(false)
    restoreFocus()
  }, [restoreFocus])

  useEffect(() => {
    const onPopState = () => {
      if (!overlayRef.current) return
      hasOverlayHistory.current = false
      restoreFocusRef.current = true
      overlayRef.current = null
      setOverlay(null)
    }

    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [])

  const value = useMemo(() => ({
    overlay,
    overlayOpen: Boolean(overlay),
    overlayActive,
    openOverlay,
    closeOverlay,
    requestQuote,
    finishOverlay,
  }), [overlay, overlayActive, openOverlay, closeOverlay, requestQuote, finishOverlay])

  return <OverlayContext.Provider value={value}>{children}</OverlayContext.Provider>
}
