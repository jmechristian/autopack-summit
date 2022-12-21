import React from 'react';

const TestimonialBlock = ({ name, testimonialBody }) => {
  return (
    <div className='bg-white h-full rounded-md drop-shadow-md w-72 cursor-grabbing'>
      <div className='p-8 flex justify-center flex-col gap-5 h-full'>
        <div className='text-slate-600 text-lg font-semibold leading-normal'>
          {'"' + testimonialBody + '"'}
        </div>
        <div className='text-slate-600 text-sm text-right'>-{name}</div>
      </div>
    </div>
  );
};

export default TestimonialBlock;
