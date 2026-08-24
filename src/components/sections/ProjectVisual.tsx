import { cn } from '@/lib/utils'
import type { Project } from '@/types'

const accentClasses: Record<Project['accent'], string> = {
  acid: 'bg-acid text-ink-950',
  mono: 'bg-[#d8d8d0] text-ink-950',
  warm: 'bg-[#d9c8b6] text-ink-950',
}

export function ProjectVisual({ project, index }: Readonly<{ project: Project; index: number }>) {
  return (
    <div className={cn('project-visual relative aspect-[16/10] overflow-hidden', accentClasses[project.accent])} aria-hidden="true">
      <div className="absolute inset-5 border border-ink-950/25 sm:inset-8">
        <div className="flex h-9 items-center justify-between border-b border-ink-950/25 px-3 font-mono text-[9px] uppercase">
          <span>{project.slug}.system</span><span>LIVE / 0{index + 1}</span>
        </div>
        {index === 0 && (
          <div className="grid h-[calc(100%-2.25rem)] grid-cols-[0.85fr_1.15fr]">
            <div className="border-r border-ink-950/25 p-4"><div className="h-2 w-10 bg-ink-950/25" /><div className="mt-7 space-y-3">{[1,2,3,4].map((item) => <div key={item} className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-ink-950" /><span className="h-px flex-1 bg-ink-950/25" /></div>)}</div></div>
            <div className="relative grid place-items-center"><div className="h-28 w-28 rounded-full border border-ink-950/30 p-4"><div className="h-full w-full animate-[spin_12s_linear_infinite] border border-ink-950"><div className="m-auto mt-6 h-6 w-6 bg-ink-950" /></div></div></div>
          </div>
        )}
        {index === 1 && (
          <div className="relative flex h-[calc(100%-2.25rem)] items-center justify-around px-6">
            {[0,1,2].map((item) => <div key={item} className="relative z-10 grid h-16 w-16 place-items-center rounded-full border border-ink-950/40 bg-[#d8d8d0] font-mono text-[10px]">0{item + 1}</div>)}
            <div className="absolute left-[20%] right-[20%] top-1/2 h-px bg-ink-950/40" />
          </div>
        )}
        {index === 2 && (
          <div className="grid h-[calc(100%-2.25rem)] grid-cols-[1fr_1.4fr] gap-3 p-4"><div className="space-y-2">{[1,2,3,4,5].map((item) => <div key={item} className={cn('h-5 border border-ink-950/25', item === 2 && 'bg-ink-950')} />)}</div><div className="border border-ink-950/25 p-4"><div className="mb-5 h-2 w-1/2 bg-ink-950/30" />{[1,2,3].map((item) => <div key={item} className="mb-3 h-px bg-ink-950/25" />)}<div className="mt-8 h-7 w-20 bg-ink-950" /></div></div>
        )}
      </div>
    </div>
  )
}
