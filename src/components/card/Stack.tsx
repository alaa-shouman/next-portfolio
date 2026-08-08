"use client";
import Card from '../UI/Card'
import Image from 'next/image'
import type { StackCategory } from '@/types/content'

const Stack = ({ categories }: { categories: StackCategory[] }) => {
    return (
        <Card title='My Tech Stack'>
            <div className='space-y-6'>
                {categories.map((category) => (
                    <div key={category.id} className='space-y-3'>
                        <h3 className='text-gray-400 text-sm font-medium uppercase tracking-wide'>
                            {category.title}
                        </h3>
                        <div className='flex flex-wrap gap-3'>
                            {category.technologies.map((item) => (
                                <div
                                    key={item.id}
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
