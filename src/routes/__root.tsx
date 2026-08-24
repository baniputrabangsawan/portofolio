import type { ReactNode } from 'react'
import { createRootRoute, HeadContent, Outlet, Scripts } from '@tanstack/react-router'
import { SmoothScrollProvider } from '@/components/layout/SmoothScrollProvider'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import appCss from '@/styles/globals.css?url'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, viewport-fit=cover' },
      { title: 'Arif Rahman — AI Automation Engineer & Full Stack Developer' },
      { name: 'description', content: 'AI automation systems and full stack products designed, engineered, and shipped with measurable impact.' },
      { name: 'theme-color', content: '#f4f3ed' },
      { name: 'color-scheme', content: 'light' },
      { property: 'og:title', content: 'Arif Rahman — AI Automation & Full Stack' },
      { property: 'og:description', content: 'Production AI systems, reliable automation, and full stack product engineering.' },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
    links: [
      { rel: 'stylesheet', href: appCss },
      { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' },
    ],
  }),
  component: RootComponent,
})

function RootComponent() {
  return (
    <RootDocument>
      <SmoothScrollProvider>
        <a className="skip-link" href="#main">Skip to content</a>
        <Navbar />
        <Outlet />
        <Footer />
      </SmoothScrollProvider>
    </RootDocument>
  )
}

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <head><HeadContent /></head>
      <body>{children}<Scripts /></body>
    </html>
  )
}
