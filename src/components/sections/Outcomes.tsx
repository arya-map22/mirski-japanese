import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { outcomesContent } from "@/content/home";

export function Outcomes() {
  return (
    <section id="outcomes" aria-labelledby="outcomes-heading" className="py-20 sm:py-28">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <Eyebrow>{outcomesContent.eyebrow}</Eyebrow>
            <SectionTitle id="outcomes-heading" className="mt-6">
              {outcomesContent.title}
            </SectionTitle>
            <p className="mt-5 max-w-md text-lg leading-8 text-ink-muted">
              {outcomesContent.description}
            </p>
          </div>

          <div className="lg:col-span-7">
            <ul className="grid gap-8 sm:grid-cols-3 sm:gap-x-8">
              {outcomesContent.items.map((item) => (
                <li key={item.title} className="border-t border-ink/15 pt-5">
                  <h3 className="font-display text-xl leading-snug text-ink">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-ink-muted">{item.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
