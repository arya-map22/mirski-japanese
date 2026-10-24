import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { FeatureIcon, type FeatureIconName } from "@/components/ui/Icons";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { featuresContent } from "@/content/home";

export function Features() {
  return (
    <section id="keunggulan" aria-labelledby="features-heading" className="py-16 sm:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <Eyebrow>{featuresContent.eyebrow}</Eyebrow>
            <SectionTitle id="features-heading" className="mt-6">
              {featuresContent.title}
            </SectionTitle>
          </div>

          <ul className="grid gap-4 sm:grid-cols-2 lg:col-span-8">
            {featuresContent.items.map((item) => (
              <li key={item.title} className="rounded-3xl bg-cream-deep p-6 sm:p-7">
                <span className="flex size-12 items-center justify-center rounded-2xl bg-brand text-ink">
                  <FeatureIcon name={item.icon as FeatureIconName} className="size-6" />
                </span>
                <h3 className="mt-5 text-lg font-bold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-ink-muted">{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
