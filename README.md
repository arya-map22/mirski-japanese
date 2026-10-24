# Mirski Japanese

A statically rendered landing page for Mirski Japanese — a four-level Japanese course
path from Starter N5 to Advanced N2.

## Stack

- Next.js 16 (App Router, React Server Components)
- TypeScript (strict)
- Tailwind CSS 4
- pnpm
- ESLint + Prettier

## Getting started

Open a terminal in this project folder and run:

```powershell
pnpm install
Copy-Item .env.example .env.local
pnpm dev
```

Then open `.env.local` and set `SITE_URL` to the real website address. The local site
runs at http://localhost:3000.

## Scripts

| Script              | Purpose                            |
| ------------------- | ---------------------------------- |
| `pnpm dev`          | Start the development server       |
| `pnpm build`        | Production build                   |
| `pnpm start`        | Serve the production build         |
| `pnpm lint`         | ESLint                             |
| `pnpm typecheck`    | TypeScript without emitting output |
| `pnpm format`       | Format with Prettier               |
| `pnpm format:check` | Verify formatting                  |

## Structure

```text
src/
├── app/          Routes, metadata routes, global styles
├── components/   Layout, sections, and reusable UI primitives
├── config/       Site configuration and navigation
├── content/      Course and page copy, kept out of JSX where practical
└── lib/          Small shared helpers
```

Detailed project guidance lives in [`docs/`](./docs). Read `docs/architecture.md`,
`docs/design.md`, and `docs/content.md` before making substantial changes.

## Content to add before launch

- Set `SITE_URL` to the real production origin.
- Add the official enrolment contact channel in `src/config/site.ts`.
- Review the method and course descriptions against the real curriculum.
- Add verified social proof only when real, attributable data exists.
- Add legal pages if the business requires them.
- Add a nonce-based CSP if the rendering model changes.

See `docs/content.md` for the full list.
