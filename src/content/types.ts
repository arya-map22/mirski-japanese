export type CourseLevel = {
  id: string;
  number: string;
  name: string;
  japaneseName: string;
  jlpt: "N5" | "N4" | "N3" | "N2";
  tagline: string;
  description: string;
  focus: string;
  goal: string;
};

export type ContentItem = {
  title: string;
  description: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};
