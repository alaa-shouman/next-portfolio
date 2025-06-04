import { cn } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'

const Profile = () => {
    return (
        <div className={cn('flex items-center gap-x-2 transition-colors duration-75 text-primary-foreground')}>
            <div className="relative w-[100px] h-[100px] rounded-full flex items-center justify-center bg-gradient-to-r from-blue-joust to-green-benzol">
                <Image
                    src="/assets/images/profile.jpg"
                    alt="Profile"
                    width={95}
                    height={95}
                    className="w-[95px] h-[95px] border-[0.2vw] border-blue-cosmos rounded-full object-cover"
                /> 
                <div className="w-3 h-3 rounded-full bg-green-benzol border-blue-cosmos absolute right-0 bottom-5"></div>
            </div>
            <div className="text-3xl font-medium">Alaa Shouman </div>
        </div>
    )
}

export default Profile