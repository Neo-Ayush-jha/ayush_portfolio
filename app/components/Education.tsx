import React from 'react'
import SectionTitle from './SectionTitle'
import Link from 'next/link'
import { AiFillThunderbolt } from "react-icons/ai"
import Image from 'next/image'
import { motion } from "framer-motion";
import Profile from "@/public/proj/edu.svg"
function Education() {
    return (
        <section id='Education' className='max-w-containerSmall mx-auto py-10 flex flex-col gap-8'>
            <SectionTitle title="My Education" title_no="03" />
            <div className='flex flex-col lgl:flex-row gap-16'>
                <div className='w-full lg:w-3/4 text-base text-textDark font-medium flex flex-col gap-4'>
                    <div className='flex flex-col lgl:flex-row gap-16'>
                        <div className='w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4'>
                            <ul className='w-full text-sm font-titleFont grid grid-cols-1 gap-2 mt-6'>
                                <li className='flex items-center gap-2'><span className='text-textGreen'><AiFillThunderbolt /></span><span className='text-textGreen'>UPPER PRIMARY (X)</span><span className='ms-12'>BIJENDRA PUBLIC SCHOOL, 2017-18</span><span className='text-textGreen'>CGPA: 7</span></li><br />

                                <li className='flex items-center gap-2'><span className='text-textGreen'><AiFillThunderbolt /></span><span className='text-textGreen'>SENIOR SECONDARY (XII PCM)</span> (BSEB)BBM HIGH SCHOOL, 2018-2020<br /><span className='text-textGreen'>CGPA: 7.9</span></li><br />

                                <li className='flex items-center gap-2'><span className='text-textGreen'><AiFillThunderbolt /></span><span className='text-textGreen'>GRADUATION (BCA)</span><span className='ms-12'> PURNEA UNIVERSITY, 2020-2023</span><span className='text-textGreen'>TOTAL FINAL PERCENT: 8</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='w-full lg:w-1/4 h-full relative group'>
                    <motion.div className="lg:py-6 mb-6 lg:mb-0" initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.8 }}>
                        <Image src={Profile} alt="Ayush" className="rounded-md w-full lg:h-full h-full object-cover object-center lg:max-w-[450px]" />
                    </motion.div>
                </div>

            </div>
        </section>
    )
}

export default Education
