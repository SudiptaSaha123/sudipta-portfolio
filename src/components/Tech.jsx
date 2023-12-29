'use client'
import React from 'react'
import {motion} from 'framer-motion'
import { fadeIn } from '/utils/motion';
import Image from 'next/image'

const Tech = () => {
  return (
    <motion.div className='mt-[10rem] text-center sm:block hidden'
      variants={fadeIn('up','tween','1','1')}
      initial="hidden"
      whileInView="show">
      <div className='text-black text-[2.5rem] sm:text-[3.5rem] font-semibold mb-[10rem] sm:mb-0'>
        My Tech Stack
      </div>
      <div className='flex justify-center gap-10 mt-8 mb-10'> 
      <Image src="/4.png" width={140} height={140} className=''/>
      <Image src="/5.png" width={140} height={140} className=''/>
      <Image src="/3.png" width={140} height={140} className=''/>
      <Image src="/2.png" width={140} height={140} className=''/>
      <Image src="/1.png" width={140} height={140} className=''/>
      <Image src="/6.png" width={140} height={140} className=''/>
      <Image src="/7.png" width={140} height={140} className=''/> 
      </div>
    </motion.div>
  )
}

export default Tech


