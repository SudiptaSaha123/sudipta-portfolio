import React from 'react'


const Herocard = ({title,color}) => {
  return (
    <div className={`w-[9rem] h-[6rem] sm:w-[10rem] sm:h-[6rem] text-white text-center rounded-xl flex items-center justify-center uppercase font-medium tracking-widest text-[1rem] bg-${color}`}>{title}</div>
  )
}

export default Herocard