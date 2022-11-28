import React from 'react';
import { navMenu } from '../../../../../data/navigation';

const FooterNav = () => {
  return (
    <div className='px-6 xl:px-0'>
      <div className='grid grid-cols-2 gap-y-3 xl:gap-y-6'>
        {navMenu.map((item, i) => (
          <div
            className='text-white font-medium xl:text-xl md:text-lg'
            key={item.name}
          >
            <a href={item.link}>{item.name}</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FooterNav;
