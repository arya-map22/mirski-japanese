import { courses } from "@/content/courses";

const items = [...courses.map((course) => `${course.name} ${course.jlpt}`), "Empat level, satu arah"];

/**
 * Decorative ticker of the level path. The track holds two identical copies and
 * shifts by exactly half its width, so the loop has no seam. Pauses on hover and
 * sits still under `prefers-reduced-motion: reduce`.
 */
export function Marquee() {
  return (
    <div
      aria-hidden="true"
      className="marquee overflow-hidden border-y border-ink/10 bg-brand-deep/20 py-3 select-none"
    >
      <div className="marquee-track flex w-max">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex shrink-0 items-center gap-7 pr-7">
            {items.map((item) => (
              <span key={item} className="flex shrink-0 items-center gap-7">
                <span className="text-sm font-bold tracking-[0.12em] whitespace-nowrap text-ink/70 uppercase">
                  {item}
                </span>
                <span className="size-1.5 rounded-full bg-brand-deep" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
