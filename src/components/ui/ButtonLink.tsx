import type { ReactNode } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "dark" | "outline" | "light";
type ShadcnVariant = React.ComponentProps<typeof Button>["variant"];

/** Maps the page's own variant names onto the shadcn Button variants. */
const variants: Record<ButtonVariant, ShadcnVariant> = {
  primary: "brand",
  dark: "ink",
  outline: "quiet",
  light: "secondary",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
}: {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
}) {
  return (
    <Button asChild variant={variants[variant]} size="cta" className={cn(className)}>
      <a href={href}>{children}</a>
    </Button>
  );
}

/**
 * Opens the consultation modal. Rendered as an anchor so it still has a target
 * without JavaScript (`#consult-dialog`); the dialog's delegated listener
 * intercepts the click and opens the modal instead.
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
    <Button asChild variant={variants[variant]} size="cta" className={cn(className)}>
      <a href="#consult-dialog" data-consult>
        {children}
      </a>
    </Button>
  );
}
