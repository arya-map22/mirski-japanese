import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

type SectionTitleProps = {
  id: string;
  children: ReactNode;
  tone?: "light" | "dark";
  size?: "md" | "lg";
  className?: string;
};

export function SectionTitle({
  id,
  children,
  tone = "light",
  size = "md",
  className,
}: SectionTitleProps) {
  return (
    <h2
      id={id}
      className={cn(
        "font-display leading-[1.05] font-medium tracking-[-0.025em] text-pretty",
        size === "lg" ? "text-[clamp(2.4rem,5.5vw,4.25rem)]" : "text-[clamp(2rem,4.5vw,3.25rem)]",
        tone === "dark" ? "text-paper" : "text-ink",
        className,
      )}
    >
      {children}
    </h2>
  );
}
