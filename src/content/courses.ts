import type { CourseLevel } from "./types";

/**
 * The four levels are the only course details supplied for this project.
 * Level descriptions are positioning copy and must be reviewed against the
 * real curriculum before launch. Do not add schedules, pricing, outcomes, or
 * certification claims without verified business information.
 */
export const courses = [
  {
    id: "starter-n5",
    number: "01",
    name: "Starter",
    japaneseName: "入門",
    jlpt: "N5",
    tagline: "Begin with the basics, done properly.",
    description:
      "Start with hiragana and katakana, then build the vocabulary and sentence patterns behind everyday Japanese. The emphasis is on accuracy first, speed later.",
    focus: "Kana · Core vocabulary · Foundational grammar",
    goal: "Simple introductions, everyday exchanges, and short texts.",
  },
  {
    id: "elementary-n4",
    number: "02",
    name: "Elementary",
    japaneseName: "初級",
    jlpt: "N4",
    tagline: "From isolated phrases to connected thought.",
    description:
      "Extend your grammar and vocabulary so you can follow familiar topics, read longer passages, and hold a more natural conversation.",
    focus: "Grammar in use · Reading · Everyday conversation",
    goal: "Longer exchanges and familiar topics with more independence.",
  },
  {
    id: "intermediate-n3",
    number: "03",
    name: "Intermediate",
    japaneseName: "中級",
    jlpt: "N3",
    tagline: "The bridge to real-world Japanese.",
    description:
      "Move beyond textbook sentences into the Japanese you meet in articles, stories, and conversation. N3 is where range and nuance begin to matter.",
    focus: "Nuance · Longer texts · Fluent listening",
    goal: "Follow and respond to Japanese across a wider range of situations.",
  },
  {
    id: "advanced-n2",
    number: "04",
    name: "Advanced",
    japaneseName: "中上級",
    jlpt: "N2",
    tagline: "Range, nuance, and control.",
    description:
      "Work with complex texts, abstract ideas, and shifts in tone. N2 is the highest level in the current Mirski path, for learners who want to use Japanese with greater precision.",
    focus: "Complex texts · Tone · Precision",
    goal: "Engage with a broad range of Japanese in study, work, or daily life.",
  },
] as const satisfies readonly CourseLevel[];
