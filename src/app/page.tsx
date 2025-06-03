"use client";
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
            <div className="p-20 h-screen">
              <Card className="w-36">
              this is a card with water wave effect
              </Card>
              <br />
              <Card title="Card with title">
                this is a card with water wave effect
              </Card>
            </div>
          )
        }
      </WaterWaveWrapper>
  );
}
