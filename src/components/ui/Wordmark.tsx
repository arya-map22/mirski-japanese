import Image from "next/image";

import { cn } from "@/lib/utils";

type WordmarkProps = {
  tone?: "light" | "dark";
  className?: string;
  priority?: boolean;
};

/**
 * Brand logo supplied in assets/LOGOGRAM.svg, trimmed and exported as a transparent
 * PNG in public/. Source asset is left untouched.
 */
export function Wordmark({ tone = "light", className, priority = false }: WordmarkProps) {
  return (
    <span className={cn("inline-flex items-center", className)}>
      <Image
        src="/mirski-logo.png"
        alt="Mirski Japanese"
        width={560}
        height={303}
        priority={priority}
        sizes="(max-width: 640px) 132px, 168px"
        className={cn("h-11 w-auto sm:h-12", tone === "dark" && "brightness-105")}
      />
    </span>
  );
}
