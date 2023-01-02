import React from 'react';
import { motion } from 'framer-motion';
import ResourceGrid from '../components/resources/ResourceGrid';

const resources = () => {
  return (
    <div className='flex flex-col'>
      <div className='h-16 md:h-20 lg:h-24 bg-ap-darkblue'></div>
      <div className='pt-12 md:py-16 lg:py-20 xl:py-20 flex flex-col gap-8 md:gap-12 xl:gap-12'>
        <div className='flex flex-col items-center'>
          <motion.div className='blue_subheadline text-xl md:text-xl xl:text-2xl'>
            Industry
          </motion.div>
          <motion.div className='yellow_headline text-4xl md:text-5xl xl:text-6xl xl:text-center'>
            Resources
          </motion.div>
        </div>
        <ResourceGrid />
      </div>
    </div>
  );
};

export default resources;
