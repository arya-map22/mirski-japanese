const fallbackSiteUrl = "https://mirskijapanese.example";

function resolveSiteUrl(): URL {
  const raw = process.env.SITE_URL?.trim() || fallbackSiteUrl;

  let url: URL;
  try {
    url = new URL(raw);
  } catch {
    throw new Error("SITE_URL must be an absolute URL.");
  }

  if (url.protocol !== "https:" && url.protocol !== "http:") {
    throw new Error("SITE_URL must use http or https.");
  }

  return url;
}

/**
 * Used for metadata, canonical URLs, Open Graph, robots, and the sitemap.
 * Set SITE_URL in the deployment environment before launch.
 */
export const siteUrl = resolveSiteUrl();

export type NavItem = {
  label: string;
  href: string;
};

export const navigation = [
  { label: "Beranda", href: "#top" },
  { label: "Level", href: "#program" },
  { label: "Kelas", href: "#kelas" },
  { label: "Tentang", href: "#tentang" },
  { label: "Testimoni", href: "#testimoni" },
  { label: "FAQ", href: "#faq" },
] as const satisfies readonly NavItem[];

export const consultCta = {
  label: "Konsultasi Gratis",
  href: "#consult-dialog",
} as const;

export const siteConfig = {
  name: "Mirski Japanese",
  shortName: "Mirski",
  title: "Mirski Japanese — Kursus Bahasa Jepang dari N5 sampai N2",
  description:
    "Kursus bahasa Jepang dengan jalur belajar empat level, dari Starter N5 sampai Advanced N2, untuk progres yang terarah dan terukur.",
};

/** PLACEHOLDER: replace with verified business details before launch. */
export const footerContent = {
  tagline:
    "Kelas bahasa Jepang online interaktif dengan jalur belajar yang terarah dan menyenangkan.",
  company: "Mirski Japanese",
  address:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Jl. Contoh No. 00, Kota Contoh 00000.",
  columns: [
    {
      title: "Jelajahi",
      links: [
        { label: "Beranda", href: "#top" },
        { label: "Program", href: "#program" },
        { label: "Tentang", href: "#tentang" },
        { label: "Testimoni", href: "#testimoni" },
      ],
    },
    {
      title: "Dukungan",
      links: [
        { label: "FAQ", href: "#faq" },
        { label: "Konsultasi", href: "#consult-dialog" },
      ],
    },
  ],
  contact: {
    title: "Kontak",
    phone: "Lorem ipsum — nomor belum tersedia",
    email: "lorem@ipsum.example",
    hours: "Senin – Sabtu (09.00 – 22.00)",
  },
  legal: "Lorem ipsum dolor sit amet.",
} as const;
