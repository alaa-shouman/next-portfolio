import { cn } from '@/lib/utils';
import Link from 'next/link';
import React, { ReactNode } from 'react'

interface ButtonProps {
    children: ReactNode;
    link?: string;
    isIcon?: boolean;
    className?: string;
    onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, className, isIcon, link,onClick }) => {
    return (
        <>
            {link ? (
                <Link
                    href={link}
                    target="_blank"
                    className="w-10 h-10 cursor-pointer"
                >
                    <ButtonBody className={className} IsIcon={isIcon || false}>
                        {children}
                    </ButtonBody>
                </Link>
            ) : (
                <ButtonBody className={className} IsIcon={isIcon || false} onClick={onClick}>
                    {children}
                </ButtonBody>
            )}
        </>
    );
};

interface ButtoBodyProps {
    children: ReactNode;
    IsIcon: boolean;
    className?: string;
    onClick?: () => void;
}

const ButtonBody: React.FC<ButtoBodyProps> = ({ children, className, IsIcon,onClick }) => {
    return (
        <div
        onClick={onClick}
            className={`cursor-pointer flex-none w-auto h-full  `}
        >
            <div className={cn('flex items-center justify-center gap-2 bg-primary-background rounded-full select-none whitespace-nowrap text-primary-foreground text-sm font-medium hover:bg-white/[0.1] transition-colors duration-100',
                className,
                IsIcon ? 'w-10 h-10 p-2' : 'h-full w-max px-3 py-2',)}>
                {children}
            </div>
        </div>
    );
};

export default Button;