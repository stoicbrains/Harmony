"use client"
import React, { useEffect, useState } from 'react'


const Loader = () => {
    const [stop,setStop] = useState(1)
  return (
    <div className={`h-screen w-screen bg-black absolute left-0 top-0 z-50 transition-all duration-700 delay-100 ease-linear ${stop===0?'h-0 top-[-100vh]':''}`}>
      <h1>Nothing</h1>
      <span>
        <button className='bg-white text-black rounded-xl h-[40px] w-[80px] text-center' onClick={()=>{
            setStop(0);
        }}>Explore!</button>
      </span>
    </div>
  )
}

export default Loader
