import React from 'react'
import { motion } from 'framer-motion'
import { TiArrowForward } from "react-icons/ti"

function ATG() {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} className='w-full ml-4 ' >
            <h3 className='flex gap-1 font-medium text-xl font-titleFont'>
                ACCROSS THE GLOBE ,<span className='text-textGreen tracking-wide'>BANAO </span>
            </h3>
            <p className="text-sm mt-1 font-medium text-textDark">AUGUST, 2023 <span className='text-textGreen tracking-wide'>- </span>MARCH, 2024</p>
            <ul className='ml-4  mt-6 flex flex-col gap-3'>
                <li className=' flex flex-col lgl:flex-row gap-2 text-textDark'>
                    {/* <span className="text-textGreen mt-1 "><TiArrowForward /></span> Backend Development and API Integration: */}
                    <ul className='ml-4  mt-2 list-disc text-sm'>
                        <li><span className="text-textGreen mt-1 ">Backend Development and API Integration: </span>Leveraged Django 4.2.6 to develop and maintain high-performance backend services for web applications.</li>
                        <li>Created and managed RESTful APIs using Django Rest Framework (DRF) 3.14.0, ensuring efficient data exchange between frontend and backend.</li>
                    </ul>
                </li>
                <li className='flex flex-col lgl:flex-row text-base  gap-2 text-textDark'>
                    {/* <span className=" mt-1 text-textGreen"><TiArrowForward /></span> Authentication and Security: */}
                    <ul className='ml-4  mt-2 list-disc text-sm'>
                        <li><span className="text-textGreen mt-1 ">Authentication and Security: </span>Implemented secure user authentication and authorization with djangorestframework-simplejwt 5.3.0, enhancing application security.</li>
                        <li>Integrated Google Sign-In for a seamless login experience, enhancing user authentication using OAuth 2.0 protocols.</li>
                    </ul>
                </li>
                <li className='flex flex-col lgl:flex-row text-base  gap-2 text-textDark'>
                    {/* <span className="text-textGreen mt-1 "><TiArrowForward /></span> AWS Integration and Cloud Management: */}
                    <ul className='ml-4  mt-2 list-disc text-sm'>
                        <li><span className="text-textGreen mt-1 ">AWS Integration and Cloud Management: </span>Utilized AWS services with boto3 1.34.39 and botocore 1.34.39 for efficient cloud storage solutions, managing static and media files using django-storages 1.14.2.</li>
                    </ul>
                </li>
                <li className='flex flex-col lgl:flex-row text-base gap-2 text-textDark '>
                    {/* <span className="text-textGreen mt-1"><TiArrowForward /></span> Database Management and Optimization: */}
                    <ul className='ml-4  mt-2 list-disc text-sm'>
                        <li><span className="text-textGreen mt-1">Database Management and Optimization: </span> Managed and optimized MySQL and PostgreSQL databases using mysqlclient 2.2.0 and psycopg2 2.9.9, ensuring robust data handling and query performance.</li>
                    </ul>
                </li>
                <li className='flex flex-col lgl:flex-row text-base gap-2 text-textDark'>
                    {/* <span className="text-textGreen mt-1"><TiArrowForward /></span> Configuration and Environment Management: */}
                    <ul className='ml-4  mt-2 list-disc text-sm'>
                        <li><span className="text-textGreen mt-1">Configuration and Environment Management: </span>Streamlined configuration management with django-environ 0.11.2 and python-decouple 3.8, ensuring secure handling of environment variables across different deployment stages.</li>
                    </ul>
                </li>
            </ul>
        </motion.div>
    )
}
export default ATG
