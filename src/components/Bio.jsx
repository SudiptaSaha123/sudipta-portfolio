"use client"
import React from 'react'

const Bio = () => {
  return (
    <div className='max-w-[1000px] mt-[4rem]'>
        <p className='hidden sm:block sm:text-[1.2rem] text-center tracking-wider italic select-none'>Full-stack web developer and design enthusiast, passionate about translating ideas into seamless digital solutions. Expert in frontend and backend development, API design, and UI/UX.<br/><span className='font-semibold text-[1.5rem] text-slate-600'>Let's build something amazing together!</span></p>
        <p className='block text-center sm:hidden font-semibold text-[1.5rem] text-slate-600 select-none'>Let's build something amazing together!</p>
    </div>
  )
}

export default Bio