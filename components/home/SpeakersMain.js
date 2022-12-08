import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import SpeakerBlock from '../../shared/SpeakerBlock';

const SpeakersMain = () => {
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
      className='bg-ap-darkblue w-full relative h-full py-16 md:py-20 flex flex-col gap-8 overflow-hidden scroll-mt-72'
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
            subject-matter
          </motion.div>
          <motion.div className='yellow_headline text-4xl md:text-5xl xl:text-6xl xl:text-center'>
            Experts
          </motion.div>
          <motion.div className='text-white text-center max-w-prose px-8 mt-4'>
            Experience the premier open forum for OEMs to discuss their
            packaging innovations and challenges.
          </motion.div>
        </motion.div>
      </div>
      <div
        className='grid grid-flow-col lg:grid-cols-3 xl:grid-cols-4 lg:grid-flow-dense overflow-scroll px-8 md:px-16 lg:px-20 gap-x-5 lg:gap-y-12 lg:gap-x-12 max-w-7xl lg:mx-auto'
        id='scrollers'
      >
        <SpeakerBlock
          name='Gauri Awalgaonkar'
          url='https://res.cloudinary.com/dno7xxmmy/image/upload/v1670528114/AutoPack%20Summit/speaker2_kadaef.webp'
          title='Packaging Engineer'
          company='Bosch LLC'
        />
        <SpeakerBlock
          name='David Kruger'
          url='https://res.cloudinary.com/dno7xxmmy/image/upload/v1670528453/AutoPack%20Summit/speaker3_de3kts.webp'
          title='President'
          company='TriEnda Holdings'
        />
        <SpeakerBlock
          name='Alondra Lizbeth Compeán García'
          url='https://res.cloudinary.com/dno7xxmmy/image/upload/v1670528653/AutoPack%20Summit/speaker4_os0kam.webp'
          title='US logistics Specialist'
          company='Nissan Mexico'
        />
        <SpeakerBlock
          name='Gauri Awalgaonkar'
          url='https://res.cloudinary.com/dno7xxmmy/image/upload/v1670528114/AutoPack%20Summit/speaker2_kadaef.webp'
          title='Packaging Engineer'
          company='Bosch LLC'
        />
        <SpeakerBlock
          name='David Kruger'
          url='https://res.cloudinary.com/dno7xxmmy/image/upload/v1670528453/AutoPack%20Summit/speaker3_de3kts.webp'
          title='President'
          company='TriEnda Holdings'
        />
        <SpeakerBlock
          name='Alondra Lizbeth Compeán García'
          url='https://res.cloudinary.com/dno7xxmmy/image/upload/v1670528653/AutoPack%20Summit/speaker4_os0kam.webp'
          title='US logistics Specialist'
          company='Nissan Mexico'
        />
        <SpeakerBlock
          name='Gauri Awalgaonkar'
          url='https://res.cloudinary.com/dno7xxmmy/image/upload/v1670528114/AutoPack%20Summit/speaker2_kadaef.webp'
          title='Packaging Engineer'
          company='Bosch LLC'
        />
        <SpeakerBlock
          name='David Kruger'
          url='https://res.cloudinary.com/dno7xxmmy/image/upload/v1670528453/AutoPack%20Summit/speaker3_de3kts.webp'
          title='President'
          company='TriEnda Holdings'
        />
      </div>
    </div>
  );
};

export default SpeakersMain;
