import React, { useRef } from 'react';
import TestimonialBlock from '../../shared/TestimonialBlock';
import { motion, useInView } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { toggleRegistrationModal } from '../../features/layout/layoutSlice';

const TestimonialMain = ({
  headline,
  subheadline,
  text,
  cta,
  testimonials,
}) => {
  const textRef = useRef();
  const testRef = useRef();
  const testInView = useInView(testRef);
  const textInView = useInView(textRef);
  const dispatch = useDispatch();

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

  const testimonialVariants = {
    show: {
      x: 0,
      opacity: 1,
      transition: {
        delay: 0.4,
        type: 'spring',
        stiffness: 200,
        damping: 45,
        mass: 1.5,
        delayChildren: 0.7,
        staggerChildren: 0.5,
      },
    },
    hide: {
      x: 200,
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
    <div className='bg-bgImage_testimonial bg-cover bg-center w-full py-16 md:py-20 lg:py-32 overflow-hidden'>
      <div className='grid grid-cols-1 lg:grid-cols-5 gap-y-10 items-center mx-auto max-w-7xl '>
        <motion.div
          className='flex flex-col text-center lg:text-left lg:col-span-2 gap-6'
          ref={textRef}
        >
          <motion.div
            className='flex flex-col px-12'
            variants={textVariants}
            initial='hide'
            animate={textInView ? 'show' : 'hide'}
          >
            <motion.div
              className='blue_subheadline text-lg md:text-xl xl:text-2xl'
              variants={itemVariants}
              initial='hide'
              animate={textInView ? 'show' : 'hide'}
            >
              {subheadline}
            </motion.div>
            <motion.div
              className='white_headline text-4xl md:text-5xl xl:text-6xl'
              variants={itemVariants}
              initial='hide'
              animate={textInView ? 'show' : 'hide'}
            >
              {headline}
            </motion.div>
          </motion.div>
          <motion.div
            className='text-white lg:text-lg px-12 md:max-w-prose md:mx-auto h-full'
            variants={itemVariants}
            initial='hide'
            animate={textInView ? 'show' : 'hide'}
          >
            {text}
          </motion.div>
          <motion.button
            className='bg-ap-darkblue rounded-lg w-1/2 mx-auto lg:mx-12'
            variants={itemVariants}
            initial='hide'
            animate={textInView ? 'show' : 'hide'}
            onClick={() => dispatch(toggleRegistrationModal())}
          >
            <motion.div className='font-semibold uppercase tracking-widest text-white text-sm py-4'>
              {cta}
            </motion.div>
          </motion.button>
        </motion.div>
        <motion.div
          className='lg:col-span-3'
          variants={testimonialVariants}
          initial='hide'
          animate={testInView ? 'show' : 'hide'}
          ref={testRef}
        >
          <div
            className='grid grid-flow-col overflow-scroll gap-x-4 px-8 md:px-16'
            id='scrollers'
          >
            {testimonials &&
              testimonials.map((t, i) => (
                <div key={i} className='h-full'>
                  <TestimonialBlock
                    name={t.name}
                    testimonialBody={t.testimonial}
                  />
                </div>
              ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TestimonialMain;
