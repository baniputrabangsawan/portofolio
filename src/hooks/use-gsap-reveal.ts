import { useEffect, type RefObject } from 'react'
import { getGsap } from '@/lib/gsap'
import { useReducedMotion } from './use-reduced-motion'

export function useGsapReveal<T extends HTMLElement>(ref: RefObject<T | null>) {
  const reducedMotion = useReducedMotion()

  useEffect(() => {
    const root = ref.current
    if (!root || reducedMotion) return
    const { gsap } = getGsap()

    const context = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((element) => {
        gsap.fromTo(
          element,
          { autoAlpha: 0, y: 28 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.75,
            ease: 'power3.out',
            scrollTrigger: { trigger: element, start: 'top 88%', once: true },
          },
        )
      })

      gsap.utils.toArray<HTMLElement>('[data-parallax]').forEach((element) => {
        gsap.to(element, {
          yPercent: -10,
          ease: 'none',
          scrollTrigger: { trigger: element, start: 'top bottom', end: 'bottom top', scrub: 0.8 },
        })
      })
    }, root)

    return () => context.revert()
  }, [ref, reducedMotion])
}
