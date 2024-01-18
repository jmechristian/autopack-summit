import React from 'react';
import HeroHeadline from './HeroHeadline';
import HeroLogos from './HeroLogos';
import HeroText from './HeroText';

const HeroMain = ({ headline, subheadline, text, location, date, logos }) => {
  return (
    <>
      <div className='h-24 bg-white w-full'></div>
      <div
        className='w-full flex flex-col justify-center items-center h-[90vh] md:h-[85vh] lg:h-[96vh] xl:h-[96vh] bg-slate-800 relative overflow-hidden bg-[70%]'
        style={{
          backgroundImage: `url('https://apsmedia.s3.amazonaws.com/images/home_hero_3.webp')`,
          backgroundSize: 'cover',
        }}
      >
        <div className='flex flex-col items-center'>
          <div className='flex flex-col gap-16 md:gap-32 lg:gap-32 xl:gap-40'>
            <HeroHeadline headline={headline} subheadline={subheadline} />
            <HeroText text={text} />
          </div>
          <div className='absolute bottom-5 md:bottom-8 xl:bottom-10 z-10 flex flex-col w-full lg:justify-center xl:px-0'>
            {/* <HeroInfo location={location} date={date} /> */}
            <HeroLogos logos={logos} />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroMain;
