"use client";
import Card from '../UI/Card'
import BackgroundText from '../portable/BackgroundText'
import type { PortableTextBlock } from 'next-sanity'

const BackgroundCard = ({ background }: { background: PortableTextBlock[] }) => {
    return (
        <Card className="h-full">
            <div className="space-y-4 text-primary-foreground">
                <h3 className="text-xl font-bold text-primary-foreground mb-6">
                    MY BACKGROUND
                </h3>

                <div className="space-y-4 text-sm leading-relaxed">
                    <BackgroundText value={background} />
                </div>
            </div>
        </Card>
    )
}

export default BackgroundCard
