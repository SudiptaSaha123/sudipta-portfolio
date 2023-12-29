import React from 'react'

const Herocard = ({title}) => {
  return (
    <div className='w-[10rem] h-[6rem] bg-black text-white text-center rounded-2xl flex items-center justify-center uppercase font-medium tracking-widest'>{title}</div>
  )
}

export default Herocard