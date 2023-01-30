import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const AdvisoryBoard = ({ headline, subheadline, text, advisors }) => {
  const textRef = useRef();
  const textInView = useInView(textRef);

  const textVariants = {
    show: {
      opacity: 1,
      transition: {
        delay: 0.4,
        ease: 'easeOut',
        duration: 0.3,
      },
    },
    hide: {
      opacity: 0,
    },
  };
  return (
    <div
      className='w-full relative h-full pb-16 md:py-20 lg:pb-28 flex flex-col gap-8 lg:gap-12 xl:overflow-visible'
      id='speakers'
    >
      <div className='flex flex-col gap-6 max-w-7xl mx-auto'>
        <motion.div
          className='flex flex-col items-center xl:gap-2 mx-auto'
          ref={textRef}
          variants={textVariants}
          initial='hide'
          animate={textInView ? 'show' : 'hide'}
        >
          <motion.div className='blue_subheadline text-lg md:text-xl xl:text-2xl'>
            {subheadline}
          </motion.div>
          <motion.div className='yellow_headline text-4xl md:text-5xl xl:text-6xl xl:text-center'>
            {headline}
          </motion.div>
          <motion.div className='text-white text-center max-w-prose px-8 mt-4 lg:text-lg'>
            {text}
          </motion.div>
        </motion.div>
      </div>
      <div className='max-w-6xl mx-auto'>
        <ul
          role='list'
          className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
        >
          {advisors.map((person) => (
            <li
              key={person.email}
              className='col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow'
            >
              <div className='flex flex-1 flex-col p-8'>
                <img
                  className='mx-auto h-32 w-auto flex-shrink-0 rounded-full'
                  src={person.profilePic}
                  alt=''
                />
                <h3 className='mt-6 text-sm font-medium text-gray-900'>
                  {person.name}
                </h3>
                <dl className='mt-1 flex flex-grow flex-col justify-between'>
                  <dt className='sr-only'>Title</dt>
                  <dd className='text-sm text-gray-500'>{person.title}</dd>
                  <dt className='sr-only'>Role</dt>
                  <dd className='mt-3'>
                    <span className='rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800'>
                      {person.company}
                    </span>
                  </dd>
                </dl>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdvisoryBoard;
