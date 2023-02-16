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
