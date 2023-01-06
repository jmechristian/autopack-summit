import React from 'react';
import { useDispatch } from 'react-redux';
import { openSponsorForm } from '../features/layout/layoutSlice';

const Callout = () => {
  const dispatch = useDispatch();
  return (
    <div className='bg-slate-200'>
      <div className='text-center lg:text-left mx-auto max-w-7xl py-12 px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8'>
        <h2 className='text-3xl font-bold tracking-tight text-slate-700 sm:text-4xl'>
          <span className='block'>Ready to invest in your brand?</span>
          <span className='block text-ap-blue'>
            Create new opportunities today.
          </span>
        </h2>
        <div className='mt-8 flex justify-center lg:mt-0 lg:flex-shrink-0 text-center'>
          <div
            className='inline-flex rounded-md shadow'
            onClick={() => dispatch(openSponsorForm())}
          >
            <a
              href='#'
              className='inline-flex items-center justify-center rounded-md border border-transparent bg-ap-blue px-5 py-3 font-medium text-white hover:bg-indigo-700 font-oswald uppercase tracking-widest text-lg lg:text-xl'
            >
              Connect Now!
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Callout;
