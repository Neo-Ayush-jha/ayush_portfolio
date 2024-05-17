import Image from 'next/image'
import React from 'react'
import html from "@/public/Skill/html.png"
import { AiFillThunderbolt } from "react-icons/ai"

function Frontend() {
    return (
        <div className='border border-textGreen p-6 rounded-lg shadow-lg'>
            <div className="flex flex-1 items-center justify-center text-xl text-center font-medium title-font mb-2"><span className='text-textGreen'><AiFillThunderbolt /></span>FrontEnd</div>

            <div className="flex flex-wrap justify-center">
                <div className="border border-gray-200 xl:px-4 xl:py-2 px-2 py-1 rounded-lg shadow-lg xl:mx-2 xl:my-3 mx-2 my-2  flex flex-wrap">
                    <Image src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" width="26" height="26" alt="" /><span className="ml-2 font-medium text-textGreen">HTML</span>
                </div>
                <div className="border border-gray-200 xl:px-4 xl:py-2 px-2 py-1 rounded-lg shadow-lg xl:mx-2 xl:my-3 mx-2 my-2  flex flex-wrap">
                    <Image src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" width="26" height="26" alt="" /><span className="ml-2 font-medium text-textGreen">CSS</span>
                </div>
                <div className="border border-gray-200 xl:px-4 xl:py-2 px-2 py-1 rounded-lg shadow-lg xl:mx-2 xl:my-3 mx-2 my-2  flex flex-wrap">
                    <Image src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-original-wordmark.svg" width="26" height="26" alt="" /><span className="ml-2 font-medium text-textGreen">BootStrap</span>
                </div>
                <div className="border border-gray-200 xl:px-4 xl:py-2 px-2 py-1 rounded-lg shadow-lg xl:mx-2 xl:my-3 mx-2 my-2  flex flex-wrap">
                    <Image src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" width="26" height="26" alt="" /><span className="ml-2 font-medium text-textGreen">Tailwind Css</span>
                </div>
                <div className="border border-gray-200 xl:px-4 xl:py-2 px-2 py-1 rounded-lg shadow-lg xl:mx-2 xl:my-3 mx-2 my-2  flex flex-wrap">
                    <Image src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" width="26" height="26" alt="" /><span className="ml-2 font-medium text-textGreen">JavaScript(ES6+)</span>
                </div>
                <div className="border border-gray-200 xl:px-4 xl:py-2 px-2 py-1 rounded-lg shadow-lg xl:mx-2 xl:my-3 mx-2 my-2  flex flex-wrap">
                    <Image src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" width="26" height="26" alt="" /><span className="ml-2 font-medium text-textGreen">React js</span>
                </div>
                <div className="border border-gray-200 xl:px-4 xl:py-2 px-2 py-1 rounded-lg shadow-lg xl:mx-2 xl:my-3 mx-2 my-2  flex flex-wrap">
                    <Image src="https://cdn.worldvectorlogo.com/logos/nextjs-2.svg" width="26" height="26" alt="" /><span className="ml-2 font-medium text-textGreen">Next js(13)</span>
                </div>
                <div className="border border-gray-200 xl:px-4 xl:py-2 px-2 py-1 rounded-lg shadow-lg xl:mx-2 xl:my-3 mx-2 my-2  flex flex-wrap">
                    <Image src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" width="26" height="26" alt="" /><span className="ml-2 font-medium text-textGreen">Typescript</span>
                </div>
               
            </div>
        </div>
    )
}

export default Frontend