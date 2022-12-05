import React from 'react';
import Sponsor from './Sponsor';

const SponsorBlock = () => {
  return (
    <div className='flex flex-col gap-5'>
      <div className='border-b border-b-slate-500 pb-2 font-bold tracking-widest uppercase text-sm'>
        Gold
      </div>
      <div className='grid grid-cols-3 gap-x-10 gap-y-5 w-full'>
        <Sponsor
          logo='https://res.cloudinary.com/dno7xxmmy/image/upload/v1670257934/AutoPack%20Summit/Atlanticlogositeheader_2x-100-1_b8zahn.webp'
          w={400}
          h={178}
          url='https://www.atlanticpkg.com/'
          alt='Atlantic Packaging Logo'
        />
        <Sponsor
          logo='https://res.cloudinary.com/dno7xxmmy/image/upload/v1670258053/AutoPack%20Summit/ips_packaging_header_logo_large_b0uzbq.webp'
          w={392}
          h={112}
          alt='IPS Packaging Logo'
          url='https://www.ipack.com/'
        />
        <Sponsor
          logo='https://res.cloudinary.com/dno7xxmmy/image/upload/v1670258284/AutoPack%20Summit/variotech_oljzbo.png'
          w={270}
          h={100}
          alt='Variotech Logo'
          url='https://www.variotech.de/en'
        />
        <Sponsor
          logo='https://res.cloudinary.com/dno7xxmmy/image/upload/v1670258986/AutoPack%20Summit/Utz-Quality-Foods-logo_qahcoe.jpg'
          w={400}
          h={244}
          alt='Utz Logo'
          url='https://www.utzsnacks.com/'
        />
      </div>
    </div>
  );
};

export default SponsorBlock;
