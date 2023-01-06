import React from 'react';
import SponsorshipBody from '../components/sponsorship/SponsorshipBody';
import SponsorshipHead from '../components/sponsorship/SponsorshipHead';
import Callout from '../shared/Callout';

const sponsorship = () => {
  return (
    <div className='w-full relative overflow-hidden'>
      <SponsorshipHead />
      <SponsorshipBody />
      <Callout />
    </div>
  );
};

export default sponsorship;
