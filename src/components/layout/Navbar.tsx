import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { navigation, siteConfig } from '@/lib/constants'

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-ink-950/15 bg-paper/85 px-5 backdrop-blur-md sm:px-8 lg:px-12">
      <nav className="mx-auto flex h-16 max-w-page items-center justify-between" aria-label="Primary navigation">
        <a href="#top" className="font-display text-lg font-black tracking-[-0.06em]">{siteConfig.name}</a>
        <div className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => <a className="nav-link" href={item.href} key={item.href}>{item.label}</a>)}
          <a href="#contact" className="rounded-full bg-acid px-4 py-2 font-mono text-caption font-semibold uppercase">Available for work</a>
        </div>
        <button className="button-icon md:hidden" type="button" aria-expanded={open} aria-label="Toggle navigation" onClick={() => setOpen((value) => !value)}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>
      {open && (
        <div className="border-t border-ink-950/15 py-5 md:hidden">
          {navigation.map((item) => <a className="block py-3 font-display text-3xl font-bold" href={item.href} key={item.href} onClick={() => setOpen(false)}>{item.label}</a>)}
        </div>
      )}
    </header>
  )
}
