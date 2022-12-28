import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const HeroHeadline = ({ headline, subheadline }) => {
  const [headlineIndex, setHeadlineIndex] = useState(0);

  useEffect(() => {
    const startTheTimer = () => {
      if (headlineIndex !== headline.length - 1) {
        setTimeout(() => {
          setHeadlineIndex(headlineIndex + 1);
        }, 1300);
      } else {
        return;
      }
    };

    startTheTimer();
  }, [headlineIndex]);

  const subheadVariants = {
    show: {
      opacity: 1,
      transition: {
        ease: 'easeIn',
        duration: 0.2,
        delay: 0.3,
      },
    },
    hide: {
      opacity: 0,
    },
  };

  const headlineVariants = {
    enter: {
      x: 0,
      opacity: 1,
      transition: {
        delay: 0.3,
        type: 'spring',
        stiffness: 600,
        damping: 45,
        mass: 1.5,
      },
    },
    exit: {
      x: 200,
      opacity: 0,
      transition: {
        delay: 0,
        type: 'spring',
        stiffness: 600,
        damping: 45,
        mass: 1.5,
      },
    },
    initial: {
      x: -200,
      opacity: 0,
    },
  };

  return (
    <div className='flex flex-col justify-center gap-0'>
      <motion.div
        className='white_subheadline text-xl md:text-2xl xl:text-3xl text-center'
        variants={subheadVariants}
        initial='hide'
        animate='show'
      >
        {subheadline}
      </motion.div>
      <motion.div className='relative flex justify-center'>
        <AnimatePresence>
          <motion.div
            className='yellow_headline text-[2.7rem] md:text-8xl lg:text-8xl xl:text-9xl 2xl:text-[9rem] leading-none text-center overflow-hidden absolute'
            variants={headlineVariants}
            initial='initial'
            animate='enter'
            exit='exit'
            key={headlineIndex}
          >
            {headline[headlineIndex]}
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default HeroHeadline;
