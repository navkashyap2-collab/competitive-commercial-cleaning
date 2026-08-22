import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion.js'

const INTERACTIVE_SELECTOR = 'a, button, [role="button"], input, textarea, select'

export default function MagneticCursor() {
  const reducedMotion = usePrefersReducedMotion()
  const [enabled, setEnabled] = useState(false)
  const hoveringRef = useRef(false)

  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const scale = useMotionValue(1)
  const springX = useSpring(x, { stiffness: 900, damping: 40, mass: 0.25 })
  const springY = useSpring(y, { stiffness: 900, damping: 40, mass: 0.25 })
  const springScale = useSpring(scale, { stiffness: 400, damping: 28 })

  useEffect(() => {
    const isFinePointer = window.matchMedia('(pointer: fine)').matches
    setEnabled(isFinePointer && !reducedMotion)
  }, [reducedMotion])

  useEffect(() => {
    if (!enabled) return

    document.documentElement.classList.add('custom-cursor-active')

    const onMove = (e) => {
      x.set(e.clientX)
      y.set(e.clientY)
      const isHovering = !!e.target.closest(INTERACTIVE_SELECTOR)
      if (isHovering !== hoveringRef.current) {
        hoveringRef.current = isHovering
        scale.set(isHovering ? 2.4 : 1)
      }
    }

    window.addEventListener('pointermove', onMove, { passive: true })
    return () => {
      window.removeEventListener('pointermove', onMove)
      document.documentElement.classList.remove('custom-cursor-active')
    }
  }, [enabled, x, y, scale])

  if (!enabled) return null

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[100] h-[18px] w-[18px] rounded-full will-change-transform"
      style={{
        x: springX,
        y: springY,
        scale: springScale,
        translateX: '-50%',
        translateY: '-50%',
        border: '1.5px solid rgba(34,211,238,0.85)',
        background: 'rgba(34,211,238,0.25)',
      }}
    />
  )
}
