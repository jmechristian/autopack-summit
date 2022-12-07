import React from 'react';
import SponsorshipBody from '../components/sponsorship/SponsorshipBody';
import SponsorshipHead from '../components/sponsorship/SponsorshipHead';

const sponsorship = () => {
  return (
    <div className='w-full relative overflow-hidden'>
      <SponsorshipHead />
      <SponsorshipBody />
    </div>
  );
};

export default sponsorship;
