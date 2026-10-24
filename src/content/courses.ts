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
    tagline: "Mulai dari dasar, dengan cara yang benar.",
    description:
      "Mulai dari hiragana dan katakana, lalu bangun kosakata serta pola kalimat untuk bahasa Jepang sehari-hari. Fokus pada ketepatan dulu, kecepatan kemudian.",
    focus: "Kana · Kosakata dasar · Tata bahasa dasar",
    goal: "Perkenalan sederhana, percakapan harian, dan teks pendek.",
  },
  {
    id: "elementary-n4",
    number: "02",
    name: "Elementary",
    japaneseName: "初級",
    jlpt: "N4",
    tagline: "Dari frasa terpisah ke pemikiran yang utuh.",
    description:
      "Perluas tata bahasa dan kosakata agar kamu bisa mengikuti topik yang familier, membaca teks lebih panjang, dan bercakap lebih natural.",
    focus: "Tata bahasa terapan · Membaca · Percakapan harian",
    goal: "Percakapan lebih panjang dan topik familier dengan lebih mandiri.",
  },
  {
    id: "intermediate-n3",
    number: "03",
    name: "Intermediate",
    japaneseName: "中級",
    jlpt: "N3",
    tagline: "Jembatan menuju bahasa Jepang dunia nyata.",
    description:
      "Melangkah dari kalimat buku teks ke bahasa Jepang yang kamu temui di artikel, cerita, dan percakapan. Di N3, nuansa mulai diperhitungkan.",
    focus: "Nuansa · Teks panjang · Menyimak lancar",
    goal: "Mengikuti dan menanggapi bahasa Jepang di lebih banyak situasi.",
  },
  {
    id: "advanced-n2",
    number: "04",
    name: "Advanced",
    japaneseName: "中上級",
    jlpt: "N2",
    tagline: "Jangkauan, nuansa, dan kendali.",
    description:
      "Bekerja dengan teks kompleks, gagasan abstrak, dan perubahan nada bicara. N2 adalah level tertinggi di jalur Mirski saat ini.",
    focus: "Teks kompleks · Nada bicara · Ketepatan",
    goal: "Menggunakan bahasa Jepang dengan lebih presisi untuk studi, kerja, atau hidup sehari-hari.",
  },
] as const satisfies readonly CourseLevel[];
