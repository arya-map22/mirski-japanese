import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { Wordmark } from "@/components/ui/Wordmark";
import { consultCta, navigation } from "@/config/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-ink/10 bg-cream/95 backdrop-blur supports-[backdrop-filter]:bg-cream/80">
      <Container>
        <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 py-3">
          <a href="#top" className="shrink-0 rounded-lg transition-opacity hover:opacity-80">
            <Wordmark priority />
          </a>

          <ButtonLink
            href={consultCta.href}
            variant="dark"
            className="order-2 min-h-10 shrink-0 px-4 py-2 text-[0.8rem] sm:px-5 lg:order-3"
          >
            {consultCta.label}
          </ButtonLink>

          <nav
            aria-label="Navigasi utama"
            className="order-3 -mx-1 w-full border-t border-ink/10 pt-1 lg:order-2 lg:mx-0 lg:w-auto lg:flex-1 lg:border-0 lg:pt-0"
          >
            <ul className="flex flex-nowrap items-center gap-x-0.5 sm:gap-x-1 lg:justify-center lg:gap-x-2">
              {navigation.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="inline-flex min-h-10 items-center rounded-full px-2 text-[0.78rem] font-medium text-ink-muted transition-colors hover:bg-cream-deep hover:text-ink sm:px-2.5 sm:text-sm"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
}
