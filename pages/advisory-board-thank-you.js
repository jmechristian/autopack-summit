import React from 'react';
import HeaderPadding from '../shared/HeaderPadding';

const Page = () => {
  return (
    <>
      <HeaderPadding />
      <main className='grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8'>
        <div className='text-center'>
          <p className='text-xl font-semibold text-indigo-600 tracking-widest'>
            SUCCESS
          </p>
          <h1 className='mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl'>
            Interest form submitted.
          </h1>
          <p className='mt-6 text-lg max-w-lg mx-auto leading-7 text-gray-600'>
            Thank you for submitting the Advisory Board Interest Form. Our
            reviewing committee will be in touch shortly
          </p>
          <div className='mt-10 flex items-center justify-center gap-x-6'>
            <a
              href='/'
              className='rounded-md bg-ap-blue px-3.5 py-2.5 text-lg font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
            >
              Go back home
            </a>
          </div>
        </div>
      </main>
    </>
  );
};

export default Page;
