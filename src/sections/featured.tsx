"use client";
import FeaturedCard from '@/components/card/FeaturedCard'
import Heading from '@/components/heading/Heading'
import { useState } from 'react'
import type { Project, SectionHeading } from '@/types/content'

const Featured = ({
    heading,
    projects,
}: {
    heading: SectionHeading;
    projects: Project[];
}) => {
    const [activeCard, setActiveCard] = useState(0);

    return (
        <div className='pt-24 md:px-3 lg:px-8 '>
            <Heading
                number={heading.number}
                title_1={heading.titleLine1}
                title_2={heading.titleLine2}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                    <FeaturedCard
                        key={project.id}
                        logo=""
                        title={project.title}
                        tag={project.tag}
                        description={project.description}
                        image={project.image?.url}
                        video={project.video}
                        active={activeCard === index}
                        onClick={() => setActiveCard(index)}
                        link={project.link ?? ""}
                        googlePlay={project.googlePlay}
                        appStore={project.appStore}
                        technologies={project.technologies}
                    />
                ))}
            </div>
        </div>
    )
}

export default Featured
