import { useRef } from 'react'
import { Section } from '@/components/ui/Section'
import { useGsapReveal } from '@/hooks/use-gsap-reveal'

export function About() {
  const sectionRef = useRef<HTMLElement>(null)
  useGsapReveal(sectionRef)

  return (
    <Section ref={sectionRef} id="about" label="About / Approach" index="01">
      <div className="grid grid-cols-12 gap-y-12">
        <p data-reveal className="col-span-12 font-mono text-caption uppercase text-ink-600 md:col-span-3">Strategy → System → Ship</p>
        <div className="col-span-12 md:col-span-9">
          <h2 data-reveal className="max-w-5xl font-display text-h2 font-black uppercase">
            I build the layer between <span className="underline decoration-acid decoration-[0.18em] underline-offset-[0.08em]">ambition</span> and execution.
          </h2>
          <div className="mt-14 grid gap-8 border-t border-ink-950/20 pt-8 sm:grid-cols-2 lg:ml-[22%]">
            <p data-reveal className="text-lg leading-relaxed text-ink-800">I’m a full stack engineer focused on AI systems that survive contact with real operations—not demos that disappear after launch.</p>
            <p data-reveal className="text-body text-ink-600">My work combines product thinking, dependable integrations, and pragmatic AI. Every automation keeps a human in control, exposes its reasoning, and earns its place through a measurable outcome.</p>
          </div>
        </div>
      </div>
    </Section>
  )
}
