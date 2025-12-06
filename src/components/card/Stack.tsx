"use client";
import Card from '../UI/Card'
import { stackData } from '@/data/stack'
import Image from 'next/image'

const Stack = () => {
    return (
        <Card title='My Tech Stack'>
            <div className='space-y-6'>
                {stackData.map((category, categoryIndex) => (
                    <div key={categoryIndex} className='space-y-3'>
                        <h3 className='text-gray-400 text-sm font-medium uppercase tracking-wide'>
                            {category.category}
                        </h3>
                        <div className='flex flex-wrap gap-3'>
                            {category.items.map((item, itemIndex) => (
                                <div
                                    key={itemIndex}
                                    className='flex items-center justify-center w-12 h-12 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors group cursor-pointer'
                                    title={item.name}
                                >
                                    <Image
                                        src={item.icon}
                                        alt={item.name}
                                        className='w-8 h-8 group-hover:scale-110 transition-transform'
                                        width={32}
                                        height={32}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </Card>
    )
}

export default Stack