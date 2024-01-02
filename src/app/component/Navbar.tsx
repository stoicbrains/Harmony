import React from 'react'
import Link from 'next/link'
export default function Navbar() {
  return (
    <>
          <span className='absolute top-[0.5rem] left-0 text-2xl font-extrabold tracking-[5px] text-white' style={{textShadow:'4px 3px black',backdropFilter:'blur(2px)'}}>Care<span className='text-red-400'>Sync</span></span>

    <div className='flex justify-center translate-y-[1rem]'>
        <ul className='flex justify-center gap-[6rem] text-white font-semibold tracking-[3px]'>
            <li><Link href={'/'}  className='relative before:absolute before:bottom-[-3px] before:left-0 before:h-[3px] before:w-0 before:transition-all before:duration-300 before:ease-in-out before:bg-white before:hover:w-full'>Home</Link></li>
            <li><Link href={'/'}   className='relative before:absolute before:bottom-[-3px] before:left-0 before:h-[3px] before:w-0 before:transition-all before:duration-300 before:ease-in-out before:bg-white before:hover:w-full'>AboutUs</Link></li>
            <li><Link href={'/'} className='relative before:absolute before:bottom-[-3px] before:left-0 before:h-[3px] before:w-0 before:transition-all before:duration-300 before:ease-in-out before:bg-white before:hover:w-full'>Consult</Link></li>
            <li><Link href={'/'} className='relative before:absolute before:bottom-[-3px] before:left-0 before:h-[3px] before:w-0 before:transition-all before:duration-300 before:ease-in-out before:bg-white before:hover:w-full'>Query</Link></li>
        </ul>
    </div>
    </>
  )
}
