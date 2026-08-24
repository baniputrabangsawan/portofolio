# AI Automation & Full Stack Portfolio

A static frontend-only personal portfolio built with TanStack Router, Vite, React Three Fiber, GSAP, Lenis, Tailwind CSS, and strict TypeScript. There is no admin dashboard, CMS, database, SSR server, or backend endpoint.

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

The bundled portfolio entries are representative placeholders. Replace them with verified work, metrics, and links before publishing. All content is edited directly in code—there is no admin interface.

## Contact delivery

The contact form validates fields in the browser, then opens the visitor's default email application using `mailto:`. It does not send data to a server and requires no API key or environment variables. Change the destination email in `src/lib/constants.ts`.

## Deployment

Deploy the generated `dist/` directory to any static host. No Node.js server, database, serverless function, or admin application is required.

## Quality checks

```bash
pnpm typecheck
pnpm build
pnpm audit --prod
```

The site respects `prefers-reduced-motion`, replaces WebGL with a lightweight mobile fallback, and lazy-loads the 3D scene chunks.
