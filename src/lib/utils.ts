import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * shadcn's expected helper: conditional classes, with conflicting Tailwind
 * utilities resolved so a caller's `className` can override a variant.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
