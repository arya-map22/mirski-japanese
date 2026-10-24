import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { PatternDecor } from "@/components/ui/PatternDecor";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { faqContent } from "@/content/home";

export function Faq() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="reveal-wash band-deep relative isolate overflow-hidden py-16 sm:py-24"
    >
      <PatternDecor side="right" className="top-10 -right-24 w-56 sm:w-72" />
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <Eyebrow>{faqContent.eyebrow}</Eyebrow>
            <SectionTitle id="faq-heading" className="reveal-title mt-6">
              {faqContent.title}
            </SectionTitle>
            <p className="mt-5 max-w-xs text-sm leading-7 text-ink-muted">
              {faqContent.description}
            </p>
          </div>

          <div className="lg:col-span-8">
            <div className="space-y-3">
              {faqContent.items.map((item) => (
                <details
                  key={item.question}
                  className="group rounded-2xl border border-ink/10 bg-cream open:bg-cream-deep/40"
                >
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-6 rounded-2xl px-5 py-4 text-left">
                    <span className="text-base leading-snug font-bold text-balance text-ink">
                      {item.question}
                    </span>
                    <span
                      aria-hidden="true"
                      className="relative mt-1 size-4 shrink-0 rounded-full text-ink"
                    >
                      <span className="absolute top-1/2 left-0 h-0.5 w-4 -translate-y-1/2 rounded bg-current" />
                      <span className="absolute top-0 left-1/2 h-4 w-0.5 -translate-x-1/2 rounded bg-current transition-transform duration-200 group-open:rotate-90" />
                    </span>
                  </summary>
                  <p className="max-w-2xl px-5 pb-5 leading-7 text-ink-muted">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
