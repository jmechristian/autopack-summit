import React from 'react';
import Logo from '../../../shared/Logo';
import Divider from '../../../shared/Divider';

const FooterCopyright = () => {
  return (
    <div className='flex flex-col gap-6 px-6 max-w-7xl mx-auto xl:px-0'>
      <Divider />
      <div className='grid grid-cols-5 md:grid-cols-12 gap-x-4 justify-center align-middle py-1'>
        <div className='col-span-2 md:col-span-3 lg:col-span-2'>
          <Logo />
        </div>
        <div className='col-span-3 md:col-span-4 lg:col-span-3 text-[10px] lg:text-xs text-white/70'>
          Copyright © 2015-2022 The Packaging School, LLC. All Rights Reserved.
        </div>
        <div className='hidden md:flex gap-4 md:col-span-5 lg:col-span-7 justify-end'>
          <div className='text-xs text-white/70'>Privacy Policy</div>
          <div className='text-xs text-white/70'>Terms of Use</div>
        </div>
      </div>
      <div className='flex gap-4 md:hidden'>
        <div className='text-xs lg:text-sm text-white/70'>Privacy Policy</div>
        <div className='text-xs lg:text-sm text-white/70'>Terms of Use</div>
      </div>
    </div>
  );
};

export default FooterCopyright;
