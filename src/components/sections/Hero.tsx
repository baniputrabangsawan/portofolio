import { lazy, Suspense, useEffect, useRef, useState } from 'react'
import { ArrowDown } from 'lucide-react'
import { ButtonLink } from '@/components/ui/Button'
import { useMediaQuery } from '@/hooks/use-media-query'
import { useReducedMotion } from '@/hooks/use-reduced-motion'
import { siteConfig } from '@/lib/constants'

const HeroScene = lazy(() => import('@/three/scenes/HeroScene'))

function SceneLoader() {
  return (
    <div className="absolute inset-0 grid place-items-center" aria-live="polite">
      <div className="w-36">
        <div className="mb-2 flex justify-between font-mono text-[10px] uppercase"><span>Loading core</span><span>•••</span></div>
        <div className="h-px overflow-hidden bg-ink-950/20"><span className="loader-line block h-full w-1/2 bg-ink-950" /></div>
      </div>
    </div>
  )
}

export function Hero() {
  const [mounted, setMounted] = useState(false)
  const isMobile = useMediaQuery('(max-width: 767px)')
  const reducedMotion = useReducedMotion()
  const titleRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => setMounted(true), [])

  return (
    <section id="top" className="relative min-h-svh overflow-hidden px-5 pb-10 pt-24 sm:px-8 lg:px-12">
      <div className="mx-auto grid min-h-[calc(100svh-7rem)] max-w-page grid-cols-12 grid-rows-[auto_1fr_auto]">
        <div className="col-span-12 flex items-start justify-between font-mono text-caption uppercase text-ink-600">
          <p>{siteConfig.location}</p>
          <p className="text-right">Systems that think<br />Products that ship</p>
        </div>

        <div className="relative col-span-12 grid place-items-center py-10">
          <div className="absolute left-1/2 top-1/2 aspect-square w-[min(88vw,49rem)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-acid" />
          <div className="absolute inset-0 z-10" data-parallax>
            {mounted && !reducedMotion && !isMobile ? (
              <Suspense fallback={<SceneLoader />}><HeroScene /></Suspense>
            ) : (
              <div className="hero-fallback" aria-hidden="true"><span /><span /><span /></div>
            )}
          </div>
          <h1 ref={titleRef} className="relative z-20 w-full select-none font-display text-hero font-black uppercase text-ink-950 mix-blend-multiply">
            <span className="block">AI&nbsp;AUTO</span>
            <span className="block text-right">MATION</span>
          </h1>
          <div className="pointer-events-none absolute bottom-7 left-0 z-30 hidden w-48 font-sans text-sm leading-relaxed text-ink-800 lg:block">
            <span className="mb-3 block h-px w-10 bg-ink-950" />
            I turn complex workflows into reliable software and measurable leverage.
          </div>
        </div>

        <div className="col-span-12 flex flex-col items-start gap-5 sm:flex-row sm:items-end sm:justify-between">
          <p className="max-w-[17rem] font-display text-xl font-bold uppercase leading-tight sm:text-2xl">{siteConfig.role}</p>
          <ButtonLink href="#work" variant="secondary">Explore selected work</ButtonLink>
          <a href="#about" aria-label="Scroll to about" className="hidden h-12 w-12 place-items-center rounded-full border border-ink-950/30 sm:grid"><ArrowDown size={17} /></a>
        </div>
      </div>
    </section>
  )
}
