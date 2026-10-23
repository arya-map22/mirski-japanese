import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { faqContent } from "@/content/home";

export function Faq() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="border-t border-ink/10 py-20 sm:py-28"
    >
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <Eyebrow>{faqContent.eyebrow}</Eyebrow>
            <SectionTitle id="faq-heading" className="mt-6">
              {faqContent.title}
            </SectionTitle>
            <p className="mt-5 max-w-xs text-sm leading-7 text-ink-muted">
              Clear answers first. If something is still unclear, compare the course levels or read
              the enrolment note at the end of the page.
            </p>
          </div>

          <div className="lg:col-span-8">
            <div className="border-y border-ink/15">
              {faqContent.items.map((item) => (
                <details
                  key={item.question}
                  className="group border-t border-ink/15 first:border-t-0"
                >
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-5 text-left">
                    <span className="font-display text-xl leading-snug text-pretty text-ink">
                      {item.question}
                    </span>
                    <span aria-hidden="true" className="relative mt-1 size-4 shrink-0 text-ink">
                      <span className="absolute top-1/2 left-0 h-px w-4 -translate-y-1/2 bg-current" />
                      <span className="absolute top-0 left-1/2 h-4 w-px -translate-x-1/2 bg-current transition-transform duration-200 group-open:rotate-90" />
                    </span>
                  </summary>
                  <p className="max-w-2xl pr-10 pb-5 text-sm leading-7 text-ink-muted">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
