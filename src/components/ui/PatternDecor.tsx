import Image from "next/image";

import { cn } from "@/lib/utils";

type PatternDecorProps = {
  side?: "left" | "right";
  className?: string;
  width?: number;
};

/**
 * Decorative side pattern supplied in `assets/Pattern-Only Paper *.svg`.
 * Purely ornamental: hidden from assistive tech and from the pointer.
 * Never place text over it — it belongs to empty margins only.
 */
export function PatternDecor({ side = "left", className, width = 320 }: PatternDecorProps) {
  return (
    <Image
      src={side === "left" ? "/patterns/pattern-left.svg" : "/patterns/pattern-right.svg"}
      alt=""
      aria-hidden="true"
      width={width}
      height={Math.round((width * 288) / 432)}
      className={cn(
        "pointer-events-none absolute -z-10 hidden h-auto select-none opacity-70 sm:block",
        side === "left" ? "-left-16" : "-right-16",
        className,
      )}
    />
  );
}

/**
 * Full-width border pattern supplied in `assets/Pattern (long).svg`.
 * Used as a divider between section bands.
 */
export function PatternDivider({ className }: { className?: string }) {
  return (
    <div aria-hidden="true" className={cn("pointer-events-none select-none", className)}>
      {/* Tiled at its natural aspect ratio: `auto 100%` scales by height and
          lets the repeat fill the width, so the motif is never stretched. */}
      <div
        className="h-10 w-full bg-[image:url('/patterns/pattern-long.svg')] bg-center bg-repeat-x sm:h-14"
        style={{ backgroundSize: "auto 100%" }}
      />
    </div>
  );
}
