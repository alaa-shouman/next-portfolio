import { createImageUrlBuilder } from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url";
import { client } from "./client";

const builder = createImageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

/**
 * Shape the frontend needs from any Sanity image: a URL plus the bits
 * next/image wants. Static imports used to supply width, height and a blur
 * placeholder for free; querying `asset->metadata` is how we keep them.
 */
export interface ResolvedImage {
  url: string;
  width: number;
  height: number;
  blurDataURL?: string;
  alt?: string;
}

interface SanityImageWithMeta {
  asset?: {
    url?: string | null;
    metadata?: {
      lqip?: string | null;
      dimensions?: { width?: number | null; height?: number | null } | null;
    } | null;
  } | null;
  alt?: string | null;
}

/**
 * Returns the asset's true dimensions and a bare CDN URL. Sizing is left to
 * `sanityImageLoader`, which appends the width next/image actually asks for —
 * so the intrinsic dimensions here only need to be right for aspect ratio.
 */
export function resolveImage(
  image: SanityImageWithMeta | null | undefined,
): ResolvedImage | null {
  const url = image?.asset?.url;
  if (!url) return null;

  const dimensions = image.asset?.metadata?.dimensions;
  return {
    url,
    width: dimensions?.width ?? 1200,
    height: dimensions?.height ?? 800,
    blurDataURL: image.asset?.metadata?.lqip ?? undefined,
    alt: image.alt ?? undefined,
  };
}
