import React from 'react';
import HeroHeadline from './HeroHeadline';
import HeroInfo from './HeroInfo';
import HeroLogos from './HeroLogos';
import HeroText from './HeroText';

const HeroMain = ({ headline, subheadline, text, location, date, logos }) => {
  return (
    <div
      className='w-full pt-52 pb-32 md:pt-56 lg:pb-10 lg:pt-56 xl:pb-12 xl:pt-[17rem] bg-slate-800 relative overflow-hidden'
      style={{
        backgroundImage: `url('https://res.cloudinary.com/dno7xxmmy/image/upload/v1669674364/AutoPack%20Summit/main_hero_bujof4.webp')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className='w-full h-full flex flex-col justify-center items-center gap-32 md:gap-40 lg:gap-44 xl:gap-56'>
        <div className='flex flex-col gap-16 md:gap-24 lg:gap-32 xl:gap-40'>
          <HeroHeadline headline={headline} subheadline={subheadline} />
          <HeroText text={text} />
        </div>
        <div className='flex flex-col lg:flex-row-reverse gap-16 w-full lg:justify-between lg:px-5 xl:px-0 xl:max-w-7xl'>
          <HeroInfo location={location} date={date} />
          <HeroLogos logos={logos} />
        </div>
      </div>
    </div>
  );
};

export default HeroMain;
