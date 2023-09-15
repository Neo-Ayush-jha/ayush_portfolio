import React from 'react'
import { motion } from "framer-motion";
import Link from 'next/link';
import Image from 'next/image';
import SrcPro from "@/public/proj/src.svg"

function Banner() {
  return (
    <>
      <section id='home' className='max-w-container mx-auto lgl:px-20 mx-auto py-10 mdl:pt-8 mdl:pb-24 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4'>
        <motion.div className="flex flex-col lg:flex-row items-center lg:w-4/5 mx-auto  ">
          <div className="lg:w-7/10 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
            <motion.h3 initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.6 }} className='text-2xl font-titleFont tracking-wide text-textGreen'>Hi, my name is</motion.h3>
            <motion.h1 initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.7 }} className='text-4xl lgl:text-6xl font-semibold font-titleFont  flex flex-col'>Ayush kumar. <span className='text-textDark mt-2 lgl:mt-4'>I buil things for the web.</span></motion.h1>
            <motion.p initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.8 }} className='text-base md:max-w-[650px] text-textDark font-medium '>Hi, I am Ayush Kumar web developer. I am passionate about my work because I love what I do and learn from it. This passion of mine in the beginning of programming made me face many challenges everyday and it helped me to learn and understand it better. My teacher has played a huge role in my learning phase, he always help me to understand the code and he always push me in deeper and deeper concept to build my coding skills and enhance my knowledge.
              <Link href="https://simple-portfolio-neo-git-main-neo-ayush-jha.vercel.app/" target='_blank'>
                <span className='text-textGreen inline-flex relative cursor-pointer h-7 overflow-x-hidden group '>
                  Learn More
                  <span className='absolute w-full h-[1px] bg-textGreen left-0 bottom-1 -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500'></span>
                </span>
              </Link>
            </motion.p>
            <motion.button initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.9 }} className='w-52 h-14 text-sm font-titleFont border border-textGreen rounded-md text-textGreen tracking-wide hover:bg-hoverColor duration-300  mt-10'><Link href="#project" >Check out my Project!</Link></motion.button>
          </div>
          <motion.div className="lg:w-3/10 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0" initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.8 }}>
            <Image src={SrcPro} alt="Ayush" className="rounded-md w-full lg:h-auto h-full object-cover object-center rounded"/>
          </motion.div>
        </motion.div>
      </section>
    </>
  )
}

export default Banner