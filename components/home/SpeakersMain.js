import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import SpeakerBlock from '../../shared/SpeakerBlock';

const SpeakersMain = ({ headline, subheadline, text, speakers }) => {
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
      className='bg-ap-darkblue w-full relative h-full py-16 md:py-20 flex flex-col gap-8 lg:gap-12 overflow-hidden lg:scroll-mt-72'
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
          <motion.div className='white_subheadline text-lg md:text-xl xl:text-2xl'>
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
      <div
        className='grid grid-flow-col lg:grid-cols-3 xl:grid-cols-4 lg:grid-flow-dense overflow-scroll px-8 md:px-16 lg:px-20 gap-x-5 lg:gap-y-12 lg:gap-x-16 max-w-7xl lg:mx-auto'
        id='scrollers'
      >
        {speakers &&
          speakers.map((speaker, i) => (
            <div key={speaker.name} className='mt-2'>
              <SpeakerBlock
                name={speaker.name}
                url={speaker.profilePic ? speaker.profilePic.asset.url : ''}
                title={speaker.title}
                company={speaker.company}
                linkedin={speaker.linkedin}
                bio={speaker.bio}
                session={speaker.speakerSessions}
                id={speaker._id}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default SpeakersMain;
