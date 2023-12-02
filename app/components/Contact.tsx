import Link from 'next/link'
import React from 'react'

function Contact() {
    return (
        <section id='contact' className='max-w-contentContainer mx-auto py-10 xl:py-32 flex flex-col gap-4 items-center justify-center'>
            <p className="font-titleFont text-lg text-textGreen font-semibold flex items-center tracking-wide">05. What  Next?</p>
            <h2 className="font-titleFont text-5xl font-semibold">Get In Touch</h2>
            <p className="max-w-[600px] text-center text-textDark">
                Although I am not currently looking for any new opportunities,my inbox is always open. Whether you have a question or just want to say hi, I will try my best to get back to you!
            </p> 
            <Link href="https://ayush91176@gmail.com" target='_blank'><button className='w-36 h-12 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300'>Say Hello</button></Link>
        </section>
    )
}

export default Contact