import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

const ProjectCard = ({title,imgUrl,oriUrl}) => {
  return (
    <div className='flex sm:flex-row flex-col justify-center gap-10 sm:gap-20'>
                <Link href="https://travel-website-dun-five.vercel.app/" target='_blank'>
                  <Image src={imgUrl} width={700} height={300} className='grayscale hover:grayscale-0 transition-all duration-200 delay-200'/>
                </Link>
                <div className='text-white text-[1.5rem]'>
                  {title}
                </div>
    </div>
  )
}

export default ProjectCard