/**
 * How long a server render may reuse content before refetching.
 *
 * next-sanity's `defineLive` was tried first, but its fetches cache
 * indefinitely and rely on tag invalidation arriving out of band; when that
 * does not fire, the server keeps serving build-time content forever while
 * only the browser catches up after hydration — so crawlers and social
 * scrapers see stale copy indefinitely. Plain time-based revalidation behaves
 * the same way on every host and is straightforward to verify.
 */
export const REVALIDATE_SECONDS = 60;
