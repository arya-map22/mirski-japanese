import { DemoButton } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { WhatsApp } from "@/components/ui/Icons";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { consultContent } from "@/content/home";

/**
 * Consultation block. The WhatsApp channel is intentionally not implemented yet:
 * the button is a dummy and the form fields are display-only.
 */
export function Consultation() {
  return (
    <section
      id="konsultasi"
      aria-labelledby="consult-heading"
      className="on-dark bg-night py-16 text-cream sm:py-24"
    >
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-6">
            <Eyebrow tone="dark">{consultContent.eyebrow}</Eyebrow>
            <SectionTitle id="consult-heading" tone="dark" size="lg" className="mt-6">
              {consultContent.title}
            </SectionTitle>
            <p className="mt-5 max-w-lg text-lg leading-8 text-cream/80">
              {consultContent.description}
            </p>

            <ol className="mt-9 max-w-md space-y-3">
              {consultContent.aside.items.map((label, index) => (
                <li
                  key={label}
                  className="flex items-center gap-3 rounded-2xl border border-cream/15 px-4 py-3"
                >
                  <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-brand text-xs font-bold text-ink">
                    {index + 1}
                  </span>
                  <span className="text-sm font-medium text-cream/80">{label}</span>
                  <span className="ml-auto text-sm text-cream/50">Lorem ipsum</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-3xl bg-cream p-6 text-ink sm:p-8">
              <h3 className="text-xl font-bold">{consultContent.aside.title}</h3>
              <p className="mt-2 text-sm leading-7 text-ink-muted">{consultContent.aside.body}</p>

              <div className="mt-6 space-y-4">
                <DisplayField label="Nama" placeholder="Lorem ipsum" />
                <DisplayField label="Nomor WhatsApp" placeholder="08xx xxxx xxxx" />
                <DisplayField label="Tujuan Belajar" placeholder="Lorem ipsum dolor sit amet" />
              </div>

              <div className="mt-6">
                <DemoButton className="w-full">
                  <WhatsApp className="size-5" />
                  {consultContent.buttonLabel}
                </DemoButton>
                <p className="mt-3 text-center text-xs text-ink-soft">{consultContent.demoNote}</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/** Non-interactive placeholder field. Replaced by a real form once a backend exists. */
function DisplayField({ label, placeholder }: { label: string; placeholder: string }) {
  return (
    <div>
      <span className="block text-xs font-bold tracking-[0.12em] text-ink-muted uppercase">
        {label}
      </span>
      <p className="mt-1.5 rounded-xl border border-dashed border-ink/20 bg-cream-deep/40 px-4 py-3 text-sm text-ink-soft">
        {placeholder}
      </p>
    </div>
  );
}
