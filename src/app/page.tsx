"use client";

import { WaterWaveWrapper } from "@/components/visualEffects/waterWave";
import About from "@/sections/about";
import Featured from "@/sections/featured";
import Landing from "@/sections/landing";

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
