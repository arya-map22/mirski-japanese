import type { FaqItem } from "./types";

/**
 * Indonesian landing-page copy.
 *
 * Placeholder policy: sections marked PLACEHOLDER contain lorem-ipsum or dummy
 * business data (statistics, testimonials, features, contact details) because no
 * verified information has been supplied. Replace before launch.
 */

export const welcomeContent = {
  welcome: "Selamat datang di Mirski Japanese · Tempat progresmu mulai terlihat",
  title: {
    lead: "Dari kata pertama",
    accent: "sampai N2",
    tail: "— satu jalur jelas.",
  },
  description:
    "Mulai dari nol tanpa bingung arah. Empat level terstruktur, progres yang terukur, dan satu langkah kecil yang selalu jelas di depan.",
  primaryCta: { label: "Lihat Level", href: "#program" },
  secondaryCta: { label: "Konsultasi Gratis", href: "#konsultasi" },
  note: "Empat level · Satu arah",
} as const;

export const aboutContent = {
  eyebrow: "Tentang Mirski",
  title: "Belajar Jepang, Tanpa Bingung Arah.",
  description:
    "Satu jalur empat level yang mengikuti skala JLPT. Tiap level punya fokus jelas dan menyambung ke level berikutnya.",
  // PLACEHOLDER: statistics require verified numbers before launch.
  stats: [
    { value: "0+", label: "Siswa Aktif" },
    { value: "0+", label: "Tutor Aktif" },
    { value: "0+", label: "Kelas Aktif" },
    { value: "0+", label: "Mitra" },
    { value: "0+", label: "Alumni" },
  ],
  statsNote: "Angka statistik masih placeholder.",
} as const;

export const journeyContent = {
  eyebrow: "Jalur belajar",
  title: "Empat Langkah, Satu Arah.",
  description: "Naik satu level tiap kali. Urutannya sudah disiapkan.",
  note: "Level JLPT dipakai sebagai acuan progres, bukan jaminan hasil ujian.",
} as const;

export const pricingContent = {
  eyebrow: "Pilihan kelas",
  title: "Empat Kelas, Satu Jalur.",
  description: "Pilih titik mulai yang paling dekat dengan levelmu sekarang.",
  priceNote: "Harga placeholder.",
} as const;

export const featuresContent = {
  eyebrow: "Kenapa Mirski",
  title: "Belajar di Tempat yang Tepat.",
  // PLACEHOLDER: feature copy is lorem ipsum until the real programme details exist.
  items: [
    {
      icon: "teacher",
      title: "Pengajar",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      icon: "book",
      title: "Kurikulum",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      icon: "mic",
      title: "Praktik Berbicara",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      icon: "users",
      title: "Komunitas",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ],
} as const;

export const consultContent = {
  eyebrow: "Konsultasi",
  title: "Belum Tahu Mulai dari Mana?",
  description: "Ceritakan tujuanmu. Tim Mirski bantu pilih level yang paling pas.",
  buttonLabel: "Konsultasi Gratis via WhatsApp",
  // Shown under the button. Remove when the real WhatsApp channel exists.
  demoNote: "Tombol demo — kanal WhatsApp belum terhubung.",
  aside: {
    title: "Sebelum mulai",
    body: "Tiga hal yang akan ditanyakan tim Mirski.",
    items: ["Tujuan belajar", "Level saat ini", "Waktu belajar"],
  },
} as const;

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

// PLACEHOLDER: replace with real, attributable testimonials before launch.
export const testimonialsContent = {
  eyebrow: "Testimoni",
  title: "Kata Mereka yang Sudah Mulai",
  note: "Testimoni di bawah masih placeholder.",
  items: [
    {
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
      name: "Lorem Ipsum",
      role: "Dolor Sit Amet",
    },
    {
      quote:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
      name: "Dolor Amet",
      role: "Consectetur Adipiscing",
    },
    {
      quote:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.",
      name: "Sit Amet",
      role: "Sed Eiusmod",
    },
    {
      quote:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.",
      name: "Elit Sed",
      role: "Tempor Incididunt",
    },
    {
      quote:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.",
      name: "Magna Aliqua",
      role: "Ut Labore",
    },
    {
      quote:
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia.",
      name: "Veniam Quis",
      role: "Nostrud Exercitation",
    },
    {
      quote:
        "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
      name: "Aliquam Quaerat",
      role: "Voluptatem",
    },
  ] satisfies readonly Testimonial[],
} as const;

export const faqContent = {
  eyebrow: "FAQ",
  title: "Sebelum Kamu Mulai",
  description: "Pertanyaan yang paling sering muncul.",
  items: [
    {
      question: "Saya pemula total. Mulai dari mana?",
      answer:
        "Pemula N5. Dimulai dari hiragana dan katakana, lalu dasar bahasa Jepang sehari-hari.",
    },
    {
      question: "Apa arti N5 sampai N2?",
      answer:
        "Acuan skala JLPT. N5 paling dasar, lalu N4, N3, dan N2 menambah jangkauan serta kemandirian.",
    },
    {
      question: "Harus berurutan?",
      answer:
        "Ya. Setiap level dibangun di atas level sebelumnya, jadi urutannya tidak dilompati.",
    },
    {
      question: "Berapa biaya dan durasinya?",
      answer: "Lorem ipsum dolor sit amet. (Informasi biaya dan jadwal masih placeholder.)",
    },
    {
      question: "Bagaimana cara konsultasi?",
      answer:
        "Kanal resmi belum dipublikasikan. Tombol konsultasi masih demo dan akan dihubungkan ke WhatsApp nanti.",
    },
  ] satisfies readonly FaqItem[],
} as const;

export const careerContent = {
  title: "Bahasa Jepang Bisa Jadi Langkah Kariermu.",
  description: "Pilih level yang sesuai tujuanmu, lalu konsultasikan langkah berikutnya.",
  buttonLabel: "Konsultasi Gratis",
  primaryCta: { label: "Lihat Level", href: "#program" },
} as const;
