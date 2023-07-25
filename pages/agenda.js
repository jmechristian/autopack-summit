import React from 'react';
import AgendaBody from '../components/agenda/AgendaBody';
import AgendaHead from '../components/agenda/AgendaHead';
import { createClient } from 'next-sanity';
import Head from 'next/head';
import { API } from 'aws-amplify';
import { listTourists } from '../src/graphql/queries';

const agenda = ({ sessionData, tourists }) => {
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
        <AgendaBody sessions={sessionData} tourists={tourists} />
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
  const GRAPHQL_ENDPOINT = process.env.GRAPHQL_ENDPOINT;
  const GRAPHQL_API_KEY = process.env.GRAPHQL_API_KEY;

  const getTourists = await API.graphql({ query: listTourists });
  const tourists = getTourists.data.listTourists.items;

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
      tourists,
    },
  };
}

export default agenda;
