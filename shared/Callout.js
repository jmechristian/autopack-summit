import React from 'react';
import { useDispatch } from 'react-redux';
import { openSponsorForm } from '../features/layout/layoutSlice';

const Callout = () => {
  const dispatch = useDispatch();
  return (
    <div className='bg-slate-200'>
      <div className='text-center lg:text-left mx-auto max-w-7xl py-12 px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8'>
        <h2 className='text-3xl font-semibold  text-slate-700 sm:text-4xl font-oswald uppercase '>
          <span className='block'>Ready to invest in your brand?</span>
          <span className='block text-ap-blue'>
            Create new opportunities today.
          </span>
        </h2>
        <div className='mt-8 flex justify-center lg:mt-0 lg:flex-shrink-0 text-center'>
          <button
            className='bg-ap-darkblue rounded-md inline-flex'
            onClick={() => dispatch(openSponsorForm())}
          >
            <div className='text-white uppercase text-sm lg:text-lg font-bold py-3 px-6 tracking-widest'>
              Connect Now!
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Callout;
