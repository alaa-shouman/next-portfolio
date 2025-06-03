import { cn } from '@/lib/utils';
import React, { ReactNode } from 'react'

interface CardProps {
    title?: string;
    children: ReactNode;
    className?: string;
    onClick?: () => void;
}

const Card: React.FC<CardProps> = ({ title, children, className }: CardProps) => {
    return (
        <div className={cn('relative bg-primary-background w-full h-fit rounded-2xl border border-border p-6 text-primary-foreground overflow-hidden',
            className)}>
            <div className={cn('fex flex-col gap-y-6 ')}>
                {title ? <div className="text-2xl font-semibold font-coda"><p className='uppercase text-lg'>{title}</p></div> : null}
            </div>
            {
                children ? <div className="flex flex-col gap-y-4 mt-4">
                    {children}
                </div> : null
            }
        </div>
    )
}

export default Card