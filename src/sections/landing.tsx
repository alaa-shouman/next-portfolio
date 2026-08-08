"use client";
import { Fragment } from "react";
import Header from "@/components/navigation/header/Header";
import LiveClock from "@/components/UI/live-clock";
import MagneticEffect from "@/components/visualEffects/magneticEffect";
import ShinyText from "@/components/visualEffects/Shiny";
import type { HomeContent, SiteSettings } from "@/types/content";

const Landing = ({ home, site }: { home: HomeContent; site: SiteSettings }) => {
    const heroLines = home.heroLines;
    const lastIndex = heroLines.length - 1;

    return (
        <div className='relative h-screen overflow-hidden p-8'>
            <Header site={site} />
            <div className='absolute right-10 top-16 z-20 hidden lg:block'>
                <MagneticEffect>
                    <LiveClock timezone={site.timezone} />
                </MagneticEffect>
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 leading-[14vw] lg:leading-[10vw] 2xl:leading-[9rem] font-medium tracking-[-0.3rem]">
                <div className='flex flex-col items-center justify-center text-center text-primary-foreground text-[18vw] lg:text-[14vw] 2xl:text-[12rem]'>
                    {heroLines.map((line, index) =>
                        index === lastIndex ? (
                            <div className="relative" key={`hero-${index}`}>
                                <ShinyText text={line} disabled={false} speed={3} />
                                <div className='text-[1rem] leading-[1.4rem] tracking-[-0.07rem] absolute top-[14vw] lg:top-[10vw] left-1/2 transform -translate-x-1/2 lg:left-0 lg:transform-none w-[30rem] uppercase font-normal'>
                                    {home.taglineLines.map((tagline, tagIndex) => (
                                        <Fragment key={`tagline-${tagIndex}`}>
                                            {tagIndex > 0 && <br />}
                                            <span>{tagline}</span>
                                        </Fragment>
                                    ))}
                                </div>
                            </div>
                        ) : (
                            <div key={`hero-${index}`}>
                                <ShinyText text={line} disabled={false} speed={3} />
                            </div>
                        ),
                    )}
                </div>
            </div>
        </div>
    )
}

export default Landing
