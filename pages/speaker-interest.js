import React, { useState, useRef } from 'react';
import HeaderPadding from '../shared/HeaderPadding';
import { useForm } from 'react-hook-form';

const Page = () => {
  const { register, handleSubmit } = useForm();
  const [isSending, setIsSending] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isError, setError] = useState(false);

  const formRef = useRef(null);

  const onSubmit = async (data) => {
    setIsSending(true);
    // gtag('event', 'resource_click', {
    //   resource: 'resource_download',
    //   lesson: title,
    // });
    const formData = new FormData(formRef.current);

    // Hidden field key/values.
    formData.append('u', '94');
    formData.append('f', '94');
    formData.append('s', 's');
    formData.append('c', '0');
    formData.append('m', '0');
    formData.append('act', 'sub');
    formData.append('v', '2');
    formData.append('or', '9e3c96c865a7269c1e35d79d87c8f32d');

    formData.append('fullname', data.fullname);
    formData.append('field[6]', data.field[6]);
    formData.append('field[7]', data.field[7]);
    formData.append('email', data.email);
    formData.append('field[85]', data.field[85]);
    formData.append('field[86]', data.field[86]);

    try {
      const sendEmail = await fetch(
        'https://packagingschool42200.activehosted.com/proc.php',
        {
          method: 'POST',
          body: formData,
          mode: 'no-cors',
        }
      );
      console.log(sendEmail);
      setIsSending(false);
      setIsSubmitted(true);
    } catch (err) {
      console.log('Request failed', err);
      setIsSending(false);
      setError(true);
    }
  };

  return (
    <>
      <div className='w-full max-w-5xl mx-auto py-24'>
        <div className='w-full px-6 lg:px-0 flex flex-col gap-16'>
          <div className='mx-auto max-w-2xl text-center'>
            <h2 className='mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'>
              Speaker Interest Form
            </h2>
            <p className='mt-6 text-lg leading-8 text-gray-600'>
              Thank you for your interest in participating in Automotive
              Packaging Summit 2024. Please fill out the form below including a
              description of your topic to be considered for inclusion into next
              year's Summit.
            </p>
          </div>
          <form
            className='flex flex-col gap-6 max-w-xl mx-auto w-full'
            onSubmit={handleSubmit(onSubmit)}
            ref={formRef}
          >
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
                htmlFor='field[6]'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                Company Name*
              </label>
              <div className='mt-2'>
                <input
                  {...register('field[6]', { required: true })}
                  type='text'
                  name='field[6]'
                  id='field[6]'
                  className='block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div>
              <label
                htmlFor='field[7]'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                Job Title*
              </label>
              <div className='mt-2'>
                <input
                  {...register('field[7]', { required: true })}
                  type='text'
                  name='field[7]'
                  id='field[7]'
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

            <div>
              <label
                htmlFor='field[85]'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                Give a brief description of your proposed topic and how it is
                relevant to the automotive packaging audience.*
              </label>
              <div className='mt-2'>
                <textarea
                  {...register('field[85]', { required: true })}
                  rows={4}
                  name='field[85]'
                  id='field[85]'
                  placeholder='Give a brief description of your proposed topic and how it is relevant to the automotive packaging audience.'
                  className='block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div>
              <label
                htmlFor='field[86]'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                Please input three learning objectives from your proposed
                presentation.*
              </label>
              <div className='mt-2'>
                <textarea
                  {...register('field[86]', { required: true })}
                  rows={4}
                  name='field[86]'
                  id='field[86]'
                  placeholder='Please input three learning objectives from your proposed presentation.'
                  className='block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <button
              className='bg-ap-blue text-white font-bold text-lg py-2 rounded-lg'
              type='submit'
            >
              {!isSending ? 'Submit' : 'Sending...'}
            </button>
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
    </>
  );
};

export default Page;
