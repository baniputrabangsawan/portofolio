import { useRef } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { Badge } from '@/components/ui/Badge'
import { Section } from '@/components/ui/Section'
import { projects } from '@/data/projects'
import { useGsapReveal } from '@/hooks/use-gsap-reveal'
import { ProjectVisual } from './ProjectVisual'

export function Projects() {
  const sectionRef = useRef<HTMLElement>(null)
  useGsapReveal(sectionRef)

  return (
    <Section ref={sectionRef} id="work" label="Selected systems" index="03">
      <div className="mb-24 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
        <h2 data-reveal className="font-display text-h1 font-black uppercase">Built to<br />create leverage.</h2>
        <p data-reveal className="max-w-sm text-body text-ink-600">A selection of representative product systems. Replace the example data in <code className="font-mono text-sm">src/data/projects.ts</code> with your real work.</p>
      </div>
      <div className="space-y-30">
        {projects.map((project, index) => (
          <article key={project.slug} data-reveal className="project-grid grid grid-cols-12 gap-y-8">
            <div className="col-span-12 lg:col-span-8"><ProjectVisual project={project} index={index} /></div>
            <div className="col-span-12 flex flex-col lg:col-span-4 lg:pl-10">
              <div className="mb-8 flex items-center justify-between font-mono text-caption uppercase text-ink-600"><span>{project.kicker}</span><span>{project.year}</span></div>
              <h3 className="font-display text-h3 font-black uppercase">{project.title}</h3>
              <p className="mt-5 text-body text-ink-600">{project.description}</p>
              <p className="mt-8 font-display text-2xl font-bold uppercase">{project.outcome}</p>
              <div className="mt-8 flex flex-wrap gap-2">{project.stack.map((item) => <Badge key={item}>{item}</Badge>)}</div>
              <div className="mt-auto flex gap-6 pt-10 font-mono text-caption uppercase">
                {project.demoUrl && <a className="inline-flex items-center gap-2" href={project.demoUrl}>Live demo <ArrowUpRight size={14} /></a>}
                {project.repoUrl && <a className="inline-flex items-center gap-2" href={project.repoUrl}>Repository <ArrowUpRight size={14} /></a>}
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}
