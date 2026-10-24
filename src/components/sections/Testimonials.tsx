import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { testimonialsContent } from "@/content/home";

/**
 * Horizontal carousel. Native overflow scrolling handles the interaction (touch,
 * trackpad, keyboard), and CSS view timelines dim and shrink the cards away from
 * the centre — no JavaScript, and the strip is still a plain scrollable list when
 * scroll-driven animation is unsupported.
 */
export function Testimonials() {
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

      {/* Full-bleed track so cards can bleed past the container edge. */}
      <ul
        className="mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        style={{
          scrollPaddingInline: "max(1.25rem, calc((100vw - 72rem) / 2 + 1.25rem))",
          paddingInline: "max(1.25rem, calc((100vw - 72rem) / 2 + 1.25rem))",
        }}
      >
        {testimonialsContent.items.map((item, index) => (
          <li
            key={index}
            className="slide-focus flex w-[min(24rem,85vw)] shrink-0 snap-center"
          >
            <figure className="flex w-full flex-col rounded-3xl bg-cream p-6 shadow-[0_16px_40px_-32px_rgba(36,28,16,0.5)]">
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
    </section>
  );
}
