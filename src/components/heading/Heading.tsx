"use client";
import { FC } from "react";
import SvgCurve from "../visualEffects/svg-curve";
import { HeadingAnimatedSvg } from "./heading-animated-svg";

interface HeadingProps {
    number: string;
    title_1: string;
    title_2: string;
}

const Heading: FC<HeadingProps> = ({ number, title_1, title_2 }) => {
    return (
        <div className="relative my-10 px-8 z-20">
            {/* Large background number */}
            <div className="outline-none flex flex-col justify-start shrink-0 opacity-5 transform -top-32 2xl:-top-24 w-[71px] flex-none h-auto left-4 lg:left-12 absolute  whitespace-pre">
                <h2 className="font-coda text-[180px] text-center text-primary-foreground">
                    <span className="bottom_fade bg-clip-text text-transparent">{number}</span>
                </h2>
            </div>

            {/* Main content */}
            <div className="relative z-10">
                <div className="flex items-center flex-nowrap min-h-min overflow-hidden p-0 w-full font-oswald">
                    <p className="text-[17vw] lg:text-[9vw] leading-[100%] text-primary-foreground mr-6 font-normal">
                        {title_1}
                    </p>
                    <HeadingAnimatedSvg text='Learn More' />
                    <p className="text-[17vw] lg:text-[9vw] leading-[100%] text-primary-foreground italic font-light">
                        {title_2}
                    </p>
                </div>
            </div>
            <SvgCurve />
        </div>
    );
};

export default Heading;