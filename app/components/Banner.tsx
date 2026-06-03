import React from 'react'
import { motion } from "framer-motion";
import Link from 'next/link';
import Image from 'next/image';
// import SrcPro from "@/public/proj/src.svg"
import Profile from "@/public/ayush.png"

import Typewriter from 'typewriter-effect';
function Banner() {
  return (
    <>
      <section id='home' className='max-w-container mx-auto lgl:px-20 pt-10 mdl:pt-8 mdl:pb-24 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4'>
        <motion.div className="flex flex-col lg:flex-row items-center lg:w-4/5 mx-auto  ">
          <div className="lg:w-7/10 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
            <motion.h3 initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.6 }} className='text-2xl font-titleFont tracking-wide text-textGreen'><Typewriter
              options={{
                strings: [
                  'Hi, my name is',
                ],
                autoStart: true,
                loop: true,
              }}
            /> </motion.h3>
            <motion.h1 initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.7 }} className='text-4xl lgl:text-6xl font-semibold font-titleFont  flex flex-col'>Ayush kumar. <span className='text-textDark mt-2 lgl:mt-4'>I build things for the web.</span></motion.h1>
            <motion.p initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.8 }} className='text-base md:max-w-[650px] text-textDark font-medium '>I&apos;m a Full Stack Developer passionate about creating modern, high-performance web applications using React.js, Next.js, Django, Node.js, and Laravel. With hands-on experience in developing AI-powered solutions, REST APIs, and production-ready platforms, I enjoy transforming complex ideas into intuitive and impactful digital products.

              Currently pursuing my MCA while working on real-world projects, I continuously explore new technologies and best practices to build secure, scalable, and user-focused applications.
              <Link href="#about" >
                <span className='text-textGreen inline-flex relative cursor-pointer h-7 overflow-x-hidden group '>
                  Learn More
                  <span className='absolute w-full h-[1px] bg-textGreen left-0 bottom-1 -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500'></span>
                </span>
              </Link>
            </motion.p>
            <motion.button initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.9 }} className='w-52 h-14 text-sm font-titleFont border border-textGreen rounded-md text-textGreen tracking-wide hover:bg-hoverColor duration-300  mt-10'><Link href="https://github.com/Neo-Ayush-jha" target='_blank'>Check out my Projects!</Link></motion.button>
          </div>
          <motion.div className="lg:w-3/10 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0 flex justify-center lg:justify-end" initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.8 }}>
            {/* <Image src={SrcPro} alt="Ayush" className="rounded-md w-full lg:h-auto object-cover object-center" /> */}

            <div className='group relative w-full max-w-[420px] pb-6 pr-6'>
              <div className='absolute inset-0 translate-x-6 translate-y-6 rounded-[18px] border-2 border-textGreen/90 transition-transform duration-300 group-hover:translate-x-4 group-hover:translate-y-4'></div>
              <div className='relative z-10 overflow-hidden rounded-[18px] bg-[#dff7f4] p-4 shadow-[0_18px_45px_rgba(2,12,27,0.28)] sm:p-5'>
                <div className='overflow-hidden rounded-full bg-white shadow-[0_0_0_10px_rgba(255,255,255,0.3),0_18px_40px_rgba(100,255,218,0.14)]'>
                  <Image
                    src={Profile}
                    className='h-auto w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]'
                    alt="Ayush Kumar profile illustration"
                    priority
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </>
  )
}
export default Banner
