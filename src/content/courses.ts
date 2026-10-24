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
    name: "Pemula",
    jlpt: "N5",
    tagline: "Mulai dari nol, dengan cara yang benar.",
    description:
      "Hiragana, katakana, kosakata, dan pola kalimat dasar. Fondasi yang rapi sebelum melangkah.",
    focus: "Kana · Kosakata · Tata bahasa dasar",
    goal: "Perkenalan, percakapan harian, teks pendek.",
    audience: "Pemula total, belum kenal hiragana.",
    // PLACEHOLDER: pricing not supplied. Replace before launch.
    price: "Rp —",
    priceNote: "/ bulan",
  },
  {
    id: "elementary-n4",
    number: "02",
    name: "Dasar",
    jlpt: "N4",
    tagline: "Dari frasa terpisah ke pemikiran utuh.",
    description:
      "Tata bahasa dan kosakata diperluas, supaya kamu bisa membaca lebih panjang dan bicara lebih natural.",
    focus: "Tata bahasa terapan · Membaca · Percakapan",
    goal: "Topik familiar, lebih mandiri.",
    audience: "Sudah bisa kana, ingin bicara lebih natural.",
    // PLACEHOLDER: pricing not supplied. Replace before launch.
    price: "Rp —",
    priceNote: "/ bulan",
  },
  {
    id: "intermediate-n3",
    number: "03",
    name: "Menengah",
    jlpt: "N3",
    tagline: "Jembatan menuju bahasa Jepang dunia nyata.",
    description:
      "Dari kalimat buku teks ke bahasa Jepang di artikel, cerita, dan percakapan sehari-hari.",
    focus: "Nuansa · Teks panjang · Menyimak",
    goal: "Menanggapi lebih banyak situasi.",
    audience: "Lulus N4, mulai masuk teks dan percakapan nyata.",
    // PLACEHOLDER: pricing not supplied. Replace before launch.
    price: "Rp —",
    priceNote: "/ bulan",
  },
  {
    id: "advanced-n2",
    number: "04",
    name: "Mahir",
    jlpt: "N2",
    tagline: "Jangkauan, nuansa, dan kendali.",
    description:
      "Teks kompleks, gagasan abstrak, dan perubahan nada bicara. Level tertinggi di jalur Mirski.",
    focus: "Teks kompleks · Nada bicara · Ketepatan",
    goal: "Presisi untuk studi, kerja, dan hidup.",
    audience: "Siap N2 untuk kuliah, kerja, atau tinggal di Jepang.",
    // PLACEHOLDER: pricing not supplied. Replace before launch.
    price: "Rp —",
    priceNote: "/ bulan",
  },
] as const satisfies readonly CourseLevel[];
