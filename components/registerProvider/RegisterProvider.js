import React, { useState } from 'react';
import RegisterProviderDesktop from './RegisterProviderDesktop';

const RegisterProvider = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      {submitted ? (
        <div className='max-w-xl lg:max-w-2xl text-center px-10 my-24 mx-auto'>
          <h2 className='text-3xl font-bold tracking-tight text-ap-darkblue sm:text-5xl lg:text-5xl'>
            Thank You!
          </h2>
          <p className='mt-5 md:text-lg leading-relaxed lg:leading-relaxed lg:text-xl text-gray-500'>
            Your submission has been sent. We look forward to collaborating with
            you in Greenville. For any questions, please email{' '}
            <a href='mailto:diana@packagingschool.com' className='font-bold'>
              Diana Whitaker
            </a>{' '}
            or{' '}
            <a href='mailto:bianca@packagingschool.com' className='font-bold'>
              Bianca Hurley.
            </a>
          </p>
        </div>
      ) : (
        <RegisterProviderDesktop submitted={() => setSubmitted(true)} />
      )}
    </>
  );
};
export default RegisterProvider;
