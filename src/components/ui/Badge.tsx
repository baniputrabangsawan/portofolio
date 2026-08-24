import type { ReactNode } from 'react'

export function Badge({ children }: Readonly<{ children: ReactNode }>) {
  return <span className="inline-flex rounded-full border border-ink-950/20 px-3 py-1.5 font-mono text-caption uppercase">{children}</span>
}
