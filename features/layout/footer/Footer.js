import React from 'react';
import FooterHeadline from './FooterHeadline';
import FooterImageGallery from './FooterImageGallery';
import FooterNav from './FooterNav';
import FooterSubscribe from './FooterSubscribe';
import FooterCopyright from './FooterCopyright';

const Footer = () => {
  return (
    <div className='bg-ap-darkblue'>
      <div className='pb-8 pt-6'>
        <div className='flex flex-col gap-12 md:gap-16'>
          <FooterHeadline />
          <FooterImageGallery />
          <div className='grid grid-cols-1 md:grid-cols-5 gap-y-6 md:gap-y-0 md:gap-x-6'>
            <div className='md:col-span-3'>
              <FooterSubscribe />
            </div>
            <div className='md:col-span-2'>
              <FooterNav />
            </div>
          </div>
          <FooterCopyright />
        </div>
      </div>
    </div>
  );
};

export default Footer;
