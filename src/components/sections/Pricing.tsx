import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { PatternDecor } from "@/components/ui/PatternDecor";
import { ArrowRight } from "@/components/ui/Icons";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { courses } from "@/content/courses";
import { pricingContent } from "@/content/home";

/**
 * Class options with price. Prices are PLACEHOLDER values from src/content/courses.ts
 * and render as "Rp —" until real pricing is supplied.
 */
export function Pricing() {
  return (
    <section
      id="kelas"
      aria-labelledby="pricing-heading"
      className="reveal-wash band-deep relative isolate overflow-hidden py-16 sm:py-24"
    >
      <PatternDecor side="left" className="bottom-8 -left-24 w-56 sm:w-80" />
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>{pricingContent.eyebrow}</Eyebrow>
          <SectionTitle id="pricing-heading" className="reveal-title mt-6">
            {pricingContent.title}
          </SectionTitle>
          <p className="mt-4 text-lg leading-8 text-ink-muted">{pricingContent.description}</p>
        </div>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {courses.map((course) => (
            <li key={course.id} className="reveal flex">
              <article
                aria-labelledby={`${course.id}-plan`}
                className="group flex w-full flex-col rounded-3xl border border-ink/10 bg-cream p-6 transition-all duration-300 hover:-translate-y-1 hover:border-ink/25 hover:shadow-[0_22px_50px_-30px_rgba(36,28,16,0.5)]"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="text-[0.65rem] font-bold tracking-[0.14em] text-ink-soft uppercase">
                    JLPT {course.jlpt}
                  </span>
                  <span className="text-xs font-semibold text-ink-soft">{course.number}</span>
                </div>

                <h3 id={`${course.id}-plan`} className="mt-3 text-xl font-bold text-ink">
                  {course.name}
                </h3>
                <p className="mt-1.5 leading-7 text-ink-muted">{course.tagline}</p>

                <p className="mt-5 flex flex-wrap items-baseline gap-x-2 border-t border-ink/10 pt-4">
                  <span className="text-2xl font-extrabold tracking-[-0.02em] text-ink">
                    {course.price}
                  </span>
                  <span className="text-xs font-medium text-ink-soft">{course.priceNote}</span>
                </p>
                <p className="mt-1 text-[0.7rem] leading-5 text-ink-soft">
                  {pricingContent.priceNote}
                </p>

                <dl className="mt-5 flex-1 space-y-2 text-sm">
                  <div>
                    <dt className="text-[0.6rem] font-bold tracking-[0.16em] text-ink-soft uppercase">
                      Cocok untuk
                    </dt>
                    <dd className="mt-1 leading-6 text-ink">{course.audience}</dd>
                  </div>
                </dl>

                <a
                  href="#consult-dialog"
                  data-consult
                  className="mt-5 inline-flex min-h-11 items-center gap-2 font-bold text-ink underline decoration-brand-deep decoration-2 underline-offset-4 transition-colors hover:text-ink-muted"
                >
                  Tanya kelas ini
                  <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </article>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
