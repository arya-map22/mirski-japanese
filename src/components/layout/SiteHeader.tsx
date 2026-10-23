import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { Wordmark } from "@/components/ui/Wordmark";
import { navigation } from "@/config/site";

export function SiteHeader() {
  return (
    <header className="border-b border-ink/10 bg-paper lg:sticky lg:top-0 lg:z-40">
      <Container>
        <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-3 py-4">
          <a href="#top" className="shrink-0 transition-opacity hover:opacity-80">
            <Wordmark />
          </a>

          <ButtonLink href="#enquire" variant="outline" className="order-2 shrink-0 lg:order-3">
            Enquire
          </ButtonLink>

          <nav
            aria-label="Primary"
            className="order-3 w-full border-t border-ink/10 pt-3 lg:order-2 lg:w-auto lg:flex-1 lg:border-0 lg:pt-0"
          >
            <ul className="flex items-center justify-between gap-4 sm:justify-start sm:gap-8 lg:justify-center">
              {navigation.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="inline-flex min-h-9 items-center text-[0.65rem] font-semibold tracking-[0.18em] text-ink-muted uppercase transition-colors hover:text-ink sm:text-xs"
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
