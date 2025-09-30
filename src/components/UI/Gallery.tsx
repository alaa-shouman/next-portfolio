"use client";
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import Image from 'next/image'
import { galleryImages } from '@/data/gallery'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

const Gallery = () => {
  return (
    <div className="h-[40rem] sm:h-[40rem] md:h-[100rem]  w-full">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        className="mySwiper rounded-2xl h-full w-full"
        loop={true}
      >
        {galleryImages.map((image, index) => (
          <SwiperSlide key={image.id || index}>
            <div className="relative w-full h-full">
              <Image
                src={image.img}
                alt={`Gallery image ${index + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority={index === 0}
                onError={(e) => {
                  console.error('Image failed to load:', image.img);
                  e.currentTarget.src = '/assets/images/placeholder.jpg'; // Add a fallback
                }}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Gallery