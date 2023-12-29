'use client'
import React from 'react'
import OpenToWork from './OpenToWork'
import Bio from './Bio'
import {fadeIn} from '/utils/motion'
import { motion } from 'framer-motion'


const Hero = () => {
  return (
    <motion.div className='mt-[60px]'
    variants={fadeIn('up','tween','1','1')}
    initial="hidden"
    whileInView="show">
        <div className='flex flex-col justify-center items-center sm:p-0 px-[2rem]'>
                <div className='text-center flex flex-col items-center gap-6'>
                  <div>
                    <span className='text-[3rem] sm:text-[6rem] select-none'>Where </span> 
                    <span className='text-[3rem] sm:text-[6rem] font-bold select-none'>Ideas</span>
                  </div>
                  <span className='text-[2.5rem] italic bg-slate-400 text-white rounded-3xl px-8 ml-3 w-fit select-none'>meet</span>
                  <span className='text-[3rem] sm:text-[6rem]'><span className='text-[3rem] sm:text-[6rem] font-bold select-none'>Innovation</span> <span className='font-[200] text-[2rem] sm:text-[6rem] select-none'>in</span> <span className='select-none'>Code.</span></span>
                </div>
                <OpenToWork/>
                <Bio/>
        </div>
    </motion.div>
  )
}

export default Hero