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
            <div className='flex flex-col lgl:flex-row gap-6'>
                <div className='w-full lg:w-3/4 text-base text-textDark font-medium flex flex-col gap-4'>
                    <div className='flex flex-col lgl:flex-row gap-6'>
                        <div className='w-full lgl:w-11/12 text-base text-textDark font-medium flex flex-col'>
                            <table className='w-full text-sm font-titleFont mt-6 border border-textGreen rounded-md'>
                                <thead>
                                    <tr>
                                        <th className='px-1 py-3 text-textGreen border-r border-textGreen'>Class/Standard</th>
                                        <th className='px-1 py-3 border-r border-textGreen'>School/University</th>
                                        <th className='px-1 py-3 text-textGreen border-r border-textGreen'>Year</th>
                                        <th className='px-1 py-3 '>Marks</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className='border border-textGreen'>
                                        <td className='px-1 flex flex-1 gap-2 py-3 border-r border-textGreen  items-center'>
                                            <span className='text-textGreen'><AiFillThunderbolt /></span>
                                            <span className='text-textGreen '>UPPER PRIMARY <span className=' ps-3'>(X)</span></span>
                                        </td>
                                        <td className='px-1 py-3 border-r border-textGreen'>BIJENDRA PUBLIC SCHOOL</td>
                                        <td className='px-1 py-3 border-r border-textGreen'>
                                            <span className='text-textGreen'>2017-2018</span>
                                        </td>
                                        <td className='px-1 py-3 '>
                                            <span>65%</span>
                                        </td>
                                    </tr>
                                    <tr className='border border-textGreen'>
                                        <td className='px-1 flex flex-1 gap-2 py-3   items-center border-r border-textGreen'>
                                            <span className='text-textGreen'><AiFillThunderbolt /></span>
                                            <span className='text-textGreen'>SENIOR SECONDARY (XII PCM)</span>
                                        </td>
                                        <td className='px-1 py-3 border-r border-textGreen'>
                                            BBM HIGH SCHOOL
                                        </td>
                                        <td className='px-1 py-3 border-r border-textGreen'>
                                            <span className='text-textGreen'>2018-2020</span>
                                        </td>
                                        <td className='px-1 py-3 '>
                                            <span>75%</span>
                                        </td>
                                    </tr>
                                    <tr className='border border-textGreen'>
                                        <td className='px-1 flex flex-1 gap-2 py-3   items-center border-r border-textGreen'>
                                            <span className='text-textGreen'><AiFillThunderbolt /></span>
                                            <span className='text-textGreen'>Bachelor of Computer Applications</span>
                                        </td>
                                        <td className='px-1 py-3 border-r border-textGreen'>PURNIA UNIVERSITY</td>
                                        <td className='px-1 py-3 border-r border-textGreen'>
                                            <span className='text-textGreen'>2020-2023</span>
                                        </td>
                                        <td className='px-1 py-3 '>
                                            <span>79%</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='px-1 flex flex-1 gap-2 py-3 items-center border-r border-textGreen'>
                                            <span className='text-textGreen'><AiFillThunderbolt /></span>
                                            <span className='text-textGreen py-2'>Master of Computer Applications</span>
                                        </td>
                                        <td className='px-1 py-3 border-r border-textGreen'>LOVELY PROFESSIONAL UNIVERSITY</td>
                                        <td className='px-1 py-3 border-r border-textGreen'>
                                            <span className='text-textGreen'>2024-2026</span>
                                        </td>
                                        <td className='px-1 py-3 '>
                                            <span>8.1</span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                            

                        </div>
                    </div>
                </div>
                <div className='w-full lg:w-1/4 h-full relative group'>
                    <motion.div className="lg:py-6 mb-6 lg:mb-0" initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.8 }}>
                        <Image src={Profile} alt="Ayush" className="rounded-md w-full lg:h-full h-full object-cover object-center lg:max-w-[450px]" />
                    </motion.div>
                </div>

            </div>
        </section >
    )
}

export default Education
