import { Container } from "@/components/ui/Container";
import { Wordmark } from "@/components/ui/Wordmark";
import { navigation } from "@/config/site";
import { courses } from "@/content/courses";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="on-ink bg-ink text-paper">
      <Container className="py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <a href="#top" className="inline-flex transition-opacity hover:opacity-80">
              <Wordmark tone="dark" />
            </a>
            <p className="mt-6 max-w-xs text-sm leading-7 text-paper/70">
              A clear Japanese course path from first words to N2. One level at a time.
            </p>
          </div>

          <div className="lg:col-span-3">
            <h2 className="text-[0.65rem] font-semibold tracking-[0.2em] text-paper/60 uppercase">
              Explore
            </h2>
            <ul className="mt-5 space-y-1">
              {navigation.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="inline-flex min-h-9 items-center text-sm text-paper/75 transition-colors hover:text-paper"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#enquire"
                  className="inline-flex min-h-9 items-center text-sm text-paper/75 transition-colors hover:text-paper"
                >
                  Enquire
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h2 className="text-[0.65rem] font-semibold tracking-[0.2em] text-paper/60 uppercase">
              The path
            </h2>
            <ul className="mt-5 space-y-1">
              {courses.map((course) => (
                <li key={course.id}>
                  <a
                    href={`#${course.id}`}
                    className="inline-flex min-h-9 items-center gap-3 text-sm text-paper/75 transition-colors hover:text-paper"
                  >
                    <span className="font-mono text-[0.65rem] text-paper/50">{course.number}</span>
                    <span>
                      {course.name} {course.jlpt}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-paper/15 pt-6 text-xs leading-5 text-paper/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Mirski Japanese.</p>
          <p>JLPT levels are reference points for progression.</p>
        </div>
      </Container>
    </footer>
  );
}
