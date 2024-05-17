import Image from 'next/image'
import React from 'react'
import { AiFillThunderbolt } from 'react-icons/ai'
import laravel from "@/public/Skill/laravel.png"
import restAPI from "@/public/Skill/rest-removebg-preview.png"
import fastAPI from "@/public/Skill/fast-removebg-preview.png"
function Backend() {
    return (
        <div className='border border-textGreen p-6 rounded-lg shadow-lg'>
            <div className="flex flex-1 items-center justify-center text-xl text-center font-medium title-font mb-2"><span className='text-textGreen'><AiFillThunderbolt /></span>BackEnd</div>
            <div className="flex flex-wrap justify-center">
                <div className="border border-gray-200 xl:px-4 xl:py-2 px-2 py-1 rounded-lg shadow-lg xl:mx-2 xl:my-3 mx-2 my-2  flex flex-wrap">
                    <Image src="https://cdn.worldvectorlogo.com/logos/django.svg" width="26" height="26" alt="" /><span className="ml-2 font-medium text-textGreen">Django</span>
                </div>
                <div className="border border-gray-200 xl:px-4 xl:py-2 px-2 py-1 rounded-lg shadow-lg xl:mx-2 xl:my-3 mx-2 my-2  flex flex-wrap">
                    <Image src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" width="28" height="28" alt="" /><span className="ml-2 font-medium text-textGreen">Node.js</span>
                </div>
                <div className="border border-gray-200 xl:px-4 xl:py-2 px-2 py-1 rounded-lg shadow-lg xl:mx-2 xl:my-3 mx-2 my-2  flex flex-wrap">
                    <Image src="https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg" width="26" height="26" alt="" /><span className="ml-2 font-medium text-textGreen">Php</span>
                </div>
                <div className="border border-gray-200 xl:px-4 xl:py-2 px-2 py-1 rounded-lg shadow-lg xl:mx-2 xl:my-3 mx-2 my-2  flex flex-wrap">
                    <Image src={laravel} width="26" height="26" alt="" /><span className="ml-2 font-medium text-textGreen">Laravel</span>
                </div>
                <div className="border border-gray-200 xl:px-4 xl:py-2 px-2 py-1 rounded-lg shadow-lg xl:mx-2 xl:my-3 mx-2 my-2  flex flex-wrap">
                    <Image src={restAPI} width="28" height="28" alt="" /><span className="ml-2 font-medium text-textGreen">RestAPI</span>
                </div>
                <div className="border border-gray-200 xl:px-4 xl:py-2 px-2 py-1 rounded-lg shadow-lg xl:mx-2 xl:my-3 mx-2 my-2  flex flex-wrap">
                    <Image src={fastAPI} width="30" height="30" alt="" /><span className="ml-2 font-medium text-textGreen">FastAPI</span>
                </div>
            </div>
        </div>

    )
}

export default Backend