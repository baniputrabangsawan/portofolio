import { lazy, Suspense, useRef, useState, type FormEvent } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Section } from '@/components/ui/Section'
import { siteConfig } from '@/lib/constants'
import { contactSchema, type ContactInput } from '@/lib/contact-schema'
import { useMediaQuery } from '@/hooks/use-media-query'
import { useReducedMotion } from '@/hooks/use-reduced-motion'

const ClosingScene = lazy(() => import('@/three/scenes/ClosingScene'))

type FormErrors = Partial<Record<keyof ContactInput, string>>

export function Contact() {
  const [errors, setErrors] = useState<FormErrors>({})
  const firstErrorRef = useRef<HTMLInputElement>(null)
  const isDesktop = useMediaQuery('(min-width: 1024px)')
  const reducedMotion = useReducedMotion()

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const payload = Object.fromEntries(form.entries())
    const parsed = contactSchema.safeParse(payload)

    if (!parsed.success) {
      const nextErrors: FormErrors = {}
      for (const issue of parsed.error.issues) nextErrors[issue.path[0] as keyof ContactInput] = issue.message
      setErrors(nextErrors)
      firstErrorRef.current?.focus()
      return
    }

    setErrors({})
    const subject = encodeURIComponent(`Project inquiry from ${parsed.data.name}`)
    const body = encodeURIComponent(`Name: ${parsed.data.name}\nEmail: ${parsed.data.email}\n\n${parsed.data.message}`)
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`
  }

  return (
    <Section id="contact" label="Contact / Start a conversation" index="05" className="overflow-hidden bg-acid" innerClassName="relative">
      <div className="pointer-events-none absolute -right-24 top-0 hidden h-[28rem] w-[28rem] opacity-40 lg:block">
        {isDesktop && !reducedMotion && <Suspense fallback={null}><ClosingScene /></Suspense>}
      </div>
      <div className="relative z-10 grid grid-cols-12 gap-y-16">
        <div className="col-span-12 lg:col-span-6">
          <h2 className="font-display text-h1 font-black uppercase">Have a bottleneck?<br />Let’s remove it.</h2>
          <p className="mt-8 max-w-md text-lg leading-relaxed text-ink-800">Tell me where work is repetitive, fragmented, or slow. I’ll help turn the opportunity into a clear, shippable system.</p>
          <div className="mt-14 flex flex-wrap gap-x-8 gap-y-4 font-mono text-caption uppercase">
            <a className="inline-flex items-center gap-2" href={`mailto:${siteConfig.email}`}>{siteConfig.email}<ArrowUpRight size={14} /></a>
            {siteConfig.socials.map((social) => <a className="inline-flex items-center gap-2" href={social.href} key={social.label}>{social.label}<ArrowUpRight size={14} /></a>)}
          </div>
        </div>
        <form className="col-span-12 space-y-6 lg:col-span-5 lg:col-start-8" onSubmit={handleSubmit} noValidate>
          <div className="form-field">
            <label htmlFor="name">Your name</label>
            <input ref={firstErrorRef} id="name" name="name" autoComplete="name" placeholder="Jane Doe…" aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? 'name-error' : undefined} />
            {errors.name && <span id="name-error" role="alert">{errors.name}</span>}
          </div>
          <div className="form-field">
            <label htmlFor="email">Email address</label>
            <input id="email" name="email" type="email" inputMode="email" autoComplete="email" spellCheck={false} placeholder="jane@company.com…" aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? 'email-error' : undefined} />
            {errors.email && <span id="email-error" role="alert">{errors.email}</span>}
          </div>
          <div className="form-field">
            <label htmlFor="message">What are you building?</label>
            <textarea id="message" name="message" rows={4} placeholder="A short brief, challenge, or idea…" aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? 'message-error' : undefined} />
            {errors.message && <span id="message-error" role="alert">{errors.message}</span>}
          </div>
          <Button type="submit" showArrow className="w-full justify-between">
            Compose project email
          </Button>
          <p className="text-xs leading-relaxed text-ink-600">This frontend-only form opens your default email application. No message or personal data is stored by this website.</p>
        </form>
      </div>
    </Section>
  )
}
