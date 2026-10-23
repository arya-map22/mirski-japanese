# SEO

## Goals

- Make the page easy to understand and index.
- Present accurate metadata for sharing.
- Avoid keyword stuffing, fake claims, and fabricated structured data.
- Keep the page fast and semantically clean; technical SEO follows from that.

## Metadata

Implemented in `src/app/layout.tsx`:

| Field          | Value / behavior                                          |
| -------------- | --------------------------------------------------------- |
| Title          | “Mirski Japanese — A clear path from first words to N2”   |
| Description    | Four-level course path from Starter N5 to Advanced N2     |
| Canonical      | `/`, resolved against `SITE_URL`                          |
| `metadataBase` | `SITE_URL`                                                |
| Open Graph     | `website`, site name, title, description, generated image |
| Twitter card   | `summary_large_image`                                     |
| Robots         | `index, follow`                                           |
| Application    | `Mirski Japanese`                                         |
| Category       | `education`                                               |
| Theme color    | Paper `#f7f2e7`                                           |

The title template (`%s | Mirski Japanese`) is ready for future pages.

## Canonical domain

Set `SITE_URL` to the real production origin before launch:

```bash
SITE_URL=https://www.example.com
```

The fallback is `https://mirskijapanese.example`, a reserved `.example` domain. Do not
deploy with the fallback: it would produce incorrect canonical and Open Graph URLs.

The canonical is a path (`/`) resolved by `metadataBase`; do not hardcode a second
domain in page components.

## Open Graph image

`src/app/opengraph-image.tsx` generates a 1200×630 PNG at build time using `next/og`.

- Alt text: “Mirski Japanese — A clear path from first words to N2”.
- Uses the same paper, ink, and vermilion palette as the site.
- No external image or font fetch at request time.
- Next.js adds the image metadata automatically for Open Graph and Twitter.

Re-check the rendered card after changing the brand palette or headline.

## Sitemap and robots

- `src/app/sitemap.ts` lists `/` with `changeFrequency: "monthly"` and priority `1`.
- `src/app/robots.ts` allows all user agents and points to `/sitemap.xml`.
- Add new public routes to the sitemap only when they contain real content.
- Do not add `noindex` to the landing page.

## Semantic HTML

- `header`, `nav`, `main`, `section`, `article`, `footer` landmarks.
- Single `h1`; section `h2`s; item `h3`s.
- Descriptive link text; no “click here”.
- Course levels are an ordered list, matching the learning sequence.
- FAQ uses native disclosure, which keeps answers in the DOM and crawlable.
- Internal anchor navigation connects the hero, path, FAQ, and enrolment section.

## Content SEO

Natural, specific copy beats keyword lists. The page consistently uses:

- Mirski Japanese
- Japanese course / Japanese language education
- Starter N5, Elementary N4, Intermediate N3, Advanced N2
- JLPT levels as reference points

Do not add unverified claims such as “best”, “guaranteed”, “official partner”,
“certified”, or pass rates. Do not add location pages, fake reviews, or doorway pages.

## Structured data

Intentionally omitted in the initial shell.

Reasons:

- No verified legal entity, address, logo, telephone, or official profile URLs.
- No verified course provider details, schedules, or pricing.
- No real reviews or ratings; Google’s review snippet policies prohibit fabricated
  reviews and self-serving aggregate ratings.
- The visible page does not contain information that would justify a richer schema.

If structured data is added later:

- Use JSON-LD generated on the server.
- Include only visible, verified facts.
- `EducationalOrganization` may be appropriate once legal name, URL, logo, and contact
  details are confirmed.
- `Course` markup requires accurate provider, name, and description; add only with real
  course details.
- Never add `Review`, `AggregateRating`, or `FAQPage` markup for content that is not
  genuinely present and eligible.

## Technical checklist

- [ ] `SITE_URL` is the real HTTPS origin.
- [ ] Canonical URL resolves correctly.
- [ ] Open Graph image loads and displays the current brand.
- [ ] `/robots.txt` and `/sitemap.xml` return correct production URLs.
- [ ] Page title and description are unique and accurate.
- [ ] One `h1`; logical heading order.
- [ ] All internal anchors resolve to existing IDs.
- [ ] No indexable placeholder content (contact TODO, lorem ipsum).
- [ ] No fabricated reviews, ratings, credentials, or statistics.
- [ ] Production build is static and returns 200 for `/`.
- [ ] Verify with Search Console after the real domain is connected.

## Open SEO questions

- Final production domain and preferred `www` vs apex form.
- Official brand profiles to link (none are currently published on the site).
- Whether the business needs localized routes or additional languages.
- Whether real course pages, instructor pages, or a blog will be added.
