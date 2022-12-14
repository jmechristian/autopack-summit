import React from 'react';
import Link from 'next/link';
import { ArrowLongRightIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

const HeroInfo = ({ location, date }) => {
  const textVariants = {
    show: {
      opacity: 1,
      transition: {
        ease: 'easeIn',
        duration: 0.4,
        delay: 0.4,
      },
    },
    hide: {
      opacity: 0,
    },
  };

  return (
    <motion.div
      className='flex flex-col text-center text-sm md:text-base justify-center gap-1 lg:w-1/2 lg:text-left lg:items-start lg:mt-6'
      variants={textVariants}
      initial='hide'
      animate='show'
    >
      <div className='flex flex-col'>
        <div className='text-ap-yellow font-bold uppercase text-4xl'>
          {date}
        </div>
        <div className='text-white/60 font-semibold'>{location}</div>
        <div className='flex justify-center text-white/60 text-center lg:text-left lg:items-end lg:justify-start gap-1 w-full'>
          <Link href='/travel'>Accommodations</Link>
          <ArrowLongRightIcon className='w-6 h-6 stroke-white/60' />
        </div>
      </div>
    </motion.div>
  );
};

export default HeroInfo;
