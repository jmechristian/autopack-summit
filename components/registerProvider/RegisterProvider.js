import React, { useState } from 'react';
import RegisterProviderDesktop from './RegisterProviderDesktop';
import { useSelector } from 'react-redux';

const RegisterProvider = () => {
  const [submitted, setSubmitted] = useState(false);
  const message = useSelector((state) => state.layout.formSubmissionText);

  return (
    <>
      {submitted ? (
        <div className='max-w-xl lg:max-w-3xl text-center px-10 my-24 mx-auto'>
          <h2 className='text-3xl font-bold tracking-tight text-ap-darkblue sm:text-5xl lg:text-5xl'>
            Thank You!
          </h2>
          <p className='mt-5 md:text-lg leading-relaxed lg:leading-relaxed lg:text-xl text-gray-500'>
            {message} We look forward to collaborating with you in Greenville.
            For any questions, please email{' '}
            <a
              href='mailto:Lars@packagingschool.com'
              className='font-bold text-ap-darkblue'
            >
              Lars Nikolaus
            </a>{' '}
            or{' '}
            <a
              href='mailto:bianca@packagingschool.com'
              className='font-bold text-ap-darkblue'
            >
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
