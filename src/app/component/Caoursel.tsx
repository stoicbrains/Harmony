"use client"
import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import img1 from '../Assets/img1.jpg'
import img2 from '../Assets/img2.jpg'
import img3 from '../Assets/img3.jpg'
import img4 from '../Assets/img4.jpg'
const obj = [
    {
        id:1,
        url:img1
    },
    {
        id:2,
        url:img2
    },
    {
        id:3,
        url:img3
    },
    {
        id:4,
        url:img4
    }
]
export default function Caoursel() {
    const scroll = useRef();
    const [Value,setValue] = useState(0);
    useEffect(()=>{
        console.log(scroll.current.scrollWidth,scroll.current.offsetWidth)
        setValue(1000)
    },[scroll])
  return (
    <div className='relative h-full w-full rounded-21px'>
        <div className='absolute h-[500px] w-screen top-[50%] overflow-hidden translate-y-[-50%]'>
            <motion.div className='h-full w-full flex justify-center items-center' ref={scroll} drag='x' dragConstraints={{left:-Value,right:0}} transition={{duration:'200ms', ease:'easeInOut'}}>
                <ul className='flex h-[300px] justify-center items-center gap-[7rem]'>
                    {obj.map((item)=>{
                        return(
                        <li key={item.id} className='h-[320px] w-[400px] rounded-[21px] translate-x-[1rem] shadower overflow-hidden'>
                            <Image src={item.url} alt=" " style={{height:'320px',width:'400px',objectFit:'cover', objectPosition:'center' ,pointerEvents:'none'}} />
                        </li>)
                    })}
                </ul>
        </motion.div>
        </div>
    </div>
  )
}
