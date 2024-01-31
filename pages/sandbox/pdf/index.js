import React, { useState, useMemo } from 'react';
import { createClient } from 'next-sanity';
import Head from 'next/head';
import PrintableCompactAgenda from '../../../shared/PrintableCompactAgenda';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Agenda = ({ sessionData, tourists }) => {
  const [enabled, setEnabled] = useState(false);
  const [isDay, setDay] = useState(1);

  const dayOne = useMemo(() => {
    const one =
      sessionData && sessionData.filter((s) => s.date === '2023-10-11');

    return one;
  }, [sessionData]);

  const dayTwo = useMemo(() => {
    const two =
      sessionData && sessionData.filter((s) => s.date === '2023-10-12');

    return two;
  }, [sessionData]);

  const dayThree = useMemo(() => {
    const three =
      sessionData && sessionData.filter((s) => s.date === '2023-10-13');

    return three;
  }, [sessionData]);

  const sessionByDate = useMemo(() => {
    const currentDay = () => {
      switch (isDay) {
        case 0:
          return '2023-10-11';
        case 1:
          return '2023-10-12';
        case 2:
          return '2023-10-13';
        default:
          return '2023-10-12';
      }
    };

    const dayToShow =
      sessionData && sessionData.filter((s) => s.date === currentDay(isDay));

    return dayToShow;
  }, [sessionData, isDay]);

  return (
    <>
      <Head>
        <title>Automotive Packaging Summit | Agenda</title>
        <meta
          property='og:title'
          content='Automotive Packaging Summit | Agenda'
        />
      </Head>
      {/* <div className='w-full'>
        <AgendaBody sessions={sessionData} tourists={tourists} />
      </div> */}
      <div className='w-[210mm] h-[297mm] overflow-hidden mx-auto pt-5 lg:pt-9 pb-20 relative '>
        <PrintableCompactAgenda
          dayOne={dayOne}
          dayTwo={dayTwo}
          dayThree={dayThree}
        />
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

export default Agenda;
