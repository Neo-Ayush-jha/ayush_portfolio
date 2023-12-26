import Link from 'next/link'
import React from 'react'

function RigitSide() {
  return (
    <div className='w-full h-full flex flex-col items-center justify-end gap-4 text-textLight'>
        <Link href="https://mail.google.com/mail/u/0/?fs=1&to=anishmehta7782@gmail.com&tf=cm">
            <p className='text-sm rotate-90 w-72 tracking-wide text-textGreen'>ayush.kumar.me</p>
        </Link>
        <span className='w-[2px] h-32 bg-textDark inline-flex'></span>
    </div>
  )
}

export default RigitSide
