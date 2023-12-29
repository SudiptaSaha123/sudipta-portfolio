'use client';

import React from 'react'

import {motion} from 'framer-motion'
import { footerVariants } from '/utils/motion';

const Footer = () => {
  return (
    <motion.div 
    variants={footerVariants}
    initial='hidden'
    whileInView='show' className='bg-black mt-1 py-4 sm:py-10 px-10'>
        <div>
            <div className='text-white text-[2rem] sm:text-[5rem] ml-4'>
                Code.Build.Repeat.
            </div>
        </div>
    </motion.div>
  )
}

export default Footer