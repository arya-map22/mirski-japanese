import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
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
            <Accordion type="single" collapsible className="space-y-3">
              {faqContent.items.map((item) => (
                <AccordionItem
                  key={item.question}
                  value={item.question}
                  className="rounded-2xl border border-ink/10 bg-cream px-5 not-last:border-b data-[state=open]:bg-cream-deep/40"
                >
                  <AccordionTrigger className="gap-6 py-4 text-base font-bold text-ink hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="max-w-2xl pb-5 leading-7 text-ink-muted">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </Container>
    </section>
  );
}
