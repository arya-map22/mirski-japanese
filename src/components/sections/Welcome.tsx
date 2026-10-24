import Image from "next/image";

import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { ArrowRight, WhatsApp } from "@/components/ui/Icons";
import { welcomeContent } from "@/content/home";

/**
 * Top-of-page welcome band. The backdrop is an original abstract SVG composition
 * (no stock photography is available or invented for this project).
 */
export function Welcome() {
  return (
    <section
      id="top"
      aria-labelledby="welcome-heading"
      className="relative isolate overflow-hidden"
    >
      <Image
        src="/welcome-bg.svg"
        alt=""
        aria-hidden="true"
        fill
        priority
        sizes="100vw"
        className="-z-10 object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-cream/55 sm:bg-cream/40"
      />

      <Container className="py-16 sm:py-20 lg:py-24">
        <div className="max-w-2xl">
          <p
            className="enter text-[0.7rem] font-semibold tracking-[0.18em] text-ink-soft uppercase"
            style={{ animationDelay: "60ms" }}
          >
            {welcomeContent.eyebrow}
          </p>
          <h1
            id="welcome-heading"
            className="enter mt-5 text-[clamp(2.25rem,5.4vw,3.9rem)] leading-[1.02] font-extrabold tracking-[-0.035em] text-balance text-ink"
            style={{ animationDelay: "140ms" }}
          >
            {welcomeContent.title}
          </h1>
          <p
            className="enter mt-5 max-w-xl text-lg leading-8 text-ink-muted"
            style={{ animationDelay: "220ms" }}
          >
            {welcomeContent.description}
          </p>
          <div
            className="enter mt-8 flex flex-wrap items-center gap-3"
            style={{ animationDelay: "300ms" }}
          >
            <ButtonLink href={welcomeContent.primaryCta.href} variant="dark">
              {welcomeContent.primaryCta.label}
              <ArrowRight className="size-4" />
            </ButtonLink>
            <ButtonLink href={welcomeContent.secondaryCta.href} variant="outline">
              <WhatsApp className="size-4" />
              {welcomeContent.secondaryCta.label}
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
