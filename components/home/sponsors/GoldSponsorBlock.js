import React from 'react';
import Sponsor from './Sponsor';

const GoldSponsorBlock = ({ gold }) => {
  return (
    <div className='flex flex-col gap-5'>
      <div className='border-b border-b-slate-500 pb-2 font-bold tracking-widest uppercase text-sm lg:text-lg'>
        Gold
      </div>
      <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-x-10 gap-y-5 md:gap-x-16 w-full overflow-hidden'>
        {gold &&
          gold.map((item, i) => (
            <div key={i}>
              <Sponsor logo={item.logo} url={item.website} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default GoldSponsorBlock;
