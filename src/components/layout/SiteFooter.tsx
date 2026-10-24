import { Container } from "@/components/ui/Container";
import { Wordmark } from "@/components/ui/Wordmark";
import { footerContent, navigation } from "@/config/site";
import { courses } from "@/content/courses";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="on-dark bg-night text-cream">
      <Container className="py-14 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <a href="#top" className="inline-flex rounded-lg transition-opacity hover:opacity-80">
              <Wordmark />
            </a>
            <p className="mt-5 max-w-xs text-sm leading-7 text-cream/70">{footerContent.tagline}</p>
            <p className="mt-5 max-w-xs text-xs leading-6 text-cream/50">
              {footerContent.company}
              <br />
              {footerContent.address}
            </p>
          </div>

          <nav aria-label="Jelajahi" className="lg:col-span-2">
            <h2 className="text-[0.7rem] font-bold tracking-[0.18em] text-cream/60 uppercase">
              {footerContent.columns[0].title}
            </h2>
            <ul className="mt-4 space-y-1">
              {navigation.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="inline-flex min-h-9 items-center text-sm text-cream/75 transition-colors hover:text-brand"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Dukungan" className="lg:col-span-3">
            <h2 className="text-[0.7rem] font-bold tracking-[0.18em] text-cream/60 uppercase">
              {footerContent.columns[1].title}
            </h2>
            <ul className="mt-4 space-y-1">
              {footerContent.columns[1].links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="inline-flex min-h-9 items-center text-sm text-cream/75 transition-colors hover:text-brand"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              {courses.map((course) => (
                <li key={course.id}>
                  <a
                    href={`#${course.id}`}
                    className="inline-flex min-h-9 items-center gap-2 text-sm text-cream/75 transition-colors hover:text-brand"
                  >
                    <span className="text-xs text-cream/40">{course.number}</span>
                    {course.name} · {course.jlpt}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-3">
            <h2 className="text-[0.7rem] font-bold tracking-[0.18em] text-cream/60 uppercase">
              {footerContent.contact.title}
            </h2>
            <ul className="mt-4 space-y-2 text-sm text-cream/75">
              <li>{footerContent.contact.phone}</li>
              <li>{footerContent.contact.email}</li>
              <li className="text-cream/50">{footerContent.contact.hours}</li>
            </ul>

            {/* TODO: add verified social links once the accounts are supplied. */}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-cream/15 pt-6 text-xs leading-5 text-cream/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {footerContent.company}.
          </p>
          <p>{footerContent.legal}</p>
        </div>
      </Container>
    </footer>
  );
}
