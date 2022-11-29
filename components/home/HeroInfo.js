import React from 'react';
import Link from 'next/link';
import { ArrowLongRightIcon } from '@heroicons/react/24/outline';

const HeroInfo = ({ location, date }) => {
  return (
    <div className='flex flex-col text-center gap-2'>
      <div className='flex flex-col'>
        <div className='text-white/60 font-bold uppercase'>{date}</div>
        <div className='text-white/60 font-semibold'>{location}</div>
      </div>
      <div className='flex items-center justify-center text-white/60 text-center gap-1'>
        <Link href='/travel'>Accommodations</Link>
        <ArrowLongRightIcon className='w-6 h-6 stroke-white/60' />
      </div>
    </div>
  );
};

export default HeroInfo;
