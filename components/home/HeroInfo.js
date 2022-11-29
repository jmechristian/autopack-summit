import React from 'react';
import Link from 'next/link';
import { ArrowLongRightIcon } from '@heroicons/react/24/outline';

const HeroInfo = ({ location, date }) => {
  return (
    <div className='flex flex-col text-center justify-center gap-1 lg:w-1/2 lg:text-left lg:items-end lg:mt-6'>
      <div className='flex flex-col'>
        <div className='text-white/60 font-bold uppercase'>{date}</div>
        <div className='text-white/60 font-semibold'>{location}</div>
        <div className='flex justify-center text-white/60 text-center lg:text-left lg:items-end lg:justify-start gap-1 w-full'>
          <Link href='/travel'>Accommodations</Link>
          <ArrowLongRightIcon className='w-6 h-6 stroke-white/60' />
        </div>
      </div>
    </div>
  );
};

export default HeroInfo;
