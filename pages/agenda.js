import React from 'react';
import AgendaBody from '../components/agenda/AgendaBody';
import AgendaHead from '../components/agenda/AgendaHead';
import { createClient } from 'next-sanity';
import Head from 'next/head';

const agenda = ({ sessionData }) => {
  return (
    <>
      <Head>
        <title>Automotive Packaging Summit | Agenda</title>
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
          content='Automotive Packaging Summit | Agenda'
        />
      </Head>
      <div className='w-full'>
        <AgendaHead />
        <AgendaBody sessions={sessionData} />
      </div>
    </>
  );
};

const client = createClient({
  projectId: 'h72r2zbr',
  dataset: 'aps',
  apiVersion: '2022-11-20',
  useCdn: true,
});

export async function getStaticProps() {
  const sessionData = await client.fetch(
    `*[_type == "session"] | order(session_start asc) {
      _id,
      date,
      location,
      name,
      session_end,
      session_start,
      speakers[]->{title, name, company},
      sponsors[]->{logo, name, website}
    }`
  );

  return {
    props: {
      sessionData,
    },
  };
}

export default agenda;
