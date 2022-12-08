import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const LeftTextCTA = ({
  subColor,
  headlineColor,
  textColor,
  text,
  subText,
  headlineText,
  hasButton,
  buttonText,
  buttonColor,
  fn,
}) => {
  const textRef = useRef();
  const textInView = useInView(textRef);

  const textVariants = {
    show: {
      opacity: 1,
      transition: {
        delay: 0.4,
        ease: 'easeInOut',
        duration: 0.3,
        delayChildren: 1,
        staggerChildren: 1,
      },
    },
    hide: {
      opacity: 0,
    },
  };

  const itemVariants = {
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

  return (
    <motion.div
      className='flex flex-col text-center lg:col-span-2 gap-4 lg:gap-6 xl:gap-8'
      ref={textRef}
    >
      <motion.div
        className='flex flex-col'
        variants={textVariants}
        initial='hide'
        animate={textInView ? 'show' : 'hide'}
      >
        <motion.div
          className={`${
            subColor === 'blue' ? 'blue_subheadline' : 'yellow_subheadline'
          }  text-xl md:text-xl xl:text-2xl`}
          variants={itemVariants}
          initial='hide'
          animate={textInView ? 'show' : 'hide'}
        >
          {subText}
        </motion.div>
        <motion.div
          className={`${
            headlineColor === 'blue' ? 'blue_headline' : 'yellow_headline'
          } text-5xl md:text-5xl xl:text-6xl`}
          variants={itemVariants}
          initial='hide'
          animate={textInView ? 'show' : 'hide'}
        >
          {headlineText}
        </motion.div>
      </motion.div>
      <motion.div
        className={`${
          textColor === 'gray' ? 'text-gray-500' : 'text-white'
        } lg:text-lg xl:text-2xl px-12 md:max-w-prose md:mx-auto lg:px-0 lg:pr-8 xl:leading-relaxed`}
        variants={itemVariants}
        initial='hide'
        animate={textInView ? 'show' : 'hide'}
      >
        {text}
      </motion.div>
      {hasButton && (
        <motion.button
          className={`${
            buttonColor === 'blue' ? 'bg-ap-darkblue' : 'bg-ap-yellow'
          } rounded-lg w-fit px-6 xl:mx-auto`}
          variants={itemVariants}
          initial='hide'
          animate={textInView ? 'show' : 'hide'}
          onClick={() => fn()}
        >
          <motion.div className='font-semibold uppercase tracking-widest text-white text-sm lg:text-lg py-4'>
            {buttonText}
          </motion.div>
        </motion.button>
      )}
    </motion.div>
  );
};

export default LeftTextCTA;
