import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import OverlayWithText from '../../shared/OverlayWithText';

const WhyMain = () => {
  const whyHeadlineRef = useRef();
  const whyInView = useInView(whyHeadlineRef);

  const whyHeadlineVariants = {
    show: {
      opacity: 1,
      transition: {
        delay: 0.5,
        ease: 'easeInOut',
        duration: 0.3,
      },
    },
    hide: {
      opacity: 0,
    },
  };

  return (
    <div className='w-full h-full relative'>
      <div className='py-12 px-8 max-w-7xl grid grid-cols-1 gap-y-12'>
        <motion.div
          className='flex flex-col items-center xl:gap-2 mx-auto'
          ref={whyHeadlineRef}
          variants={whyHeadlineVariants}
          initial='hide'
          animate={whyInView ? 'show' : 'hide'}
        >
          <motion.div className='blue_subheadline text-lg md:text-xl xl:text-2xl'>
            More Than Just A
          </motion.div>
          <motion.div className='yellow_headline text-4xl md:text-5xl xl:text-6xl xl:text-center'>
            Conference
          </motion.div>
        </motion.div>
        <div className='flex flex-col gap-12'>
          <OverlayWithText
            background='https://res.cloudinary.com/dno7xxmmy/image/upload/v1669772597/AutoPack%20Summit/IMG_2782_adqxqf.webp'
            headline='Strategize'
            description='Learn cutting edge industry knowledge and trends by attending our educational sessions.'
            video='#'
            headlineColor='text-ap-blue'
          />
          <OverlayWithText
            background='https://res.cloudinary.com/dno7xxmmy/image/upload/v1669772597/AutoPack%20Summit/IMG_2874_iijxzx.webp'
            headline='Collaborate'
            description='Learn cutting edge industry knowledge and trends by attending our educational sessions.'
            video='#'
            headlineColor='text-ap-darkblue'
          />
          <OverlayWithText
            background='https://res.cloudinary.com/dno7xxmmy/image/upload/v1669772597/AutoPack%20Summit/IMG_2022_hbtevz.webp'
            headline='Innovate'
            description='Learn cutting edge industry knowledge and trends by attending our educational sessions.'
            video='#'
            headlineColor='text-ap-yellow'
          />
        </div>
      </div>
    </div>
  );
};

export default WhyMain;
