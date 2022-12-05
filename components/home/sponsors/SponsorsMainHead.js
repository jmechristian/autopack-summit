import React, { useRef } from 'react';
import LeftTextCTA from '../../../shared/LeftTextCTA';
import TitleSponsorBody from './TitleSponsorBody';
import TitleSponsorHead from './TitleSponsorHead';

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
        <div className='w-full h-full bg-bgImage_blue p-6 rounded-lg bg-cover bg-center'>
          <div className='bg-white/80 backdrop-blur rounded-lg px-6 py-8 flex flex-col gap-5 drop-shadow-lg'>
            <TitleSponsorHead />
            <TitleSponsorBody />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SponsorsMainHead;
