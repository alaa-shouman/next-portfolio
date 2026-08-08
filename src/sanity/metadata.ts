import { client } from "./client";
import { REVALIDATE_SECONDS } from "./config";
import { SITE_METADATA_QUERY } from "./queries";

/** Deployment config rather than editorial content, so it stays in code. */
export const SITE_URL = "https://alaashouman.me";

/** Emitted as twitter:creator, as it was before the migration. */
export const TWITTER_CREATOR = "@alaashouman";

const FALLBACK_OG_IMAGE = `${SITE_URL}/assets/images/profile.JPG`;

// Social cards want 1200x630. The source asset is a ~3000px square, so crop
// it on Sanity rather than declaring dimensions the file does not have.
const OG_TRANSFORM = '?w=1200&h=630&fit=crop&auto=format';

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
 * The plain client injects no stega encoding, so nothing can smuggle invisible
 * click-to-edit markers into <head> or the JSON-LD block.
 */
export async function getSiteMetadata(): Promise<SiteMetadata> {
  const site = await client.fetch<{
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
  } | null>(SITE_METADATA_QUERY, {}, { next: { revalidate: REVALIDATE_SECONDS } });

  const description = site?.seo?.description ?? "";

  return {
    name: site?.name ?? "",
    role: site?.role ?? "",
    title: site?.seo?.title ?? "",
    description,
    ogDescription: site?.seo?.ogDescription ?? description,
    jsonLdDescription: site?.seo?.shortDescription ?? description,
    keywords: site?.seo?.keywords ?? [],
    ogImage: site?.seo?.ogImage?.asset?.url
      ? `${site.seo.ogImage.asset.url}${OG_TRANSFORM}`
      : FALLBACK_OG_IMAGE,
  };
}
