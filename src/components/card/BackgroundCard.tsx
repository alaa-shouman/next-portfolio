"use client";
import React from 'react'
import Card from '../UI/Card'

const BackgroundCard = () => {
    return (
        <Card className="h-full">
            <div className="space-y-4 text-primary-foreground">
                <h3 className="text-xl font-bold text-primary-foreground mb-6">
                    MY BACKGROUND
                </h3>

                <div className="space-y-4 text-sm leading-relaxed">
                    <p>
                        My journey in technology began with a passion for problem-solving and innovation. As a{' '}
                        <span className="underline font-medium">Computer Science graduate from the Lebanese University</span>
                        , I built a strong foundation in software engineering principles and modern development practices.
                    </p>

                    <p>
                        My professional career took off when I joined{' '}
                        <span className="underline font-medium">Key in Hands in Baalbek, Lebanon</span>
                        {' '}as a{' '}
                        <span className="underline font-medium">React Developer</span>
                        . During my 6-month tenure, I honed my skills in{' '}
                        <span className="underline font-medium">front-end development</span>
                        , working on dynamic web applications and user interfaces that delivered exceptional user experiences.
                    </p>

                    <p>
                        Building on this foundation, I advanced my career at{' '}
                        <span className="underline font-medium">3E Tech</span>
                        {' '}where I expanded my expertise into{' '}
                        <span className="underline font-medium">React Native and Electron development</span>
                        . This role allowed me to dive deep into{' '}
                        <span className="underline font-medium">cross-platform mobile applications</span>
                        {' '}and{' '}
                        <span className="underline font-medium">desktop application development</span>
                        , broadening my technical skillset significantly.
                    </p>

                    <p>
                        Throughout my journey, I've been passionate about{' '}
                        <span className="underline font-medium">full-stack development</span>
                        , continuously learning and adapting to new technologies. My experience spans from{' '}
                        <span className="underline font-medium">web development with React</span>
                        {' '}to{' '}
                        <span className="underline font-medium">mobile app development with React Native</span>
                        {' '}and{' '}
                        <span className="underline font-medium">desktop applications with Electron</span>
                        .
                    </p>

                    <p className="italic font-medium text-secondary-foreground">
                        Driven by innovation and a commitment to excellence, I strive to create impactful software solutions that solve real-world problems and enhance user experiences across all platforms.
                    </p>
                </div>
            </div>
        </Card>
    )
}

export default BackgroundCard