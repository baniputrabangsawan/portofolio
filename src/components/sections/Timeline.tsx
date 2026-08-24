import { useEffect, useRef } from 'react'
import { Section } from '@/components/ui/Section'
import { experience } from '@/data/experience'
import { useGsapReveal } from '@/hooks/use-gsap-reveal'
import { useReducedMotion } from '@/hooks/use-reduced-motion'
import { getGsap } from '@/lib/gsap'

export function Timeline() {
  const sectionRef = useRef<HTMLElement>(null)
  const lineRef = useRef<HTMLDivElement>(null)
  const reducedMotion = useReducedMotion()
  useGsapReveal(sectionRef)

  useEffect(() => {
    if (reducedMotion || !lineRef.current || !sectionRef.current) return
    const { gsap } = getGsap()
    const tween = gsap.fromTo(lineRef.current, { scaleY: 0 }, {
      scaleY: 1,
      ease: 'none',
      scrollTrigger: { trigger: sectionRef.current, start: 'top 60%', end: 'bottom 75%', scrub: 0.5 },
    })
    return () => { tween.scrollTrigger?.kill(); tween.kill() }
  }, [reducedMotion])

  return (
    <Section ref={sectionRef} id="experience" label="Experience / Progression" index="04" className="bg-paper-muted">
      <div className="grid grid-cols-12 gap-y-14">
        <h2 data-reveal className="col-span-12 font-display text-h2 font-black uppercase lg:col-span-5">Built across the whole system.</h2>
        <div className="relative col-span-12 lg:col-span-6 lg:col-start-7">
          <div className="absolute bottom-0 left-[5px] top-0 w-px bg-ink-950/20"><div ref={lineRef} className="h-full origin-top bg-ink-950" /></div>
          <div className="space-y-16">
            {experience.map((item) => (
              <article data-reveal key={`${item.period}-${item.role}`} className="relative grid grid-cols-12 gap-y-3 pl-8">
                <span className="absolute left-0 top-1.5 h-[11px] w-[11px] rounded-full border-2 border-paper-muted bg-ink-950" />
                <p className="col-span-12 font-mono text-caption uppercase text-ink-600 sm:col-span-4">{item.period}</p>
                <div className="col-span-12 sm:col-span-8">
                  <h3 className="font-display text-h4 font-bold uppercase">{item.role}</h3>
                  <p className="mt-1 font-mono text-caption uppercase text-ink-600">{item.company}</p>
                  <p className="mt-5 text-body text-ink-600">{item.summary}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
