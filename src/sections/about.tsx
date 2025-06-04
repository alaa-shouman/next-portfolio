import BackgroundCard from '@/components/card/BackgroundCard'
import Certifications from '@/components/card/Certifications'
import Education from '@/components/card/Education'
import Experience from '@/components/card/Experience'
import MeCard from '@/components/card/Me'
import ResumeCard from '@/components/card/ResumeCard'
import Heading from '@/components/heading/Heading'
import Card from '@/components/UI/Card'
import Gallery from '@/components/UI/Gallery'
import React from 'react'

const About = () => {
    return (
        <div className='pt-24 px-3 lg:px-8 '>
            <Heading
                number="02"
                title_1="About"
                title_2="Me" />
            <div className="space-y-4 my-8 ">
                <div className="space-y-4 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-4 md:space-y-0 2xl:grid-cols-3">
                    <MeCard/>
                    <ResumeCard/>
                    <BackgroundCard />
                    <Card title='Gallery' className=''>
                        <Gallery />
                    </Card>
                    <div className="space-y-4">
                        <Card title='Instructor'>Instructor</Card>
                        <Certifications />
                    </div>
                    <div className="space-y-4">
                        <Card title='Stack'>Stack</Card>
                        <Experience/>
                        <Education />
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default About