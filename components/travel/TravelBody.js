import React from 'react';
import LeftTextCTA from '../../shared/LeftTextCTA';
import OverlayWithText from '../../shared/OverlayWithText';

const TravelBody = () => {
  return (
    <div className='w-full mt-20 md:mt-52 lg:mt-12 xl:mt-24'>
      <div className='default_wrapper flex flex-col md:flex-row gap-12 md:gap-16 lg:gap-32 xl:gap-48'>
        <div className='flex flex-col gap-16 md:gap-28 lg:gap-60 xl:gap-80 lg:w-1/2'>
          <LeftTextCTA
            subColor='blue'
            subText='Small Town'
            headlineColor='yellow'
            headlineText='Big Energy'
            text='Experience the premier open forum for OEMs to discuss their packaging innovations and challenges. '
            textColor='gray'
            buttonText='Join the Sponsorship Roster'
            buttonColor='blue'
            hasButton={false}
          />
          <OverlayWithText
            background='https://res.cloudinary.com/dno7xxmmy/image/upload/v1669772597/AutoPack%20Summit/IMG_2022_hbtevz.webp'
            headline='Innovate'
            description='Learn cutting edge industry knowledge and trends by attending our educational sessions.'
            video='#'
            headlineColor='text-ap-yellow'
          />
        </div>
        <div className='flex flex-col gap-16 md:gap-24 lg:gap-40 md:mt-32 lg:mt-56 lg:w-1/2'>
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

export default TravelBody;