import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import OverlayWithText from '../../shared/OverlayWithText';

const WhyMain = ({ headline, subheadline, contentBlocks }) => {
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
      <div className='py-16 md:py-20 lg:py-24 px-8 lg:px-16 max-w-7xl grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-28 xl:gap-x-40  gap-y-12 mx-auto'>
        <div className='flex flex-col gap-12 md:gap-32'>
          <motion.div
            className='flex flex-col items-center xl:gap-2 mx-auto md:mt-16 lg:mt-20'
            ref={whyHeadlineRef}
            variants={whyHeadlineVariants}
            initial='hide'
            animate={whyInView ? 'show' : 'hide'}
          >
            <motion.div className='blue_subheadline text-lg md:text-xl xl:text-2xl'>
              {subheadline}
            </motion.div>
            <motion.div className='yellow_headline text-4xl md:text-5xl xl:text-6xl xl:text-center'>
              {headline}
            </motion.div>
          </motion.div>
          <OverlayWithText
            background='https://res.cloudinary.com/dno7xxmmy/image/upload/v1669772597/AutoPack%20Summit/IMG_2782_adqxqf.webp'
            headline={contentBlocks[1].contentHeadline}
            description={contentBlocks[1].contentBody}
            video='assets/video/strategize.mp4'
            headlineColor='text-ap-blue'
          />
        </div>
        <div className='flex flex-col gap-12 lg:gap-20'>
          <OverlayWithText
            background='https://res.cloudinary.com/dno7xxmmy/image/upload/v1669772597/AutoPack%20Summit/IMG_2874_iijxzx.webp'
            headline={contentBlocks[0].contentHeadline}
            description={contentBlocks[0].contentBody}
            video='assets/video/collaborate.mp4'
            headlineColor='text-ap-darkblue'
          />

          <OverlayWithText
            background='https://res.cloudinary.com/dno7xxmmy/image/upload/v1669772597/AutoPack%20Summit/IMG_2022_hbtevz.webp'
            headline={contentBlocks[2].contentHeadline}
            description={contentBlocks[2].contentBody}
            video='assets/video/innovate.mp4'
            headlineColor='text-ap-yellow'
          />
        </div>
      </div>
    </div>
  );
};

export default WhyMain;
