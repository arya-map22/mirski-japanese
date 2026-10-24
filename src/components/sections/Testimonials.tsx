import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { testimonialsContent } from "@/content/home";

/**
 * Testimonials drift rightwards on a CSS marquee: the track holds two identical
 * copies and shifts by exactly half its width, so the loop has no seam.
 *
 * Hovering or focusing the strip pauses it, and the card under the pointer lifts.
 * No JavaScript. Under `prefers-reduced-motion: reduce` the animation is dropped
 * and the strip becomes a plain wrapping list.
 */
export function Testimonials() {
  const items = testimonialsContent.items;

  return (
    <section
      id="testimoni"
      aria-labelledby="testimonials-heading"
      className="reveal-wash bg-cream-deep/60 py-16 sm:py-24"
    >
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>{testimonialsContent.eyebrow}</Eyebrow>
          <SectionTitle id="testimonials-heading" className="reveal-title mt-6">
            {testimonialsContent.title}
          </SectionTitle>
          <p className="mt-4 text-xs font-medium text-ink-soft">{testimonialsContent.note}</p>
        </div>
      </Container>

      <div
        className="marquee marquee-fade mt-12 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        role="group"
        aria-label="Testimoni siswa. Fokuskan untuk menghentikan gerakan."
        tabIndex={0}
      >
        <div className="marquee-track-reverse flex w-max">
          {[0, 1].map((copy) => (
            <ul
              key={copy}
              aria-hidden={copy === 1 ? "true" : undefined}
              className="flex shrink-0 gap-4 pr-4"
            >
              {items.map((item, index) => (
                <li key={index} className="flex w-[min(24rem,85vw)] shrink-0">
                  <figure className="group flex w-full flex-col rounded-3xl bg-cream p-6 shadow-[0_16px_40px_-32px_rgba(36,28,16,0.5)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_55px_-30px_rgba(36,28,16,0.55)]">
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
          ))}
        </div>
      </div>
    </section>
  );
}
