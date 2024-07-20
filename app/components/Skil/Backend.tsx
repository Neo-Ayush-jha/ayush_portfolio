import Image from 'next/image'
import React from 'react'
import { AiFillThunderbolt } from 'react-icons/ai'
import laravel from "@/public/Skill/laravel.png"
import restAPI from "@/public/Skill/rest-removebg-preview.png"
import fastAPI from "@/public/Skill/fast-removebg-preview.png"
function Backend() {
    return (
        <div className='w-full h-90 rounded-lg bg-[#112240] p-7 flex flex-col justify-center gap-6 hover:-translate-y-2 transition-transform duration-300 group  '>
            <div className="flex flex-1 items-center justify-center text-xl text-center font-medium title-font mb-2"><span className='text-textGreen'><AiFillThunderbolt /></span>Backend</div>

            <div className="lg:grid  sm:flex sm:flex-wrap  xl:grid-cols-2 items-center justify-center">
                <div className="border border-textGreen xl:px-4 xl:py-2 px-[16px] py-1 rounded-lg shadow-lg xl:mx-2 xl:my-3 mx-2 my-2  flex flex-1 justify-between lg:h-[60px] items-center">
                    <Image src="https://cdn.worldvectorlogo.com/logos/django.svg" width="26" height="20" alt="Django" /><span className="ml-2 font-medium text-textGreen justify-items-end">Django</span>
                </div>
                <div className="border border-textGreen xl:px-4 xl:py-2 px-[16px] py-1 rounded-lg shadow-lg xl:mx-2 xl:my-3 mx-2 my-2  flex flex-1 justify-between lg:h-[60px] items-center">
                    <Image src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" width="28" height="28" alt="Node.js" /><span className="ml-2 font-medium text-textGreen">Node.js</span>
                </div>
                <div className="border border-textGreen xl:px-4 xl:py-2 px-[16px] py-1 rounded-lg shadow-lg xl:mx-2 xl:my-3 mx-2 my-2  flex flex-1 justify-between lg:h-[60px] items-center">
                    <Image src="https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg" width="26" height="26" alt="Php" /><span className="ml-2 font-medium text-textGreen">Php</span>
                </div>
                <div className="border border-textGreen xl:px-4 xl:py-2 px-[16px] py-1 rounded-lg shadow-lg xl:mx-2 xl:my-3 mx-2 my-2  flex flex-1 justify-between lg:h-[60px] items-center">
                    <Image src={laravel} width="26" height="26" alt="Laravel" /><span className="ml-2 font-medium text-textGreen">Laravel</span>
                </div>
                <div className="border border-textGreen xl:px-4 xl:py-2 px-[16px] py-1 rounded-lg shadow-lg xl:mx-2 xl:my-3 mx-2 my-2  flex flex-1 justify-between lg:h-[60px] items-center">
                    <Image src={restAPI} width="28" height="28" alt="RestAPI" /><span className=" font-medium text-textGreen">RestAPI</span>
                </div>
                <div className="border border-textGreen xl:px-4 xl:py-2 px-[16px] py-1 rounded-lg shadow-lg xl:mx-2 xl:my-3 mx-2 my-2  flex flex-1 justify-between lg:h-[60px] items-center">
                    <Image src={fastAPI} width="30" height="30" alt="FastAPI" /><span className=" font-medium text-textGreen">FastAPI</span>
                </div>
            </div>
        </div>

    )
}

export default Backend