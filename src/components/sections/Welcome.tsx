import Image from "next/image";

import { ButtonLink, ConsultButton } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { ArrowRight, WhatsApp } from "@/components/ui/Icons";
import { welcomeContent } from "@/content/home";

/**
 * Top band: welcome line, headline, and the primary actions, all centred over an
 * original abstract SVG backdrop (no stock photography is available or invented
 * for this project).
 *
 * Reveals here are load-time entrances: this band is visible on arrival, so
 * scroll-linked animation would never get a chance to play.
 */
export function Welcome() {
  return (
    <section id="top" aria-labelledby="hero-heading" className="relative isolate overflow-hidden">
      <Image
        src="/welcome-bg.svg"
        alt=""
        aria-hidden="true"
        fill
        priority
        sizes="100vw"
        className="welcome-bg -z-10 object-cover"
      />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-cream/60 sm:bg-cream/45" />
      {/* Soft hand-off into the next band, so the edge never reads as a cut. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-40 bg-linear-to-b from-transparent to-cream"
      />

      <Container className="welcome-exit py-20 sm:py-24 lg:py-28">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <p
            className="enter rounded-full bg-cream/80 px-5 py-2 text-base font-semibold tracking-[0.02em] text-ink shadow-[0_1px_0_rgba(36,28,16,0.06)] backdrop-blur-sm sm:text-lg"
            style={{ animationDelay: "60ms" }}
          >
            <span
              aria-hidden="true"
              className="mr-2 inline-block size-2 animate-pulse rounded-full bg-brand-deep align-middle"
            />
            {welcomeContent.welcome}
          </p>

          <h1
            id="hero-heading"
            className="enter mt-6 text-[clamp(2.5rem,6.2vw,4.5rem)] leading-[0.98] font-extrabold tracking-[-0.035em] text-balance text-ink"
            style={{ animationDelay: "140ms" }}
          >
            {welcomeContent.title.lead}{" "}
            <span className="relative inline-block whitespace-nowrap">
              <span className="relative z-10">{welcomeContent.title.accent}</span>
              <span
                aria-hidden="true"
                className="absolute inset-x-0 bottom-1 -z-0 h-[0.35em] rounded-sm bg-brand"
              />
            </span>{" "}
            {welcomeContent.title.tail}
          </h1>

          <p
            className="enter mt-6 max-w-xl text-lg leading-8 text-ink-muted sm:text-xl sm:leading-9"
            style={{ animationDelay: "220ms" }}
          >
            {welcomeContent.description}
          </p>

          <div
            className="enter mt-9 flex flex-wrap items-center justify-center gap-3"
            style={{ animationDelay: "300ms" }}
          >
            <ButtonLink href={welcomeContent.primaryCta.href} variant="dark">
              {welcomeContent.primaryCta.label}
              <ArrowRight className="size-4" />
            </ButtonLink>
            <ConsultButton variant="outline">
              <WhatsApp className="size-4" />
              {welcomeContent.secondaryCta.label}
            </ConsultButton>
          </div>

          <p
            className="enter mt-8 text-sm font-medium tracking-wide text-ink-soft"
            style={{ animationDelay: "380ms" }}
          >
            {welcomeContent.note}
          </p>
        </div>
      </Container>
    </section>
  );
}
