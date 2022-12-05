import React from 'react';
import SponsorMainBody from './SponsorMainBody';
import SponsorsMainHead from './SponsorsMainHead';

const SponsorsMain = () => {
  return (
    <div className='overflow-hidden'>
      <SponsorsMainHead />
      <SponsorMainBody />
    </div>
  );
};

export default SponsorsMain;
