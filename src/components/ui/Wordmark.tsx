import { cn } from "@/lib/cn";

type WordmarkProps = {
  tone?: "light" | "dark";
  className?: string;
};

export function Wordmark({ tone = "light", className }: WordmarkProps) {
  return (
    <span className={cn("inline-flex items-center gap-3", className)}>
      <span
        aria-hidden="true"
        className="seal-glyph flex size-9 shrink-0 items-center justify-center bg-vermilion font-jp text-lg leading-none text-paper"
      />
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display text-[1.3rem] font-semibold tracking-[-0.02em]",
            tone === "dark" ? "text-paper" : "text-ink",
          )}
        >
          Mirski
        </span>
        <span
          className={cn(
            "mt-1.5 text-[0.55rem] font-semibold tracking-[0.28em] uppercase",
            tone === "dark" ? "text-paper/60" : "text-ink-muted",
          )}
        >
          Japanese
        </span>
      </span>
    </span>
  );
}
