import FeaturedCard from '@/components/card/FeaturedCard'
import Heading from '@/components/heading/Heading'
import { featuredData } from '@/data'
import React, { useState } from 'react'

const Featured = () => {
    const [activeCard, setActiveCard] = useState(1);

  return (
    <div className='pt-24 px-3 lg:px-8 '>
          <Heading
              number="01"
              title_1="Featured"
              title_2="Work"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredData.map((project, index) => (
                  <FeaturedCard
                      key={index}
                      logo={project.logo}
                      title={project.title}
                      tag={project.tag}
                      image={project.image}
                      video={project.video}
                      active={activeCard === index}
                      onClick={() => setActiveCard(index)}
                  />
              ))}
          </div>
    </div>
  )
}

export default Featured