import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import RegistrationForm from '../components/registration/RegistrationForm';
import Head from 'next/head';

const register = () => {
  const router = useRouter();
  const params = router.query;

  return (
    <>
      <Head>
        <title>Automotive Packaging Summit | Register</title>
        <meta
          property='og:description'
          content='The premier open forum for OEMs, Tier 1 Part Suppliers and Packaging Solution Providers to discuss packaging innovations and challenges.'
        />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://autopacksummit.com/' />
        <meta
          property='og:image'
          content='https://apsmedia.s3.amazonaws.com/images/og_image.png'
        />
        <meta
          property='og:title'
          content='Automotive Packaging Summit | Register'
        />
      </Head>
      <div className='flex flex-col'>
        <div className='h-16 md:h-20 lg:h-24 bg-ap-darkblue'></div>
        <div className='py-12 md:py-24 lg:pt-12 lg:pb-24 flex flex-col gap-8 xl:gap-12'>
          <div className='flex flex-col items-center'>
            <motion.div className='blue_subheadline text-xl md:text-xl xl:text-2xl'>
              OEM/ TIER 1
            </motion.div>
            <motion.div className='yellow_headline text-4xl md:text-5xl xl:text-6xl xl:text-center'>
              Registration
            </motion.div>
          </div>
          <div className='w-10/12 lg:max-w-7xl mx-auto border bg-slate-200 border-slate-400 lg:px-8 xl:px-12 py-8 md:py-12 lg:py-16 rounded-md shadow-xl'>
            <RegistrationForm params={params} />
          </div>
        </div>
      </div>
    </>
  );
};

export default register;
