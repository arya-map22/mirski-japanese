import { ArrowRight } from "@/components/ui/Icons";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { careerContent } from "@/content/home";

export function CareerCta() {
  return (
    <section aria-labelledby="career-heading" className="py-16 sm:py-24">
      <Container>
        <div className="relative overflow-hidden rounded-[2rem] bg-brand px-6 py-12 sm:px-12 sm:py-16">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -right-10 -bottom-16 text-[12rem] leading-none font-extrabold text-cream/25 select-none"
          >
            日本
          </span>

          <div className="relative max-w-2xl">
            <h2
              id="career-heading"
              className="text-[clamp(1.9rem,4vw,3rem)] leading-[1.05] font-extrabold tracking-[-0.03em] text-balance text-ink"
            >
              {careerContent.title}
            </h2>
            <p className="mt-4 text-base leading-7 text-ink/80 sm:text-lg">
              {careerContent.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="#konsultasi" variant="dark">
                {careerContent.buttonLabel}
                <ArrowRight className="size-4" />
              </ButtonLink>
              <ButtonLink href={careerContent.primaryCta.href} variant="light">
                {careerContent.primaryCta.label}
              </ButtonLink>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
