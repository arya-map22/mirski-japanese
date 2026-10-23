# Design System

## Direction

**Premium + warm + modern + educational + approachable + trustworthy.**

The visual language is editorial rather than SaaS: warm paper tones, ink-like type,
generous space, thin rules, and a single vermilion accent. It should feel like a
well-made printed prospectus — calm, confident, and human — not a dashboard.

Reference mood words: Japanese stationery, a course handbook, a stamped seal, a
wayfinding sign. Do not reproduce a specific reference site's layout or assets.

## Principles

- Strong hierarchy before decoration.
- Generous whitespace; let sections breathe.
- One clear accent color; use it with restraint.
- Rules and typography instead of cards and shadows.
- Clear CTA hierarchy: one primary action per view.
- Mobile-first; test from 320px upward.
- Motion only to clarify a state change.

## Color

Tokens are defined in `src/app/globals.css` via `@theme`.

| Token             | Hex       | Use                                          |
| ----------------- | --------- | -------------------------------------------- |
| `paper`           | `#F7F2E7` | Page background                              |
| `paper-deep`      | `#EFE7D8` | Course section background                    |
| `ink`             | `#1C1A16` | Primary text, dark sections, primary buttons |
| `ink-muted`       | `#5A5348` | Body copy, secondary labels                  |
| `vermilion`       | `#B23A2A` | Accent, links, seals, focus ring on light    |
| `vermilion-deep`  | `#8C2B1E` | Final CTA background                         |
| `vermilion-light` | `#E9A08D` | Accent text on dark backgrounds              |
| `moss`            | `#55604D` | Reserved; not used in the initial shell      |

Approximate contrast checks:

- `ink` on `paper`: ~16:1.
- `ink-muted` on `paper`: ~6.8:1.
- `vermilion` on `paper`: ~5.3:1 (passes AA for normal text).
- `paper` on `vermilion-deep`: ~7.6:1.
- `vermilion-light` on `ink`: ~8.3:1.

Do not use vermilion body text on ink; use `vermilion-light` for accents there.

## Typography

- **Display:** Fraunces (variable, Latin subset) through `next/font`. Used for headings,
  the wordmark, and editorial statements. Fallback includes serif faces.
- **Body/UI:** Manrope (variable, Latin subset). Used for paragraphs, labels, buttons,
  and navigation.
- **Japanese:** system serif stack (`Hiragino Mincho ProN`, `Yu Mincho`, `Noto Serif JP`)
  via `font-jp`. Used only for small identity accents and level names.
- Body copy is 16–20px with generous line height (1.6–1.75).
- Display headings use `clamp()` and tight tracking (`-0.02em` to `-0.035em`).
- Labels are uppercase, small (0.6–0.7rem), with 0.16–0.2em tracking.
- Avoid more than two Latin font families.

## Layout

- Container: `max-w-6xl` (72rem), horizontal padding 20px → 32px → 40px.
- Section rhythm: `py-20` mobile, `py-28` tablet, `py-32` desktop for large sections.
- Primary grid: 12 columns on large screens with asymmetric splits (4/8, 5/7, 7/5).
- Hero: 7/5 split on desktop; stacked with the path card after the copy on mobile.
- Header: one row on desktop, two rows on mobile (brand + CTA, then section nav). No
  hamburger menu is needed for five short links.
- Desktop header is sticky; mobile header scrolls away to preserve vertical space.
- Anchor targets use `scroll-margin-top` so the sticky header does not obscure headings.

## Components

- **Wordmark:** vermilion seal with `道`, "Mirski" in display serif, "Japanese" in
  tracked uppercase.
- **Eyebrow:** short rule plus tracked label. Three tones: light, dark, inverse.
- **SectionTitle:** shared display heading with light/dark tone and two sizes.
- **ButtonLink:** rectangular, no pill radius. Variants: solid ink, outline, text,
  solid light, outline light. Minimum height 44px.
- **Path card (hero):** bordered top/bottom, numbered level list, seal, short caption.
- **Course row:** numbered editorial row with JLPT badge, display title, Japanese name,
  tagline, description, and a two-column definition list.
- **FAQ:** native `<details>/<summary>` with a custom plus/minus glyph. No JavaScript.
- **Final CTA:** deep vermilion band with a paper-colored button and a clearly separated
  contact column.

Do not add a generic card grid, glass panels, or rounded-shadow containers to solve a
hierarchy problem that typography and rules can solve.

## Motion

- Transitions are limited to color and small transforms, 200ms.
- Arrow nudges on hover are decorative and optional.
- FAQ plus/minus rotates on open.
- `prefers-reduced-motion: reduce` disables smooth scrolling and collapses transition
  durations globally.
- No scroll-triggered animations, parallax, or entrance animations in the initial shell.

## Responsive behavior

Design and test at:

- 320px: no horizontal scroll; headline wraps cleanly; nav fits in one row.
- 375–430px: standard phone layouts.
- 768px: two-column course metadata; three-column method/outcome items.
- 1024px+: asymmetric desktop grids and sticky header.
- 1440px+: content remains centered; line lengths stay controlled.

Use fluid type with `clamp()` rather than many breakpoint-specific font sizes.

## Imagery and assets

- The initial shell uses no photography or illustration. Visual interest comes from
  typography, rules, and the seal.
- `assets/` is reserved for source material and is currently empty. Inspect it before
  adding imagery; do not overwrite source assets.
- When real imagery is supplied, use `next/image`, explicit dimensions, meaningful alt
  text, and optimized formats. Avoid decorative stock photography that implies
  unverified classrooms, instructors, or students.
- Do not use external image URLs at runtime.

## Do / Don’t

Do:

- Use whitespace and type scale to create hierarchy.
- Keep rules thin and purposeful.
- Use vermilion as a wayfinding accent, not a background for everything.
- Preserve strong contrast and visible focus.
- Let content determine section height.

Don’t:

- Add gradients, glassmorphism, neon, or heavy shadows.
- Use pill-shaped buttons or generic SaaS card grids.
- Add animation that does not communicate state.
- Use low-contrast gray-on-gray text.
- Force unrelated assets into the layout.
- Copy the reference site's branding, illustrations, or section layouts.
