import React from 'react';
import TextWheel from '../../../shared/TextWheel';

const FooterHeadline = () => {
  return (
    <div className='flex flex-col gap-5'>
      <div className='flex justify-center'>
        <div className='flex flex-col'>
          <div className='w-36 h-36 mx-auto mb-2 relative left-10'>
            <TextWheel />
          </div>
          <div className='uppercase font-bold text-lg text-white tracking-[.15em]'>
            Moments To
          </div>
          <div className='text-ap-yellow font-medium font-oswald tracking-[.2em] uppercase text-4xl ml-8'>
            Remember
          </div>
        </div>
      </div>
      <div className='text-center text-white text-sm px-8 text-white/70'>
        <p>
          Experience the premier open forum for OEMs to discuss their packaging
          innovations and challenges.
        </p>
      </div>
      <button className='px-6 py-4 rounded-md bg-white text-ap-darkblue text-sm font-bold tracking-widest uppercase max-w-fit mx-auto'>
        Ready To Get Involved?
      </button>
    </div>
  );
};

export default FooterHeadline;
