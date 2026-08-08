import { sanityFetch } from "./live";
import { SITE_METADATA_QUERY } from "./queries";

/** Deployment config rather than editorial content, so it stays in code. */
export const SITE_URL = "https://alaashouman.me";

const FALLBACK_OG_IMAGE = `${SITE_URL}/assets/images/profile.JPG`;

export interface SiteMetadata {
  name: string;
  role: string;
  title: string;
  /** Meta description. */
  description: string;
  /** Open Graph description — deliberately distinct from the meta one. */
  ogDescription: string;
  /** The shorter line used for Twitter cards and JSON-LD. */
  jsonLdDescription: string;
  keywords: string[];
  ogImage: string;
}

/**
 * Fetched with stega disabled. Visual Editing otherwise injects invisible
 * characters into strings for click-to-edit, and those would end up inside
 * <head> and the JSON-LD block, corrupting what crawlers read.
 */
export async function getSiteMetadata(): Promise<SiteMetadata> {
  const { data } = await sanityFetch({
    query: SITE_METADATA_QUERY,
    stega: false,
  });

  const site = data as {
    name?: string | null;
    role?: string | null;
    seo?: {
      title?: string | null;
      description?: string | null;
      ogDescription?: string | null;
      shortDescription?: string | null;
      keywords?: string[] | null;
      ogImage?: { asset?: { url?: string | null } | null } | null;
    } | null;
  } | null;

  const description = site?.seo?.description ?? "";

  return {
    name: site?.name ?? "",
    role: site?.role ?? "",
    title: site?.seo?.title ?? "",
    description,
    ogDescription: site?.seo?.ogDescription ?? description,
    jsonLdDescription: site?.seo?.shortDescription ?? description,
    keywords: site?.seo?.keywords ?? [],
    ogImage: site?.seo?.ogImage?.asset?.url ?? FALLBACK_OG_IMAGE,
  };
}
