import React, { useEffect, useState } from 'react'
import SectionTitle from './SectionTitle'
import Image from 'next/image'
import { motion } from "framer-motion";
import Profile from "@/public/proj/skill.svg"
import Frontend from './Skil/Frontend'
import Backend from './Skil/Backend'
import DataBase from './Skil/DataBase'
import Other from './Skil/Other'

function Skils() {
    const [isLargeScreen, setIsLargeScreen] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsLargeScreen(window.innerWidth >= 1024);
            setIsSmallScreen(window.innerWidth >= 640 && window.innerWidth < 1024);
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <section id='skills' className='max-w-containerSmall mx-auto py-10 flex flex-col gap-8'>
            <SectionTitle title="My Skills" title_no="02" />
            <div className="flex flex-col">
                <div className='flex flex-col lgl:flex-row '>
                    <div className='w-full lgl:w-1/2 h-100 relative group '>
                        <motion.div className="lg:w-3/10 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0 lg:h-[500px] " initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.8 }}>
                            <Image src={Profile} alt="Ayush" className="rounded-md w-full h-full object-cover object-center py-0 my-0" />
                        </motion.div>
                    </div>
                    <div className='w-full lgl:w-1/2 text-base text-textDark font-medium flex flex-col gap-8 sm:mb-[50px]'>
                        <div className='flex flex-col lgl:flex-col gap-8'>
                            <div className='w-full text-base text-textDark font-medium flex flex-col'>
                                <p>Here are a few technologies I have been learning and working with recently:</p>
                            </div>
                            <Frontend />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col lgl:flex-row w-full h-100 relative group gap-8 sm:mt-[50px]">
                    <Backend />
                    <DataBase />
                    <Other />
                </div>
            </div>
        </section >
    )
}

export default Skils;
