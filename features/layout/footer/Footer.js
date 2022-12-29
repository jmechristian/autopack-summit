import React from 'react';
import FooterHeadline from './FooterHeadline';
import FooterImageGallery from './FooterImageGallery';
import FooterNav from './FooterNav';
import FooterSubscribe from './FooterSubscribe';
import FooterCopyright from './FooterCopyright';

const Footer = ({ footerImages }) => {
  return (
    <div className='bg-ap-darkblue'>
      <div className='pb-8 pt-6 lg:pt-10 xl:pt-16'>
        <div className='flex flex-col gap-16'>
          {/* <FooterHeadline /> */}
          <FooterImageGallery images={footerImages} />
          <div className='grid grid-cols-1 md:grid-cols-5 xl:grid-cols-6 xl:content-between gap-y-6 md:gap-y-0 md:gap-x-6 max-w-7xl mx-auto'>
            <div className='md:col-span-3 xl:col-span-3'>
              <FooterSubscribe />
            </div>
            <div className='md:col-span-2 xl:col-start-5'>
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
