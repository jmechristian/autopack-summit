import React from 'react';
import Image from 'next/image';
import { SocialIcon } from 'react-social-icons';

const TitleSponsorHead = () => {
  return (
    <div className='flex flex-col gap-3 items-center'>
      <div className='blue_subheadline text-sm'>Our Title Sponsor</div>
      <Image
        src='https://apsmedia.s3.amazonaws.com/images/sponsors/TriEnda-Logo.png'
        width={400}
        height={184}
        alt='TriEnda Logo'
      />
      <div className='flex gap-2'>
        <SocialIcon
          url='https://www.facebook.com/BestPlasticThermoformer/'
          style={{ height: 24, width: 24 }}
        />
        <SocialIcon
          url='https://twitter.com/triendaholdings'
          style={{ height: 24, width: 24 }}
        />
        <SocialIcon
          url='https://www.youtube.com/channel/UCvNw-3TiTq_cLkQiZV2GEqA'
          style={{ height: 24, width: 24 }}
        />
        <SocialIcon
          url='https://www.linkedin.com/company/trienda-corporation/'
          style={{ height: 24, width: 24 }}
        />
      </div>
    </div>
  );
};

export default TitleSponsorHead;
