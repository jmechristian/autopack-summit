import React, { useRef } from 'react';
import PlatinumSponsorBlock from './PlatinumSponsorBlock';
import GoldSponsorBlock from './GoldSponsorBlock';
import SilverSponsorBlock from './SilverSponsorBlock';
import { motion, useInView } from 'framer-motion';

const SponsorMainBody = () => {
  const sponsorBodyRef = useRef();
  const sponsorInView = useInView(sponsorBodyRef);

  const sponsorVariants = {
    show: {
      opacity: 1,
      transition: {
        delay: 0.2,
        duration: 0.4,
        ease: 'easeOut',
      },
    },
    hide: {
      opacity: 0,
    },
  };

  return (
    <div className='default_wrapper'>
      <motion.div
        className='flex flex-col gap-12 md:gap-16 lg:gap-24'
        variants={sponsorVariants}
        initial='hide'
        animate={sponsorInView ? 'show' : 'hide'}
        ref={sponsorBodyRef}
      >
        <PlatinumSponsorBlock />
        <GoldSponsorBlock />
        <SilverSponsorBlock />
      </motion.div>
    </div>
  );
};

export default SponsorMainBody;
