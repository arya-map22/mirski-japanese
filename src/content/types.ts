export type CourseLevel = {
  id: string;
  number: string;
  name: string;
  jlpt: "N5" | "N4" | "N3" | "N2";
  tagline: string;
  description: string;
  focus: string;
  goal: string;
  audience: string;
  /** PLACEHOLDER until verified pricing exists. */
  price: string;
  priceNote: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};
