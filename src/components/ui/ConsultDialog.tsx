"use client";

import { useEffect, useId, useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { WhatsApp } from "@/components/ui/Icons";
import { consultContent } from "@/content/home";

/**
 * Consultation modal, mounted once in the root layout.
 *
 * Any server component opens it by rendering an element with `data-consult`
 * (an anchor, so there is a `#consult-dialog` target without JavaScript); one
 * delegated click listener here handles all of them and keeps the sections as
 * server components.
 *
 * The WhatsApp channel does not exist yet, so the submit button is inert and
 * labelled as a demo.
 */
export function ConsultDialog() {
  const [open, setOpen] = useState(false);
  const restoreFocusTo = useRef<Element | null>(null);
  const titleId = useId();
  const descId = useId();

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const trigger = (event.target as Element | null)?.closest(
        '[data-consult], a[href="#consult-dialog"]',
      );
      if (!trigger) return;
      event.preventDefault();
      restoreFocusTo.current = trigger;
      setOpen(true);
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent
        id="consult-dialog"
        aria-labelledby={titleId}
        aria-describedby={descId}
        // Radix restores focus itself, but the trigger may have been removed
        // from the DOM (mobile menu closes on click), so fall back to the
        // element we captured when opening.
        onCloseAutoFocus={(event) => {
          const target = restoreFocusTo.current;
          if (target instanceof HTMLElement && document.contains(target)) return;
          event.preventDefault();
        }}
        className="max-h-[90dvh] overflow-y-auto border-ink/10 bg-cream p-6 text-ink sm:max-w-lg sm:p-8"
      >
        <DialogHeader>
          <p className="text-[0.7rem] font-semibold tracking-[0.16em] text-ink-soft uppercase">
            {consultContent.eyebrow}
          </p>
          <DialogTitle id={titleId} className="text-2xl font-bold tracking-[-0.02em]">
            {consultContent.title}
          </DialogTitle>
          <DialogDescription id={descId} className="leading-7 text-ink-muted">
            {consultContent.description}
          </DialogDescription>
        </DialogHeader>

        <form
          className="mt-2 space-y-4"
          onSubmit={(event) => {
            // TODO: POST to a real endpoint once the channel is connected.
            event.preventDefault();
          }}
        >
          <div className="space-y-1.5">
            <Label htmlFor="consult-name">Nama</Label>
            <Input
              id="consult-name"
              name="name"
              autoComplete="name"
              placeholder="Nama kamu"
              required
            />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="consult-phone">Nomor WhatsApp</Label>
            <Input
              id="consult-phone"
              name="phone"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              placeholder="08xx xxxx xxxx"
              required
            />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="consult-goal">Tujuan Belajar</Label>
            <Input
              id="consult-goal"
              name="goal"
              placeholder="Misalnya: kerja di Jepang, atau lulus N4"
              required
            />
          </div>

          <Button
            type="submit"
            aria-disabled="true"
            title={consultContent.demoNote}
            className="w-full cursor-not-allowed bg-brand-deep text-ink/70 hover:bg-brand-deep"
            size="cta"
          >
            <WhatsApp className="size-5" />
            {consultContent.buttonLabel}
          </Button>
          <p className="text-center text-xs leading-5 text-ink-soft">{consultContent.demoNote}</p>
        </form>
      </DialogContent>
    </Dialog>
  );
}
