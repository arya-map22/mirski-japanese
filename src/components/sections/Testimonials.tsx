import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { testimonialsContent } from "@/content/home";

export function Testimonials() {
  return (
    <section
      id="testimoni"
      aria-labelledby="testimonials-heading"
      className="bg-cream-deep/60 py-16 sm:py-24"
    >
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>{testimonialsContent.eyebrow}</Eyebrow>
          <SectionTitle id="testimonials-heading" className="mt-6">
            {testimonialsContent.title}
          </SectionTitle>
          <p className="mt-4 text-xs font-medium text-ink-soft">{testimonialsContent.note}</p>
        </div>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {testimonialsContent.items.map((item, index) => (
            <li key={index} className="reveal flex">
              <figure className="flex w-full flex-col rounded-3xl bg-cream p-6">
                <span
                  aria-hidden="true"
                  className="text-3xl leading-none font-extrabold text-brand-deep"
                >
                  &ldquo;
                </span>
                <blockquote className="mt-2 flex-1 leading-7 text-ink-muted">
                  {item.quote}
                </blockquote>
                <figcaption className="mt-5 flex items-center gap-3 border-t border-ink/10 pt-4">
                  <span
                    aria-hidden="true"
                    className="flex size-9 shrink-0 items-center justify-center rounded-full bg-brand text-sm font-bold text-ink"
                  >
                    {item.name.charAt(0)}
                  </span>
                  <span>
                    <span className="block text-sm font-bold text-ink">{item.name}</span>
                    <span className="block text-xs text-ink-soft">{item.role}</span>
                  </span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
