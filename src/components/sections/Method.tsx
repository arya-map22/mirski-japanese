import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { methodContent } from "@/content/home";

export function Method() {
  return (
    <section
      id="method"
      aria-labelledby="method-heading"
      className="on-ink bg-ink py-20 text-paper sm:py-28 lg:py-32"
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <Eyebrow tone="dark">{methodContent.eyebrow}</Eyebrow>
            <SectionTitle id="method-heading" tone="dark" className="mt-6">
              {methodContent.title}
            </SectionTitle>
          </div>

          <div className="lg:col-span-8 lg:pt-2">
            <p className="max-w-2xl text-lg leading-8 text-paper/75">{methodContent.description}</p>

            <ol className="mt-12 grid gap-10 sm:grid-cols-3 sm:gap-x-8">
              {methodContent.steps.map((step, index) => (
                <li key={step.title} className="border-t border-paper/20 pt-5">
                  <span className="font-mono text-xs tracking-[0.16em] text-vermilion-light">
                    0{index + 1}
                  </span>
                  <h3 className="mt-4 font-display text-2xl leading-snug text-paper">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-paper/75">{step.description}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Container>
    </section>
  );
}
