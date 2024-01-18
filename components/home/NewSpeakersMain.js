import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import SpeakerBlock from '../../shared/SpeakerBlock';

const NewSpeakersMain = ({ headline, subheadline, text, speakers }) => {
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
      className='w-full relative h-full flex flex-col gap-8 lg:gap-12 overflow-hidden lg:scroll-mt-72'
      id='speakers'
    >
      <div className='mb-8 px-4'>
        <h2 className='mx-4 mb-2 text-center text-lg font-oswald uppercase font-medium text-neutral-900 md:text-4xl'>
          2023 Subject-Matter Experts
        </h2>
        <p className='text-center mt-2 max-w-lg mx-auto'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          consequatur reprehenderit.
        </p>
      </div>
      <div
        className='grid grid-flow-col lg:grid-cols-3 xl:grid-cols-4 lg:grid-flow-dense overflow-scroll lg:overflow-hidden px-8 md:px-16 lg:px-20 gap-x-5 lg:gap-y-12 lg:gap-x-16 max-w-7xl lg:mx-auto'
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

export default NewSpeakersMain;
