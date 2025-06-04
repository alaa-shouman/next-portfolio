"use client";
import React from 'react'
import Card from '../UI/Card'
import Image from 'next/image'
import Sign from '/public/assets/images/signature.png'
import Button from '../UI/button'
import { FaDownload } from 'react-icons/fa'
const ResumeCard = () => {
    const handleDownloadResume = () => {
        // Add your resume download logic here
        const link = document.createElement('a');
        link.href = '/assets/Alaa Shouman Resume.pdf'; // Update with your resume path
        link.download = 'Alaa_Shouman_Resume.pdf';
        link.click();
    };
    return (
        <Card className='md:h-full 2xl:h-fit'>
            <p className='text-lg xl:text-2xl font-md text-primary-foreground'>
                Greetings! I'm Alaa Shouman, a Computer Science graduate from the Lebanese University, and I'm thrilled to be embarking on a journey of innovation and growth in the tech world. With a strong foundation in computer science principles and a hunger for knowledge, I've cultivated a wide range of skills across various technologies.
            </p>
            <div className='mb-6'>
                <Image src={Sign} alt='Alaa Sh' />
            </div>
            <div className="flex items-center justify-between md:absolute md:bottom-6 md:left-6 md:w-[calc(100%-48px)] ">
                {/*Socials*/}
                <Button onClick={handleDownloadResume}>
                    <FaDownload className="mr-2" />
                    Resume
                </Button>
            </div>
        </Card>
    )
}

export default ResumeCard