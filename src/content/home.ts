import type { FaqItem } from "./types";

/**
 * Indonesian landing-page copy.
 *
 * Placeholder policy: sections marked PLACEHOLDER contain lorem-ipsum or dummy
 * business data (statistics, testimonials, features, contact details) because no
 * verified information has been supplied. Replace before launch.
 */

export const heroContent = {
  eyebrow: "Kursus bahasa Jepang online",
  title: {
    lead: "Jalan yang jelas dari",
    accent: "kata pertama",
    tail: "sampai N2.",
  },
  description:
    "Mirski Japanese adalah kursus bahasa Jepang dengan empat level terstruktur — N5 sampai N2 — untuk kamu yang ingin progres yang jelas, bukan tebak-tebakan.",
  primaryCta: { label: "Lihat Pilihan Kelas", href: "#program" },
  secondaryCta: { label: "Konsultasi Gratis", href: "#konsultasi" },
  note: "Empat level · Satu arah · Satu langkah setiap kali",
} as const;

export const aboutContent = {
  eyebrow: "Tentang Mirski",
  title: "Belajar Bahasa Jepang yang Seru & Terarah",
  description:
    "Mirski Japanese menghadirkan kursus bahasa Jepang interaktif dengan jalur belajar empat level yang mengikuti skala JLPT, dari N5 hingga N2. Setiap level punya fokus yang jelas dan menyambung ke level berikutnya.",
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
  title: "Perjalanan Bahasa Jepangmu",
  description: "Kami mendampingi kamu di setiap tahap perkembangan.",
  note: "Level JLPT dipakai sebagai acuan progres, bukan jaminan hasil ujian.",
} as const;

export const featuresContent = {
  eyebrow: "Kenapa Mirski",
  title: "Kenapa Belajar di Mirski Japanese?",
  // PLACEHOLDER: feature copy is lorem ipsum until the real programme details exist.
  items: [
    {
      icon: "teacher",
      title: "Pengajar",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
    },
    {
      icon: "book",
      title: "Kurikulum",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation.",
    },
    {
      icon: "mic",
      title: "Praktik Berbicara",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit.",
    },
    {
      icon: "users",
      title: "Komunitas",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Excepteur sint occaecat cupidatat non proident.",
    },
  ],
} as const;

export const consultContent = {
  eyebrow: "Konsultasi",
  title: "Belum Tahu Harus Mulai dari Mana?",
  description:
    "Ceritakan tujuanmu, tim Mirski siap membantu memilih level yang paling pas untuk kamu mulai.",
  buttonLabel: "Konsultasi Gratis via WhatsApp",
  // Shown under the button. Remove when the real WhatsApp channel exists.
  demoNote: "Tombol demo — kanal WhatsApp belum terhubung.",
  aside: {
    title: "Sebelum mulai",
    body: "Isi yang akan ditanyakan: tujuan belajar, level saat ini, dan waktu luang untuk belajar.",
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
  title: "Pengalaman Mereka Belajar di Mirski Japanese",
  note: "Testimoni di bawah masih placeholder.",
  items: [
    {
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      name: "Lorem Ipsum",
      role: "Dolor Sit Amet",
    },
    {
      quote:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      name: "Dolor Amet",
      role: "Consectetur Adipiscing",
    },
    {
      quote:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      name: "Sit Amet",
      role: "Sed Eiusmod",
    },
    {
      quote:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      name: "Elit Sed",
      role: "Tempor Incididunt",
    },
    {
      quote:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
      name: "Magna Aliqua",
      role: "Ut Labore",
    },
    {
      quote:
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.",
      name: "Veniam Quis",
      role: "Nostrud Exercitation",
    },
  ] satisfies readonly Testimonial[],
} as const;

export const faqContent = {
  eyebrow: "FAQ",
  title: "Sebelum Kamu Mulai",
  description: "Pertanyaan yang paling sering muncul tentang level dan cara belajar di Mirski.",
  items: [
    {
      question: "Saya pemula total. Mulai dari level mana?",
      answer:
        "Starter N5. Level ini dimulai dari hiragana dan katakana, lalu dasar bahasa Jepang sehari-hari, jadi cocok untuk kamu yang benar-benar mulai dari nol.",
    },
    {
      question: "Apa arti level N5 sampai N2?",
      answer:
        "Level mengikuti skala JLPT. N5 adalah tingkat paling dasar, lalu N4, N3, dan N2 menambah jangkauan, nuansa, dan kemandirian dalam berbahasa Jepang.",
    },
    {
      question: "Apakah levelnya harus berurutan?",
      answer:
        "Ya. Setiap level dibangun di atas level sebelumnya. Starter N5 membangun pondasi, Elementary N4 memperluasnya, lalu Intermediate N3 dan Advanced N2 menambah ketepatan.",
    },
    {
      question: "Berapa biaya dan durasi kelasnya?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. (Informasi biaya dan jadwal masih placeholder.)",
    },
    {
      question: "Bagaimana cara konsultasi pendaftaran?",
      answer:
        "Kanal konsultasi resmi belum dipublikasikan di situs ini. Tombol konsultasi saat ini masih demo dan akan dihubungkan ke WhatsApp setelah kanal resmi tersedia.",
    },
  ] satisfies readonly FaqItem[],
} as const;

export const careerContent = {
  title: "Mau Upgrade Karier? Bahasa Jepang Bisa Jadi Langkahnya.",
  description:
    "Pilih level yang sesuai dengan tujuanmu, lalu konsultasikan langkah berikutnya bersama tim Mirski.",
  buttonLabel: "Konsultasi Gratis Sekarang",
  primaryCta: { label: "Lihat Pilihan Kelas", href: "#program" },
} as const;
