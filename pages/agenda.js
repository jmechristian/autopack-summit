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

export async function getServerSideProps() {
  const sessionData = await client.fetch(
    `*[_type == "session"] | order(session_start asc) {
      _id,
      date,
      location,
      name,
      type,
      session_end,
      session_start,
      speakers[]->{_id, name, company, title, profilePic { asset -> { url}}, companyLogo { asset-> { url }}},
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
