import React from 'react';
import { motion } from 'framer-motion';

const HeroText = ({ text }) => {
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
      className='px-8 md:px-20 2xl:px-32 text-white text-center text-lg: md:text-xl max-w-prose font-normal'
      variants={textVariants}
      initial='hide'
      animate='show'
    >
      {text}
    </motion.div>
  );
};

export default HeroText;
