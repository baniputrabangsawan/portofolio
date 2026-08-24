# AI Automation & Full Stack Portfolio

A production-ready personal portfolio built with TanStack Start, React Three Fiber, GSAP, Lenis, Tailwind CSS, and strict TypeScript.

## Run locally

```bash
pnpm install
pnpm dev
```

Production check:

```bash
pnpm build
pnpm start
```

## Personalize the content

- Identity, email, and social links: `src/lib/constants.ts`
- Projects: `src/data/projects.ts`
- Skills: `src/data/skills.ts`
- Experience: `src/data/experience.ts`
- Design tokens: `tailwind.config.ts` and `src/styles/globals.css`

The bundled portfolio entries are representative placeholders. Replace them with verified work, metrics, and links before publishing.

## Contact delivery

Copy `.env.example` to `.env` and add server-only Resend credentials:

```env
RESEND_API_KEY=re_xxxxxxxxx
CONTACT_TO_EMAIL=you@example.com
CONTACT_FROM_EMAIL=Portfolio <onboarding@resend.dev>
```

Never prefix these variables with `VITE_` or `PUBLIC_`. The endpoint includes runtime validation, sanitization, a honeypot, same-origin checks, and a basic in-memory rate limit. For a multi-instance/serverless deployment, replace the in-memory limiter with a shared store such as Redis or the platform's rate-limit service.

## Quality checks

```bash
pnpm typecheck
pnpm build
pnpm audit --prod
```

The site respects `prefers-reduced-motion`, replaces WebGL with a lightweight mobile fallback, and lazy-loads the 3D scene chunks.
