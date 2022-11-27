import React from 'react';
import { SocialIcon } from 'react-social-icons';

const FooterSocials = () => {
  return (
    <div className='flex gap-3'>
      <div>
        <SocialIcon
          url='https://www.facebook.com/packagingschool/'
          style={{ height: 30, width: 30 }}
          bgColor='#1e293b'
        />
      </div>
      <div>
        <SocialIcon
          url='https://twitter.com/PackagingSchool'
          style={{ height: 30, width: 30 }}
          bgColor='#1e293b'
        />
      </div>
      <div>
        <SocialIcon
          url='https://www.linkedin.com/school/the-packaging-school-llc'
          style={{ height: 30, width: 30 }}
          bgColor='#1e293b'
        />
      </div>
      <div>
        <SocialIcon
          url='https://www.youtube.com/packagingschool'
          style={{ height: 30, width: 30 }}
          bgColor='#1e293b'
        />
      </div>
      <div>
        <SocialIcon
          url='https://www.instagram.com/packagingschool/'
          style={{ height: 30, width: 30 }}
          bgColor='#1e293b'
        />
      </div>
      <div>
        <SocialIcon
          url='https://www.tiktok.com/@thepackagingschool'
          style={{ height: 30, width: 30 }}
          bgColor='#1e293b'
        />
      </div>
    </div>
  );
};

export default FooterSocials;
