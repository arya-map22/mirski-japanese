# Accessibility

## Target

WCAG 2.2 level AA where practical. Accessibility is a release requirement, not a
post-launch enhancement.

## Semantic structure

- One `<h1>` in the hero.
- Each section has an `<h2>` and is labelled with `aria-labelledby`.
- Sub-items use `<h3>`; heading levels are not skipped.
- Header and footer use `<header>`, `<nav>`, and `<footer>` landmarks.
- The page content is inside `<main id="main">`.
- Course data uses an ordered list; each course is an `<article>` with an accessible
  name from its `<h3>`.
- Course metadata uses `<dl>/<dt>/<dd>`.
- FAQ uses native `<details>/<summary>`.
- Japanese UI accents use `lang="ja"` so screen readers can switch pronunciation.
- Decorative glyphs, arrows, and rules are marked `aria-hidden="true"`.

## Keyboard and focus

- A “Skip to content” link is the first focusable element.
- All interactive elements are native links or summaries.
- Focus is never removed without a visible replacement.
- Global `:focus-visible` outline is 2px with 3px offset.
- Focus colors adapt: vermilion on paper, vermilion-light on ink, paper on vermilion.
- Desktop sticky header is accommodated by `scroll-margin-top` on anchor targets.
- There is no focus trap and no JavaScript keyboard handling to maintain.
- Anchor links move focus/scroll to the target section; `main` is programmatically
  focusable via `tabIndex={-1}` for the skip link.

## Contrast

Approximate ratios for the core text combinations:

| Foreground        | Background       | Ratio  | Use                        |
| ----------------- | ---------------- | ------ | -------------------------- |
| `ink`             | `paper`          | ~16:1  | Primary text               |
| `ink-muted`       | `paper`          | ~6.8:1 | Body/secondary text        |
| `vermilion`       | `paper`          | ~5.3:1 | Accent text and focus ring |
| `paper`           | `vermilion-deep` | ~7.6:1 | Final CTA text             |
| `vermilion-light` | `ink`            | ~8.3:1 | Accent text on dark        |

Rules:

- Do not use color alone to convey meaning.
- Do not place vermilion body text on ink.
- Re-check contrast whenever a token or opacity changes. Tailwind opacity utilities
  reduce effective contrast.
- Decorative borders are not relied on for information.

## Motion

- `prefers-reduced-motion: reduce` disables smooth scrolling and collapses animation and
  transition durations.
- The only motion is a small arrow nudge, color transition, and FAQ plus/minus rotation.
- No autoplaying video, parallax, or scroll-triggered animation.

## Responsive and reflow

- Layout is mobile-first and tested from 320px.
- No horizontal scrolling at 320px or at 400% zoom in a 1280px viewport.
- Navigation wraps into a second row rather than hiding behind an inaccessible menu.
- Text uses relative units and `clamp()`; no fixed-height text containers.
- Test with 200% text zoom and increased text spacing.

## Targets and pointer input

- Buttons and primary links have a minimum height of 44px.
- Header/footer navigation links have a minimum height of 36px.
- The FAQ summary is a large full-row target.
- No hover-only interactions and no drag/gesture-only controls.

## Forms

There are no forms yet. When adding one:

- Give every control a persistent visible label; placeholders are not labels.
- Associate hints and errors with `aria-describedby`.
- Announce errors without moving focus unexpectedly.
- Provide autocomplete tokens where appropriate.
- Meet 3.3.1/3.3.3 error identification and suggestion requirements.
- Validate on the server and return accessible error messages.
- Test with keyboard and a screen reader.

## Manual test checklist

- [ ] Tab through the entire page; every interactive element is reachable in a logical
      order and has a visible focus state.
- [ ] Activate every anchor and FAQ disclosure with keyboard only.
- [ ] Confirm the skip link becomes visible and moves to main content.
- [ ] Check the page at 320px, 768px, 1024px, and 1440px.
- [ ] Zoom to 200% and 400%; confirm reflow and no clipped text.
- [ ] Apply increased text spacing (1.5 line height, 0.12em letter spacing, 0.16em word
      spacing) and confirm no content is lost.
- [ ] Run Lighthouse accessibility and axe DevTools; resolve violations.
- [ ] Spot-check with at least one screen reader (VoiceOver, NVDA, or TalkBack).
- [ ] Confirm reduced-motion behavior.
- [ ] Check contrast with a tool rather than estimating.

## Known gaps

- No automated accessibility test is configured yet.
- No formal screen-reader test has been recorded yet.
- The Japanese system serif stack may render differently across operating systems.
- The production CSP allows inline scripts; this is unrelated to accessibility but part
  of the same launch review.

Record completed checks in the release notes. Do not claim testing that was not done.
