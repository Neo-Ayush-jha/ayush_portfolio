import Image from 'next/image'
import React from 'react'
import { AiFillThunderbolt } from 'react-icons/ai'
import gitlab from "@/public/Skill/lab-removebg-preview.png"
import github from "@/public/Skill/git-removebg-preview.png"
function Other() {
    return (
        <div className='border border-textGreen p-6 rounded-lg shadow-lg'>
            <div className="flex flex-1 items-center justify-center text-xl text-center font-medium title-font mb-2"><span className='text-textGreen'><AiFillThunderbolt /></span>Other</div>
            <div className="flex flex-wrap justify-center">
                <div className="border border-gray-200 xl:px-4 xl:py-2 px-2 py-1 rounded-lg shadow-lg xl:mx-2 xl:my-3 mx-2 my-2  flex flex-wrap">
                    <Image src={github} width="26" height="26" alt="" /><span className="ml-2 font-medium text-textGreen">Github</span>
                </div>
                <div className="border border-gray-200 xl:px-4 xl:py-2 px-2 py-1 rounded-lg shadow-lg xl:mx-2 xl:my-3 mx-2 my-2  flex flex-wrap">
                    <Image src={gitlab} width="26" height="26" alt="" /><span className="ml-2 font-medium text-textGreen">Git Lab</span>
                </div>
                <div className="border border-gray-200 xl:px-4 xl:py-2 px-2 py-1 rounded-lg shadow-lg xl:mx-2 xl:my-3 mx-2 my-2  flex flex-wrap">
                    <Image src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" width="26" height="26" alt="" /><span className="ml-2 font-medium text-textGreen">Postman</span>
                </div>
                <div className="border border-gray-200 xl:px-4 xl:py-2 px-2 py-1 rounded-lg shadow-lg xl:mx-2 xl:my-3 mx-2 my-2  flex flex-wrap">
                    <Image src="https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg" width="26" height="26" alt="" /><span className="ml-2 font-medium text-textGreen">C</span>
                </div>
                <div className="border border-gray-200 xl:px-4 xl:py-2 px-2 py-1 rounded-lg shadow-lg xl:mx-2 xl:my-3 mx-2 my-2  flex flex-wrap">
                    <Image src="https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg" width="26" height="26" alt="" /><span className="ml-2 font-medium text-textGreen">C++</span>
                </div>
                <div className="border border-gray-200 xl:px-4 xl:py-2 px-2 py-1 rounded-lg shadow-lg xl:mx-2 xl:my-3 mx-2 my-2  flex flex-wrap">
                    <Image src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" width="26" height="26" alt="" /><span className="ml-2 font-medium text-textGreen">python</span>
                </div>
            </div>
        </div>
    )
}

export default Other