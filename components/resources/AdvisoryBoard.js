import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import AdvisorModal from '../../shared/AdvisorModal';

const AdvisoryBoard = ({ headline, subheadline, text, advisors }) => {
  const [isOpen, setIsOpen] = useState(false);
  const textRef = useRef();
  const textInView = useInView(textRef);
  const [isAdvisor, setIsAdvisor] = useState(null);

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
      className='w-full max-w-7xl mt-3 mx-auto relative h-full p-10 flex flex-col gap-8 lg:gap-12 xl:overflow-visible bg-white rounded-2xl border-2 border-black'
      id='speakers'
    >
      <div className='flex flex-col gap-6 max-w-7xl mx-auto'>
        <motion.div
          className='flex flex-col items-center xl:gap-2 mx-auto'
          ref={textRef}
        >
          <motion.div className='font-oswald uppercase text-lg md:text-xl xl:text-2xl'>
            {subheadline}
          </motion.div>
          <motion.div className='font-oswald font-medium uppercase text-4xl md:text-5xl xl:text-6xl xl:text-center'>
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
          className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:lg:grid-cols-4'
        >
          {advisors.map((person, index) => (
            <li
              key={index}
              className='col-span-1 flex flex-col divide-y divide-gray-200 bg-white rounded-2xl border-2 border-black text-center shadow-[4px_6px_0_black]'
            >
              <div
                className='flex flex-1 flex-col p-8'
                onClick={() => {
                  setIsAdvisor(person);
                  setIsOpen(true);
                }}
              >
                <img
                  className='mx-auto h-32 w-auto flex-shrink-0 rounded-full'
                  src={person.profilePic}
                  alt=''
                />
                <h3 className='mt-6 text-base font-medium text-gray-900'>
                  {person.name}
                </h3>
                <dl className='mt-1 flex flex-grow flex-col justify-between'>
                  <dt className='sr-only'>Title</dt>
                  <dd className='text-base text-gray-500'>{person.title}</dd>
                  <dt className='sr-only'>Role</dt>
                  <dd className='mt-3 bg-ap-darkblue border-2 border-black leading-tight rounded  px-2 py-2  '>
                    <span className=' text-white font-medium text-sm leading-tight '>
                      {person.company}
                    </span>
                  </dd>
                </dl>
              </div>
            </li>
          ))}
        </ul>
      </div>
      {isAdvisor && (
        <AdvisorModal
          open={isOpen}
          close={() => setIsOpen(false)}
          person={isAdvisor}
        />
      )}
    </div>
  );
};

export default AdvisoryBoard;
