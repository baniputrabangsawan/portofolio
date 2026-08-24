import { useRef } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { Section } from '@/components/ui/Section'
import { skillGroups } from '@/data/skills'
import { useGsapReveal } from '@/hooks/use-gsap-reveal'

export function Skills() {
  const sectionRef = useRef<HTMLElement>(null)
  useGsapReveal(sectionRef)

  return (
    <Section ref={sectionRef} id="stack" label="Capabilities / Toolkit" index="02" className="bg-ink-950 text-paper" labelClassName="text-paper/55">
      <div className="mb-18 grid grid-cols-12 gap-6">
        <h2 data-reveal className="col-span-12 font-display text-h1 font-black uppercase lg:col-span-8">One stack.<br /><span className="text-acid">Full loop.</span></h2>
        <p data-reveal className="col-span-12 self-end text-body text-paper/65 lg:col-span-3 lg:col-start-10">From model orchestration to the interface a team actually uses—and the infrastructure that keeps it moving.</p>
      </div>
      <div className="divide-y divide-paper/20 border-y border-paper/20">
        {skillGroups.map((group) => (
          <article data-reveal key={group.category} className="skill-row group grid grid-cols-12 gap-y-5 py-8 sm:py-10">
            <span className="col-span-2 font-mono text-caption text-paper/45">{group.index}</span>
            <h3 className="col-span-10 font-display text-h3 font-bold uppercase sm:col-span-4">{group.category}</h3>
            <ul className="col-span-10 col-start-3 flex flex-wrap gap-x-5 gap-y-2 text-sm text-paper/65 sm:col-span-5 sm:col-start-7">
              {group.skills.map((skill) => <li key={skill}>{skill}</li>)}
            </ul>
            <ArrowUpRight className="col-span-1 hidden justify-self-end text-acid transition-transform duration-200 group-hover:rotate-45 sm:block" aria-hidden="true" />
          </article>
        ))}
      </div>
    </Section>
  )
}
