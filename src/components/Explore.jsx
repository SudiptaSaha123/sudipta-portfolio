'use client';

import { useState } from 'react';
import {motion} from 'framer-motion'
import {staggerContainer} from '/utils/motion'
import ExploreCard from './ExploreCard';
import { exploreWorlds } from '../../constants';
const Explore = () => {

  const[active,setActive] = useState('world-2')

  return(
  <section className={{}} id='explore'>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{once:false, amount:0.25}}
        className={`mx-auto flex flex-col`}
      >

       <div className='mt-[20px] flex lg:flex-row flex-col min-h-[150vh] sm:min-h-[70vh] gap-5'>
            {
              exploreWorlds.map((world, index) => (
                <ExploreCard
                key={world.id}
                {...world}
                index={index}
                active={active}
                handleClick={setActive}
                />
              ))
            }
        </div>
      </motion.div>

  </section>
);
}

export default Explore;
