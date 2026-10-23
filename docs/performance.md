# Performance

## Goals

Optimize for Core Web Vitals and a low-cost, fast first visit:

| Metric                        | Target                                  |
| ----------------------------- | --------------------------------------- |
| LCP                           | ≤ 2.5s on a mid-range mobile connection |
| CLS                           | ≤ 0.1                                   |
| INP                           | ≤ 200ms                                 |
| Lighthouse mobile performance | ≥ 95, reviewed not assumed              |
| Authored client JavaScript    | 0 KB in the initial shell               |

These are targets, not measured guarantees. Record real measurements before making
public performance claims.

## Strategy

### Static rendering

- The landing page contains no runtime data fetching, authentication, or dynamic APIs.
- Marketing content is rendered at build time.
- The only routes are the page and small metadata/file-convention routes.
- Do not introduce dynamic rendering for convenience. If a feature needs it, isolate it
  and measure the cost.

### Zero Client Components

The initial shell has no `"use client"` components:

- Navigation is anchor links; no mobile menu state.
- FAQ disclosure uses native `<details>/<summary>`.
- Hover/focus feedback is CSS-only.
- No analytics, chat, carousel, or animation library.

Keep it this way unless an interaction genuinely requires JavaScript. If one is added,
place `"use client"` at the smallest leaf and review First Load JS.

### Fonts

- Fraunces and Manrope are loaded with `next/font/google`, self-hosted at build time.
- Only the Latin subset is requested.
- `display: "swap"` is set to avoid invisible text.
- Japanese text uses a system serif stack rather than downloading a large CJK font.
- Fallback font metrics are handled by Next.js.

Do not add a Japanese webfont unless the content requires it and the download cost is
justified. A full CJK font can be several megabytes.

### Images

- The initial design uses no raster imagery.
- The Open Graph image is generated at build time.
- When real imagery is added, use `next/image`, correct dimensions, modern formats,
  responsive `sizes`, and lazy loading below the fold.
- Never ship oversized source images or external runtime image URLs.

### CSS

- Tailwind generates only the utilities used.
- Design tokens live in CSS variables.
- There are no CSS-in-JS runtime styles or component libraries.
- Decorative elements are borders, type, and simple SVG.

### Third parties

None. No analytics, tag manager, CRM widget, chat, social embed, or A/B testing script
is loaded. Any future third party must have a documented performance and privacy
justification.

## Delivery and caching

- The production build emits static HTML and hashed assets.
- Serve immutable, long-cached `/_next/static/*` assets at the hosting layer.
- Serve HTML with an appropriate revalidation/CDN policy for a static marketing page.
- Enable Brotli or gzip compression at the host.
- Do not add cache-busting query strings manually.

## Measurement

Run before launch and after meaningful changes:

```bash
pnpm build
pnpm start
```

Then check:

- Production build route table: `/` should be static.
- Lighthouse mobile and desktop (performance, accessibility, best practices, SEO).
- Chrome DevTools Performance panel for long tasks and layout shifts.
- Network panel for font, CSS, and script transfer sizes.
- WebPageTest or real-device testing for LCP on a throttled connection.

Record measured values in the release notes rather than claiming them in the UI.

## Performance review triggers

Re-measure when:

- A Client Component is added.
- A third-party script is introduced.
- A large image or font is added.
- A new route or dynamic feature is introduced.
- The design adds a heavy animation or embed.

## Known trade-offs

- The production CSP allows inline scripts/styles because the site is static; a
  nonce-based policy would require more dynamic infrastructure.
- `next/og` adds a build-time metadata route but no client runtime cost.
- The header is sticky only on desktop, avoiding mobile viewport obstruction.
- The page uses system CJK fonts for visual accents; rendering may vary slightly across
  operating systems but avoids a large download.
