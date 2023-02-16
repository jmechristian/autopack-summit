import React from 'react';
import TravelAside from '../components/travel/TravelAside';
import TravelBody from '../components/travel/TravelBody';
import TravelHead from '../components/travel/TravelHead';
import Head from 'next/head';

const travel = () => {
  return (
    <>
      <Head>
        <title>Automotive Packaging Summit | Travel</title>
        <meta
          property='og:title'
          content='Automotive Packaging Summit | Travel'
        />
      </Head>
      <div className='w-full relative overflow-hidden'>
        <TravelHead />
        <TravelBody />
        <TravelAside />
      </div>
    </>
  );
};

export default travel;
