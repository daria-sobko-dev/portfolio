import { useEffect, useRef, useState } from 'react'
import './CustomCursor.css'

/**
 * Custom cursor — two circles (reference: .circle-cursor--outer 30px / --inner 6px).
 * Outer lags slightly (transition .08s ease-out), inner tracks instantly.
 * Toggleable: pass `enabled={false}` to disable (also auto-off on touch devices).
 */
export default function CustomCursor({ enabled = true }) {
  const outerRef = useRef(null)
  const innerRef = useRef(null)
  const [hovering, setHovering] = useState(false)

  // detect touch / coarse pointer — no custom cursor there
  const isCoarse =
    typeof window !== 'undefined' &&
    window.matchMedia &&
    window.matchMedia('(pointer: coarse)').matches

  const active = enabled && !isCoarse

  useEffect(() => {
    if (!active) return

    document.body.classList.add('custom-cursor-active')

    const move = (e) => {
      const { clientX: x, clientY: y } = e
      if (outerRef.current) {
        outerRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`
      }
      if (innerRef.current) {
        innerRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`
      }
    }

    const over = (e) => {
      if (e.target.closest('a, button, [data-cursor-hover]')) setHovering(true)
    }
    const out = (e) => {
      if (e.target.closest('a, button, [data-cursor-hover]')) setHovering(false)
    }

    window.addEventListener('mousemove', move)
    document.addEventListener('mouseover', over)
    document.addEventListener('mouseout', out)

    return () => {
      document.body.classList.remove('custom-cursor-active')
      window.removeEventListener('mousemove', move)
      document.removeEventListener('mouseover', over)
      document.removeEventListener('mouseout', out)
    }
  }, [active])

  if (!active) return null

  return (
    <>
      <div
        ref={outerRef}
        className={`circle-cursor circle-cursor--outer${hovering ? ' is-hover' : ''}`}
      />
      <div
        ref={innerRef}
        className={`circle-cursor circle-cursor--inner${hovering ? ' is-hover' : ''}`}
      />
    </>
  )
}
