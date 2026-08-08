import HomeClient from "./HomeClient";
import { getPortfolioContent } from "@/sanity/content";

export default async function Home() {
  const content = await getPortfolioContent();
  return <HomeClient content={content} />;
}
