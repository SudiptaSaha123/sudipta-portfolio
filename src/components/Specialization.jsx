"use client"
import React from 'react'
import Herocard from './Herocard'
import {fadeIn} from '../../utils/motion'
import { motion } from 'framer-motion'

const Specialization = () => {
  return (
    <motion.div className='grid grid-cols-2 sm:grid-cols-2 justify-center gap-10'
    variants={fadeIn('left','tween','0.5','0.5')}
    initial="hidden"
    whileInView="show">
        <Herocard title={"Frontend Developmet"} color={"black"}/>
        <Herocard title={"Backend Developmet"} color={"black"}/>
        <Herocard title={"API Design"} color={"black"}/>
        <Herocard title={"UI/UX Design"} color={"black"}/>
        <Herocard title={"App Development"} color={"black"}/>
        <Herocard title={"Machine Learning"} color={"black"}/>
    </motion.div>
  )
}

export default Specialization