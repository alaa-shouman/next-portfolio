'use client'
import React from 'react'
import Card from '../UI/Card'
import Timeline, { TimelineItem } from '../UI/Timeline'
import { educationData } from '@/data/education'

const Education = () => {
    return (
        <Card title='My Education'>
            <Timeline>
                {educationData.map((item, index) => (
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

export default Education