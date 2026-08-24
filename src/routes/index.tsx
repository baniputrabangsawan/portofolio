import { createFileRoute } from '@tanstack/react-router'
import { About } from '@/components/sections/About'
import { Contact } from '@/components/sections/Contact'
import { Hero } from '@/components/sections/Hero'
import { Projects } from '@/components/sections/Projects'
import { Skills } from '@/components/sections/Skills'
import { Timeline } from '@/components/sections/Timeline'

export const Route = createFileRoute('/')({ component: HomePage })

function HomePage() {
  return (
    <main id="main">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Timeline />
      <Contact />
    </main>
  )
}
