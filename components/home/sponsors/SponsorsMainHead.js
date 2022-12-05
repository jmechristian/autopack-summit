import React, { useRef } from 'react';
import LeftTextCTA from '../../../shared/LeftTextCTA';

const SponsorsMainHead = () => {
  return (
    <div className='bg-slate-300'>
      <div className='default_wrapper grid grid-cols-1 lg:grid-cols-5 gap-y-10 items-center'>
        <LeftTextCTA
          subColor='yellow'
          headlineColor='blue'
          textColor='gray'
          text='Experience the premier open forum for OEMs to discuss their packaging innovations and challenges.'
          subText='Thank You'
          headlineText='Sponsors'
          buttonText='Become a Sponsor'
        />
      </div>
    </div>
  );
};

export default SponsorsMainHead;
