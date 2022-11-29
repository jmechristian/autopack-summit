import React from 'react';
import HeroHeadline from './HeroHeadline';
import HeroInfo from './HeroInfo';
import HeroLogos from './HeroLogos';

const HeroMain = ({ data }) => {
  return (
    <div
      className='w-full pt-36 pb-12  bg-slate-800 relative'
      style={{
        backgroundImage: `url('https://res.cloudinary.com/dno7xxmmy/image/upload/v1669674364/AutoPack%20Summit/main_hero_bujof4.webp')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className='w-full h-full flex flex-col justify-center items-center gap-20'>
        <HeroHeadline
          headline={data[0].heroHeadline}
          subheadline={data[0].heroSubhead}
        />
        <HeroInfo location={data[0].location} date={data[0].date} />
        <HeroLogos logos={data[0].highlightedSponsors} />
      </div>
    </div>
  );
};

export default HeroMain;
