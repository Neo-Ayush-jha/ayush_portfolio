import React from 'react'
import { motion } from 'framer-motion'
import { TiArrowForward } from "react-icons/ti"

function ATG() {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} className='w-full' >
            <h3 className='flex gap-1 font-medium text-xl font-titleFont'>
                ACCROSS THE GLOBE ,<span className='text-textGreen tracking-wide'>BANAO </span>
            </h3>
            <p className="text-sm mt-1 font-medium text-textDark">SEP 18, 2023 <span className='text-textGreen tracking-wide'>- </span>PRESENT</p>
            <ul className='mt-6 flex flex-col gap-3'>
                <li className='text-base flex gap-2 text-textDark'>
                    <span className="text-textGreen mt-1 "><TiArrowForward /></span>I AM LEARNING A MULTITUDE OF DESIGN PRINCIPLES AND UTILIZING NUMEROUS ADVANCED FEATURES IN MY THIS INTERNSHIP. GO TO CONSTRUCT A PROJECT WITH ENHANCED FUNCTIONALIY AND MY KNOWLEDGE LEVEL
                </li>
                <li className='text-base flex gap-2 text-textDark'>
                    <span className="text-textGreen mt-1 "><TiArrowForward /></span>THIS ALSO INCLUDE INTEGRATING WITH THIRD-PARTY APIS LIKE GOOGLE.
                </li>
            </ul>
        </motion.div>
    )
}
//  01.13.16
export default ATG