import React from 'react';
import { motion } from 'framer-motion';

import VideoHeader from '../../shared/VideoHeader';

const SponsorshipHead = () => {
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
    <div className='bg-bgImage_sponsors pt-16 lg:pt-24 xl:pt-32 bg-cover bg-center relative'>
      <motion.div
        className='flex flex-col gap-5 justify-center items-center mx-auto max-w-7xl py-12 md:py-16 px-8 lg:px-16'
        variants={headlineVariants}
        initial='hidden'
        animate='show'
      >
        <motion.div className='flex flex-col gap-2'>
          <motion.div
            className='white_headline text-[2.7rem] md:text-7xl lg:text-7xl xl:text-8xl leading-none text-center'
            variants={item}
          >
            Distinguish
          </motion.div>
          <motion.div
            className='yellow_subheadline text-xl lg:text-2xl xl:text-3xl text-center'
            variants={item}
          >
            Your Business
          </motion.div>
        </motion.div>
        <motion.div
          className='text-slate-300 text-center mb-24 md:mb-28 lg:mb-44 xl:mb-48 max-w-prose md:px-12 text-lg xl:text-xl leading-snug'
          variants={textVariants}
          initial='hidden'
          animate='show'
        >
          Position yourself for this unique opportunity to offer packaging and
          logistics solutions to OEMs and Tier 1 Suppliers.
        </motion.div>
      </motion.div>
      <motion.div
        className='bg-slate-200 aspect-video w-11/12 md:w-9/12 lg:w-7/12 xl:w-1/2 absolute shadow-xl -bottom-28 md:-bottom-52 lg:-bottom-52 xl:-bottom-64 2xl:-bottom-72 right-0 z-30 overflow-hidden'
        variants={videoVariants}
        initial='hidden'
        animate='show'
      >
        <VideoHeader
          video='/assets/video/sponsor1.mp4'
          poster={'https://apsmedia.s3.amazonaws.com/images/sponsor1_cover.png'}
        />
      </motion.div>
    </div>
  );
};

export default SponsorshipHead;
