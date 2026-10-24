import { ArrowRight } from "@/components/ui/Icons";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { courses } from "@/content/courses";
import { journeyContent } from "@/content/home";

const accents = ["bg-brand", "bg-brand-orange", "bg-brand-deep", "bg-cream-deep"] as const;

export function Journey() {
  return (
    <section id="program" aria-labelledby="program-heading" className="py-16 sm:py-24">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>{journeyContent.eyebrow}</Eyebrow>
          <SectionTitle id="program-heading" className="mt-6">
            {journeyContent.title}
          </SectionTitle>
          <p className="mt-4 text-lg leading-8 text-ink-muted">{journeyContent.description}</p>
        </div>

        <ol className="mt-12 grid gap-4 sm:grid-cols-2">
          {courses.map((course, index) => (
            <li key={course.id} id={course.id}>
              <article
                aria-labelledby={`${course.id}-title`}
                className="group flex h-full flex-col rounded-3xl border border-ink/10 bg-cream p-6 transition-colors hover:border-ink/20 sm:p-7"
              >
                <div className="flex items-start justify-between gap-4">
                  <span
                    className={`flex size-11 items-center justify-center rounded-2xl text-sm font-extrabold text-ink ${accents[index % accents.length]}`}
                  >
                    {course.number}
                  </span>
                  <span className="rounded-full border border-ink/15 px-3 py-1 text-[0.65rem] font-bold tracking-[0.14em] text-ink-muted uppercase">
                    JLPT {course.jlpt}
                  </span>
                </div>

                <div className="mt-5 flex flex-wrap items-baseline gap-x-2">
                  <h3 id={`${course.id}-title`} className="text-xl font-bold text-ink">
                    {course.name}
                  </h3>
                  <span lang="ja" className="text-sm text-ink-soft">
                    {course.japaneseName}
                  </span>
                </div>

                <p className="mt-2 text-sm font-semibold text-ink">{course.tagline}</p>
                <p className="mt-3 flex-1 text-sm leading-7 text-ink-muted">{course.description}</p>

                <dl className="mt-5 grid gap-3 border-t border-ink/10 pt-4 text-sm sm:grid-cols-2">
                  <div>
                    <dt className="text-[0.6rem] font-bold tracking-[0.16em] text-ink-soft uppercase">
                      Fokus
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-ink">{course.focus}</dd>
                  </div>
                  <div>
                    <dt className="text-[0.6rem] font-bold tracking-[0.16em] text-ink-soft uppercase">
                      Target
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-ink">{course.goal}</dd>
                  </div>
                </dl>

                <a
                  href="#konsultasi"
                  className="mt-6 inline-flex min-h-11 items-center gap-2 text-sm font-bold text-ink underline decoration-brand-deep decoration-2 underline-offset-4 transition-colors hover:text-ink-muted"
                >
                  Tanya level ini
                  <ArrowRight className="size-4" />
                </a>
              </article>
            </li>
          ))}
        </ol>

        <p className="mt-6 text-center text-xs leading-6 text-ink-soft">{journeyContent.note}</p>
      </Container>
    </section>
  );
}
