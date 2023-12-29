"use client"
import React from 'react'
import Specialization from './Specialization'
import {fadeIn} from '../../utils/motion'
import { motion } from 'framer-motion'

const Technical = () => {
  return (
    <motion.div className='flex flex-col sm:flex-row justify-center items-center sm:gap-20 sm:px-[30px] sm:py-[20px] mt-20 sm:mt-[100px]'>
        <motion.div variants={fadeIn('right','tween','0.5','0.5')}
    initial="hidden"
    whileInView="show"
                    className='text-black text-[2.5rem] sm:text-[5rem] font-bold mb-[2rem] sm:mb-0'>Technical Skills.</motion.div>
        <div>
            <Specialization/>
        </div>
    </motion.div>
  )
}

export default Technical