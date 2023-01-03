import React from 'react';
import NPRCircle from './NPRCircle';
import { motion } from 'framer-motion';

const FullNPRCallout = () => {
  return (
    <div className='relative p-8 pb-16 md:pb-8 lg:p-6 w-full h-full'>
      <NPRCircle />
      <div className='absolute z-10 top-0 left-0 right-0 bottom-0 flex justify-center items-center'>
        <motion.img
          src='https://apsmedia.s3.amazonaws.com/images/speaker.svg'
          className='w-1/3 h-auto'
          whileHover={{ scale: 1.15 }}
        />
      </div>
    </div>
  );
};

export default FullNPRCallout;
