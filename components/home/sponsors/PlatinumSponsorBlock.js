import React from 'react';
import Sponsor from './Sponsor';

const PlatinumSponsorBlock = ({ platinum }) => {
  return (
    <div className='flex flex-col gap-5 md:gap-6'>
      <div className='border-b border-b-slate-500 pb-2 font-bold tracking-widest uppercase text-sm lg:text-lg'>
        Platinum
      </div>
      <div className='grid grid-flow-col md:grid-cols-3 lg:grid-cols-4 gap-x-10 md:gap-x-12 w-full overflow-hidden'>
        {platinum &&
          platinum.map((item, i) => (
            <div key={i}>
              <Sponsor logo={item.logo?.asset.url} url={item.website} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default PlatinumSponsorBlock;
