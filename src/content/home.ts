import type { ContentItem, FaqItem } from "./types";

export const heroContent = {
  eyebrow: "Japanese language education",
  title: {
    lead: "A clear path from",
    accent: "first words",
    tail: "to N2.",
  },
  description:
    "Mirski Japanese is a four-level course path — Starter N5 through Advanced N2 — for learners who want steady progress, not guesswork.",
  primaryCta: {
    label: "Explore the course path",
    href: "#path",
  },
  secondaryCta: {
    label: "How we teach",
    href: "#method",
  },
  pathLabel: "The full path",
} as const;

export const whyContent = {
  eyebrow: "Why a path",
  aside: "Information is everywhere. Direction is rarer.",
  title: "Most learners don’t need more resources. They need to know what comes next.",
  items: [
    {
      title: "Too many starting points",
      description:
        "A folder full of apps, PDFs, and saved videos can feel like preparation. It rarely adds up to a sequence.",
    },
    {
      title: "No clear measure",
      description:
        "Without defined levels, it is difficult to tell what you have actually learned and what still needs work.",
    },
    {
      title: "Momentum fades",
      description:
        "When the next step is vague, practice becomes occasional, and occasional practice is hard to sustain.",
    },
  ] satisfies readonly ContentItem[],
  conclusion:
    "Mirski Japanese is built around a single sequence: learn the foundation, use it, strengthen it, then move up. One level at a time.",
} as const;

export const methodContent = {
  eyebrow: "The method",
  title: "A level is not a checklist. It is a shift in what you can do.",
  description:
    "Every level follows the same rhythm: establish the foundation, put it to use, then strengthen what is still fragile. The content changes; the habit does not.",
  steps: [
    {
      title: "Build the foundation",
      description:
        "Kana, core vocabulary, and grammar patterns are introduced in a deliberate order, so new language has something to attach to.",
    },
    {
      title: "Use it in context",
      description:
        "Reading, listening, and speaking practice turn recognition into recall. The goal is language you can actually reach for.",
    },
    {
      title: "Review, then extend",
      description:
        "Each level revisits what matters, closes gaps, and connects the next set of skills to what you already know.",
    },
  ] satisfies readonly ContentItem[],
} as const;

export const coursesContent = {
  eyebrow: "The course system",
  title: "Four levels. A foundation that holds.",
  description:
    "The path follows the JLPT scale from N5 to N2. Each level has a defined focus and a clear relationship to the one before it.",
  note: "JLPT levels are reference points for progression, not a promise of exam results.",
} as const;

export const outcomesContent = {
  eyebrow: "What you build",
  title: "Progress you can point to.",
  description: "Not a promise of fluency. A sequence of capabilities, each built on the last.",
  items: [
    {
      title: "A foundation that stays",
      description:
        "Kana, core grammar, and vocabulary become reliable tools rather than facts to memorise and forget.",
    },
    {
      title: "A wider range",
      description:
        "Each level adds situations you can handle, from introductions to longer texts and more nuanced conversation.",
    },
    {
      title: "A clear next step",
      description: "You always know where you are on the path and what the next level asks of you.",
    },
  ] satisfies readonly ContentItem[],
} as const;

export const faqContent = {
  eyebrow: "Questions",
  title: "Before you begin.",
  items: [
    {
      question: "Where should I start if I am new to Japanese?",
      answer:
        "Starter N5. It begins with kana and the foundations of everyday Japanese, so it is designed for learners starting from the beginning.",
    },
    {
      question: "What do the levels mean?",
      answer:
        "The path uses the JLPT scale from N5 to N2. N5 is the most foundational level; each step toward N2 adds range, nuance, and independence.",
    },
    {
      question: "How does each level build on the last?",
      answer:
        "The levels are sequential. Starter N5 establishes kana, core vocabulary, and foundational grammar. Elementary N4 extends them, and Intermediate N3 and Advanced N2 add more natural range and precision.",
    },
    {
      question: "Are the courses the same as the JLPT?",
      answer:
        "The levels use the JLPT scale as a shared reference point. The JLPT itself is an external exam, and its registration and results are handled by the official exam provider.",
    },
    {
      question: "How do I enquire about enrolment?",
      answer:
        "Official enrolment contact details are not published on this site yet. They will be added here before launch.",
    },
  ] satisfies readonly FaqItem[],
} as const;

export const ctaContent = {
  eyebrow: "Start here",
  title: "Start where you are. Build from there.",
  description:
    "Four levels, one direction. Explore the path, compare the levels, and take the first step when you are ready.",
  primaryCta: {
    label: "Explore the four levels",
    href: "#path",
  },
  contactLabel: "Enrolment enquiries",
  contactFallback: "Official contact details are not published on this site yet.",
  contactNote:
    "The right starting point depends on your experience. Use the course descriptions to compare levels.",
} as const;
