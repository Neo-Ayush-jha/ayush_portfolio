import React from 'react'

import Link from 'next/link';
import { TbBrandGithub } from "react-icons/tb";
import { SlSocialTwitter } from "react-icons/sl";
import { SlSocialLinkedin, SlSocialFacebook, SlSocialInstagram, SlSocialGoogle } from "react-icons/sl";
function Footer() {
    return (
        <div className='hidden mdl:inline-flex xl:hidden items-center justify-center w-full py-6 gap-4'>
            <Link href="https://github.com/Neo-Ayush-jha" target="_blank">
                <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'><TbBrandGithub /></span>
            </Link>
            <Link href="https://www.linkedin.com/in/ayush-kumar-jha-273a99248" target="_blank">
                <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'><SlSocialLinkedin /></span>
            </Link>
            <Link href="https://ayush91176@gmail.com" target="_blank">
                <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'><SlSocialGoogle /></span>
            </Link>
            <Link href="https://www.instagram.com/__ay_ush__jha_/" target="_blank">
                <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'><SlSocialInstagram /></span>
            </Link>
            <Link href="https://twitter.com/AyushKu01110" target="_blank">
                <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'><SlSocialTwitter /></span>
            </Link>
            <Link href="https://www.facebook.com/ayushkumar.jha.3760" target="_blank">
                <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'><SlSocialFacebook /></span>
            </Link>
        </div>
    )
}

export default Footer