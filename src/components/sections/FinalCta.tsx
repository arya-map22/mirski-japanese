import { ArrowRight } from "@/components/ui/ArrowRight";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { enrolmentContact } from "@/config/site";
import { ctaContent } from "@/content/home";

export function FinalCta() {
  return (
    <section
      id="enquire"
      aria-labelledby="enquire-heading"
      className="on-vermilion bg-vermilion-deep py-20 text-paper sm:py-28"
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-8">
            <Eyebrow tone="inverse">{ctaContent.eyebrow}</Eyebrow>
            <SectionTitle id="enquire-heading" tone="dark" size="lg" className="mt-6 max-w-3xl">
              {ctaContent.title}
            </SectionTitle>
            <p className="mt-6 max-w-xl text-lg leading-8 text-paper">{ctaContent.description}</p>
            <div className="mt-9">
              <ButtonLink href={ctaContent.primaryCta.href} variant="solidLight">
                {ctaContent.primaryCta.label}
                <ArrowRight className="size-4" />
              </ButtonLink>
            </div>
          </div>

          <div className="lg:col-span-4 lg:border-l lg:border-paper/25 lg:pl-8">
            <p className="text-[0.65rem] font-semibold tracking-[0.2em] text-paper/80 uppercase">
              {ctaContent.contactLabel}
            </p>

            {enrolmentContact ? (
              <a
                href={enrolmentContact.href}
                className="mt-4 inline-flex min-h-11 items-center text-base font-semibold text-paper underline decoration-paper/40 underline-offset-4 transition-colors hover:decoration-paper"
              >
                {enrolmentContact.label}
              </a>
            ) : (
              <p className="mt-4 text-sm leading-6 text-paper">{ctaContent.contactFallback}</p>
            )}

            <p className="mt-6 border-t border-paper/20 pt-4 text-sm leading-6 text-paper/85">
              {ctaContent.contactNote}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
