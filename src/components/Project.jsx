'use client'
import React from 'react'
import {motion} from 'framer-motion'
import { fadeIn } from '/utils/motion';
import ProjectCard from './ProjectCard';

const Build = () => {
  return (
    <motion.div 
    variants={fadeIn('up','tween','1','1')}
    initial="hidden"
    whileInView="show" className='bg-black py-10 mt-20 px-10'>
        <div>
            <div className='flex flex-col'>
              <div className='text-white text-[2rem] sm:text-[5rem] ml-4 text-center mb-20'>
                  Some Projects
              </div>
              <div className='flex flex-col items-start gap-14'>
              <ProjectCard title={"A Full Stack Event Mangement Platform"} imgUrl={'/project1.png'} oriUrl={"https://event-platform-phi.vercel.app/"}/>
              <ProjectCard title={"A Bank Application Frontend"} imgUrl={'/project3.png'} oriUrl={"https://bank-application-delta.vercel.app/"}/>
              <ProjectCard title={"A Travel Website Frontend"} imgUrl={'/project4.png'} oriUrl={"https://event-platform-phi.vercel.app/"}/>
              <ProjectCard title={"A Full Stack Social Media Application"} imgUrl={'/project2.png'} oriUrl={"https://snapgram-sable.vercel.app/"}/>
              </div>
            </div>
        </div>
    </motion.div>
  )
}

export default Build