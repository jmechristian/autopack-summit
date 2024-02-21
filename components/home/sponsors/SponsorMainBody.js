import React, { useRef } from 'react';
import PlatinumSponsorBlock from './PlatinumSponsorBlock';
import GoldSponsorBlock from './GoldSponsorBlock';
import SilverSponsorBlock from './SilverSponsorBlock';
import HighTopSponsorBlock from './HighTopSponsorBlock';
import { motion, useInView } from 'framer-motion';
import ExhibitorSponsors from './ExhibitorsSponsors';

const SponsorMainBody = ({ sponsors }) => {
  console.log(sponsors);
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
    <div className='max-w-7xl mx-auto py-20 px-5 xl:px-0'>
      <motion.div
        className='flex flex-col gap-12 md:gap-16 lg:gap-24'
        // variants={sponsorVariants}
        // initial='hide'
        // animate={sponsorInView ? 'show' : 'hide'}
        // ref={sponsorBodyRef}
      >
        <ExhibitorSponsors highTop={filterSponsors('exhibitor')} />
        <GoldSponsorBlock gold={filterSponsors('sponsor')} />
      </motion.div>
    </div>
  );
};

export default SponsorMainBody;
