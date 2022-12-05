import React from 'react';
import Sponsor from './Sponsor';

const PlatinumSponsorBlock = () => {
  return (
    <div className='flex flex-col gap-3'>
      <div className='border-b border-b-slate-500 pb-2 font-bold tracking-widest uppercase text-sm'>
        Platinum
      </div>
      <div className='grid grid-flow-col gap-x-10 w-full'>
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
