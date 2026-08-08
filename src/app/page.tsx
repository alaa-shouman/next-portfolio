import HomeClient from "./HomeClient";
import { localContent } from "@/data/adapter";

export default function Home() {
  return <HomeClient content={localContent} />;
}
