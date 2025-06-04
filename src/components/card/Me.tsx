'use client'
import Image from "next/image";
import MyImg from "/public/assets/images/gallery/Alaa.png";
import Card from "../UI/Card";

export default function MeCard() {
  return (
    <Card className="2xl:h-full">
      <div className="w-full h-[400px] sm:h-[500px] overflow-hidden">
        {/*background image*/}
        <Image
          src={MyImg}
          alt="Alaa Shouman"
          className="absolute top-0 left-0 bottom-0 right-0 h-full w-full object-cover"
        />
      </div>
          <div className="absolute top-[65%] space-y-2">
              <div className="bg-black/[0.7] w-fit py-1.5 px-3 rounded-full">
                  <p className="text-primary-foreground leading-[110%] font-bold">
                      Hello, universe 👋
                  </p>
              </div>

              <div className="bg-black/[0.7] w-fit py-1.5 px-3 rounded-full">
                  <p className="text-white text-sm font-medium">
                      Full Stack Developer 💻
                  </p>
              </div>

              <div className="bg-black/[0.7] w-fit py-1.5 px-3 rounded-full">
                  <p className="text-white text-sm font-medium">
                      React Native Expert 📱
                  </p>
              </div>

              <div className="bg-black/[0.7] w-fit py-1.5 px-3 rounded-full">
                  <p className="text-white text-sm font-medium">
                      Problem Solver 🚀
                  </p>
              </div>

              <div className="bg-black/[0.7] w-fit py-1.5 px-3 rounded-full">
                  <p className="text-white text-sm font-medium">
                      Tea Enthusiast ☕
                  </p>
              </div>
          </div>
    </Card>
  );
}