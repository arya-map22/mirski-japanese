import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { FeatureIcon, type FeatureIconName } from "@/components/ui/Icons";
import { PatternDecor } from "@/components/ui/PatternDecor";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { featuresContent } from "@/content/home";

export function Features() {
  return (
    <section
      id="keunggulan"
      aria-labelledby="features-heading"
      className="reveal-wash band-cream relative isolate overflow-hidden py-16 sm:py-24"
    >
      <PatternDecor side="right" className="bottom-4 -right-24 w-56 sm:w-72" />
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <Eyebrow>{featuresContent.eyebrow}</Eyebrow>
            <SectionTitle id="features-heading" className="reveal-title mt-6">
              {featuresContent.title}
            </SectionTitle>
          </div>

          <ul className="grid gap-4 sm:grid-cols-2 lg:col-span-8">
            {featuresContent.items.map((item) => (
              <li
                key={item.title}
                className="reveal group rounded-3xl bg-cream-deep p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-brand/40 hover:shadow-[0_20px_45px_-30px_rgba(36,28,16,0.5)] sm:p-7"
              >
                <span className="flex size-12 items-center justify-center rounded-2xl bg-brand text-ink transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110">
                  <FeatureIcon name={item.icon as FeatureIconName} className="size-6" />
                </span>
                <h3 className="mt-5 text-lg font-bold text-ink">{item.title}</h3>
                <p className="mt-2 leading-7 text-ink-muted">{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
