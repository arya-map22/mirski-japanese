import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { PatternDecor } from "@/components/ui/PatternDecor";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { aboutContent } from "@/content/home";

export function About() {
  return (
    <section
      id="tentang"
      aria-labelledby="about-heading"
      className="reveal-wash band-deep relative isolate overflow-hidden py-16 sm:py-24"
    >
      <PatternDecor side="left" className="top-8 -left-24 w-56 sm:w-72" />
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <Eyebrow>{aboutContent.eyebrow}</Eyebrow>
            <SectionTitle id="about-heading" className="reveal-title mt-6">
              {aboutContent.title}
            </SectionTitle>
          </div>

          <div className="lg:col-span-7 lg:pt-2">
            <p className="max-w-2xl text-lg leading-8 text-ink-muted">{aboutContent.description}</p>

            <dl className="reveal mt-10 grid grid-cols-2 gap-3 sm:grid-cols-5">
              {aboutContent.stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl bg-cream-deep px-4 py-5">
                  <dd className="text-2xl font-extrabold tracking-[-0.02em] text-ink">
                    {stat.value}
                  </dd>
                  <dt className="mt-1 text-xs font-medium text-ink-muted">{stat.label}</dt>
                </div>
              ))}
            </dl>
            <p className="mt-3 text-xs leading-5 text-ink-soft">{aboutContent.statsNote}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
