import { FC, ReactNode } from 'react'
import { FaExternalLinkAlt } from "react-icons/fa";

interface TimelineProps {
    children?: ReactNode;
}

const Timeline: FC<TimelineProps> = ({ children }) => {
    return (
        <div className='flex flex-col'>
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
        <div className='group flex gap-x-4'>
            {/* Date */}
            <div className='w-12 shrink-0 text-right text-sm font-medium text-secondary-foreground tabular-nums pt-0.5'>
                {date}
            </div>

            {/* Rail: dot + connector */}
            <div className='flex flex-col items-center'>
                <div className='mt-1 h-3 w-3 shrink-0 rounded-full border-2 border-blue-joust/30 bg-transparent'></div>
                <div className='w-px flex-1 bg-border group-last:hidden'></div>
            </div>

            {/* Content */}
            <div className='flex flex-1 flex-col pb-8 group-last:pb-0'>
                <h3 className='font-semibold text-primary-foreground leading-snug'>
                    {link ? (
                        <a
                            href={link}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='group/link inline-flex items-center gap-x-2 transition-colors hover:border-blue-joust/30'
                        >
                            <span>{title}</span>
                            <FaExternalLinkAlt className='h-3 w-3 text-secondary-foreground transition-colors group-hover/link:text-blue-joust' />
                        </a>
                    ) : (
                        title
                    )}
                </h3>
                <p className='text-sm text-secondary-foreground'>{subtitle}</p>
                {(tag || isCourse) && (
                    <div className='mt-2 flex flex-wrap gap-2'>
                        {tag && (
                            <span className='rounded-full border border-green-benzol/30 bg-green-benzol/10 px-2.5 py-0.5 text-xs font-medium text-green-benzol'>
                                {tag}
                            </span>
                        )}
                        {isCourse && (
                            <span className='rounded-full border border-blue-joust/30 bg-blue-joust/10 px-2.5 py-0.5 text-xs font-medium text-blue-joust'>
                                Course
                            </span>
                        )}
                    </div>
                )}
            </div>
        </div>
    )
}

export default Timeline
