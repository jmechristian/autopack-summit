import React from 'react';
import AgendaBody from '../components/agenda/AgendaBody';
import AgendaHead from '../components/agenda/AgendaHead';
import { createClient } from 'next-sanity';

const agenda = ({ sessionData }) => {
  return (
    <div className='w-full'>
      <AgendaHead />
      <AgendaBody sessions={sessionData} />
    </div>
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
