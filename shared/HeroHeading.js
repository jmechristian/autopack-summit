import React from 'react';

const HeroHeading = ({ headline, subheadline }) => {
  return (
    <div className='w-full rounded-2xl mb-8 border-neutral-900 border-4 p-9 flex flex-col lg:flex-row gap-4 md:justify-between bg-white shadow-[12px_16px_0_black] lg:pt-24 lg:pb-12'>
      <div className='font-medium font-oswald text-5xl lg:text-6xl xl:text-7xl uppercase'>
        {headline}
      </div>
      <div className='w-full max-w-sm leading-snug'>{subheadline}</div>
    </div>
  );
};

export default HeroHeading;
