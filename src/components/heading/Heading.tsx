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
        <div className="relative my-10 md:my-16 lg:my-20 px-4 md:px-8 z-20">
            {/* Large background number - hidden on mobile */}
            <div className="hidden md:block outline-none flex-col justify-start shrink-0 opacity-5 transform -top-32 2xl:-top-24 w-[71px] flex-none h-auto left-4 lg:left-12 absolute whitespace-pre">
                <h2 className="font-coda text-[180px] text-center text-primary-foreground">
                    <span className="bottom_fade bg-clip-text text-transparent">{number}</span>
                </h2>
            </div>

            {/* Mobile layout */}
            <div className="md:hidden text-center space-y-6">
                {/* Section number for mobile */}
                <div className="inline-block px-4 py-2 border border-primary-foreground/20 rounded-full">
                    <span className="text-sm font-coda text-primary-foreground/60">
                        {number.padStart(2, '0')}
                    </span>
                </div>
                
                {/* Main titles stacked vertically */}
                <div className="space-y-2">
                    <h1 className="text-[15vw] leading-[90%] text-primary-foreground font-oswald font-normal">
                        {title_1}
                    </h1>
                    <h2 className="text-[13vw] leading-[90%] text-primary-foreground font-oswald font-light italic">
                        {title_2}
                    </h2>
                </div>
                
                {/* Decorative line */}
                <div className="w-20 h-px bg-gradient-to-r from-transparent via-primary-foreground/30 to-transparent mx-auto"></div>
            </div>

            {/* Desktop layout */}
            <div className="hidden md:flex items-center flex-nowrap min-h-min overflow-hidden p-0 w-full font-oswald">
                <p className="text-[5vw] lg:text-[9vw] leading-[100%] text-primary-foreground mr-6 font-normal">
                    {title_1}
                </p>
                <HeadingAnimatedSvg text='Learn More' />
                <p className="text-[5vw] lg:text-[9vw] leading-[100%] text-primary-foreground italic font-light">
                    {title_2}
                </p>
            </div>
            
            {/* SVG Curve - only on desktop */}
            <div className="hidden md:block">
                <SvgCurve />
            </div>
        </div>
    );
};

export default Heading;