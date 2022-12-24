import React from 'react';
import HeroHeadline from './HeroHeadline';
import HeroInfo from './HeroInfo';
import HeroLogos from './HeroLogos';
import HeroText from './HeroText';

const HeroMain = ({ headline, subheadline, text, location, date, logos }) => {
  return (
    <div
      className='w-full h-[90vh] md:h-[85vh] lg:h-[90vh] xl:h-[98vh] pt-52 pb-10 md:pt-56 lg:pb-10 lg:pt-64 xl:pb-12 xl:pt-[18rem] 2xl:pt-[24rem] bg-slate-800 relative overflow-hidden bg-center'
      style={{
        backgroundImage: `url('https://apsmedia.s3.amazonaws.com/images/home_hero_3.webp')`,
        backgroundSize: 'cover',
      }}
    >
      <div className='w-full h-full flex flex-col justify-between items-center'>
        <div className='flex flex-col gap-16 md:gap-32 lg:gap-32 xl:gap-44 2xl:gap-60'>
          <HeroHeadline headline={headline} subheadline={subheadline} />
          <HeroText text={text} />
        </div>
        <div className='flex flex-col w-full lg:justify-center lg:px-5 xl:px-0 xl:max-w-7xl'>
          {/* <HeroInfo location={location} date={date} /> */}
          <HeroLogos logos={logos} />
        </div>
      </div>
    </div>
  );
};

export default HeroMain;
