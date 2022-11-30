import React, { useRef } from 'react';
import { PlayCircleIcon } from '@heroicons/react/24/outline';
import { motion, useInView } from 'framer-motion';

const SecondMain = () => {
  const textRef = useRef();
  const videoRef = useRef();

  const textInView = useInView(textRef);
  const videoInView = useInView(videoRef);

  const textVariants = {
    show: {
      opacity: 1,
      transition: {
        delay: 0.4,
        ease: 'easeInOut',
        duration: 0.3,
      },
    },
    hide: {
      opacity: 0,
    },
  };

  const videoVariants = {
    show: {
      x: 0,
      opacity: 1,
      transition: {
        ease: 'easeInOut',
        duration: 0.4,
        delay: 0.2,
      },
    },
    hidden: {
      opacity: 0,
      x: -200,
    },
  };

  return (
    <div className='w-full bg-ap-darkblue lg:px-0 py-12 md:py-24'>
      <div className='flex flex-col lg:flex-row-reverse relative items-center gap-6 max-w-7xl mx-auto'>
        <motion.div
          className='flex flex-col items-center gap-1 xl:gap-2 mx-auto'
          ref={textRef}
          variants={textVariants}
          initial='hide'
          animate={textInView ? 'show' : 'hide'}
        >
          <motion.div className='yellow_headline text-4xl md:text-5xl xl:text-6xl xl:text-center'>
            One Meeting
          </motion.div>
          <motion.div className='white_subheadline text-lg md:text-xl xl:text-2xl'>
            Can Change it All
          </motion.div>
          <motion.div className='text-white text-center max-w-prose px-8 mt-4'>
            Experience the premier open forum for OEMs to discuss their
            packaging innovations and challenges.
          </motion.div>
        </motion.div>
        <motion.div
          className='aspect-video bg-gray-400 flex w-full mt-6 justify-center items-center'
          ref={videoRef}
          variants={videoVariants}
          initial='hidden'
          animate={videoInView ? 'show' : 'hidden'}
        >
          <motion.div>
            <PlayCircleIcon className='w-32 h-32 lg:w-52 lg:h-52 stroke-white/50 stroke-1' />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default SecondMain;
