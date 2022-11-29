import React from 'react';
import TextWheel from '../../../shared/TextWheel';

const FooterHeadline = () => {
  return (
    <div className='flex flex-col gap-5 md:gap-6'>
      <div className='flex justify-center'>
        <div className='flex flex-col md:flex-row-reverse md:items-end md:justify-center md:gap-0'>
          <div className='w-36 h-36 xl:w-44 xl:h-44 mx-auto relative left-10 md:left-0'>
            <TextWheel />
          </div>
          <div>
            <div className='text-lg md:text-xl xl:text-2xl white_subheadline'>
              Moments To
            </div>
            <div className='yellow_headline tracking-[.2em] text-4xl md:text-5xl xl:text-6xl ml-10 md:ml-7'>
              Remember
            </div>
          </div>
        </div>
      </div>
      <div className='text-center text-white text-sm lg:text-lg md:text-base px-8 text-white/70 md:max-w-prose mx-auto'>
        <p>
          Experience the premier open forum for OEMs to discuss their packaging
          innovations and challenges.
        </p>
      </div>
      <button className='px-6 py-4 rounded-md bg-white text-ap-darkblue text-sm md:text-base font-bold tracking-widest uppercase max-w-fit mx-auto'>
        Ready To Get Involved?
      </button>
    </div>
  );
};

export default FooterHeadline;
