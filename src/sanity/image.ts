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
 * Nothing on this page is displayed wider than about 1600px, but the source
 * assets go up to 4096px square. Handing next/image the untouched original
 * makes it fetch several megabytes before it can resize, which times out the
 * optimizer. Sanity's CDN resizes far more cheaply, so cap the source there
 * and let next/image work from something sensible.
 */
const MAX_SOURCE_WIDTH = 1600;

export function resolveImage(
  image: SanityImageWithMeta | null | undefined,
  maxWidth: number = MAX_SOURCE_WIDTH,
): ResolvedImage | null {
  const url = image?.asset?.url;
  if (!url) return null;

  const dimensions = image.asset?.metadata?.dimensions;
  const width = dimensions?.width ?? 1200;
  const height = dimensions?.height ?? 800;

  const scale = width > maxWidth ? maxWidth / width : 1;

  return {
    url: scale < 1 ? `${url}?w=${maxWidth}&auto=format` : url,
    width: Math.round(width * scale),
    height: Math.round(height * scale),
    blurDataURL: image.asset?.metadata?.lqip ?? undefined,
    alt: image.alt ?? undefined,
  };
}
