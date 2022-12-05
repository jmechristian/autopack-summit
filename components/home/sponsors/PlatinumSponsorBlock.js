import React from 'react';
import Sponsor from './Sponsor';

const PlatinumSponsorBlock = () => {
  return (
    <div className='flex flex-col gap-5 md:gap-6'>
      <div className='border-b border-b-slate-500 pb-2 font-bold tracking-widest uppercase text-sm lg:text-lg'>
        Platinum
      </div>
      <div className='grid grid-flow-col md:grid-cols-3 lg:grid-cols-4 gap-x-10 md:gap-x-12 w-full'>
        <Sponsor
          logo='https://res.cloudinary.com/dno7xxmmy/image/upload/v1670254640/AutoPack%20Summit/packfab_jnjrix.png'
          w={360}
          h={75}
          url='https://www.pakfab.com/'
          alt='PakFab Logo'
        />
        <Sponsor
          logo='https://res.cloudinary.com/dno7xxmmy/image/upload/v1670254640/AutoPack%20Summit/packiq_ejthac.png'
          w={500}
          h={164}
          alt='PackIQ Logo'
          url='https://www.packiq.com/'
        />
      </div>
    </div>
  );
};

export default PlatinumSponsorBlock;
