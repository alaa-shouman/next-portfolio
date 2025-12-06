import  { FC, ReactNode } from 'react'
import { FaExternalLinkAlt } from "react-icons/fa";

interface TimelineProps {
    // Define any props if needed
    children?: ReactNode;
}

const Timeline: FC<TimelineProps> = ({ children }) => {
    return (
        <div className='flex flex-col gap-y-8 relative'>
            {/* Vertical line */}
            <div className='absolute left-12 top-0 bottom-0 w-px bg-gray-600'></div>
            {children}
        </div>
    )
}

interface TimelineItemProps {
    title: string;
    date: string;
    subtitle: string;
    link?: string;
    tag?: string;
    isCourse?: boolean;
}

export const TimelineItem: FC<TimelineItemProps> = ({ date, subtitle, title, isCourse, link, tag }) => {
    return (
        <div className='flex items-start gap-x-6 relative'>
            {/* Date */}
            <div className='text-gray-400 font-medium text-lg w-16 flex-shrink-0'>
                {date}
            </div>
            
            {/* Timeline dot */}
            <div className='w-3 h-3 bg-primary-foreground rounded-full flex-shrink-0 mt-2 relative z-10'></div>
            
            {/* Content */}
            <div className='flex flex-col gap-y-1 flex-1'>
                <h3 className='text-white font-semibold text-lg'>
                    {link ? (
                        <a 
                            href={link} 
                            target='_blank' 
                            rel='noopener noreferrer'
                            className='hover:text-green-400 transition-colors flex items-center gap-x-2 group'
                        >
                            <span>{title}</span>
                            <FaExternalLinkAlt className='w-4 h-4 text-gray-400 group-hover:text-green-400 transition-colors' />
                        </a>
                    ) : (
                        title
                    )}
                </h3>
                <p className='text-gray-400 text-sm'>{subtitle}</p>
                {tag && (
                    <span className='text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded w-fit mt-1'>
                        {tag}
                    </span>
                )}
                {isCourse && (
                    <span className='text-xs bg-blue-600 text-white px-2 py-1 rounded w-fit mt-1'>
                        Course
                    </span>
                )}
            </div>
        </div>
    )
}

export default Timeline