import React from 'react';
import SponsorshipBody from '../components/sponsorship/SponsorshipBody';
import SponsorshipHead from '../components/sponsorship/SponsorshipHead';
import Callout from '../shared/Callout';
import Head from 'next/head';

const sponsorship = () => {
  return (
    <>
      <Head>
        <title>Automotive Packaging Summit | Sponsorship</title>
        <meta
          property='og:image'
          content='https://apsmedia.s3.amazonaws.com/images/og_image.png'
        />
        <meta
          property='og:title'
          content='Automotive Packaging Summit | Sponsorship'
        />
      </Head>
      <div className='w-full relative overflow-hidden'>
        <SponsorshipHead />
        <SponsorshipBody />
        <Callout />
      </div>
    </>
  );
};

export default sponsorship;
