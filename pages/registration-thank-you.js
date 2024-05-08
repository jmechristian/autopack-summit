import React from 'react';

const Page = () => {
  return (
    <div className='w-full max-w-xl px-5 xl:px-0 pt-10 pb-20 mx-auto'>
      <div className='rounded-2xl border-2 border-black shadow-[6px_8px_0_black] bg-white'>
        <div className='aspect-[4/3] w-full flex flex-col gap-5 justify-center items-center px-5'>
          <div className='font-medium text-center font-oswald text-5xl lg:text-6xl uppercase'>
            Registration Submitted.
          </div>
          <div className='w-full max-w-sm leading-snug text-center'>
            Once availability is confirmed and if space permits, you will
            receive a confirmation email within a few days. We appreciate your
            patience and look forward to hosting you!
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
