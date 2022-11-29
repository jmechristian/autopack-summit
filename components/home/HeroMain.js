import React from 'react';
import HeroHeadline from './HeroHeadline';
import HeroInfo from './HeroInfo';
import HeroLogos from './HeroLogos';
import HeroText from './HeroText';

const HeroMain = ({ data }) => {
  return (
    <div
      className='w-full pt-36 pb-32 md:pt-40 lg:pb-20 lg:pt-48 xl:pb-12 xl:pt-72  bg-slate-800 relative'
      style={{
        backgroundImage: `url('https://res.cloudinary.com/dno7xxmmy/image/upload/v1669674364/AutoPack%20Summit/main_hero_bujof4.webp')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className='w-full h-full flex flex-col justify-center items-center gap-20 lg:gap-44 xl:gap-52'>
        <div className='flex flex-col gap-16 md:gap-28 lg:gap-32 xl:gap-40'>
          <HeroHeadline
            headline={data[0].heroHeadline}
            subheadline={data[0].heroSubhead}
          />
          <HeroText text={data[0].heroText} />
        </div>
        <div className='flex flex-col lg:flex-row-reverse gap-16 w-full lg:justify-between lg:px-12 xl:px-0 xl:max-w-7xl'>
          <HeroInfo location={data[0].location} date={data[0].date} />
          <HeroLogos logos={data[0].highlightedSponsors} />
        </div>
      </div>
    </div>
  );
};

export default HeroMain;
