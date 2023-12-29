"use client"
import React from 'react'
import { motion } from 'framer-motion'
const OpenToWork = () => {
  return (
    <div className='h-[1.7rem] w-[14rem] bg-gray-100 rounded-xl flex gap-2 justify-center items-center px-2 mt-[3rem]'>
        <div className='w-[12px] h-[12px] bg-green-500 shadow-2xl shadow-green-400 rounded-2xl'
        // initial={{ opacity: 0, scale: 0.5 }}
        // animate={{ opacity: 1, scale: 1 }}
        // transition={{ duration: 0.5, repeat:Infinity, repeatType: 'reverse' }}
        ></div>
        <p className='font-medium text-black tracking-widest select-none'>AVAILABLE TO WORK</p>
    </div>
  )
}

export default OpenToWork