"use client";

import { useEffect, useId, useRef } from "react";

import { WhatsApp } from "@/components/ui/Icons";
import { consultContent } from "@/content/home";

/**
 * Consultation modal, mounted once in the root layout.
 *
 * Any server component opens it by rendering an element with `data-consult`
 * (a button, or an anchor for no-JS fallback); a single delegated click listener
 * here handles all of them. Native `<dialog>` supplies focus handling, Escape,
 * and the backdrop, so no dialog library is needed.
 *
 * The WhatsApp channel does not exist yet, so the submit button is inert and
 * labelled as a demo.
 */
export function ConsultDialog() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleId = useId();

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const onClick = (event: MouseEvent) => {
      const trigger = (event.target as Element | null)?.closest(
        '[data-consult], a[href="#consult-dialog"]',
      );
      if (!trigger) return;
      event.preventDefault();
      dialog.showModal();
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return (
    <dialog
      ref={dialogRef}
      id="consult-dialog"
      aria-labelledby={titleId}
      className="m-auto w-[min(32rem,calc(100vw-2rem))] rounded-3xl border border-ink/10 bg-cream p-6 text-ink shadow-2xl open:animate-[fade-up_300ms_cubic-bezier(0.22,1,0.36,1)_both] backdrop:bg-night/70 backdrop:backdrop-blur-sm sm:p-8"
      onClick={(event) => {
        // The dialog element covers only its own box; a click that lands on the
        // backdrop reports the dialog as the event target.
        if (event.target === dialogRef.current) dialogRef.current.close();
      }}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-[0.7rem] font-semibold tracking-[0.16em] text-ink-soft uppercase">
            {consultContent.eyebrow}
          </p>
          <h2 id={titleId} className="mt-2 text-2xl font-bold tracking-[-0.02em]">
            {consultContent.title}
          </h2>
        </div>
        <button
          type="button"
          onClick={() => dialogRef.current?.close()}
          aria-label="Tutup formulir konsultasi"
          className="-mt-2 -mr-2 flex size-10 shrink-0 items-center justify-center rounded-full text-ink-muted transition-colors hover:bg-cream-deep hover:text-ink"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.8}
            strokeLinecap="round"
            aria-hidden="true"
            className="size-5"
          >
            <path d="m6 6 12 12M18 6 6 18" />
          </svg>
        </button>
      </div>

      <p className="mt-3 leading-7 text-ink-muted">{consultContent.description}</p>

      <form
        className="mt-6 space-y-4"
        onSubmit={(event) => {
          // TODO: POST to a real endpoint once the channel is connected.
          event.preventDefault();
        }}
      >
        <Field label="Nama" name="name" autoComplete="name" placeholder="Nama kamu" />
        <Field
          label="Nomor WhatsApp"
          name="phone"
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          placeholder="08xx xxxx xxxx"
        />
        <Field
          label="Tujuan Belajar"
          name="goal"
          placeholder="Misalnya: kerja di Jepang, atau lulus N4"
        />

        <button
          type="submit"
          aria-disabled="true"
          title={consultContent.demoNote}
          className="inline-flex min-h-12 w-full cursor-not-allowed items-center justify-center gap-2.5 rounded-full bg-brand-deep px-6 py-3 text-sm font-semibold text-ink/70"
        >
          <WhatsApp className="size-5" />
          {consultContent.buttonLabel}
        </button>
        <p className="text-center text-xs leading-5 text-ink-soft">{consultContent.demoNote}</p>
      </form>
    </dialog>
  );
}

function Field({
  label,
  name,
  ...input
}: { label: string; name: string } & React.ComponentProps<"input">) {
  const id = useId();

  return (
    <div>
      <label
        htmlFor={id}
        className="block text-xs font-bold tracking-[0.12em] text-ink-muted uppercase"
      >
        {label}
      </label>
      <input
        id={id}
        name={name}
        required
        className="mt-1.5 w-full rounded-xl border border-ink/15 bg-white/70 px-4 py-3 text-ink transition-colors placeholder:text-ink-soft focus:border-ink/40 focus:outline-none"
        {...input}
      />
    </div>
  );
}
