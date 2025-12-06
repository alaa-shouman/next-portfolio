import { cn } from '@/lib/utils';
import  { FC, ReactNode } from 'react'

interface InputProps {
    icon ?: ReactNode;
    placeholder ?: string;
    className ?: string;
    type ?: string;
}

const Input: FC<InputProps> = ({icon,placeholder,type,className}) => {
    return (
        <div className={cn('relative w-full ')}>
            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                {icon}
            </div>
            <input type={type} placeholder={placeholder} className={cn("bg-primary-background text-primary-foreground rounded-lg test-sm ps-10 px-2.5 py-4 focus:outline-none",className)}/>
        </div>
    )
}

export default Input