import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { courses } from "@/content/courses";
import { coursesContent } from "@/content/home";

export function Courses() {
  return (
    <section
      id="path"
      aria-labelledby="path-heading"
      className="bg-paper-deep py-20 sm:py-28 lg:py-32"
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <Eyebrow>{coursesContent.eyebrow}</Eyebrow>
            <SectionTitle id="path-heading" size="lg" className="mt-6">
              {coursesContent.title}
            </SectionTitle>
            <p className="mt-6 max-w-md text-lg leading-8 text-ink-muted">
              {coursesContent.description}
            </p>
            <p className="mt-6 max-w-md border-t border-ink/15 pt-4 text-xs leading-6 text-ink-muted">
              {coursesContent.note}
            </p>
          </div>

          <div className="lg:col-span-7">
            <ol className="border-t border-ink/20">
              {courses.map((course) => (
                <li
                  key={course.id}
                  id={course.id}
                  className="scroll-mt-28 border-b border-ink/20 py-8 sm:py-10"
                >
                  <article aria-labelledby={`${course.id}-title`}>
                    <div className="grid gap-5 sm:grid-cols-[4.5rem_1fr] sm:gap-6">
                      <div>
                        <p className="font-mono text-[0.65rem] tracking-[0.16em] text-ink-muted">
                          {course.number}
                        </p>
                        <p className="mt-2 inline-flex bg-ink px-2 py-1 text-[0.6rem] font-semibold tracking-[0.16em] text-paper uppercase">
                          {course.jlpt}
                        </p>
                      </div>

                      <div>
                        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                          <h3
                            id={`${course.id}-title`}
                            className="font-display text-2xl leading-tight text-ink sm:text-3xl"
                          >
                            {course.name}
                          </h3>
                          <span lang="ja" className="font-jp text-sm text-ink-muted">
                            {course.japaneseName}
                          </span>
                        </div>

                        <p className="mt-2 text-sm font-semibold text-vermilion">
                          {course.tagline}
                        </p>
                        <p className="mt-3 max-w-xl text-base leading-7 text-ink-muted">
                          {course.description}
                        </p>

                        <dl className="mt-5 grid gap-4 border-t border-ink/10 pt-4 text-sm sm:grid-cols-2">
                          <div>
                            <dt className="text-[0.6rem] font-semibold tracking-[0.18em] text-ink-muted uppercase">
                              Focus
                            </dt>
                            <dd className="mt-1 leading-6 text-ink">{course.focus}</dd>
                          </div>
                          <div>
                            <dt className="text-[0.6rem] font-semibold tracking-[0.18em] text-ink-muted uppercase">
                              Working toward
                            </dt>
                            <dd className="mt-1 leading-6 text-ink">{course.goal}</dd>
                          </div>
                        </dl>
                      </div>
                    </div>
                  </article>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Container>
    </section>
  );
}
