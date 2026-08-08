"use client";
import BackgroundCard from '@/components/card/BackgroundCard'
import Certifications from '@/components/card/Certifications'
import Education from '@/components/card/Education'
import Experience from '@/components/card/Experience'
import MeCard from '@/components/card/Me'
import ResumeCard from '@/components/card/ResumeCard'
import Stack from '@/components/card/Stack'
import Heading from '@/components/heading/Heading'
import type { PortfolioContent } from '@/types/content'

const About = ({ content }: { content: PortfolioContent }) => {
    const heading = content.home.aboutHeading;

    return (
        <div className='pt-24 px-3 lg:px-8 '>
            <Heading
                number={heading.number}
                title_1={heading.titleLine1}
                title_2={heading.titleLine2} />
            <div className="space-y-4 my-8 ">
                <div className="space-y-4 md:grid md:grid-cols-2 lg:grid-cols-2 md:gap-4 md:space-y-0 2xl:grid-cols-3">
                    <MeCard pills={content.about.pills} portrait={content.about.portrait} />
                    <ResumeCard
                        intro={content.about.resumeIntro}
                        signature={content.site.signature}
                        resumeUrl={content.site.resumeUrl}
                    />
                    <BackgroundCard background={content.about.background} />
                </div>
                <div className="space-y-4 md:grid md:grid-cols-2 lg:grid-cols-2 md:gap-4 md:space-y-0 2xl:grid-cols-2">
                    <div className="space-y-4">
                        <Certifications items={content.certifications} />
                        <Education items={content.education} />
                    </div>
                    <div className="space-y-4">
                        <Stack categories={content.stackCategories} />
                        <Experience items={content.experience} />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default About
