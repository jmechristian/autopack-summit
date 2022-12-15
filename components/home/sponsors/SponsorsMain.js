import React from 'react';
import SponsorMainBody from './SponsorMainBody';
import SponsorsMainHead from './SponsorsMainHead';

const SponsorsMain = ({ sponsors }) => {
  return (
    <div className='overflow-hidden'>
      <SponsorsMainHead />
      <SponsorMainBody sponsors={sponsors} />
    </div>
  );
};

export default SponsorsMain;
