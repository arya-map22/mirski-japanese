import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "dark" | "outline" | "light";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
};

const base =
  "inline-flex min-h-12 items-center justify-center gap-2.5 rounded-full px-6 py-3 text-sm font-semibold tracking-[0.01em] transition-colors duration-200";

const variants: Record<ButtonVariant, string> = {
  primary: "bg-brand-deep text-ink hover:bg-brand-orange",
  dark: "bg-ink text-cream hover:bg-night",
  outline: "border-2 border-ink/15 text-ink hover:border-ink/40 hover:bg-cream-deep",
  light: "bg-cream text-ink hover:bg-white",
};

export function ButtonLink({ href, children, variant = "primary", className }: ButtonLinkProps) {
  return (
    <a href={href} className={cn(base, variants[variant], className)}>
      {children}
    </a>
  );
}

/**
 * Consultation button. The WhatsApp channel is not connected yet, so this renders a
 * disabled-looking but focusable button that does nothing. Replace with ButtonLink
 * once the real channel exists.
 */
export function DemoButton({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <button
      type="button"
      aria-disabled="true"
      title="Demo — kanal WhatsApp belum terhubung"
      className={cn(base, "cursor-not-allowed bg-brand-deep text-ink/70", className)}
    >
      {children}
    </button>
  );
}
