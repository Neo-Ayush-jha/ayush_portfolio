import React from 'react'
import SectionTitle from './SectionTitle'
import MultipleProject from './works/MultipleProject'
import ATG from './works/ATG'

function Experience() {
    return (
        <section className='max-w-containerxs mx-auto py-10 lgl:py-24 px-4' id="experience">
            <SectionTitle title="My Working Experience" title_no="03" />
            <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
                <ul className='md:w-34 flex flex-col'>
                    <li className='border-1-2 border-1-textGreen text-textDark bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium'>
                        Multiple Project
                    </li>
                </ul>
                <MultipleProject/>
            </div>
            <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
                <ul className='md:w-34 flex flex-col'>
                <li className='border-1-2 border-1-textGreen text-textDark bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium'>
                        PYTHON DJANGO INTERN 
                    </li>
                </ul>
                <ATG/>
            </div>
        </section>
    )
}

export default Experience