import React from 'react';
import PlatinumSponsorBlock from './PlatinumSponsorBlock';
import GoldSponsorBlock from './GoldSponsorBlock';
import SilverSponsorBlock from './SilverSponsorBlock';

const SponsorMainBody = () => {
  return (
    <div className='default_wrapper'>
      <div className='flex flex-col gap-12'>
        <PlatinumSponsorBlock />
        <GoldSponsorBlock />
        <SilverSponsorBlock />
      </div>
    </div>
  );
};

export default SponsorMainBody;
