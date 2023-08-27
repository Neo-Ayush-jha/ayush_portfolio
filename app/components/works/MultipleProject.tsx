import React from 'react'
import { motion } from 'framer-motion'
import { TiArrowForward } from "react-icons/ti"

function MultipleProject() {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} className='w-full' >
            <h3 className='flex gap-1 font-medium text-xl font-titleFont'>
                ATILLA <span className='text-textGreen tracking-wide'>TECHNOLOGY </span>
            </h3>
            <p className="text-sm mt-1 font-medium text-textDark">MAY 10, 2023 <span className='text-textGreen tracking-wide'>- </span>PRESENT</p>
            <ul className='mt-6 flex flex-col gap-3'>
                <li className='text-base flex gap-2 text-textDark'>
                    <span className="text-textGreen mt-1 "><TiArrowForward /></span>MY ROLE IN THIS COMPANY IS TO BUILD WEB APPLICATION FOR WHICH I USE DJANGO AND JAVASCRIPT TECHNOLOGIES.
                </li>
                <li className='text-base flex gap-2 text-textDark'>
                    <span className="text-textGreen mt-1 "><TiArrowForward /></span>THIS ALSO INCLUDE INTEGRATING WITH THIRD-PARTY APIS LIKE GOOGLE. 
                </li>
            </ul>
        </motion.div>
    )
}
//  01.13.16
export default MultipleProject