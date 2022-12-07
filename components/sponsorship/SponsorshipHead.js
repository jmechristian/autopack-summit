import React from 'react';
import { SparklesIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';

const SponsorshipHead = () => {
  return (
    <div className='bg-bgImage_blue pt-16 lg:pt-24 xl:pt-32 bg-cover bg-center relative'>
      <div className='flex flex-col gap-5 justify-center items-center mx-auto max-w-7xl py-12 md:py-16 px-8 lg:px-16'>
        <div className='flex flex-col gap-2'>
          <div className='white_headline text-[2.7rem] md:text-7xl lg:text-7xl xl:text-8xl leading-none text-center'>
            Distinguish
          </div>
          <div className='yellow_subheadline text-xl lg:text-2xl xl:text-3xl text-center'>
            Your Business
          </div>
        </div>
        <div className='text-slate-300 text-center mb-20 md:mb-28 lg:mb-44 xl:mb-56 max-w-prose md:px-12 xl:text-lg'>
          Experience the premier open forum for OEMs to discuss their packaging
          innovations and challenges.
        </div>
      </div>
      <div className='bg-slate-200 aspect-video w-11/12 md:w-9/12 lg:w-7/12 xl:w-1/2 absolute shadow-lg -bottom-24 md:-bottom-52 lg:-bottom-52 xl:-bottom-64 2xl:-bottom-72 right-0 z-10'></div>
      <div className='fixed bottom-12 mx-auto max-w-7xl left-0 hidden lg:inline-block z-30 bg-white/20 py-5 px-3 backdrop-blur-md drop-shadow-xl rounded-r-lg'>
        <div className='flex gap-2 w-full justify-center px-3'>
          <SparklesIcon className='w-7 h-7 fill-white' />
          <div className='font-medium text-white'>Join The Sponsor Lineup</div>
        </div>
      </div>
    </div>
  );
};

export default SponsorshipHead;
