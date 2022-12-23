import React, { useRef } from 'react';
import PlatinumSponsorBlock from './PlatinumSponsorBlock';
import GoldSponsorBlock from './GoldSponsorBlock';
import SilverSponsorBlock from './SilverSponsorBlock';
import HighTopSponsorBlock from './HighTopSponsorBlock';
import { motion, useInView } from 'framer-motion';

const SponsorMainBody = ({ sponsors }) => {
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

  const filterSponsors = (tier) => {
    return sponsors.filter((item) => item.teir === tier);
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
        <PlatinumSponsorBlock platinum={filterSponsors('platinum')} />
        <GoldSponsorBlock gold={filterSponsors('gold')} />
        <SilverSponsorBlock silver={filterSponsors('silver')} />
        <HighTopSponsorBlock highTop={filterSponsors('highTop')} />
      </motion.div>
    </div>
  );
};

export default SponsorMainBody;
