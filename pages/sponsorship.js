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
