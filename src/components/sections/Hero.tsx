import { ArrowRight, WhatsApp } from "@/components/ui/Icons";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { courses } from "@/content/courses";
import { heroContent } from "@/content/home";

export function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="reveal-wash relative overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[28rem] bg-linear-to-b from-cream-deep/80 to-transparent" />

      {/* Decorative depth. Purely ornamental, hidden from assistive tech. */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <span
          className="float absolute -top-24 -left-24 size-80 rounded-full bg-brand/25 blur-3xl"
          style={{ animationDelay: "-2s" }}
        />
        <span
          className="float absolute top-1/3 -right-32 size-96 rounded-full bg-brand-orange/20 blur-3xl"
          style={{ animationDelay: "-5s" }}
        />
      </div>

      {/* The first band below Welcome is where the page starts to move, so its
          reveals are scroll-linked rather than load-time: they play as the band
          scrolls up under the welcome backdrop. */}
      <Container className="grid items-center gap-12 pt-12 pb-16 sm:pt-16 lg:grid-cols-12 lg:gap-10 lg:pt-20 lg:pb-24">
        <div className="lg:col-span-7">
          <div className="reveal-title">
            <Eyebrow>{heroContent.eyebrow}</Eyebrow>
          </div>

          <h1
            id="hero-heading"
            className="reveal mt-6 max-w-3xl text-[clamp(2.75rem,6.8vw,4.75rem)] leading-[0.98] font-extrabold tracking-[-0.035em] text-balance text-ink"
          >
            {heroContent.title.lead}{" "}
            <span className="relative inline-block whitespace-nowrap">
              <span className="relative z-10">{heroContent.title.accent}</span>
              <span
                aria-hidden="true"
                className="absolute inset-x-0 bottom-1 -z-0 h-[0.35em] rounded-sm bg-brand"
              />
            </span>{" "}
            {heroContent.title.tail}
          </h1>

          <p className="reveal mt-6 max-w-xl text-lg leading-8 text-ink-muted sm:text-xl sm:leading-9">
            {heroContent.description}
          </p>

          <div className="reveal mt-8 flex flex-wrap items-center gap-3">
            <ButtonLink href={heroContent.primaryCta.href} variant="dark">
              {heroContent.primaryCta.label}
              <ArrowRight className="size-4" />
            </ButtonLink>
            <ButtonLink href={heroContent.secondaryCta.href} variant="outline">
              <WhatsApp className="size-4" />
              {heroContent.secondaryCta.label}
            </ButtonLink>
          </div>

          <p className="reveal mt-8 text-sm font-medium tracking-wide text-ink-soft">
            {heroContent.note}
          </p>
        </div>

        <div className="lg:col-span-5">
          <div className="reveal rounded-[2rem] border border-ink/10 bg-cream p-6 shadow-[0_18px_50px_-30px_rgba(36,28,16,0.45)] transition-shadow duration-500 hover:shadow-[0_28px_70px_-30px_rgba(36,28,16,0.55)] sm:p-8">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-[0.7rem] font-semibold tracking-[0.18em] text-ink-soft uppercase">
                  Jalur belajar
                </p>
                <p className="mt-1 text-xl font-bold text-ink">Empat level, satu arah.</p>
              </div>
              <span
                aria-hidden="true"
                className="flex size-11 shrink-0 items-center justify-center rounded-full bg-brand text-lg font-extrabold text-ink"
              >
                N5
              </span>
            </div>

            <ol className="mt-6 space-y-2">
              {courses.map((course) => (
                <li key={course.id}>
                  <a
                    href={`#${course.id}`}
                    className="group flex items-center gap-3 rounded-2xl bg-cream-deep/60 px-4 py-3 transition-colors hover:bg-brand/40"
                  >
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-ink text-[0.7rem] font-bold text-cream">
                      {course.number}
                    </span>
                    <span className="flex-1">
                      <span className="flex flex-wrap items-baseline gap-x-2">
                        <span className="font-bold text-ink">{course.name}</span>
                        <span className="text-[0.65rem] font-bold tracking-[0.14em] text-ink-muted uppercase">
                          JLPT {course.jlpt}
                        </span>
                      </span>
                    </span>
                    <ArrowRight className="size-4 shrink-0 text-ink-muted transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Container>
    </section>
  );
}
