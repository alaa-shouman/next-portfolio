import HomeClient from "./HomeClient";
import { getPortfolioContent } from "@/sanity/content";

/**
 * Without this the server render is cached indefinitely and only the client
 * catches up after hydration — which means crawlers and social scrapers keep
 * seeing whatever content was current at build time, however long ago that was.
 * A minute is a fine trade for a site that changes a few times a month.
 */
export const revalidate = 60;

export default async function Home() {
  const content = await getPortfolioContent();
  return <HomeClient content={content} />;
}
