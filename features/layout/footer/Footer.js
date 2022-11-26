import React from 'react';
import FooterHeadline from './FooterHeadline';
import FooterImageGallery from './FooterImageGallery';

const Footer = () => {
  return (
    <div className='bg-ap-darkblue'>
      <div className='pb-8 pt-4'>
        <div className='flex flex-col gap-12'>
          <FooterHeadline />
          <FooterImageGallery />
        </div>
      </div>
    </div>
  );
};

export default Footer;
