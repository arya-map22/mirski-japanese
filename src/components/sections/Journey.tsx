import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ArrowRight } from "@/components/ui/Icons";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { courses } from "@/content/courses";
import { journeyContent } from "@/content/home";

const accents = ["bg-brand", "bg-brand-orange", "bg-brand-deep", "bg-cream-deep"] as const;

/** Vertical path: N5 at the top, N2 at the bottom, joined by a single rail. */
export function Journey() {
  return (
    <section id="program" aria-labelledby="program-heading" className="reveal-wash py-16 sm:py-24">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>{journeyContent.eyebrow}</Eyebrow>
          <SectionTitle id="program-heading" className="reveal-title mt-6">
            {journeyContent.title}
          </SectionTitle>
          <p className="mt-4 text-lg leading-8 text-ink-muted">{journeyContent.description}</p>
        </div>

        <ol className="relative mx-auto mt-14 max-w-3xl">
          {/* Rail: track, plus a brand-coloured fill that grows with the scroll. */}
          <span
            aria-hidden="true"
            className="absolute top-4 bottom-4 left-6 w-px bg-ink/15 sm:left-7"
          />
          <span
            aria-hidden="true"
            className="rail-grow absolute top-4 bottom-4 left-6 w-px bg-brand-deep sm:left-7"
          />

          {courses.map((course, index) => {
            const isLast = index === courses.length - 1;

            return (
              <li key={course.id} id={course.id} className="relative pb-10 last:pb-0">
                <div className="reveal group flex gap-5 sm:gap-7">
                  <span
                    aria-hidden="true"
                    className={`relative z-10 flex size-12 shrink-0 items-center justify-center rounded-full text-sm font-extrabold text-ink ring-[6px] ring-cream transition-transform duration-300 group-hover:scale-110 sm:size-14 ${accents[index % accents.length]}`}
                  >
                    {course.number}
                  </span>

                  <article
                    aria-labelledby={`${course.id}-title`}
                    className="min-w-0 flex-1 rounded-3xl border border-ink/10 bg-cream p-5 transition-all duration-300 group-hover:-translate-y-1 group-hover:border-ink/25 group-hover:shadow-[0_20px_45px_-30px_rgba(36,28,16,0.5)] sm:p-7"
                  >
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                      <h3 id={`${course.id}-title`} className="text-xl font-bold text-ink sm:text-2xl">
                        {course.name}
                      </h3>
                      <span className="rounded-full bg-cream-deep px-3 py-1 text-[0.65rem] font-bold tracking-[0.14em] text-ink uppercase">
                        JLPT {course.jlpt}
                      </span>
                    </div>

                    <p className="mt-2 text-base font-semibold text-ink">{course.tagline}</p>
                    <p className="mt-2 leading-7 text-ink-muted">{course.description}</p>

                    <dl className="mt-5 grid gap-3 border-t border-ink/10 pt-4 text-sm sm:grid-cols-2">
                      <div>
                        <dt className="text-[0.6rem] font-bold tracking-[0.16em] text-ink-soft uppercase">
                          Fokus
                        </dt>
                        <dd className="mt-1 leading-6 text-ink">{course.focus}</dd>
                      </div>
                      <div>
                        <dt className="text-[0.6rem] font-bold tracking-[0.16em] text-ink-soft uppercase">
                          Target
                        </dt>
                        <dd className="mt-1 leading-6 text-ink">{course.goal}</dd>
                      </div>
                    </dl>

                    <a
                      href="#konsultasi"
                      className="mt-5 inline-flex min-h-11 items-center gap-2 font-bold text-ink underline decoration-brand-deep decoration-2 underline-offset-4 transition-colors hover:text-ink-muted"
                    >
                      Tanya level ini
                      <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </a>
                  </article>
                </div>

                {!isLast && (
                  <span
                    aria-hidden="true"
                    className="absolute bottom-2 left-6 z-10 -translate-x-1/2 text-ink/30 sm:left-7"
                  >
                    <ArrowRight className="size-4 rotate-90" />
                  </span>
                )}
              </li>
            );
          })}
        </ol>

        <p className="mt-8 text-center text-xs leading-6 text-ink-soft">{journeyContent.note}</p>
      </Container>
    </section>
  );
}
