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

export type EnrolmentContact = {
  label: string;
  href: string;
};

export const navigation = [
  { label: "Why", href: "#why" },
  { label: "Method", href: "#method" },
  { label: "Courses", href: "#path" },
  { label: "FAQ", href: "#faq" },
] as const satisfies readonly NavItem[];

/**
 * TODO: add the official enrolment email or booking URL before launch.
 * The landing page renders an honest placeholder while this is null.
 */
export const enrolmentContact: EnrolmentContact | null = null;

export const siteConfig = {
  name: "Mirski Japanese",
  shortName: "Mirski",
  title: "Mirski Japanese — A clear path from first words to N2",
  description:
    "A structured Japanese course path from Starter N5 to Advanced N2, built for steady progress and confident use of the language.",
};
