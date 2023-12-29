import React from 'react'
import Technical from '@/components/Technical'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Build from '@/components/Build'
import Tech from '@/components/Tech'
import Explore from '@/components/Explore'
import Peoplesay from '@/components/Peoplesay'

const page = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Technical/>
        {/* <Build/> */}
        {/* <Tech/>    */}
        <Peoplesay/>
        <Explore/>
    </div>
  )
}

export default page

