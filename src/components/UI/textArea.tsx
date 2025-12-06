import { cn } from '@/lib/utils';
import { FC, ReactNode } from 'react'

interface TextAreaProps {
    icon ?: ReactNode;
    placeholder ?: string;
    className ?: string;
}

const TextArea: FC<TextAreaProps> = ({icon,placeholder,className}) => {
    return (
        <div className={cn('relative w-full ')}>
            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                {icon}
            </div>
            <textarea placeholder={placeholder} className={cn("bg-primary-background text-primary-foreground rounded-lg test-sm ps-10 p-2.5 pt-8 focus:outline-none",className)}/>
        </div>
    )
}

export default TextArea