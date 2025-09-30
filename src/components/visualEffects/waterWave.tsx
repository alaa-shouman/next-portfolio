"use client";
import React from 'react'
// @ts-ignore
import WaterWave from 'react-water-wave'
interface WaterWaveProps {
    imageUrl?: string;
    dropRadius?: string;
    perturbance?: string;
    resolution?: string;
    children?: () => React.ReactNode;
}


export const WaterWaveWrapper: React.FC<WaterWaveProps> = ({ imageUrl, dropRadius, perturbance, resolution, children }) => {
    return <WaterWave imageUrl={imageUrl}
        dropRadius={dropRadius}
        perturbance={perturbance}
        resolution={resolution}>
        {children}
    </WaterWave>
}