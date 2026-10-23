import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { whyContent } from "@/content/home";

export function WhyMirski() {
  return (
    <section id="why" aria-labelledby="why-heading" className="py-20 sm:py-28">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <Eyebrow>{whyContent.eyebrow}</Eyebrow>
            <p className="mt-6 max-w-xs font-display text-2xl leading-snug text-pretty text-ink-muted">
              {whyContent.aside}
            </p>
          </div>

          <div className="lg:col-span-8">
            <SectionTitle id="why-heading">{whyContent.title}</SectionTitle>

            <ul className="mt-10 grid gap-8 sm:grid-cols-3 sm:gap-x-8">
              {whyContent.items.map((item, index) => (
                <li key={item.title} className="border-t border-ink/15 pt-5">
                  <span className="font-mono text-[0.65rem] tracking-[0.16em] text-vermilion">
                    0{index + 1}
                  </span>
                  <h3 className="mt-3 font-display text-xl leading-snug text-ink">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-ink-muted">{item.description}</p>
                </li>
              ))}
            </ul>

            <p className="mt-10 max-w-2xl border-l-2 border-vermilion pl-5 text-lg leading-8 text-ink">
              {whyContent.conclusion}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
