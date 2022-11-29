import React from 'react';
import HeroHeadline from './HeroHeadline';
import HeroInfo from './HeroInfo';
import HeroLogos from './HeroLogos';
import HeroText from './HeroText';

const HeroMain = ({ data }) => {
  return (
    <div
      className='w-full pt-36 pb-12 md:pb-16 md:pt-40  bg-slate-800 relative'
      style={{
        backgroundImage: `url('https://res.cloudinary.com/dno7xxmmy/image/upload/v1669674364/AutoPack%20Summit/main_hero_bujof4.webp')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className='w-full h-full flex flex-col justify-center items-center gap-10'>
        <div className='flex flex-col gap-6 md:gap-12'>
          <HeroHeadline
            headline={data[0].heroHeadline}
            subheadline={data[0].heroSubhead}
          />
          <HeroText text={data[0].heroText} />
        </div>
        <HeroInfo location={data[0].location} date={data[0].date} />
      </div>
      <HeroLogos logos={data[0].highlightedSponsors} />
    </div>
  );
};

export default HeroMain;
