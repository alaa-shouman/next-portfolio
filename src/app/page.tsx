"use client";

// import { WaterWaveWrapper } from "@/components/visualEffects/waterWave";
import About from "@/sections/about";
import Featured from "@/sections/featured";
import Landing from "@/sections/landing";
import dynamic from "next/dynamic";

// import dynamic from "next/dynamic";

// // Dynamically import components that might cause SSR issues
const WaterWaveWrapper = dynamic(
  () => import("@/components/visualEffects/waterWave").then(mod => ({ default: mod.WaterWaveWrapper })),
  { ssr: false }
);

// const About = dynamic(() => import("@/sections/about"), { ssr: false });
// const Featured = dynamic(() => import("@/sections/featured"), { ssr: false });
// const Landing = dynamic(() => import("@/sections/landing"), { ssr: false });

export default function Home() {
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
