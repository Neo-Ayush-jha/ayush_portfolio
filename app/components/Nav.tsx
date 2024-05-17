'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import A from "../../public/a.png"
// import resume from "../../public/resume.pdf"
import Link from 'next/link'
import { motion } from "framer-motion";
import { MdOutlineClose } from "react-icons/md";

import { TbBrandGithub } from "react-icons/tb";
import { SlSocialTwitter } from "react-icons/sl";
import { SlSocialLinkedin, SlSocialFacebook, SlSocialInstagram, SlSocialGoogle } from "react-icons/sl";
function Nav() {
    const [showMenu, setShowMenu] = useState(false)
    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        setShowMenu(false)

    }
    return (
        <div className='w-full shadow-navbarShadow h-20 lg:h-[12vh] sticky top-0 z-50 bg-bodyColor px-4'>
            <div className="max-w-container h-full mx-auto py-1 px-18 font-titleFont flex items-center justify-between">
                <div className="img">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 4.5 }}
                    >
                        <Image src={A} alt='logo' className='w-14' />
                    </motion.div>
                </div>
                <div className="hidden mdl:inline-flex items-center gap-7">
                    <ul className='flex text-[13px] gap-7 '>
                        <Link href="#home" className='flex item-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link' onClick={handleScroll}>
                            <motion.li
                                initial={{ y: -10, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.1 }}
                            >
                                Home
                            </motion.li>
                        </Link>
                        <Link href="#about" className='flex item-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link' onClick={handleScroll}>
                            <motion.li
                                initial={{ y: -10, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.1, delay: 0.1 }}
                            >
                                <span className='text-textGreen'>01.</span>About
                            </motion.li>
                        </Link>
                        <Link href="#skills" className='flex item-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link' onClick={handleScroll}>
                            <motion.li
                                initial={{ y: -10, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.1, delay: 0.2 }}
                            >
                                <span className='text-textGreen'>02.</span>Skills
                            </motion.li>
                        </Link>
                        <Link href="#Education" className='flex item-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link' onClick={handleScroll}>
                            <motion.li
                                initial={{ y: -10, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.1, delay: 0.3 }}
                            >
                                <span className='text-textGreen'>03.</span>Education
                            </motion.li>
                        </Link>
                        <Link href="#experience" className='flex item-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link' onClick={handleScroll}>
                            <motion.li
                                initial={{ y: -10, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.1, delay: 0.4 }}
                            >
                                <span className='text-textGreen'>04.</span>Experience
                            </motion.li>
                        </Link>
                        <Link href="#project" className='flex item-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link' onClick={handleScroll}>
                            <motion.li
                                initial={{ y: -10, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.1, delay: 0.5 }}
                            >
                                <span className='text-textGreen'>05.</span>Project
                            </motion.li>
                        </Link>
                        <Link href="#contact" className='flex item-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link' onClick={handleScroll}>
                            <motion.li
                                initial={{ y: -10, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.1, delay: 0.6 }}
                            >
                                <span className='text-textGreen'>06.</span>Contact
                            </motion.li>
                        </Link>
                    </ul>
                    <Link href="/proj/AyushKumarResume.pdf" target='_blank'>
                        <motion.button initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.7 }}
                            className='px-4 py-2 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300'>
                            Resume
                        </motion.button>
                    </Link>
                </div>
                <div className='w-6 h-5 flex flex-col justify-between items-center mdl:hidden text-4xl text-textGreen cursor-pointer overflow-hidden group' onClick={() => setShowMenu(true)}>
                    <span className='w-full h-[2px] bg-textGreen inline-flex transform group-hover:translate-x-2 transitionn-all ease-in-out duration-300'></span>
                    <span className='w-full h-[2px] bg-textGreen inline-flex transform translate-x-3 group-hover:translate-x-0 transitionn-all ease-in-out duration-300'></span>
                    <span className='w-full h-[2px] bg-textGreen translate-x-1 inline-flex transform group-hover:translate-x-3 transitionn-all ease-in-out duration-300'></span>
                </div>
                {
                    showMenu && (
                        <div onClick={() => handleScroll} className='absolute mdl:hidden top-0 right-0 w-full h-screen bg-black bg-opacity-50 flex flex-col items-end'>
                            <motion.div initial={{ x: 20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.1 }} className='w-[80%] h-full overflow-y-scroll scrollbarHide bg-[#112240] flex flex-col items-center px-4 py-10 relative'>
                                <MdOutlineClose onClick={() => setShowMenu(false)} className="text-3xl text-textGreen cursor-pointer hover:text-red-500 absolute top-4 right-4" />
                                <div>
                                    <ul className='flex flex-col text-[25px] gap-7 '>
                                        <Link href="#home" className='flex item-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link' onClick={handleScroll}>
                                            <motion.li
                                                initial={{ x: 20, opacity: 0 }}
                                                animate={{ x: 0, opacity: 1 }}
                                                transition={{ duration: 0.1, delay: 0.1, ease: "easeIn" }}
                                            >
                                                Home
                                            </motion.li>
                                        </Link>
                                        <Link href="#about" className='flex item-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link' onClick={handleScroll}>
                                            <motion.li
                                                initial={{ x: 20, opacity: 0 }}
                                                animate={{ x: 0, opacity: 1 }}
                                                transition={{ duration: 0.2, delay: 0.2, ease: "easeIn" }}
                                            >
                                                <span className='text-textGreen'>01.</span>About
                                            </motion.li>
                                        </Link>
                                        <Link href="#skills" className='flex item-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link' onClick={handleScroll}>
                                            <motion.li
                                                initial={{ x: 20, opacity: 0 }}
                                                animate={{ x: 0, opacity: 1 }}
                                                transition={{ duration: 0.3, delay: 0.3, ease: "easeIn" }}
                                            >
                                                <span className='text-textGreen'>02.</span>Skill
                                            </motion.li>
                                        </Link>
                                        <Link href="#Education" className='flex item-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link' onClick={handleScroll}>
                                            <motion.li
                                                initial={{ x: 20, opacity: 0 }}
                                                animate={{ x: 0, opacity: 1 }}
                                                transition={{ duration: 0.4, delay: 0.4, ease: "easeIn" }}
                                            >
                                                <span className='text-textGreen'>03.</span>Education
                                            </motion.li>
                                        </Link>
                                        <Link href="#experience" className='flex item-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link' onClick={handleScroll}>
                                            <motion.li
                                                initial={{ x: 20, opacity: 0 }}
                                                animate={{ x: 0, opacity: 1 }}
                                                transition={{ duration: 0.5, delay: 0.5, ease: "easeIn" }}
                                            >
                                                <span className='text-textGreen'>04.</span>Experience
                                            </motion.li>
                                        </Link>
                                        <Link href="#project" className='flex item-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link' onClick={handleScroll}>
                                            <motion.li
                                                initial={{ x: 20, opacity: 0 }}
                                                animate={{ x: 0, opacity: 1 }}
                                                transition={{ duration: 0.6, delay: 0.6, ease: "easeIn" }}
                                            >
                                                <span className='text-textGreen'>05.</span>Project
                                            </motion.li>
                                        </Link>
                                        <Link href="#contact" className='flex item-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link' onClick={handleScroll}>
                                            <motion.li
                                                initial={{ x: 20, opacity: 0 }}
                                                animate={{ x: 0, opacity: 1 }}
                                                transition={{ duration: 0.7, delay: 0.7, ease: "easeIn" }}
                                            >
                                                <span className='text-textGreen'>06.</span>Contact
                                            </motion.li>
                                        </Link>
                                    </ul>
                                    <Link href="/proj/AyushKumarResume.pdf" target='_blank'>
                                        <motion.button initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ duration: 0.7, ease: "easeIn" }}
                                            className='w-32 h-10 rounded-md text-textGreen text-[25px]  border border-textGreen hover:bg-hoverColor duration-300 mt-20'>
                                            Resume
                                        </motion.button>
                                    </Link>

                                    <div className='flex xl:hidden items-center justify-center  w-full px-sm-12 py-6 gap-3'>
                                        <Link href="https://github.com/Neo-Ayush-jha" target="_blank">
                                            <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'><TbBrandGithub /></span>
                                        </Link>
                                        <Link href="https://www.linkedin.com/in/ayush-kumar-jha-273a99248" target="_blank">
                                            <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'><SlSocialLinkedin /></span>
                                        </Link>
                                        <Link href="https://www.instagram.com/__ay_ush__jha_/" target="_blank">
                                            <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'><SlSocialInstagram /></span>
                                        </Link>
                                        <Link href="https://twitter.com/AyushKu01110" target="_blank">
                                            <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'><SlSocialTwitter /></span>
                                        </Link>
                                        <Link href="https://www.facebook.com/ayushkumar.jha.3760" target="_blank">
                                            <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'><SlSocialFacebook /></span>
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Nav