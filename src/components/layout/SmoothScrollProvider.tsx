import Lenis from 'lenis'
import { useEffect, type ReactNode } from 'react'
import { getGsap } from '@/lib/gsap'
import { useReducedMotion } from '@/hooks/use-reduced-motion'

export function SmoothScrollProvider({ children }: Readonly<{ children: ReactNode }>) {
  const reducedMotion = useReducedMotion()

  useEffect(() => {
    if (reducedMotion) return

    const { gsap, ScrollTrigger } = getGsap()
    const lenis = new Lenis({ duration: 1.1, smoothWheel: true })
    const updateScroll = () => ScrollTrigger.update()
    const tick = (time: number) => lenis.raf(time * 1000)

    // Lenis owns the scroll clock; GSAP's ticker keeps it in sync with ScrollTrigger.
    lenis.on('scroll', updateScroll)
    gsap.ticker.add(tick)
    gsap.ticker.lagSmoothing(0)

    return () => {
      lenis.off('scroll', updateScroll)
      gsap.ticker.remove(tick)
      lenis.destroy()
    }
  }, [reducedMotion])

  return children
}
