"use client";

import About from "@/sections/about";
import Featured from "@/sections/featured";
import Landing from "@/sections/landing";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

// import dynamic from "next/dynamic";
const WaterWaveWrapper = dynamic(
  () => import("@/components/visualEffects/waterWave").then(mod => ({ default: mod.WaterWaveWrapper })),
  { ssr: false }
);


export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const content = (
    <div className="p-10 w-full">
      <Landing />
      <Featured />
      <About />
    </div>
  );

  if (isMobile) {
    return content;
  }

  return (
    <WaterWaveWrapper
      imageUrl=""
      dropRadius="3 "
      perturbance="3"
      resolution="2048"
    >
      {
        () => (
          <div className="p-10 w-full">
            <Landing />
            <Featured/>
            <About/>
          </div>
        )
      }
    </WaterWaveWrapper>
  );
}
