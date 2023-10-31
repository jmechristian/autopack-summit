import React, { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';

import HeaderPadding from '../shared/HeaderPadding';

const Page = () => {
  const { register, handleSubmit } = useForm();
  const [isSending, setIsSending] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isError, setError] = useState(false);

  const formRef = useRef(null);

  const notificationMethods = [
    { id: 'field_87Yes', title: 'Yes' },
    { id: 'field_87No', title: 'No' },
    { id: 'field_87Maybe', title: 'Maybe' },
  ];

  const onSubmit = async (data) => {
    setIsSending(true);
    // gtag('event', 'resource_click', {
    //   resource: 'resource_download',
    //   lesson: title,
    // });
    const formData = new FormData(formRef.current);

    // Hidden field key/values.
    formData.append('u', '96');
    formData.append('f', '96');
    formData.append('s', 's');
    formData.append('c', '0');
    formData.append('m', '0');
    formData.append('act', 'sub');
    formData.append('v', '2');
    formData.append('or', 'a93673d6e9e85be15a32f503c0512c62');

    formData.append('fullname', data.fullname);
    formData.append('email', data.email);
    formData.append('field[6]', data.field[6]);
    formData.append('field[7]', data.field[7]);
    formData.append('field[87]', data.field[87]);
    formData.append('field[88]', data.field[88]);
    formData.append('field[89]', data.field[89]);
    formData.append('field[90]', data.field[90]);

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

  //   const onSubmit = async (data) => {
  //     console.log(data);
  //   };

  return (
    <div className='flex flex-col gap-24'>
      <HeaderPadding />
      <div className='w-full max-w-5xl mx-auto'>
        <div className='w-full px-6 lg:px-0 flex flex-col gap-16'>
          <div className='mx-auto max-w-2xl text-center'>
            <h2 className='mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'>
              Advisory Board
              <br /> Interest Form
            </h2>
            <p className='mt-6 text-lg leading-8 text-gray-600'>
              Thank you for your interest in participating in 2024 Automotive
              Packaging Summit. Please fill out the form below to be considered
              for inclusion into next year's Summit.
            </p>
          </div>
          <form
            className='flex flex-col gap-9 max-w-xl mx-auto w-full'
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
            <hr />
            <div>
              <label
                htmlFor='fullname'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                Are you able to commit to quarterly meetings (remote) for the
                next year? *
              </label>
              <fieldset className='mt-4'>
                <legend className='sr-only'>Notification method</legend>
                <div className='space-y-4'>
                  {notificationMethods.map((notificationMethod) => (
                    <div
                      key={notificationMethod.id}
                      className='flex items-center'
                    >
                      <input
                        id={notificationMethod.id}
                        name='field[87]'
                        {...register('field[87]', { required: true })}
                        type='radio'
                        className='h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600'
                      />
                      <label
                        htmlFor={notificationMethod.id}
                        className='ml-3 block text-sm font-medium leading-6 text-gray-900'
                      >
                        {notificationMethod.title}
                      </label>
                    </div>
                  ))}
                </div>
              </fieldset>
            </div>

            <div>
              <label
                htmlFor='field[88]'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                Please give a brief explanation of your background in automotive
                and how many years you have worked in the industry.*
              </label>
              <div className='mt-2'>
                <textarea
                  {...register('field[88]', { required: true })}
                  rows={4}
                  name='field[88]'
                  id='field[88]'
                  className='block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div>
              <label
                htmlFor='field[89]'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                What are three ways your expertise and experience can help
                improve AutoPack Summit 2023?*
              </label>
              <div className='mt-2'>
                <textarea
                  {...register('field[89]', { required: true })}
                  rows={4}
                  name='field[89]'
                  id='field[89]'
                  className='block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div>
              <label
                htmlFor='field[90]'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                Other Comments (optional)
              </label>
              <div className='mt-2'>
                <textarea
                  {...register('field[90]', { required: true })}
                  rows={4}
                  name='field[90]'
                  id='field[90]'
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
    </div>
  );
};

export default Page;
