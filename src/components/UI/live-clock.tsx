"use client";
import moment from 'moment-timezone';
import React, { FC, useEffect, useState } from 'react'

interface clockProps {
    timezone?: string;
}

const LiveClock: FC<clockProps> = ({ timezone }) => {
    const [time, setTime] = useState<string>("");

    useEffect(() => {
        const updateClock = () => {
            const currentTime = moment().tz(timezone || "UTC").format('HH:mm:ss');
            setTime(currentTime);
        }
        const interval = setInterval(updateClock, 1000);
        return () => clearInterval(interval);
    }, [timezone]);
    return (
        <div className='flex items-center justify-center gap[0.5vw] text-3xl text-secondary-foreground font-semibold '>
        {
            time ? (
                <>
                    <span className='text-primary-foreground'>{time}</span>
                    <span className='text-secondary-foreground'>({timezone || "UTC"})</span>
                </>
            ) : (
                <span className='text-primary-foreground'>Loading...</span> 
            )   
        }
            </div>
    )
}

export default LiveClock