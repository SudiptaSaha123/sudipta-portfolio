'use client'
import React from 'react'
import {motion} from 'framer-motion'
import { fadeIn } from '/utils/motion';

const Peoplesay = () => {
  return (
    <motion.div 
    variants={fadeIn('up','tween','1','1')}
    initial="hidden"
    whileInView="show" className='bg-black py-10 mt-20 px-10'>
        <div>
            <div className='text-white text-[2rem] sm:text-[3.5rem] ml-4 text-center'>
                What People Say about My Project
            </div>
        </div>
    </motion.div>
  )
}

export default Peoplesay