import { createRootRoute, Outlet } from '@tanstack/react-router'
import { SmoothScrollProvider } from '@/components/layout/SmoothScrollProvider'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <SmoothScrollProvider>
      <a className="skip-link" href="#main">Skip to content</a>
      <Navbar />
      <Outlet />
      <Footer />
    </SmoothScrollProvider>
  )
}
