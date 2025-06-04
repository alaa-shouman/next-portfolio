import Header from '@/components/navigation/header/Header'
import LiveClock from '@/components/UI/live-clock'
import MagneticEffect from '@/components/visualEffects/magneticEffect'
import React from 'react'

const Landing = () => {
    return (
        <div className='relative h-screen overflow-hidden p-8'>
            <Header />
            <div className='absolute right-10 top-16 z-20 hidden lg:block'>
                <MagneticEffect>
                    <LiveClock timezone='Asia/Beirut' />
                </MagneticEffect>
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 leading-[14vw] lg:leading-[10vw] 2xl:leading-[9rem] font-medium tracking-[-0.3rem]">
                <div className='flex flex-col items-center justify-center text-center text-primary-foreground text-[18vw] lg:text-[14vw] 2xl:text-[12rem]'>
                    <div>
                        <span>Code</span>
                    </div>
                    <div>
                        <span>Crafting</span>
                    </div>
                    <div className="relative">
                        <span>Brilliance</span>
                        <div className='text-[1rem] leading-[1.4rem] tracking-[-0.07rem] absolute top-[14vw] lg:top-[10vw]  left-0  w-[30rem] uppercase font-normal'>
                            <span>Empowering innovation </span>
                            <br />
                            <span>Through inspire Design </span>
                            <br />
                            <span>where Challenges spark creativity</span>
                            <br />
                            <span>and every line of code tells a story</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landing