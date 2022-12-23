import React, { useRef } from 'react';
import LeftTextCTA from '../../../shared/LeftTextCTA';
import TitleSponsorBody from './TitleSponsorBody';
import TitleSponsorHead from './TitleSponsorHead';
import { motion, useInView } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { openSponsorForm } from '../../../features/layout/layoutSlice';

const SponsorsMainHead = ({ titleSponsor }) => {
  const titleRef = useRef();
  const titleInView = useInView(titleRef);

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
    <div className='bg-slate-300'>
      <div className='default_wrapper grid grid-cols-1 lg:grid-cols-5 gap-y-10 lg:gap-8 items-center mx-auto'>
        <LeftTextCTA
          subColor='yellow'
          headlineColor='blue'
          textColor='gray'
          text='With their commitment to the industry, our sponsors and the Packaging School continue to amplify the event experience and the industry it serves.'
          subText='Thank You'
          headlineText='Sponsors'
          buttonText='Become a Sponsor'
          buttonColor='blue'
          hasButton={true}
          fn={() => dispatch(openSponsorForm())}
        />
        <motion.div
          className='w-full h-full bg-bgImage_blue p-6 rounded-lg bg-cover bg-center lg:col-span-3'
          variants={titleVariants}
          initial='hide'
          animate={titleInView ? 'show' : 'hide'}
          ref={titleRef}
        >
          <div className='bg-white/80 backdrop-blur rounded-lg px-6 py-8 flex flex-col gap-5 drop-shadow-lg'>
            <TitleSponsorHead />
            <TitleSponsorBody />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SponsorsMainHead;
