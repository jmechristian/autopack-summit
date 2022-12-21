import React, { useRef, Suspense, useEffect, use } from 'react';
import { motion, useInView } from 'framer-motion';

const SecondMain = ({ headline, subheadline, text }) => {
  const textRef = useRef();
  const videoRef = useRef();
  const actualVideoRef = useRef(null);

  const textInView = useInView(textRef);
  const videoInView = useInView(videoRef);

  useEffect(() => {
    if (videoInView) {
      actualVideoRef.current.play();
    }

    return () => actualVideoRef.current.pause();
  }, [videoInView]);

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
            {headline}
          </motion.div>
          <motion.div className='white_subheadline text-lg md:text-xl xl:text-2xl'>
            {subheadline}
          </motion.div>
          <motion.div className='text-white text-center max-w-prose px-8 mt-4'>
            {text}
          </motion.div>
        </motion.div>
        <motion.div
          className='flex w-full mt-6 justify-center items-center aspect-video'
          ref={videoRef}
          variants={videoVariants}
          initial='hidden'
          animate={videoInView ? 'show' : 'hidden'}
        >
          <motion.video
            className='w-full h-full'
            controls
            ref={actualVideoRef}
            muted
            controlsList='nodownload'
            loop
          >
            <source
              src='assets/video/HomeSecondMain.mp4'
              type='video/mp4'
            ></source>
          </motion.video>
        </motion.div>
      </div>
    </div>
  );
};

export default SecondMain;
