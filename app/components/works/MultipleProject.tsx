import React from 'react'
import { motion } from 'framer-motion'
import { TiArrowForward } from "react-icons/ti"

function MultipleProject() {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} className='w-full' >
            <h3 className='flex gap-1 font-medium text-xl font-titleFont'>
                ATILLA <span className='text-textGreen tracking-wide'>TECHNOLOGY </span>
            </h3>
            <p className="text-sm mt-1 font-medium text-textDark">MAY 10, 2023 <span className='text-textGreen tracking-wide'>- </span>NOV 10, 2023</p>
            <ul className='mt-6 flex flex-col gap-3 text-sm'>
                <li className='text-base flex gap-2 text-textDark'>
                    <span className="text-textGreen mt-1 text-textGreen"><TiArrowForward /></span>Backend Web Application Development:
                    <ul className='ml-4 mt-2 list-disc text-sm '>
                        <li>Specialized in backend development using Django, PHP Laravel, and JavaScript technologies to build robust and scalable web applications.</li>
                        <li>Demonstrated proficiency in designing and implementing backend functionalities, ensuring high performance and reliability.</li>
                    </ul>
                </li>
                <li className='text-base flex gap-2 text-textDark'>
                    <span className="text-textGreen mt-1 text-textGreen"><TiArrowForward /></span>Integration with Third-Party APIs:
                    <ul className='ml-4 mt-2 list-disc text-sm '>
                        <li>Successfully integrated third-party APIs such as Google and Razorpay for online payment processing, enhancing the functionality and usability of web applications.</li>
                        <li>Developed secure and seamless payment solutions, ensuring smooth transaction processing and user experience.</li>
                    </ul>
                </li>
                <li className='text-base flex gap-2 text-textDark'>
                    <span className="text-textGreen mt-1 text-textGreen"><TiArrowForward /></span>Cross-Functional Collaboration:
                    <ul className='ml-4 mt-2 list-disc text-sm '>
                        <li>Collaborated closely with frontend developers, project managers, and stakeholders to understand project requirements and deliver solutions that meet business objectives.</li>
                        <li>Acted as a key contributor in cross-functional teams, facilitating effective communication and problem-solving to achieve project milestones.</li>
                    </ul>
                </li>
            </ul>
        </motion.div>
    )
}

export default MultipleProject
