"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

import About from "@/sections/about";
import Featured from "@/sections/featured";
import Landing from "@/sections/landing";
import type { PortfolioContent } from "@/types/content";

const WaterWaveWrapper = dynamic(
  () =>
    import("@/components/visualEffects/waterWave").then((mod) => ({
      default: mod.WaterWaveWrapper,
    })),
  { ssr: false },
);

/**
 * Holds everything that needs the browser — the viewport check and the WebGL
 * water-wave wrapper — so the page itself can stay a Server Component and
 * fetch content on the server.
 */
export default function HomeClient({ content }: { content: PortfolioContent }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(
        window.innerWidth < 768 ||
          /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
            navigator.userAgent,
          ),
      );
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const body = (
    <div className="p-10 w-full">
      <Landing home={content.home} site={content.site} />
      <Featured heading={content.home.featuredHeading} projects={content.projects} />
      <About content={content} />
    </div>
  );

  if (isMobile) {
    return body;
  }

  return (
    <WaterWaveWrapper
      imageUrl=""
      dropRadius="3 "
      perturbance="3"
      resolution="2048"
    >
      {() => body}
    </WaterWaveWrapper>
  );
}
