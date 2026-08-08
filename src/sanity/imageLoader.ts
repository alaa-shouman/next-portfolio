"use client";

import type { ImageLoaderProps } from "next/image";

/**
 * Serves Sanity-hosted images straight from Sanity's CDN at the width
 * next/image asks for.
 *
 * Without this, Next proxies every CMS image through its own optimizer: it
 * downloads the full asset, re-encodes it, and serves it back. Sanity already
 * does that work on its edge, so the round trip is pure duplication — and on a
 * cold cache it is slow enough that the optimizer times out and the image
 * fails to render. Pointing the browser at Sanity directly removes the whole
 * failure mode, and the per-request image cost with it.
 */
export function sanityImageLoader({ src, width, quality }: ImageLoaderProps): string {
  const url = new URL(src);
  url.searchParams.set("w", String(width));
  url.searchParams.set("q", String(quality ?? 75));
  url.searchParams.set("auto", "format");
  url.searchParams.set("fit", "max");
  return url.toString();
}

export const isSanityImage = (src: string) => src.includes("cdn.sanity.io");
