"use client";
import Button from "@/components/UI/button";
import Card from "@/components/UI/Card";
import Input from "@/components/UI/Input";
import LiveClock from "@/components/UI/live-clock";
import Profile from "@/components/UI/Profile";
import ScrollDown from "@/components/UI/scroll-down";
import TextArea from "@/components/UI/textArea";
import MagneticEffect from "@/components/visualEffects/magneticEffect";
import { WaterWaveWrapper } from "@/components/visualEffects/waterWave";
import { FaUser } from "react-icons/fa";

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
                  <div className="grid grid-cols-4 ">
                    <Button className="">Alaa</Button>
                    <Button className="">Alaa</Button>
                    <Button className="">Alaa</Button>
                  </div>
                  <Input type="text" placeholder="fuck you" className="w-full"/>
                  <Input type="text" placeholder="fuck you" className="w-full" icon={<FaUser/>}/>
                  <TextArea className="w-full"/>
                </Card>
                <Profile/>
                <MagneticEffect>
                  <ScrollDown/>
                </MagneticEffect>
                <LiveClock timezone="Asia/Beirut"/>
              </div>
            </div>
          )
        }
      </WaterWaveWrapper>
  );
}
