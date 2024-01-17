import React from 'react';
import Head from 'next/head';
import HeaderPadding from '../shared/HeaderPadding';
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';
import SpeakerProfileForm from '../components/speakerProfile/speakerProfileForm';

const speakerProfile = () => {
  return (
    <>
      <Head>
        <title>Automotive Packaging Summit | Suppliers</title>
        <meta
          property='og:title'
          content='Automotive Packaging Summit | Speaker Profile'
        />
      </Head>
      <HeaderPadding />
      <div className='bg-white py-24 px-6 sm:py-32 lg:px-8'>
        <div className='mx-auto max-w-3xl text-center'>
          <p className='text-lg font-semibold leading-8 tracking-tight text-ap-darkblue'>
            Welcome, Speakers!
          </p>
          <h2 className='mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'>
            Create Your Profile
          </h2>
          <p className='mt-6 text-lg leading-8 text-gray-600'>
            Thank you for your participation in sharing your expertise with our
            audience. Please submit the requested speaker information below.
            This information will be used to promote you and your presentation
            on our event website as well as all other promotional activities.
            Your information will also be printed in our custom summit booklets.
          </p>
          <div className='bg-ap-blue/40 py-3 px-6 rounded-lg mt-8 inline-flex justify-center items-center gap-1'>
            <div>
              <ExclamationTriangleIcon className='w-6 h-6 stroke-slate-700' />
            </div>
            <div className='text-slate-700 font-medium text-sm'>
              Changes to your profile can be made up to September 30, 2024.
            </div>
          </div>
        </div>
        <SpeakerProfileForm />
      </div>
    </>
  );
};

export default speakerProfile;
