import MeCard from '@/components/card/Me'
import Heading from '@/components/heading/Heading'
import Card from '@/components/UI/Card'
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
                    <MeCard title='ME'>ME</MeCard>
                    <Card title='Resume'>Resume</Card>
                    <Card title='Background'>Background</Card>
                    <Card title='Gallery' className='2xl:hidden'>Gallery</Card>
                    <div className="space-y-4">
                        <Card title='Instructor'>Instructor</Card>
                        <Card title='Certifications'>Certifications</Card>
                    </div>
                    <div className="space-y-4">
                        <Card title='Stack'>Stack</Card>
                        <Card title='Experience'>Experience</Card>
                        <Card title='Education'>Education</Card>
                    </div>
                    <div className='hidden 2xl:flex'>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default About