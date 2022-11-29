import React from 'react';
import { navMenu } from '../../../data/navigation';
import Link from 'next/link';

const HeaderNav = () => {
  const menuLinks = navMenu.slice(0, 5);

  return (
    <div className='flex gap-8 justify-between items-center'>
      <div className='flex gap-6'>
        {menuLinks.map((item, i) => (
          <div className='text-white font-medium' key={item.name}>
            <Link href={item.link}>{item.name}</Link>
          </div>
        ))}
      </div>
      <div className='flex gap-2'>
        <button className='bg-ap-yellow rounded drop-shadow-md'>
          <div className='py-2 px-4 font-bold font-oswald uppercase tracking-wider text-slate-800'>
            Register Now!
          </div>
        </button>
      </div>
    </div>
  );
};

export default HeaderNav;
