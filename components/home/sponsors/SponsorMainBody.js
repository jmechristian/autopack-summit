import React from 'react';
import PlatinumSponsorBlock from './PlatinumSponsorBlock';
import SponsorBlock from './SponsorBlock';

const SponsorMainBody = () => {
  return (
    <div className='default_wrapper'>
      <div className='flex flex-col gap-12'>
        <PlatinumSponsorBlock />
        <SponsorBlock />
      </div>
    </div>
  );
};

export default SponsorMainBody;
