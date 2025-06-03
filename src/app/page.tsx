"use client";
import { WaterWaveWrapper } from "@/components/visualEffects/waterWave";

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
            <div className="flex items-center justify-center h-screen ">
              <h1 className="text-6xl font-bold">Hello, World!</h1>
            </div>
          )
        }
      </WaterWaveWrapper>
  );
}
