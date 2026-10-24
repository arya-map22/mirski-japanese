import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

type EyebrowProps = {
  children: ReactNode;
  tone?: "light" | "dark";
  className?: string;
};

export function Eyebrow({ children, tone = "light", className }: EyebrowProps) {
  return (
    <p
      className={cn(
        "inline-flex items-center rounded-full px-4 py-1.5 text-[0.7rem] font-semibold tracking-[0.16em] uppercase",
        tone === "dark" ? "bg-cream/15 text-brand" : "bg-cream-deep text-ink",
        className,
      )}
    >
      {children}
    </p>
  );
}
