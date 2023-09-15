import Link from 'next/link'
import React from 'react'

function footer2() {
    return (
        <section id='contact' className='max-w-contentContainer mx-auto flex flex-col gap-4 items-center justify-center'>
            <div className="text-textDark bg-transparent justify item-center text-center">
                <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                    <p className="text-gray-500 text-sm text-center sm:text-left">© 2020 Ayush kumar —
                    <Link href="https://ayush91176@gmail.com"  className="text-gray-600 ml-1" target="_blank" >@ayush_kumar</Link>
                    </p>
                </div>
            </div>
        </section>
    )
}

export default footer2