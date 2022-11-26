import React from 'react';
import Logo from '../../../shared/Logo';
import { Bars3Icon } from '@heroicons/react/24/solid';

const Header = () => {
  return (
    <div className='w-full bg-ap-darkblue py-4 px-4 drop-shadow'>
      <div className='w-full flex justify-between items-center'>
        <div className='w-28'>
          <Logo />
        </div>
        <div className='flex justify-end gap-2'>
          <div>
            <Bars3Icon className='w-7 h-7 fill-white' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
