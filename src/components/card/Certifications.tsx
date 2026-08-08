"use client";
import Card from '../UI/Card'
import Timeline, { TimelineItem } from '../UI/Timeline'
import type { TimelineEntry } from '@/types/content'

const Certifications = ({ items }: { items: TimelineEntry[] }) => {
    return (
        <Card title='My Certifications'>
            <Timeline>
                {items.map((item) => (
                    <TimelineItem
                        key={item.id}
                        date={item.date}
                        title={item.title}
                        subtitle={item.subtitle}
                        link={item.link}
                        tag={item.tag}
                        isCourse={item.isCourse}
                    />
                ))}

            </Timeline>
        </Card>
    )
}

export default Certifications
