'use client';

import React from 'react'

import {motion} from 'framer-motion'
import { footerVariants } from '/utils/motion';

const Footer = () => {
  return (
    <motion.div 
    variants={footerVariants}
    initial='hidden'
    whileInView='show' className='bg-black py-10 mt-20 px-10'>
        <div>
            <div className='text-white text-[5rem] ml-4'>
                Build Your Dream Project
            </div>
        </div>
    </motion.div>
  )
}

export default Footer