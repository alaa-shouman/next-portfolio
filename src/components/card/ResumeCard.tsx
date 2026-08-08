"use client";
import Card from '../UI/Card'
import Image from 'next/image'
import Button from '../UI/button'
import { FaDownload } from 'react-icons/fa'
import { sanityImageLoader } from '@/sanity/imageLoader'
import type { ResolvedImage } from '@/types/content'

const ResumeCard = ({
    intro,
    signature,
    resumeUrl,
}: {
    intro: string;
    signature?: ResolvedImage | null;
    resumeUrl?: string;
}) => {
    const handleDownloadResume = () => {
        if (!resumeUrl) return;
        const link = document.createElement('a');
        link.href = resumeUrl;
        link.download = 'Alaa_Shouman_Resume.pdf';
        link.click();
    };
    return (
        <Card className='md:h-full 2xl:h-fit'>
            <p className='text-lg xl:text-2xl font-md text-primary-foreground'>
                {intro}
            </p>
            <div className='mb-6'>
                {signature && (
                    <Image
                        loader={sanityImageLoader}
                        src={signature.url}
                        alt='Alaa Sh'
                        width={signature.width}
                        height={signature.height}
                    />
                )}
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
