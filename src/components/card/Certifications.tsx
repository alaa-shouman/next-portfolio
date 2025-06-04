'use client'
import React from 'react'
import Card from '../UI/Card'
import Timeline, { TimelineItem } from '../UI/Timeline'
import { certificationsData } from '@/data/certifications'

const Certifications = () => {
    return (
        <Card title='My Certifications'>
            <Timeline>
                {certificationsData.map((item, index) => (
                    <TimelineItem
                        key={index}
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