import { createFileRoute } from '@tanstack/react-router'
import { contactSchema } from '@/lib/contact-schema'

const WINDOW_MS = 15 * 60 * 1000
const MAX_REQUESTS = 5
const requestLog = new Map<string, number[]>()

function cleanText(value: string) {
  return value.normalize('NFKC').replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, '')
}

function escapeHtml(value: string) {
  return value.replace(/[&<>'"]/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' })[character] ?? character)
}

function isRateLimited(key: string) {
  const now = Date.now()
  const recent = (requestLog.get(key) ?? []).filter((time) => now - time < WINDOW_MS)
  recent.push(now)
  requestLog.set(key, recent)
  return recent.length > MAX_REQUESTS
}

export const Route = createFileRoute('/api/contact')({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const requestOrigin = new URL(request.url).origin
        const origin = request.headers.get('origin')
        if (!origin || origin !== requestOrigin) {
          return Response.json({ ok: false, message: 'Request origin rejected.' }, { status: 403 })
        }

        const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'local'
        if (isRateLimited(ip)) {
          return Response.json({ ok: false, message: 'Too many attempts. Please try again in 15 minutes.' }, { status: 429 })
        }

        const rawBody: unknown = await request.json().catch(() => null)
        const parsed = contactSchema.safeParse(rawBody)
        if (!parsed.success) {
          return Response.json({ ok: false, message: 'Please check the form fields and try again.' }, { status: 400 })
        }

        const data = {
          name: cleanText(parsed.data.name),
          email: cleanText(parsed.data.email),
          message: cleanText(parsed.data.message),
        }
        const apiKey = process.env.RESEND_API_KEY
        const to = process.env.CONTACT_TO_EMAIL
        const from = process.env.CONTACT_FROM_EMAIL || 'Portfolio <onboarding@resend.dev>'

        if (!apiKey || !to) {
          return Response.json({ ok: false, message: 'Contact delivery is not configured yet. Please use the email link instead.' }, { status: 503 })
        }

        const emailResponse = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
          body: JSON.stringify({
            from,
            to: [to],
            reply_to: data.email,
            subject: `Portfolio inquiry from ${data.name}`,
            html: `<p><strong>From:</strong> ${escapeHtml(data.name)} (${escapeHtml(data.email)})</p><p>${escapeHtml(data.message).replace(/\n/g, '<br>')}</p>`,
          }),
        })

        if (!emailResponse.ok) {
          return Response.json({ ok: false, message: 'Message delivery failed. Please use the email link instead.' }, { status: 502 })
        }

        return Response.json({ ok: true, message: 'Message received. I’ll get back to you shortly.' })
      },
    },
  },
})
