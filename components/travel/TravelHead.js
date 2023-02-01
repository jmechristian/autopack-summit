import React from 'react';
import { motion } from 'framer-motion';
import VideoHeader from '../../shared/VideoHeader';

const TravelHead = () => {
  const headlineVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delay: 0.4,
        duration: 0.4,
        ease: 'easeOut',
        delayChildren: 1,
        staggerChildren: 0.1,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delay: 1.3,
        duration: 0.4,
        ease: 'easeOut',
      },
    },
  };

  const videoVariants = {
    show: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        damping: 20,
        mass: 0.75,
        stiffness: 100,
        delay: 0.9,
      },
    },
    hidden: {
      x: 200,
      opacity: 0,
    },
  };

  const item = {
    hidden: { opacity: 0, x: 50 },
    show: { opacity: 1, x: 0 },
  };

  return (
    <div className='bg-bgImage_travel pt-16 lg:pt-24 xl:pt-32 bg-cover bg-center relative'>
      <motion.div className='bg-white inset-x-0 -bottom-1 h-24 absolute z-5'></motion.div>
      <motion.div
        className='flex flex-col gap-5 justify-center items-center mx-auto max-w-7xl py-12 md:py-16 px-8 lg:px-16'
        variants={headlineVariants}
        initial='hidden'
        animate='show'
      >
        <motion.div className='flex flex-col gap-2'>
          <motion.div
            className='white_headline text-5xl md:text-7xl lg:text-7xl xl:text-8xl leading-none text-center'
            variants={item}
          >
            Travel
          </motion.div>
        </motion.div>
        <motion.div
          className='text-slate-300 text-center max-w-prose md:px-12 xl:text-2xl'
          variants={textVariants}
          initial='hidden'
          animate='show'
        >
          Explore the best of this electric town – Find all the info you'll need
          to make the most of your stay in Greenville.
        </motion.div>
      </motion.div>
      <motion.div
        className='flex justify-end'
        variants={videoVariants}
        initial='hidden'
        animate='show'
      >
        <motion.div className='aspect-video w-full md:w-9/12 lg:w-7/12 xl:w-1/2 '>
          <VideoHeader
            video='/assets/video/greenville.mp4'
            poster={'https://apsmedia.s3.amazonaws.com/images/greenville.png'}
            overlay
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default TravelHead;
