import React from 'react';
import { InformationCircleIcon } from '@heroicons/react/24/outline';

const OptionalTour = () => {
  return (
    <div className='w-full bg-indigo-100 rounded-lg grid lg:grid-cols-8 gap-3 h-full'>
      <div className='col-span-6'>
        <div className='flex gap-4 items-center'>
          <div className='p-6'>
            <div
              className='aspect-[4/3] w-80 bg-cover bg-center rounded-lg'
              style={{
                backgroundImage: `url("https://apsmedia.s3.amazonaws.com/images/tour1.webp")`,
              }}
            ></div>
          </div>
          <div className='flex flex-col gap-3'>
            <div className='flex flex-col gap-2'>
              <div className='bg-indigo-500 text-white w-fit px-2 py-1 text-sm rounded-lg'>
                Optional
              </div>
              <div className='text-3xl font-oswald'>
                Tour #1{' '}
                <span className='font-bold'>Magna Drive Automotive</span>
              </div>
              <div>120 Moon Acres Rd, Piedmont, SC 29673</div>
              <div className='flex gap-1 mt-2'>
                <div>
                  <InformationCircleIcon className='w-6 h-6 stroke-slate-900' />
                </div>
                <div className='font-bold'>Steel Toed Shoes required</div>
              </div>
              <div>Plan on 2 hours (10am-12pm)</div>
            </div>
          </div>
        </div>
      </div>
      <div className='col-span-2'></div>
    </div>
  );
};

export default OptionalTour;
