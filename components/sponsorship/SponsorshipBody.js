import React from 'react';
import { openSponsorForm } from '../../features/layout/layoutSlice';
import { useDispatch } from 'react-redux';
import LeftTextCTA from '../../shared/LeftTextCTA';
import OverlayWithText from '../../shared/OverlayWithText';

const SponsorshipBody = () => {
  const dispatch = useDispatch();

  return (
    <div className='w-full mt-28 md:mt-48 lg:mt-12 xl:mt-24'>
      <div className='default_wrapper flex flex-col md:flex-row gap-12 md:gap-16 lg:gap-32 xl:gap-48'>
        <div className='flex flex-col gap-16 md:gap-28 lg:gap-60 xl:gap-80 lg:w-1/2'>
          <LeftTextCTA
            subColor='blue'
            subText='Sponsorship Has'
            headlineColor='yellow'
            headlineText="It's Perks"
            text='Experience the premier open forum for OEMs to discuss their packaging innovations and challenges. '
            textColor='gray'
            buttonText='Learn more about sponsorship opportunities'
            buttonColor='blue'
            hasButton
            fn={() => dispatch(openSponsorForm())}
          />
          <OverlayWithText
            background='https://res.cloudinary.com/dno7xxmmy/image/upload/v1670532282/AutoPack%20Summit/header_2_red_i21vhs.png'
            headline='Evolve Your Network'
            description='Generate lucrative, highly targeted business leads and support current and future
            sales campaigns.'
            video='assets/video/sponsor2.mp4'
            headlineColor='text-ap-blue'
          />
        </div>
        <div className='flex flex-col gap-16 md:gap-24 lg:gap-40 md:mt-32 lg:mt-72 lg:w-1/2'>
          <OverlayWithText
            background='https://res.cloudinary.com/dno7xxmmy/image/upload/v1670532997/AutoPack%20Summit/header_3_yellow_xezbtb.png'
            headline='Strengthen Your Brand Name'
            description='This industry relies heavily on trust and reputation, show your prospects you are reliable, trustworthy and serious about their growth.'
            video='assets/video/sponsor3.mp4'
            headlineColor='text-ap-darkblue'
          />
          <OverlayWithText
            background='https://res.cloudinary.com/dno7xxmmy/image/upload/v1670533262/AutoPack%20Summit/header_5_blue_ti2stu.png'
            headline='Stay Top Of Mind'
            description='Create positive PR and raise awareness of your organization. Leave a lasting impression that will outlive the summit. '
            video='assets/video/sponsor4.mp4'
            headlineColor='text-ap-yellow'
          />
        </div>
      </div>
    </div>
  );
};

export default SponsorshipBody;
