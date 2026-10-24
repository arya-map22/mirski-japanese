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
  "inline-flex min-h-12 items-center justify-center gap-2.5 rounded-full px-6 py-3 text-sm font-semibold tracking-[0.01em] transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0";

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
 * Opens the consultation modal. Rendered as an anchor so it still has a target
 * without JavaScript (`#consult-dialog`); the dialog's delegated listener
 * intercepts the click and calls `showModal()` instead.
 */
export function ConsultButton({
  children,
  variant = "dark",
  className,
}: {
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
}) {
  return (
    <a
      href="#consult-dialog"
      data-consult
      className={cn(base, variants[variant], className)}
    >
      {children}
    </a>
  );
}
