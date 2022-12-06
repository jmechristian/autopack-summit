import React from 'react';

const SponsorshipHead = () => {
  return (
    <div className='bg-bgImage_blue pt-16 md:pt-24 lg:pt-24 xl:pt-28 bg-cover bg-center relative'>
      <div className='flex flex-col gap-5 justify-center items-center mx-auto max-w-7xl py-12 md:py-16 px-8 lg:px-16'>
        <div className='flex flex-col gap-2'>
          <div className='white_headline text-[2.7rem] md:text-7xl lg:text-7xl xl:text-8xl leading-none text-center'>
            Distinguish
          </div>
          <div className='yellow_subheadline text-xl lg:text-2xl xl:text-3xl text-center'>
            Your Business
          </div>
        </div>
        <div className='text-slate-300 text-center mb-20 md:mb-24 lg:mb-28 xl:mb-52 max-w-prose md:px-12 xl:text-lg'>
          Experience the premier open forum for OEMs to discuss their packaging
          innovations and challenges.
        </div>
      </div>
      <div className='bg-slate-200 aspect-video w-11/12 md:w-7/12 lg:w-1/2 absolute shadow-lg -bottom-28 md:-bottom-40 lg:-bottom-44 xl:-bottom-64 2xl:-bottom-72 right-0 z-10'></div>
    </div>
  );
};

export default SponsorshipHead;
