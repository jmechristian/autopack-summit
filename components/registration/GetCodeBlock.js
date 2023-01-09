import React from 'react';

const GetCodeBlock = () => {
  return (
    <div className='flex flex-col gap-3 items-center p-6 text-center'>
      <p className='text-lg font-medium leading-6 text-gray-900 text-center'>
        Get My Code
      </p>
      <p className='text-slate-600'>
        Please fill out all fields and submit below.
      </p>
      <button className='bg-ap-blue rounded-md w-full mt-2'>
        <div className='text-white uppercase text-sm lg:text-base font-bold py-3 px-6 tracking-widest'>
          Get Code
        </div>
      </button>
    </div>
  );
};

export default GetCodeBlock;
