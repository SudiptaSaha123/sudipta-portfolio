'use client'
import React from 'react'
import {motion} from 'framer-motion'
import { fadeIn } from '/utils/motion';

const Build = () => {
  return (
    <motion.div 
    variants={fadeIn('up','tween','1','1')}
    initial="hidden"
    whileInView="show" className='bg-black py-10 mt-20 px-10'>
        <div>
            <div className='text-white text-[2rem] sm:text-[5rem] ml-4 text-center'>
                Build Your Dream Project
            </div>
        </div>
    </motion.div>
  )
}

export default Build