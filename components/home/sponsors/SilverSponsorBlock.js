import React from 'react';
import Sponsor from './Sponsor';

const SilverSponsorBlock = ({ silver }) => {
  return (
    <div className='flex flex-col gap-5 md:gap-6'>
      <div className='border-b border-b-slate-500 pb-2 font-bold tracking-widest uppercase text-sm lg:text-lg'>
        Silver
      </div>
      <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-10 md:gap-x-16 gap-y-5 md:gap-y-10 w-full overflow-hidden'>
        {silver &&
          silver.map((item, i) => (
            <div key={i}>
              <Sponsor logo={item.logo} url={item.website} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default SilverSponsorBlock;
