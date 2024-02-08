"use client"
import React from 'react'
import {navVariants} from '../../utils/motion'
import { motion } from 'framer-motion'

const Navbar = () => {
  return (
    <motion.div className='bg-black p-[1rem] text-center' 
    variants={navVariants}
    initial="hidden"
    whileInView="">
        <div className='text-[1.5rem] sm:text-[2rem] font-semibold text-white tracking-widest select-none'>
            SUDIPTA SAHA.
        </div>
    </motion.div>
  )
}

export default Navbar