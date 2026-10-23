import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

type EyebrowProps = {
  children: ReactNode;
  tone?: "light" | "dark" | "inverse";
  className?: string;
};

const textTone = {
  light: "text-ink-muted",
  dark: "text-paper/75",
  inverse: "text-paper",
} as const;

const lineTone = {
  light: "bg-vermilion",
  dark: "bg-vermilion-light",
  inverse: "bg-paper/60",
} as const;

export function Eyebrow({ children, tone = "light", className }: EyebrowProps) {
  return (
    <p
      className={cn(
        "flex items-center gap-3 text-[0.68rem] font-semibold tracking-[0.2em] uppercase",
        textTone[tone],
        className,
      )}
    >
      <span aria-hidden="true" className={cn("h-px w-7 shrink-0", lineTone[tone])} />
      <span>{children}</span>
    </p>
  );
}
