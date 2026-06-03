import React from 'react'
import SectionTitle from './SectionTitle'
import Link from 'next/link'
import { AiFillThunderbolt } from "react-icons/ai"
import Image from 'next/image'
// import Profile from "@/public/ayush.png"
import SrcPro from "@/public/proj/src.svg"

function About() {
    return (
        <section id='about' className='max-w-containerSmall mx-auto py-10 flex flex-col gap-8'>
            <SectionTitle title="About Me" title_no="01" />
            <div className='flex flex-col lgl:flex-row gap-16'>
                <div className='w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4'>
                    <p>
                        Hello! I&apos;m Ayush Kumar, a Full Stack Developer with a strong passion for web technologies and problem-solving.

                        My journey in software development started with curiosity and evolved into a commitment to building meaningful digital solutions. Over the years, I have worked with technologies such as React.js, Next.js, Django, Node.js, Laravel, PostgreSQL, MongoDB, and modern cloud deployment platforms.

                        I have contributed to AI-powered applications, learning management systems, freelance marketplaces, and enterprise web solutions. These experiences have strengthened my ability to design efficient architectures, develop scalable APIs, and create responsive user interfaces that deliver exceptional user experiences.
                    </p>
                    <p>
                        I believe that every challenge is an opportunity to learn, improve, and innovate. Whether it&apos;s optimizing application performance, integrating complex APIs, or developing full-stack solutions from scratch, I enjoy turning ideas into reliable and impactful products.

                        When I&apos;m not coding, you&apos;ll find me exploring emerging technologies, contributing to personal projects, and continuously expanding my knowledge to stay ahead in the ever-evolving world of software development.
                    </p>
                </div>
                <div className='w-full lgl:w-1/3 h-80 relative group'>
                    <div className='absolute w-full h-80 -left-6 -top-6 rounded-lg'>
                        <Image src={SrcPro} alt="Ayush" className="rounded-md w-full lg:h-auto object-cover object-center" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
