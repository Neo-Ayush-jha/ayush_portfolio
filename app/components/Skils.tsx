import React from 'react'
import SectionTitle from './SectionTitle'
import Link from 'next/link'
import { AiFillThunderbolt } from "react-icons/ai"
import Image from 'next/image'
import { motion } from "framer-motion";
import Profile from "@/public/proj/skill.svg"
import Frontend from './Skil/Frontend'
import Backend from './Skil/Backend'
import DataBase from './Skil/DataBase'
import Other from './Skil/Other'
function Skils() {
    return (
        <section id='skills' className='max-w-containerSmall mx-auto py-10 flex flex-col gap-8'>
            <SectionTitle title="My Skills" title_no="02" />
            <div className='flex flex-col lgl:flex-row gap-16'>
                <div className='w-full lgl:w-1/3 h-100 relative group'>
                    <motion.div className="lg:w-3/10 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0" initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.8 }}>
                        <Image src={Profile} alt="Ayush" className="rounded-md w-full lg:h-auto h-full object-cover object-center " />
                    </motion.div>
                </div>
                <div className='w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4'>
                    <div className='flex flex-col lgl:flex-row gap-16'>
                        <div className='w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4'>
                            <p>Here are a few technologies I have been learn and work with recently:</p>
                            <Frontend />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col lgl:flex-row w-full h-100 relative group gap-8">
                <Backend />
                <DataBase />
                <Other />
            </div>
        </section >
    )
}

export default Skils