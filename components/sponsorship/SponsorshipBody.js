import React from 'react';
import LeftTextCTA from '../../shared/LeftTextCTA';
import OverlayWithText from '../../shared/OverlayWithText';

const SponsorshipBody = () => {
  return (
    <div className='w-full mt-28 lg:mt-12 xl:mt-16'>
      <div className='default_wrapper flex flex-col md:flex-row gap-12 md:gap-16 lg:gap-32 xl:gap-40'>
        <div className='flex flex-col gap-16 md:gap-28 lg:gap-40 xl:gap-52'>
          <LeftTextCTA
            subColor='blue'
            subText='Sponsorship Has'
            headlineColor='yellow'
            headlineText='Its Perks'
            text='Experience the premier open forum for OEMs to discuss their packaging innovations and challenges. '
            textColor='gray'
            buttonText='Join the Sponsorship Roster'
            buttonColor='blue'
          />
          <OverlayWithText
            background='https://res.cloudinary.com/dno7xxmmy/image/upload/v1669772597/AutoPack%20Summit/IMG_2022_hbtevz.webp'
            headline='Innovate'
            description='Learn cutting edge industry knowledge and trends by attending our educational sessions.'
            video='#'
            headlineColor='text-ap-yellow'
          />
        </div>
        <div className='flex flex-col gap-16 md:gap-24 lg:gap-40 md:mt-24 lg:mt-60'>
          <OverlayWithText
            background='https://res.cloudinary.com/dno7xxmmy/image/upload/v1669772597/AutoPack%20Summit/IMG_2022_hbtevz.webp'
            headline='Innovate'
            description='Learn cutting edge industry knowledge and trends by attending our educational sessions.'
            video='#'
            headlineColor='text-ap-yellow'
          />
          <OverlayWithText
            background='https://res.cloudinary.com/dno7xxmmy/image/upload/v1669772597/AutoPack%20Summit/IMG_2022_hbtevz.webp'
            headline='Innovate'
            description='Learn cutting edge industry knowledge and trends by attending our educational sessions.'
            video='#'
            headlineColor='text-ap-yellow'
          />
        </div>
      </div>
    </div>
  );
};

export default SponsorshipBody;
