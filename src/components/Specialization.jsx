import React from 'react'
import Herocard from './Herocard'

const Specialization = () => {
  return (
    <div className='flex justify-between gap-[100px] mt-20'>
        <Herocard title={"Frontend Developmet"}/>
        <Herocard title={"Backend Developmet"}/>
        <Herocard title={"API Design"}/>
        <Herocard title={"UI/UX Design"}/>
    </div>
  )
}

export default Specialization