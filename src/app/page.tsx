"use client";
import Button from "@/components/UI/button";
import Card from "@/components/UI/Card";
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
            <div className="p-10 w-full">
              <div className="max-w-2xl mx-auto">
                <Card className="w-full h-full " title="UI components">
                  <div className="grid grid-cols ">
                    <Button className="">Alaa</Button>
                  </div>
                </Card>
              </div>
            </div>
          )
        }
      </WaterWaveWrapper>
  );
}
