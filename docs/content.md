# Content

## Source of truth

Only these business facts are known:

- The brand name: **Mirski Japanese**.
- The category: Japanese-language education.
- The course path: **Starter N5 → Elementary N4 → Intermediate N3 → Advanced N2**.

No other operational, commercial, or social claims are verified.

## Voice

Mirski Japanese should sound:

- warm, not saccharine
- confident, not boastful
- clear, not simplistic
- intelligent, not academic
- human, not corporate
- specific, not generic

Prefer short, concrete sentences. Explain the learner's experience rather than listing
features. Avoid hype, exclamation marks, emoji, and AI-marketing phrases such as
“unlock your potential”, “revolutionary”, or “seamless journey”.

### Tone examples

Good:

- “A clear path from first words to N2.”
- “Most learners don’t need more resources. They need to know what comes next.”
- “One level at a time.”
- “Not a promise of fluency. A sequence of capabilities, each built on the last.”

Avoid:

- “Master Japanese in record time!”
- “Join thousands of successful students.”
- “Our world-class, certified instructors guarantee results.”
- “Unlock your dream career in Japan.”

## Copy map

| Section    | Source                   | Notes                                    |
| ---------- | ------------------------ | ---------------------------------------- |
| Metadata   | `src/config/site.ts`     | Title/description also used in sharing.  |
| Header     | `src/config/site.ts`     | Navigation labels and enquiry CTA.       |
| Hero       | `src/content/home.ts`    | Positions the four-level path.           |
| Why a path | `src/content/home.ts`    | Learner problem and brand promise.       |
| Method     | `src/content/home.ts`    | Three teaching principles.               |
| Courses    | `src/content/courses.ts` | Four levels; only supplied course facts. |
| Outcomes   | `src/content/home.ts`    | Capabilities, not guarantees.            |
| FAQ        | `src/content/home.ts`    | Level/progression questions.             |
| Final CTA  | `src/content/home.ts`    | Enrolment placeholder and path CTA.      |
| Footer     | components + `site.ts`   | Navigation and level links.              |

Keep substantial copy in `src/content/`; do not bury it in layout components.

## Claims policy

Never invent or imply:

- testimonials, reviews, or ratings
- student counts, class counts, pass rates, or success rates
- instructor names, credentials, native-speaker status, or experience
- partnerships, accreditations, certifications, or official JLPT affiliation
- pricing, discounts, scholarships, or payment plans
- schedules, class sizes, duration, or weekly time commitments
- guarantees of fluency, exam success, employment, study, or visas
- locations, legal entity details, or contact information
- “best”, “leading”, “number one”, or similar superlatives

The JLPT level names are used as reference points, not as a claim that the courses are
officially endorsed by the exam provider or that learners will pass.

## Provisional copy requiring sign-off

The following is positioning copy written for the shell. It must be reviewed against
the actual curriculum before launch:

- The three method principles (“Build the foundation”, “Use it in context”, “Review,
  then extend”).
- The claim that each level follows a consistent rhythm.
- Course descriptions, focus areas, and “working toward” statements.
- The statement that Starter N5 is designed for learners starting from the beginning.
- The statement that the levels are sequential.

Mark corrections in this document and update `src/content/home.ts` and
`src/content/courses.ts`.

## Intentional placeholders

- **Enrolment contact:** `enrolmentContact` is `null` in `src/config/site.ts`. The page
  shows “Official contact details are not published on this site yet.” Replace it with a
  real, monitored channel and update the header CTA if appropriate.
- **Production domain:** `SITE_URL` falls back to `https://mirskijapanese.example`. Set
  the real origin before deployment.
- **Social proof:** no section is rendered. Add only with real, attributable content and
  permission.
- **Legal pages:** privacy policy, terms, and any jurisdiction-specific pages are not
  created because the legal entity and requirements are unknown.

Do not replace placeholders with plausible-sounding invented details.

## Social proof policy

When real proof exists:

- Use the exact wording approved by the person or organization.
- Keep attribution (name, role, context) accurate.
- Do not edit a testimonial to imply a stronger result.
- Do not use a logo without permission.
- Do not add aggregate ratings unless they are genuine and verifiable.
- Ensure testimonials do not create false expectations of exam results or fluency.
- Prefer a small number of specific stories over a wall of generic praise.

## FAQ rules

- Answer only what is known.
- Use the JLPT scale as public context, not as an outcome promise.
- The enrolment answer currently states the contact details are unpublished; replace it
  when the channel exists.
- Keep answers short enough to scan on mobile.

## Editing workflow

1. Update the relevant content module (`home.ts`, `courses.ts`, or `site.ts`).
2. Check that headings, anchor IDs, and navigation labels still match.
3. Check that no unverified claim was introduced.
4. Update this document and `docs/product.md` if the business facts change.
5. Run `pnpm lint`, `pnpm typecheck`, and `pnpm build`.

## Approval checklist

- [ ] Every factual claim is supplied or approved by the business.
- [ ] Method and course descriptions match the real curriculum.
- [ ] No fabricated social proof, statistics, credentials, or pricing.
- [ ] Enrolment contact is real and monitored.
- [ ] Production domain is set.
- [ ] Testimonials (if any) have consent and accurate attribution.
- [ ] Legal/privacy requirements are satisfied for the operating jurisdiction.
- [ ] Brand spelling and Japanese terms are correct.
- [ ] Copy reads naturally on mobile and at 320px.
