import Image from 'next/image'
import React from 'react'
import { AiFillThunderbolt } from 'react-icons/ai'

function DataBase() {
    return (
        <div className='border border-textGreen p-6 rounded-lg shadow-lg'>
            <div className="flex flex-1 items-center justify-center text-xl text-center font-medium title-font mb-2"><span className='text-textGreen'><AiFillThunderbolt /></span>DataBase</div>
            <div className="flex flex-wrap justify-center">
                <div className="border border-gray-200 xl:px-4 xl:py-2 px-2 py-1 rounded-lg shadow-lg xl:mx-2 xl:my-3 mx-2 my-2  flex flex-wrap">
                    <Image src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" width="26" height="26" alt="" /><span className="ml-2 font-medium text-textGreen">MySQL</span>
                </div>
                <div className="border border-gray-200 xl:px-4 xl:py-2 px-2 py-1 rounded-lg shadow-lg xl:mx-2 xl:my-3 mx-2 my-2  flex flex-wrap">
                    <Image src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" width="28" height="28" alt="" /><span className="ml-2 font-medium text-textGreen">MongoDB</span>
                </div>
                <div className="border border-gray-200 xl:px-4 xl:py-2 px-2 py-1 rounded-lg shadow-lg xl:mx-2 xl:my-3 mx-2 my-2  flex flex-wrap">
                    <Image src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg" width="28" height="28" alt="" /><span className="ml-2 font-medium text-textGreen">PostSQL</span>
                </div>
                <div className="border border-gray-200 xl:px-4 xl:py-2 px-2 py-1 rounded-lg shadow-lg xl:mx-2 xl:my-3 mx-2 my-2  flex flex-wrap">
                    <Image src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" width="28" height="28" alt="" /><span className="ml-2 font-medium text-textGreen">FireBase</span>
                </div>
                <div className="border border-gray-200 xl:px-4 xl:py-2 px-2 py-1 rounded-lg shadow-lg xl:mx-2 xl:my-3 mx-2 my-2  flex flex-wrap">
                    <Image src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redis/redis-original-wordmark.svg" width="28" height="28" alt="" /><span className="ml-2 font-medium text-textGreen">Redis</span>
                </div>

            </div>
        </div>

    )
}


export default DataBase