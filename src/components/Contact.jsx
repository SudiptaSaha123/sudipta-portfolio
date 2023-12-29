'use client';

import React from 'react'

import {motion} from 'framer-motion'
import { footerVariants } from '/utils/motion';
import { MdLocalPhone } from "react-icons/md";
import { IoMdMail } from "react-icons/io";


const Contact = () => {
  return (
    <motion.div 
    variants={footerVariants}
    initial='hidden'
    whileInView='show' className='bg-black py-4 sm:py-6 mt-1 sm:mt-20 px-10'>
        <div className='flex flex-col items-start gap-4 sm:gap-10'>
            <div className='text-white text-[1rem] sm:text-[2rem]  ml-4 flex items-center gap-6'>
                <IoMdMail />
                sudiptasaha883@gmail.com
            </div>
            <div className='text-white text-[1rem] sm:text-[2rem] ml-4 flex items-center gap-6'>
                <MdLocalPhone />
                +91 6290568502
            </div>
        </div>
    </motion.div>
  )
}

export default Contact