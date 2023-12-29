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
            <div className='text-white text-[1.6rem] sm:text-[3.5rem] ml-4 tracking-wider sm:text-left text-center'>
                Code.Build.Repeat.
            </div>
        </div>
    </motion.div>
  )
}

export default Footer