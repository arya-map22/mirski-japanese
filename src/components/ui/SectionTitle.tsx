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
        "leading-[1.05] font-bold tracking-[-0.03em] text-balance",
        size === "lg" ? "text-[clamp(2.4rem,5.5vw,4.25rem)]" : "text-[clamp(2rem,4.5vw,3.25rem)]",
        tone === "dark" ? "text-cream" : "text-ink",
        className,
      )}
    >
      {children}
    </h2>
  );
}
