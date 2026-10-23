import { ArrowRight } from "@/components/ui/ArrowRight";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { heroContent } from "@/content/home";
import { courses } from "@/content/courses";

export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden border-b border-ink/10"
    >
      <Container className="grid gap-16 pt-12 pb-20 sm:pt-16 lg:grid-cols-12 lg:gap-10 lg:pt-24 lg:pb-28">
        <div className="lg:col-span-7 lg:pr-8">
          <Eyebrow>{heroContent.eyebrow}</Eyebrow>

          <h1
            id="hero-heading"
            className="mt-7 max-w-3xl font-display text-[clamp(2.8rem,7.2vw,5.4rem)] leading-[0.98] font-medium tracking-[-0.035em] text-pretty text-ink"
          >
            {heroContent.title.lead}{" "}
            <span className="text-vermilion italic">{heroContent.title.accent}</span>{" "}
            {heroContent.title.tail}
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-8 text-ink-muted sm:text-xl sm:leading-9">
            {heroContent.description}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-4">
            <ButtonLink href={heroContent.primaryCta.href}>
              {heroContent.primaryCta.label}
              <ArrowRight className="size-4" />
            </ButtonLink>
            <ButtonLink href={heroContent.secondaryCta.href} variant="text">
              {heroContent.secondaryCta.label}
            </ButtonLink>
          </div>

          <div className="mt-14 border-t border-ink/15 pt-5">
            <p className="text-[0.65rem] font-semibold tracking-[0.2em] text-ink-muted uppercase">
              {heroContent.pathLabel}
            </p>
            <ol className="mt-3 flex flex-wrap items-baseline gap-x-1 gap-y-1 font-display text-lg leading-snug text-ink sm:text-xl">
              {courses.map((course, index) => (
                <li key={course.id} className="flex items-baseline gap-1 whitespace-nowrap">
                  <span>
                    {course.name} <span className="text-vermilion">{course.jlpt}</span>
                  </span>
                  {index < courses.length - 1 ? (
                    <span aria-hidden="true" className="text-ink/30">
                      →
                    </span>
                  ) : null}
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className="lg:col-span-5 lg:pt-10">
          <div className="border-y border-ink/20 py-6">
            <div className="flex items-start justify-between gap-6">
              <div>
                <p className="text-[0.65rem] font-semibold tracking-[0.2em] text-ink-muted uppercase">
                  The route
                </p>
                <p className="mt-2 max-w-56 font-display text-2xl leading-tight text-pretty text-ink">
                  Four levels, one direction.
                </p>
              </div>
              <span
                aria-hidden="true"
                lang="ja"
                className="flex size-12 shrink-0 items-center justify-center bg-vermilion font-jp text-2xl leading-none text-paper"
              >
                道
              </span>
            </div>

            <ol className="mt-8">
              {courses.map((course) => (
                <li key={course.id} className="border-t border-ink/15 first:border-t-0">
                  <a
                    href={`#${course.id}`}
                    className="group flex items-baseline gap-3 py-3 transition-colors"
                  >
                    <span className="w-6 font-mono text-[0.65rem] text-ink-muted">
                      {course.number}
                    </span>
                    <span className="flex-1">
                      <span className="flex flex-wrap items-baseline gap-x-2.5">
                        <span className="font-display text-lg text-ink transition-colors group-hover:text-vermilion">
                          {course.name}
                        </span>
                        <span className="text-[0.6rem] font-semibold tracking-[0.16em] text-vermilion uppercase">
                          {course.jlpt}
                        </span>
                      </span>
                      <span lang="ja" className="mt-0.5 block text-xs text-ink-muted">
                        {course.japaneseName}
                      </span>
                    </span>
                    <ArrowRight className="size-4 shrink-0 text-ink-muted transition-transform group-hover:translate-x-1 group-hover:text-vermilion" />
                  </a>
                </li>
              ))}
            </ol>

            <p className="mt-5 text-sm leading-6 text-ink-muted">
              Each level builds on the one before. The foundation stays with you.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
