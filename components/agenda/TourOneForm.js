import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { touristsByEmail } from '../../src/graphql/queries';
import { API } from 'aws-amplify';

const TourOneForm = ({ close }) => {
  const [isFullName, setIsFullName] = useState('');
  const [isEmail, setIsEmail] = useState('');
  const [isPhone, setIsPhone] = useState('');
  const [isCompany, setIsCompany] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isError, setIsError] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmitOne = async (data) => {
    setIsLoading(true);

    const emailCheck = await API.graphql({
      query: touristsByEmail,
      variables: { email: data.email },
    });

    if (emailCheck.data.touristsByEmail.items.length === 0) {
      await fetch('/api/send-tour-email', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          tour: 'Tour 1',
        }),
      });

      setIsLoading(false);
      setIsSubmitted(true);
    } else {
      setIsError(true);
      setIsLoading(false);
      setIsSubmitted(false);
    }
  };

  return (
    <div className='fixed inset-0 z-50 shadow-sm backdrop-blur-md flex justify-center items-center bg-gray-900/60 p-6'>
      <div className='bg-white flex flex-col px-4 lg:px-6 lg:py-9 py-6 rounded-lg w-full md:max-w-xl'>
        <div className='flex flex-col justify-center items-center gap-3'>
          <div className=' text-2xl sm:text-3xl max-w-fit md:w-full leading-none uppercase font-oswald font-bold text-ap-darkblue tracking-widest text-center'>
            Tour #1 Magna Drive Automotive
          </div>
          <div className='text-slate-500 font-semibold text-center text-sm xl:text-base'>
            Fill out the form to reserve a spot. For questions, email{' '}
            <a href='mailto:diana@packagingschool.com' className='underline'>
              diana@packagingschool.com
            </a>
          </div>
          <form
            onSubmit={handleSubmit(onSubmitOne)}
            className='grid grid-cols-1 gap-6 mt-9 w-full max-w-lg'
          >
            <input
              id='fullName'
              name='fullName'
              {...register('fullName', { required: true })}
              className='block w-full rounded-md border-0 py-2 px-3 text-slate-900 ring-1 ring-inset ring-slate-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-sm md:text-base sm:leading-6'
              defaultValue={isFullName}
              onChange={(e) => setIsFullName(e.target.value)}
              placeholder='Full Name*'
            />

            <input
              id='email'
              name='email'
              {...register('email', { required: true })}
              className='block w-full rounded-md border-0 py-2 px-3 text-slate-900 ring-1 ring-inset ring-slate-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-sm md:text-base sm:leading-6'
              defaultValue={isEmail}
              onChange={(e) => setIsEmail(e.target.value)}
              placeholder='Email*'
            />
            <input
              id='company'
              name='company'
              {...register('company', { required: true })}
              className='block w-full rounded-md border-0 py-2 px-3 text-slate-900 ring-1 ring-inset ring-slate-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-sm md:text-base sm:leading-6'
              defaultValue={isCompany}
              onChange={(e) => setIsCompany(e.target.value)}
              placeholder='Company*'
            />
            <input
              id='phone'
              name='phone'
              {...register('phone', { required: true })}
              className='block w-full rounded-md border-0 py-2 px-3 text-slate-900 ring-1 ring-inset ring-slate-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-sm md:text-base sm:leading-6'
              defaultValue={isPhone}
              onChange={(e) => setIsPhone(e.target.value)}
              placeholder='Phone*'
            />

            <div className='grid grid-cols-2 gap-6'>
              <div
                className='cursor-pointer w-full text-center flex justify-center items-center font-semibold border border-gray-500 text-gray-500 rounded-lg'
                onClick={() => close(false)}
              >
                {isSubmitted ? 'Close' : 'Cancel'}
              </div>
              <button
                type='submit'
                disabled={isError || isSubmitted}
                className='w-full py-2 text-center font-semibold bg-ap-blue hover:bg-ap-darkblue text-white rounded-lg'
              >
                {!isLoading && !isSubmitted && !isError && 'Submit'}
                {isLoading && !isSubmitted && 'Sending...'}
                {!isLoading && isSubmitted && 'Sent!'}
                {!isLoading && isError && 'Error!'}
              </button>
            </div>
          </form>
          {isSubmitted && (
            <span className='mt-6 text-center text-gray-700'>
              Thanks for your submissions. We will send an email confirmation of
              your signup shortly.
            </span>
          )}
          {isError && (
            <span className='mt-6 text-center text-gray-700'>
              You have already been registered for a tour. For questions, please
              contact Diana@packagingschool.com
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default TourOneForm;
