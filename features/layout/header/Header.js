import React from 'react';
import Logo from '../../../shared/Logo';
import { Bars3Icon } from '@heroicons/react/24/solid';

const Header = () => {
  return (
    <div className='w-full bg-ap-darkblue py-4 md:py-5 px-4 md:px-5 drop-shadow'>
      <div className='w-full flex justify-between items-center'>
        <div className='w-28 md:w-32'>
          <Logo />
        </div>
        <div className='flex justify-end gap-2'>
          <div>
            <Bars3Icon className='w-7 h-7 md:w-9 md:h-9 fill-white' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
