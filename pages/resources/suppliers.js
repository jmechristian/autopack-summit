import React from 'react';
import SupplierForm from '../../components/resources/SupplierForm';
import HeaderPadding from '../../shared/HeaderPadding';
import Head from 'next/head';

const suppliers = () => {
  return (
    <>
      <Head>
        <title>Automotive Packaging Summit | Suppliers</title>
        <meta
          property='og:image'
          content='https://apsmedia.s3.amazonaws.com/images/og_image.png'
        />
        <meta
          property='og:title'
          content='Automotive Packaging Summit | Suppliers'
        />
      </Head>
      <HeaderPadding />
      <div className='bg-white'>
        <div className='py-16 px-6 sm:px-6 sm:py-16 lg:px-8'>
          <div className='mx-auto max-w-2xl text-center'>
            <h2 className='text-3xl sm:text-4xl font-bold tracking-tight text-slate-900'>
              Are You an Automotive
              <br />
              Packaging Supplier?
            </h2>
            <p className='mx-auto mt-6 max-w-xl sm:text-lg leading-7 sm:leading-8 text-gray-600'>
              We’re building a database of all packaging suppliers. Fill out the
              form below to have your company details presented to OEMs & Tier
              One buyers.
            </p>
            <p className='mx-auto mt-6 max-w-xl sm:text-lg leading-7 sm:leading-8 text-gray-600'>
              Please use the “other” field if your industry is not listed and
              we’ll update this list.
            </p>
          </div>
        </div>
      </div>
      <SupplierForm />
    </>
  );
};

export default suppliers;
