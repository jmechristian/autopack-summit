import React from 'react';
import Logo from '../../../shared/Logo';
import { Bars3Icon } from '@heroicons/react/24/solid';
import HeaderNav from './HeaderNav';

const Header = ({ openMenu }) => {
  return (
    <div className='w-full bg-ap-darkblue py-4 md:py-5 lg:py-6 px-4 md:px-5 xl:px-0 drop-shadow'>
      <div className='w-full flex justify-between items-center xl:max-w-7xl mx-auto'>
        <div className='w-28 md:w-32 lg:w-40 xl:w-44 '>
          <Logo />
        </div>
        <div className='flex justify-end gap-2'>
          <div className='xl:hidden' onClick={() => openMenu()}>
            <Bars3Icon className='w-7 h-7 md:w-9 md:h-9 fill-white' />
          </div>
          <div className='hidden xl:flex'>
            <HeaderNav />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
