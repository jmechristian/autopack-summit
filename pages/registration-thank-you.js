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
            Please allow up to 48 hours for approval. Check your inbox for your
            2024 Automotive Packaging Summit Welcome email.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
