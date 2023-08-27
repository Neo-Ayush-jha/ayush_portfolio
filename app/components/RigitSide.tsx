import Link from 'next/link'
import React from 'react'

function RigitSide() {
  return (
    <div className='w-full h-full flex flex-col items-center justify-end gap-4 text-textLight'>
        <Link href="https://ayush91176@gmail.com">
            <p className='text-sm rotate-90 w-72 tracking-wide text-textGreen'>ayush.kumar.me</p>
        </Link>
        <span className='w-[2px] h-32 bg-textDark inline-flex'></span>
    </div>
  )
}

export default RigitSide