import React from 'react';
import { navMenu } from '../../../../../data/navigation';

const FooterNav = () => {
  return (
    <div className='px-6'>
      <div className='grid grid-cols-2 gap-y-3'>
        {navMenu.map((item, i) => (
          <div className='text-white font-medium md:text-lg' key={item.name}>
            <a href={item.link}>{item.name}</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FooterNav;
