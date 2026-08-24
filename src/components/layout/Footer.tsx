import { siteConfig } from '@/lib/constants'

export function Footer() {
  return (
    <footer className="bg-ink-950 px-5 py-8 text-paper sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-page flex-col gap-4 font-mono text-caption uppercase sm:flex-row sm:items-center sm:justify-between">
        <span>© 2026 {siteConfig.name}</span>
        <span>Designed with intent · Built with code</span>
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  )
}
