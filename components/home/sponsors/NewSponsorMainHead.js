import React, { useRef } from 'react';
import LeftTextCTA from '../../../shared/LeftTextCTA';
import TitleSponsorBody from './TitleSponsorBody';
import TitleSponsorHead from './TitleSponsorHead';
import { motion, useInView } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { openSponsorForm } from '../../../features/layout/layoutSlice';
import {
  MdDiversity3,
  MdPlayArrow,
  MdPlayCircleFilled,
  MdCelebration,
  MdMapsUgc,
} from 'react-icons/md';

const NewSponsorsMainHead = ({ titleSponsor }) => {
  const titleRef = useRef();
  const blockRef = useRef();
  const titleInView = useInView(titleRef);
  const blockInView = useInView(blockRef);

  const dispatch = useDispatch();

  const titleVariants = {
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

  return (
    <div className='max-w-7xl grid grid-cols-1 lg:grid-cols-5 gap-y-10 lg:gap-8 items-center mx-auto px-5 xl:px-0'>
      <motion.div
        className='border-2 border-black shadow-[4px_6px_0_black] bg-amber-400 rounded-2xl w-full h-full lg:col-span-2'
        // ref={blockRef}
        // initial={{ opacity: 0 }}
        // animate={blockInView ? { opacity: 1 } : { opacity: 0 }}
        // transition={{ delay: 0.25, duration: 0.5 }}
      >
        <div className='p-9 flex-1 h-full flex flex-col justify-between'>
          <div className='font-bold text-4xl max-w-xl tracking-tight leading-none'>
            Thank You To Our 2023 Sponsors
          </div>

          <div className='flex flex-col gap-3 pt-6 text-lg leading-snug'>
            <div className='mb-1'>
              With their commitment to the industry, our sponsors and the
              Packaging School continue to amplify the event experience and the
              industry it serves.
            </div>
            <div
              className='flex gap-3 items-center pt-5 border-t border-t-neutral-500 cursor-pointer'
              onClick={() => dispatch(openSponsorForm())}
            >
              <div className='w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center'>
                <div className='-mt-1'>
                  <MdCelebration color='white' size={'24px'} />
                </div>
              </div>
              <div className='font-oswald uppercase font-medium '>
                Get Involved. Become a Sponsor.
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        className='w-full h-full bg-bgImage_blue p-6 rounded-2xl border-2 border-black bg-cover bg-center lg:col-span-3'
        // variants={titleVariants}
        // initial='hide'
        // animate={titleInView ? 'show' : 'hide'}
        // ref={titleRef}
      >
        <div className='bg-white/80 backdrop-blur rounded-2xl border-2 border-black px-6 py-8 flex flex-col gap-5 drop-shadow-lg'>
          <TitleSponsorHead />
          <TitleSponsorBody />
        </div>
      </motion.div>
    </div>
  );
};

export default NewSponsorsMainHead;
