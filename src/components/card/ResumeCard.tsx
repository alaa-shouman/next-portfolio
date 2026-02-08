"use client";
import Card from '../UI/Card'
import Image from 'next/image'
import Sign from '@/assets/images/signature.png'
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
                Greetings! I'm Alaa Shouman, a graduate of Lebanese University with a degree in computer science, and I'm excited to start a new and exciting journey in the tech industry. I've developed a broad range of skills across multiple technologies thanks to my strong foundation in computer science principles and my insatiable curiosity.            </p>
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