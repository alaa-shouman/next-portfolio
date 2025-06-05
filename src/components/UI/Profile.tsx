import { cn } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'
import profile from "/public//assets/images/profile.jpg"
const Profile = () => {
    return (
        <div className={cn('flex items-center gap-x-2 sm:gap-x-4 transition-colors duration-75 text-primary-foreground flex-col sm:flex-row text-center sm:text-left')}>
            <div className="relative w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] rounded-full flex items-center justify-center bg-gradient-to-r from-blue-joust to-green-benzol">
                <Image
                    src={profile}
                    alt="Profile"
                    width={95}
                    height={95}
                    className="w-[75px] h-[75px] sm:w-[95px] sm:h-[95px] border-[2px] sm:border-[0.2vw] border-blue-cosmos rounded-full object-cover"
                    priority
                /> 
                <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-benzol border-blue-cosmos absolute right-0 bottom-3 sm:bottom-5"></div>
            </div>
            <div className="flex flex-col gap-0.5 sm:gap-1">
                <div className="text-xl sm:text-3xl font-medium">Alaa Shouman</div>
                <div className="text-sm sm:text-lg text-primary-foreground/70 font-light">
                    Software Engineer
                </div>
            </div>
        </div>
    )
}

export default Profile