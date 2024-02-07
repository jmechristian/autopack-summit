import React from 'react';
import Head from 'next/head';
import HeaderPadding from '../shared/HeaderPadding';
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';
import SpeakerProfileForm from '../components/speakerProfile/speakerProfileForm';
import HeroHeading from '../shared/HeroHeading';

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
      <div className='w-full max-w-6xl mx-auto pt-6 pb-20 flex flex-col gap-4'>
        <HeroHeading
          headline={'Speaker Profile'}
          subheadline={
            'Thank you for your participation in sharing your expertise with our audience. Please submit the requested speaker information below.'
          }
        />
        <div className='w-full rounded-2xl border-2 border-black p-10'>
          <div className='flex flex-col gap-6'>
            <div className='w-full bg-amber-300 rounded-2xl py-4 px-6'>
              This information will be used to promote you and your presentation
              on our event website as well as all other promotional activities.
              Your information will also be printed in our custom summit
              booklets.
            </div>
            <SpeakerProfileForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default speakerProfile;
