import { defineLive } from "next-sanity/live";
import { client } from "./client";

/**
 * No `browserToken` on purpose.
 *
 * It would have to be exposed as a NEXT_PUBLIC_ variable to reach the browser
 * at all, which publishes a token that can read unpublished drafts. Everything
 * this site renders is published content, so the browser subscribes to live
 * updates unauthenticated and only the server holds a token.
 *
 * If draft previews are wanted later, the way in is Next's draft mode — it
 * sets a server-side cookie — not a public token.
 */
export const { sanityFetch, SanityLive } = defineLive({
  client,
  serverToken: process.env.SANITY_API_READ_TOKEN,
});
