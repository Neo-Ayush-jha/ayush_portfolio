import React from 'react'
import Link from 'next/link';
import {TbBrandGithub} from "react-icons/tb";
import {SlSocialTwitter} from "react-icons/sl";
import {SlSocialLinkedin,SlSocialFacebook,SlSocialInstagram,SlSocialGoogle} from "react-icons/sl";
function LeftSide() {
  return (
    <div className='w-full h-full flex flex-col items-center justify-end gap-4 text-textLight'>
        <div className='flex flex-col gap-4'>
            <Link href="https://github.com/Neo-Ayush-jha" target="_blank">
                <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'><TbBrandGithub/></span>
            </Link>
            <Link href="https://www.linkedin.com/in/ayush-kumar-jha-273a99248" target="_blank">
                <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'><SlSocialLinkedin/></span>
            </Link>
            <Link href="https://mail.google.com/mail/u/0/?fs=1&to=ayush91176@gmail.com&tf=cm" target="_blank">
                <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'><SlSocialGoogle/></span>
            </Link>
            <Link href="https://www.instagram.com/neo.ayush.jha/" target="_blank">
                <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'><SlSocialInstagram/></span>
            </Link>
            <Link href="https://twitter.com/AyushKu01110" target="_blank">
                <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'><SlSocialTwitter/></span>
            </Link>
            <Link href="https://www.facebook.com/ayushkumar.jha.3760" target="_blank">
                <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'><SlSocialFacebook/></span>
            </Link>
        </div>
        <div className='w-[2px] h-32 bg-textDark'></div>
    </div>
  )
}

export default LeftSide
