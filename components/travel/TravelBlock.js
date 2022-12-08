import React, { useRef } from 'react';
import { PlayCircleIcon } from '@heroicons/react/24/solid';
import { useInView, motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { openVideoEmbed } from '../../features/layout/layoutSlice';

const TravelBlock = ({
  background,
  video,
  headline,
  group,
  headlineColor,
  bookNow,
  bookDate,
  line1,
  line2,
}) => {
  const overlayRef = useRef();
  const overlayInView = useInView(overlayRef);
  const dispatch = useDispatch();

  const overlayVariants = {
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
        className='w-full h-80 xl:h-96 rounded-lg relative'
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div
          className='flex justify-center items-center rounded-md h-full'
          onClick={() => dispatch(openVideoEmbed())}
        >
          {' '}
          {video && (
            <PlayCircleIcon className='w-32 h-32 lg:w-40 lg:h-40 fill-white/50 shadow-xl rounded-full backdrop-blur-md' />
          )}
        </div>
        {/* <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-white h-16'></div> */}
      </div>
      <div className='flex flex-col gap-5 justify-center items-center'>
        <div className='flex flex-col items-center gap-2 -mt-3 relative text-center px-4'>
          <div
            className={`font-oswald font-medium text-4xl uppercase tracking-[.18em] ${headlineColor}`}
          >
            {headline}
          </div>
          <div className='text-slate-500 leading-snug xl:px-8 flex flex-col'>
            <div>{line1}</div>
            <div>{line2}</div>
          </div>
        </div>
        {bookNow && (
          <button
            className='bg-ap-darkblue rounded-md w-max'
            onClick={() => window.open(bookNow, '_blank')}
          >
            <div className='flex flex-col px-6 py-4 '>
              <div className='font-bold text-xl uppercase text-white tracking-widest'>
                Book Now
              </div>
              <div className='text-sm text-white/70'>
                Must book by {bookDate}
              </div>
            </div>
          </button>
        )}
      </div>
      <div className='absolute top-4 left-4 bg-white/30 backdrop-blur-md rounded-md drop-shadow-lg'>
        <div className='text-white font-bold text-sm lg:text-base py-3 px-4'>
          Group Rates: ${group}/night
        </div>
      </div>
    </motion.div>
  );
};

export default TravelBlock;
