import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import RegistrationForm from '../components/registration/RegistrationForm';
import Head from 'next/head';

const Register = () => {
  const router = useRouter();
  const params = router.query;

  return (
    <>
      <Head>
        <title>Automotive Packaging Summit | Register</title>
        <meta
          property='og:title'
          content='Automotive Packaging Summit | Register'
        />
      </Head>
      <div className='flex flex-col max-w-7xl md:max-w-2xl lg:max-w-4xl xl:max-w-7xl mx-auto pt-6 pb-16 gap-10'>
        <div className='w-full rounded-2xl border-neutral-900 border-4 p-9 flex flex-col-reverse gap-2 lg:flex-row lg:items-center lg:justify-between bg-white shadow-[12px_16px_0_black] lg:pt-24 lg:pb-12'>
          <div className='font-medium font-oswald text-5xl md:text-6xl lg:text-7xl uppercase'>
            Registration
          </div>
          <div className='w-full max-w-sm leading-snug flex lg:justify-end items-center'>
            <div className='bg-amber-400 rounded-3xl font-bold text-sm md:text-xl text-neutral-900 border border-neutral-900 px-3 py-1.5'>
              OEM/ TIER 1
            </div>
          </div>
        </div>
        <RegistrationForm params={params} />
      </div>
    </>
  );
};

export default Register;
