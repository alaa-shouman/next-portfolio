"use client";
import Image from "next/image";
import Card from "../UI/Card";
import { sanityImageLoader } from "@/sanity/imageLoader";
import type { ResolvedImage } from "@/types/content";

export default function MeCard({
    pills,
    portrait,
}: {
    pills: string[];
    portrait?: ResolvedImage | null;
}) {
    return (
        <Card className="2xl:h-full">
            <div className="w-full h-[28rem] sm:h-[37.5rem] relative overflow-hidden">
                {/*background image*/}
                {portrait && (
                    <Image
                        loader={sanityImageLoader}
                        src={portrait.url}
                        alt="Alaa Shouman"
                        width={portrait.width}
                        height={portrait.height}
                        sizes="(max-width: 768px) 100vw, (max-width: 1536px) 50vw, 33vw"
                        placeholder={portrait.blurDataURL ? "blur" : undefined}
                        blurDataURL={portrait.blurDataURL}
                        className="absolute top-0 left-0 bottom-0 right-0 h-full w-full object-cover"
                    />
                )}
                <div className="absolute top-[50%] sm:top-[60%] left-0 right-0 px-4 space-y-1.5 sm:space-y-2 pb-4">
                    {pills.map((pill, index) => (
                        <div key={pill} className="bg-black/[0.7] w-fit py-1.5 px-3 rounded-full">
                            {index === 0 ? (
                                <p className="text-primary-foreground leading-[110%] font-bold">
                                    {pill}
                                </p>
                            ) : (
                                <p className="text-white text-sm font-medium">{pill}</p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </Card>
    );
}
