import React from 'react'
import Technical from '@/components/Technical'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Build from '@/components/Build'
import Tech from '@/components/Tech'
import Explore from '@/components/Explore'
import Peoplesay from '@/components/Peoplesay'
import Project from '@/components/Project'
import Footer from '@/components/Footer'
import Contact from '@/components/Contact'
const page = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Technical/>
        {/* <Build/> */}
        {/* <Tech/>    */}
        <Project/>
        <Peoplesay/>
        <Explore/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default page

