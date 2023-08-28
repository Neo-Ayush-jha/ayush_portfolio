import React from 'react'
import SectionTitle from './SectionTitle'
import Link from 'next/link'
import { AiFillThunderbolt } from "react-icons/ai"
import Image from 'next/image'
import Profile from "@/public/ayush.png"
function About() {
    return (
        <section id='about' className='max-w-containerSmall mx-auto py-10 flex flex-col gap-8'>
            <SectionTitle title="About Me" title_no="01" />
            <div className='flex flex-col lgl:flex-row gap-16'>
                <div className='w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4'>
                    <p>
                        Hello there, I am Ayush Kumar, a dedicated web developer who has found his passion in transforming digital ideas into captivating online experiences. My journey began with a thirst for knowledge and a willingness to embrace challenges as stepping stones to growth. As someone who thrives on learning, I have navigated the complexities of programming, consistently pushing myself to grasp deeper concepts and refine my coding prowess.
                        My expertise lies in the full stack of technologies, including but not limited.Challenges have been my constant companions on this journey, and I have embraced them as opportunities for growth.
                    </p>
                    <p>
                        My early days in programming were shaped by the guidance of a remarkable teacher <Link href="www.codewithsadiq.com" className='text-textGreen'>(Code With SadiQ Instructor | Sadique Hussain)</Link>. Their mentorship not only helped me understand the intricacies of code but also encouraged me to explore the uncharted territories of web development. This foundation fueled my hunger for knowledge and gave me the confidence to tackle complex projects with enthusiasm.
                    </p>
                    <p>Here are a few technologies I have been learn and work with recently:</p>
                    <ul className='max-w-[450px] text-sm font-titleFont grid grid-cols-2 gap-2 mt-6'>
                        <li className='flex items-center gap-2'><span className='text-textGreen'><AiFillThunderbolt /></span>HTML(5)</li>
                        <li className='flex items-center gap-2'><span className='text-textGreen'><AiFillThunderbolt /></span>CSS(3)</li>
                        <li className='flex items-center gap-2'><span className='text-textGreen'><AiFillThunderbolt /></span>JS(ES6+)</li>
                        <li className='flex items-center gap-2'><span className='text-textGreen'><AiFillThunderbolt /></span>Next.js(13)</li>
                        <li className='flex items-center gap-2'><span className='text-textGreen'><AiFillThunderbolt /></span>Django</li>
                        <li className='flex items-center gap-2'><span className='text-textGreen'><AiFillThunderbolt /></span>Node.js</li>
                        <li className='flex items-center gap-2'><span className='text-textGreen'><AiFillThunderbolt /></span>MySql</li>
                        <li className='flex items-center gap-2'><span className='text-textGreen'><AiFillThunderbolt /></span>MongoDB</li>
                        <li className='flex items-center gap-2'><span className='text-textGreen'><AiFillThunderbolt /></span>Laravel</li>
                    </ul>
                </div>
                <div className='w-full lgl:w-1/3 h-80 relative group'>
                    <div className='absolute w-full h-80 -left-6 -top-6 rounded-lg'>
                        <div className='w-full h-full relative z-20 flex pl-6 lgl:pl-0'>
                            <Image src={Profile} className='rounded-lg max-h-full object-cover' alt="profile pic" />
                            <div className='hidden lgl:inline-block absolute w-full h-80 bg-textGreen/20 rounded-md top-0 left-0 group-hover:bg-transparent duration-300'></div>
                        </div>
                    </div>
                    <div className='hidden lgl:inline-flex w-full h-80 border-2 border-textGreen  rounded-md group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-300'></div>
                </div>
            </div>
        </section>
    )
}

export default About