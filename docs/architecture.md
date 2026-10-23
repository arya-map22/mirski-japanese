# Architecture

## Stack

| Concern         | Choice                                       |
| --------------- | -------------------------------------------- |
| Framework       | Next.js 16.4 (App Router)                    |
| UI runtime      | React 19.3                                   |
| Language        | TypeScript 5.9, `strict: true`               |
| Styling         | Tailwind CSS 4.3                             |
| Build tool      | Turbopack (Next.js default)                  |
| Package manager | pnpm 10.34                                   |
| Linting         | ESLint 9 + `eslint-config-next`              |
| Formatting      | Prettier 3.9 + `prettier-plugin-tailwindcss` |
| Runtime         | Node.js >= 20.9                              |

The project was scaffolded with the official Next.js App Router + TypeScript + Tailwind
template, then adapted. No existing application architecture was replaced.

## Rendering strategy

- The landing page is a React Server Component tree.
- There are currently **no Client Components** and no global client state.
- Marketing content is static; there is no API, database, authentication, or runtime data
  fetching.
- `app/sitemap.ts`, `app/robots.ts`, `app/opengraph-image.tsx`, and `app/icon.svg` are
  metadata/file-convention routes generated at build time.
- Prefer keeping future marketing sections static. Use `next/image` for real imagery and
  `next/font` for fonts.

Verify the static output with `pnpm build`; the route table should show `/` as a static
prerender (or equivalent static marker in the installed Next.js version).

## Directory structure

```text
src/
├── app/
│   ├── globals.css          # Tailwind import, theme tokens, base styles
│   ├── icon.svg             # App icon
│   ├── layout.tsx           # Fonts, metadata, header/footer shell
│   ├── opengraph-image.tsx  # Generated Open Graph image
│   ├── page.tsx             # Landing page composition
│   ├── robots.ts            # /robots.txt
│   └── sitemap.ts           # /sitemap.xml
├── components/
│   ├── layout/              # SiteHeader, SiteFooter
│   ├── sections/            # One component per landing-page section
│   └── ui/                  # Small reusable primitives
├── config/
│   └── site.ts              # Brand metadata, navigation, site URL, contact
├── content/
│   ├── courses.ts           # Four-level course data
│   ├── home.ts              # Page copy
│   └── types.ts             # Content types
└── lib/
    └── cn.ts                # Class-name join helper
```

Adapt this structure only when the change is real. Do not create abstraction layers for
one-off sections.

## Boundaries

### Content

- Substantial copy lives in `src/content/`, not inside large JSX blocks.
- Course data is a typed, read-only array in `src/content/courses.ts`.
- Section data is grouped by section in `src/content/home.ts`.
- Content types live in `src/content/types.ts`.

### Configuration

- Brand-level values, navigation, site URL, and the enrolment contact live in
  `src/config/site.ts`.
- `SITE_URL` is read on the server at build time. It is public configuration, not a
  secret.
- The fallback `https://mirskijapanese.example` is deliberately a reserved `.example`
  domain. Replace it before deploying.

### UI

- Section components own layout and presentation for their section.
- UI primitives (`Container`, `Eyebrow`, `SectionTitle`, `ButtonLink`, `Wordmark`,
  `ArrowRight`) exist because they are genuinely reused.
- `src/app/page.tsx` only composes sections.
- No component currently needs `"use client"`.

### Server/client boundary

Keep the boundary at the smallest interactive leaf if interactivity is added later.
Never import server secrets, privileged validation, or private service clients into a
Client Component. The current page has no client-side data access.

## Styling

- Tailwind CSS 4 is integrated through the `@tailwindcss/turbopack` loader configured in
  `next.config.ts`. There is no PostCSS config.
- Design tokens are declared with `@theme` and `@theme inline` in
  `src/app/globals.css`.
- Typography uses `next/font/google` (Fraunces for display, Manrope for body). Fonts are
  self-hosted by Next.js at build time.
- Base focus, selection, reduced-motion, scroll-margin, and Japanese-font fallback rules
  live in `globals.css`.
- Prettier sorts Tailwind classes using `tailwindStylesheet`.

See `docs/design.md` for the visual system.

## Metadata and SEO routes

- Root metadata is declared in `src/app/layout.tsx` using `metadataBase` from
  `src/config/site.ts`.
- Canonical URL is `/`, resolved against `SITE_URL`.
- `opengraph-image.tsx` generates a 1200×630 PNG with `next/og`.
- `robots.ts` allows crawling and points to the sitemap.
- `sitemap.ts` contains the single current route.
- Structured data is intentionally omitted until verified organization details exist.

See `docs/seo.md`.

## Security configuration

`next.config.ts` sets baseline response headers:

- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: DENY`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Cross-Origin-Opener-Policy: same-origin`
- `Permissions-Policy` disabling camera, microphone, geolocation, and browsing topics
- A production-only Content Security Policy

The CSP allows inline styles and scripts because the site is statically rendered and does
not yet use a nonce-based policy. See `docs/security.md` for the trade-off and upgrade
path.

## Scripts and checks

```bash
pnpm dev          # development server
pnpm build        # production build
pnpm start        # serve the production build
pnpm lint         # ESLint
pnpm typecheck    # tsc --noEmit
pnpm format       # Prettier write
pnpm format:check # Prettier check
```

Run `lint`, `typecheck`, and `build` before declaring a change complete.

## Decision log

| Decision                              | Rationale                                                                           |
| ------------------------------------- | ----------------------------------------------------------------------------------- |
| Next.js App Router + static rendering | Best fit for marketing content, SEO, and low runtime cost.                          |
| pnpm                                  | Requested stack; fast installs and lockfile discipline.                             |
| Zero Client Components                | No interaction currently requires client JavaScript.                                |
| Course content in typed data          | Keeps the four-level model consistent across hero, courses, and footer.             |
| No enquiry form yet                   | No secure server endpoint or verified contact channel exists.                       |
| No structured data yet                | No verified organization, address, or review data; fabricated schema is prohibited. |
| Tailwind theme tokens                 | Keeps color, type, and spacing consistent without a separate component library.     |
| No CMS                                | Content is small and reviewed in version control. Revisit when course pages expand. |

## Extension guidance

- Add a new marketing section as a focused component in `src/components/sections/` and
  compose it in `src/app/page.tsx`.
- Put new copy in `src/content/home.ts` (or a new content module) and new levels in
  `src/content/courses.ts`.
- Add routes only when there is real content; update `sitemap.ts`.
- If a form is added, create a server boundary (Server Action or route handler), validate
  with a schema, and follow `docs/security.md`.
- If client interactivity is added, isolate it and measure the JavaScript cost.
