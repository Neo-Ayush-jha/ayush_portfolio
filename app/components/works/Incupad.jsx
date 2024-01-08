import React from 'react'
import { motion } from 'framer-motion'
import { TiArrowForward } from "react-icons/ti"
function Incupad() {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} className='w-full' >
            <h3 className='flex gap-1 font-medium text-xl font-titleFont'>
            INCUPAD INDIA<span className='text-textGreen tracking-wide'>Pvt. Ltd. </span>
            </h3>
            <p className="text-sm mt-1 font-medium text-textDark">DEC 12, 2023 <span className='text-textGreen tracking-wide'>- </span>PRESENT</p>
            <ul className='mt-6 flex flex-col gap-3'>
                <li className='text-base flex gap-2 text-textDark'>
                    <span className="text-textGreen mt-1 "><TiArrowForward /></span>MY ROLE IN THIS COMPANY INVOLVES HANDLING REST API DEVELOPMENT, INCLUDING ENDPOINTS, AUTHENTICATION, AND DATA MANIPULATION
                </li>
                <li className='text-base flex gap-2 text-textDark'>
                    <span className="text-textGreen mt-1 "><TiArrowForward /></span>REACT.JS IMPLEMENTATIONS, AND TAILWIND CSS STYLING TO CREATE DYNAMIC AND RESPONSIVE WEB APPLICATIONS.</li>
            </ul>
        </motion.div>
    )
}

export default Incupad