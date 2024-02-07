import React, { useState, useRef } from 'react';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import HeroHeading from '../shared/HeroHeading';
import { sendSpeakerInterest } from '../util/api';

const Page = () => {
  const { register, handleSubmit } = useForm();
  const [isSending, setIsSending] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isError, setError] = useState(false);

  const router = useRouter();
  const formRef = useRef(null);

  const onSubmit = async (data) => {
    setIsSending(true);
    const sent = await sendSpeakerInterest(data);
    setIsSending(false);
    router.push('/speaker-thank-you');
    //create new speaker, update if already one
    //send notification to Bianca
  };

  return (
    <div className='w-full max-w-6xl mx-auto pt-6 pb-20 flex flex-col gap-4'>
      <HeroHeading
        headline={'Speaker Interest'}
        subheadline={
          "Please fill out the form below including a description of your topic to be considered for inclusion into next year's Summit."
        }
      />
      <div className='w-full rounded-2xl border-2 border-black p-10'>
        <form onSubmit={handleSubmit(onSubmit)} ref={formRef}>
          <div className='w-full grid lg:grid-cols-2 gap-10'>
            <div>
              <label
                htmlFor='fullname'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                Full Name*
              </label>
              <div className='mt-2'>
                <input
                  {...register('fullname', { required: true })}
                  type='text'
                  name='fullname'
                  id='fullname'
                  className='block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>
            <div>
              <label
                htmlFor='company'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                Company Name*
              </label>
              <div className='mt-2'>
                <input
                  {...register('company', { required: true })}
                  type='text'
                  name='company'
                  id='company'
                  className='block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>
            <div>
              <label
                htmlFor='title'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                Job Title*
              </label>
              <div className='mt-2'>
                <input
                  {...register('title', { required: true })}
                  type='text'
                  name='title'
                  id='title'
                  className='block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>
            <div>
              <label
                htmlFor='email'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                Email*
              </label>
              <div className='mt-2'>
                <input
                  {...register('email', { required: true })}
                  type='email'
                  name='email'
                  id='email'
                  className='block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>
            <div className='col-span-2'>
              <label
                htmlFor='description'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                Give a brief description of your proposed topic and how it is
                relevant to the automotive packaging audience.*
              </label>
              <div className='mt-2'>
                <textarea
                  {...register('description', { required: true })}
                  rows={4}
                  name='description'
                  id='description'
                  placeholder='Give a brief description of your proposed topic and how it is relevant to the automotive packaging audience.'
                  className='block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div className='col-span-2'>
              <label
                htmlFor='objectives'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                Please input three learning objectives from your proposed
                presentation.*
              </label>
              <div className='mt-2'>
                <textarea
                  {...register('objectives', { required: true })}
                  rows={4}
                  name='objectives'
                  id='objectives'
                  placeholder='Please input three learning objectives from your proposed presentation.'
                  className='block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>
          </div>
          <div className='w-full flex justify-end'>
            <button
              className='align-end mt-6 text-base md:text-lg font-bold px-8 py-2 shadow-[5px_5px_0_black] hover:shadow-[1px_1px_0_black] hover:translate-x-[3px] hover:translate-y-[3px] transition-all bg-ap-darkblue text-white'
              type='submit'
            >
              {!isSending ? 'Submit Form' : 'Sending...'}
            </button>
          </div>
        </form>
        <div>
          {isError && (
            <span className='text-center w-full text-red-600'>
              Error Submitting.
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
