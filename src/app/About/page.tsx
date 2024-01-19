import React from 'react'
import {motion} from "framer-motion"
const page = () => {
  return (
    <motion.div className='transition-all duration-' animate={{x:[0,5,10,100]}}>
      <h1 className='text-5xl absolute left-[50%] top-10 text-red-700'>Hello WOrld</h1>
    </motion.div>
  )
}

export default page

