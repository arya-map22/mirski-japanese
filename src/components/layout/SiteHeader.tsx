"use client";

import { useEffect, useState } from "react";

import { Container } from "@/components/ui/Container";
import { Wordmark } from "@/components/ui/Wordmark";
import { consultCta, navigation } from "@/config/site";

/**
 * Sticky header. Dark in every state so the bar reads as a distinct layer above
 * the cream page, but tinted with the brand's own ink-brown rather than pure
 * black.
 *
 * Below `lg` the links collapse into a burger panel; the toggle is the only
 * JavaScript here, and the panel is a plain disclosure, not a dialog.
 */
export function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);

    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="on-dark sticky top-0 z-40 border-b border-cream/10 bg-night text-cream">
      <Container>
        <div className="flex items-center justify-between gap-4 py-3">
          <a href="#top" className="shrink-0 rounded-lg transition-opacity hover:opacity-80">
            <Wordmark priority tone="dark" />
            <span className="sr-only">Mirski Japanese</span>
          </a>

          <nav aria-label="Navigasi utama" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {navigation.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="inline-flex min-h-10 items-center rounded-full px-3 text-sm font-medium text-cream/75 transition-colors hover:bg-cream/10 hover:text-cream"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="#consult-dialog"
              data-consult
              className="hidden min-h-10 items-center justify-center gap-2.5 rounded-full bg-brand px-4 py-2 text-[0.85rem] font-semibold text-ink transition-colors duration-300 hover:bg-brand-deep sm:inline-flex"
            >
              {consultCta.label}
            </a>

            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? "Tutup menu" : "Buka menu"}
              className="flex size-10 items-center justify-center rounded-full text-cream transition-colors hover:bg-cream/10 lg:hidden"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.8}
                strokeLinecap="round"
                aria-hidden="true"
                className="size-5"
              >
                {open ? (
                  <path d="m6 6 12 12M18 6 6 18" />
                ) : (
                  <path d="M4 7h16M4 12h16M4 17h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        <div
          id="mobile-nav"
          hidden={!open}
          className="border-t border-cream/10 pb-4 lg:hidden"
        >
          <ul className="grid gap-0.5 pt-2">
            {navigation.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex min-h-11 items-center rounded-xl px-3 text-cream/80 transition-colors hover:bg-cream/10 hover:text-cream"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#consult-dialog"
            data-consult
            onClick={() => setOpen(false)}
            className="mt-3 flex min-h-11 w-full items-center justify-center rounded-full bg-brand px-4 py-2 text-sm font-semibold text-ink sm:hidden"
          >
            {consultCta.label}
          </a>
        </div>
      </Container>
    </header>
  );
}
