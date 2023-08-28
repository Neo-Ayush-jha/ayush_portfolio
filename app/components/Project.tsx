import React from 'react'
import SectionTitle from './SectionTitle'
import Image from 'next/image'
import Hospital from "@/public/proj/hos.png"
import School from "@/public/proj/school.png"
import Instagram from "@/public/proj/ins.png"
import Movie from "@/public/proj/mov.png"
import Link from 'next/link'
import {TbBrandGithub} from "react-icons/tb";
import {AiOutlineYoutube} from "react-icons/ai"
import {RxOpenInNewWindow} from "react-icons/rx"
function Project() {
    return (
        <section className='max-w-container mx-auto lgl:px-20 py-24' id="project">
            <SectionTitle title="Some Things I have Build" title_no="03" />
            <div className="w-full flex flex-col items-center jsutify-center gap-28 mt-10">
                <div className="flex flex-col xl:flex-row gap-6">
                    <Link href="https://github.com/Neo-Ayush-jha/hospital_management_system_backend-DJANGO" target='_blank' className='w-full xl:w-1/2 h-auto relative group '>
                        <div>
                            <Image src={Hospital} alt='Django hospital' className='w-full h-full object-contain rounded-md '/>
                        </div>
                    </Link>
                <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10">
                    <p className='font-titleFont text-textGreen text-sm tracking-wide'>Featured Project</p>
                    <h3 className='text-2xl font-bold'>Hospital Management System <span className="text-textGreen">| Web Application</span></h3>
                    <p className='bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md'>The Hospital Management System is a comprehensive web application designed to streamline the operations of a hospital or healthcare facility. This system provides different panels, including <span className='text-textGreen'>Patients, Doctors, Pharmacy, Pathology, Counter, Reception and Blood Bank</span> to efficiently manage various aspects of patient care and administration.</p>
                    <ul className='text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark'>
                        <li>HTML</li>
                        <li>Bootstrap</li>
                        <li>js</li>
                        <li>SQLite</li>
                        <li>Python</li>
                        <li>Django</li>
                    </ul>
                    <div className='text-2xl flex gap-4'>
                        <Link className='hover:text-textGreen duration-300' target='_blank' href="https://github.com/Neo-Ayush-jha/hospital_management_system_backend-DJANGO" ><TbBrandGithub/></Link>
                        <Link className='hover:text-red-300 text-red-300 duration-300' target='_blank' href="https://github.com/Neo-Ayush-jha/hospital_management_system_backend-DJANGO" ><AiOutlineYoutube/></Link>
                        <Link className='hover:text-red-300 text-red-300 duration-300' target='_blank' href="https://github.com/Neo-Ayush-jha/hospital_management_system_backend-DJANGO" ><RxOpenInNewWindow/></Link>
                    </div>
                </div>
                </div>
            </div>
            <div className="w-full flex flex-col items-center jsutify-center gap-28 mt-10">
                <div className="flex flex-col xl:flex-row-reverse gap-6">
                    <Link href="https://github.com/Neo-Ayush-jha/school_Management_System-node.js_express_mongoose_ejs" target='_blank' className='w-full xl:w-1/2 h-auto relative group '>
                        <div>
                            <Image src={School} alt='Django hospital' className='w-full h-full object-contain rounded-md '/>
                        </div>
                    </Link>
                <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-start text-right xl:-mr-16 z-10">
                    <p className='font-titleFont text-textGreen text-sm tracking-wide'>Featured Project</p>
                    <h3 className='text-2xl font-bold'>GuruKul-MahaVidiyaly| <span className="text-textGreen">| Web Application</span></h3>
                    <p className='bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md'>The School Management System is a comprehensive web application designed to streamline the operations of a school or study facility. This system provides different  <span className='text-textGreen'>Student, Teacher , Reception and Princpal</span> to efficiently manage various aspects of patient care and administration.</p>
                    <ul className='text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark'>
                        <li>Ejs</li>
                        <li>Bootstrap</li>
                        <li>js</li>
                        <li>MongoDB</li>
                        <li>Express</li>
                        <li>Node.js</li>
                    </ul>
                    <div className='text-2xl flex gap-4'>
                        <Link className='hover:text-textGreen duration-300' target='_blank' href="https://github.com/Neo-Ayush-jha/school_Management_System-node.js_express_mongoose_ejs" ><TbBrandGithub/></Link>
                        <Link className='hover:text-red-300 text-red-700 duration-300 ' target='_blank' href="https://github.com/Neo-Ayush-jha/school_Management_System-node.js_express_mongoose_ejs" ><AiOutlineYoutube/></Link>
                        <Link className='hover:text-red-300 text-red-700 duration-300 ' target='_blank' href="https://github.com/Neo-Ayush-jha/school_Management_System-node.js_express_mongoose_ejs" ><RxOpenInNewWindow/></Link>
                    </div>
                </div>
                </div>
            </div>
            <div className="w-full flex flex-col items-center jsutify-center gap-28 mt-10">
                <div className="flex flex-col xl:flex-row gap-6">
                    <Link href="https://github.com/Neo-Ayush-jha/instagram" target='_blank' className='w-full xl:w-1/2 relative group '>
                        <div>
                            <Image src={Instagram} alt='Instagram' style={{height:"530px"}} className='w-full object-contain rounded-md '/>
                        </div>
                    </Link>
                <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10">
                    <p className='font-titleFont text-textGreen text-sm tracking-wide'>Featured Project</p>
                    <h3 className='text-2xl font-bold'>Instagram | <span className="text-textGreen">| Web Application</span></h3>
                    <p className='bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md'>"Crafting captivating digital worlds ✨: Building dynamic web experiences with React.js and Firebase backend. Elevating design with MUI to create seamless, visually stunning interfaces. Join me on a journey of innovation and user-centric web development! 🚀 <span className='text-textGreen'>Login and Singup</span></p>
                    <ul className='text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark'>
                        <li>Html</li>
                        <li>MUI</li>
                        <li>js</li>
                        <li>Firebase</li>
                        <li>React.js</li>
                    </ul>
                    <div className='text-2xl flex gap-4'>
                        <Link className='hover:text-textGreen duration-300' target='_blank' href="https://github.com/Neo-Ayush-jha/school_Management_System-node.js_express_mongoose_ejs" ><TbBrandGithub/></Link>
                        <Link className='hover:text-red-300 text-red-700 duration-300 ' target='_blank' href="https://github.com/Neo-Ayush-jha/school_Management_System-node.js_express_mongoose_ejs" ><AiOutlineYoutube/></Link>
                        <Link className='hover:text-textGreen duration-300 ' target='_blank' href="https://classy-brioche-4ca113.netlify.app/" ><RxOpenInNewWindow/></Link>
                    </div>
                </div>
                </div>
            </div>
            <div className="w-full flex flex-col items-center jsutify-center gap-28 mt-10">
                <div className="flex flex-col xl:flex-row-reverse gap-6">
                    <Link href="https://github.com/Neo-Ayush-jha/movi-finder-next.js" target='_blank' className='w-full xl:w-1/2 relative group '>
                        <div>
                            <Image src={Movie} alt='Instagram' style={{height:"530px"}} className='w-full h-full object-contain rounded-md'/>
                        </div>
                    </Link>
                <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-start text-right xl:-mr-16 z-10">
                    <p className='font-titleFont text-textGreen text-sm tracking-wide'>Featured Project</p>
                    <h3 className='text-2xl font-bold'>Movie Finder <span className="text-textGreen">| Web Application</span></h3>
                    <p className='bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md'>"Unveiling MovieFind: Your Ultimate Netflix Companion 🎬🍿. Powered by Next.js for lightning-fast performance, adorned with Tailwind CSS for sleek design. Immerse yourself in the world of cinema with intuitive navigation and real-time search."<br/><span className='text-textGreen'>Login and Singup</span></p>
                    <ul className='text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark'>
                        <li>Html</li>
                        <li>Tailwind.cdd</li>
                        <li>js</li>
                        <li>MongoDb</li>
                        <li>Next.js</li>
                    </ul>
                    <div className='text-2xl flex gap-4'>
                        <Link className='hover:text-textGreen duration-300' target='_blank' href="https://github.com/Neo-Ayush-jha/movi-finder-next.js" ><TbBrandGithub/></Link>
                        <Link className='hover:text-red-300 text-red-700 duration-300 ' target='_blank' href="" ><AiOutlineYoutube/></Link>
                        <Link className='hover:text-textGreen duration-300 ' target='_blank' href="https://movi-finder-next-pbk26gr7k-neo-ayush-jha.vercel.app/" ><RxOpenInNewWindow/></Link>
                    </div>
                </div>
                </div>
            </div>
        </section>
    )
}

export default Project