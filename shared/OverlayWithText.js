import React, { useRef } from 'react';
import { PlayCircleIcon } from '@heroicons/react/24/outline';
import { useInView, motion } from 'framer-motion';

const OverlayWithText = ({
  background,
  video,
  headline,
  description,
  headlineColor,
}) => {
  const overlayRef = useRef();
  const overlayInView = useInView(overlayRef);

  const overlayVariants = {
    show: {
      x: 0,
      opacity: 1,
      transition: {
        delay: 0.4,
        type: 'spring',
        stiffness: 400,
        damping: 45,
        mass: 1.5,
        delayChildren: 0.7,
        staggerChildren: 0.5,
      },
    },
    hide: {
      x: -200,
      opacity: 0,
    },
  };

  const children = {
    show: {
      opacity: 1,
      transition: {
        ease: 'easeInOut',
        duration: 0.4,
      },
    },
    hide: {
      opacity: 1,
    },
  };

  return (
    <motion.div
      className='relative'
      variants={overlayVariants}
      initial='hide'
      animate={overlayInView ? 'show' : 'hide'}
      ref={overlayRef}
    >
      <div
        className='w-full h-80 rounded-lg'
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className='flex justify-center items-center rounded-md h-full'>
          {' '}
          {video && (
            <PlayCircleIcon className='w-32 h-32 lg:w-52 lg:h-52 stroke-white/50 stroke-1' />
          )}
        </div>
      </div>
      <div className='flex flex-col items-center gap-2 -mt-4 relative text-center px-4'>
        <div
          className={`font-oswald font-medium text-3xl uppercase tracking-[.2em] ${headlineColor}`}
        >
          {headline}
        </div>
        <div className='text-slate-500 leading-snug'>{description}</div>
      </div>
    </motion.div>
  );
};

export default OverlayWithText;
