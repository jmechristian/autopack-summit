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
      className='px-8 md:px-20 2xl:px-32 text-white text-center text-lg: md:text-2xl max-w-prose font-medium'
      variants={textVariants}
      initial='hide'
      animate='show'
    >
      {text}
    </motion.div>
  );
};

export default HeroText;
