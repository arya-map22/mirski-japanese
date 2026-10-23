import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

type ButtonVariant = "solid" | "outline" | "text" | "solidLight" | "outlineLight";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
};

const base =
  "inline-flex min-h-11 items-center justify-center gap-2.5 text-sm font-semibold tracking-[0.01em] transition-colors duration-200";

const variants: Record<ButtonVariant, string> = {
  solid: "bg-ink px-6 py-3 text-paper hover:bg-vermilion",
  outline:
    "border border-ink/25 px-5 py-2.5 text-ink hover:border-ink hover:bg-ink hover:text-paper",
  text: "text-ink underline decoration-ink/30 underline-offset-[0.35em] hover:decoration-ink",
  solidLight: "bg-paper px-6 py-3 text-ink hover:bg-vermilion-light",
  outlineLight: "border border-paper/40 px-5 py-2.5 text-paper hover:bg-paper hover:text-ink",
};

export function ButtonLink({ href, children, variant = "solid", className }: ButtonLinkProps) {
  return (
    <a href={href} className={cn(base, variants[variant], className)}>
      {children}
    </a>
  );
}
