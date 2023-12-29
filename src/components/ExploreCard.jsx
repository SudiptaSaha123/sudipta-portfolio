'use client';

import {motion} from 'framer-motion'
import {fadeIn} from '/utils/motion'

const ExploreCard = ({id,imgUrl,title,index,active,handleClick,content}) => (
  <motion.div
    variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
    className={`relative ${active === id ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]'} flex items-center justify-center min-w-[170px] h-[700px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer bg-black relative`}
    onClick={() => handleClick(id)}
  >
  {active !== id ? (
    <h3 className='font-semibold sm:text-[26px] text-[18px] text-white absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]'>{title}</h3>
  ):(
    <div className='absolute bottom-0 p-8 flex justify-start w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-b-[24px]'>
    <p className='text-white mb-[50px] leading-10 sm:text-[1.3rem] text-justify text-[0.8rem]'>
        {content}
    </p>
      <div className={`w-[60px] h-[60px] rounded-[24px] glassmorphism mb-[40px]`}>
        <img
          src={imgUrl}
          alt='headset'
          className='object-contain'
        />
      </div>
      <p className='font-normal text-[16px] leading-[20px] text-white uppercase'>Project Given By</p>
      <h2 className='mt-[10px] font-semibold sm:text-[32px] text-[24px] text-white'>
        {title}
      </h2>
    </div>
  )}
  </motion.div>
);

export default ExploreCard;
