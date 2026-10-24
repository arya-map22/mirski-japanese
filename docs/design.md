# Design System

## Direction

**Warm + friendly + modern + educational + trustworthy.**

Reference for layout and section flow: a bright, rounded, card-driven education landing
page (header with consultation CTA, hero, about + stats, level cards, feature cards,
consultation form, testimonials, career CTA, footer). Brand styling, copy, and assets are
Mirski's own.

## Colour

Tokens are defined in `src/app/globals.css` via `@theme`. Brand palette:

| Token          | Hex       | Use                                           |
| -------------- | --------- | --------------------------------------------- |
| `brand`        | `#FFCC55` | Primary accent: highlights, badges, CTA bands |
| `brand-deep`   | `#FFB602` | Primary buttons, links on light backgrounds   |
| `brand-orange` | `#FFA93F` | Hover states / secondary level accents        |
| `cream-deep`   | `#FFEDCF` | Section tints, cards, chips                   |
| `cream`        | `#FFFAF2` | Page background, cards on tinted sections     |
| `ink`          | `#241C10` | Text, dark buttons, borders                   |
| `ink-muted`    | `#5F5343` | Body copy                                     |
| `ink-soft`     | `#7A6A52` | Meta text, captions                           |
| `night`        | `#2B2114` | Dark sections (consultation, footer)          |

Contrast (measured):

- `ink` on `brand`: 11.2:1; `ink` on `brand-deep`: 9.6:1; `ink` on `cream`: 16.2:1.
- `ink-muted` on `cream`: 7.2:1; `ink-muted` on `cream-deep`: 6.5:1.
- `ink-soft` on `cream`: 5.0:1 (meta only, never long body text).
- `cream` on `night`: 14.9:1; `brand` on `night`: 10.5:1.

Never place white text on the yellow palette. Use `ink` on yellow.

## Typography

- **Body:** Helvetica (`"Helvetica Neue", Helvetica, Arial, ...`), the `font-sans` stack.
  Root font size is 17px so default copy reads comfortably; body copy sits at 17–21px with
  line height 1.6–1.75 in `ink-muted`.
- **Headings:** League Spartan (variable 300–800) via `next/font/google`, Latin subset,
  `display: "swap"`, applied to `h1`–`h4` through the `font-display` stack. Weight 700–800,
  tracking −0.03em, `text-balance`, fluid `clamp()` sizes (`2rem → 3.25rem` section, up to
  `4.75rem` hero).
- Labels/eyebrows: 0.7rem, 600–700, tracking 0.16–0.18em, uppercase.
- No Japanese glyphs anywhere in the UI; level names are Indonesian (Pemula → Mahir).

## Layout

- Container `max-w-6xl`, padding 20px → 32px → 40px.
- Section rhythm `py-16` → `py-24`.
- Rounded corners: cards `rounded-3xl`, buttons/pills `rounded-full`.
- Sticky header on all breakpoints: brand + CTA on one row, scrollable nav row on mobile.
- Anchor targets use `scroll-margin-top`.

## Components

- **Wordmark:** logo image (`public/mirski-logo.png`, exported from
  `assets/LOGOGRAM.svg`; source untouched).
- **Eyebrow:** pill with `cream-deep` background.
- **SectionTitle:** balance-wrapped heading, light/dark tone.
- **ButtonLink:** pill, min height 48px. Variants `primary` (yellow), `dark` (ink),
  `outline`, `light`.
- **DemoButton:** consultation CTA; deliberately inert until the WhatsApp channel exists.
- **Level timeline:** vertical rail with numbered badges (N5 at the top, N2 at the bottom),
  each level a card with JLPT tag, name, tagline, description, focus/target definition list,
  and a consultation link.
- **Feature card:** icon tile on `cream-deep`.
- **Testimonial card:** quote mark, quote, initial avatar, name, role.
- **FAQ:** native `<details>/<summary>` with plus/minus glyph, no JavaScript.

## Motion

- Colour transitions only, 200ms; arrow nudge on hover.
- `.reveal` gives scroll-linked fade/rise (`animation-timeline: view()`, CSS only, no
  JavaScript). It is opt-in via `@supports` and disabled under
  `prefers-reduced-motion: reduce`, which also turns off smooth scrolling and transitions.
  Browsers without scroll-driven animation support render content at rest.

## Imagery

- Only the supplied logo is used. No stock photography or fabricated classroom imagery.
- Placeholder data is text-only (lorem ipsum, `0+` counters) and clearly labelled in the
  UI or in `src/content/`.

## Responsive behaviour

Test at 320px, 390px, 768px, 1024px, 1440px. No horizontal scrolling; nav scrolls
horizontally on small screens rather than hiding.

## Do / Don't

Do: keep the yellow palette as accent and background tint, keep text dark on yellow,
preserve generous spacing and rounded cards.

Don't: add white-on-yellow text, gradients beyond subtle section fades, stock photos,
fabricated statistics/testimonials, or additional font families.
