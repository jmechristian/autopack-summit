import React from 'react';
import { API } from 'aws-amplify';
import { listAPSTickets } from '../src/graphql/queries';
import Head from 'next/head';
import RegistrationTickets from '../components/registerProvider/RegistrationTickets';

const Page = ({ tickets }) => {
  return (
    <>
      <Head>
        <title>Automotive Packaging Summit | Solution Providers</title>
        <meta
          property='og:title'
          content='Automotive Packaging Summit | Solution Providers'
        />
      </Head>
      <div className='flex flex-col new-class'>
        <div className='h-16 md:h-20 lg:h-24 bg-ap-darkblue'></div>
        <div className='py-12 md:py-24 lg:py-24 flex flex-col gap-8 xl:gap-12'>
          <div className='w-10/12 lg:max-w-6xl mx-auto border bg-slate-200 border-slate-400 lg:px-8 xl:px-12 py-8 md:py-12 lg:py-16 rounded-md shadow-xl'>
            <RegistrationTickets
              ticketCount={tickets.data.listAPSTickets.items.length}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps() {
  const tickets = await API.graphql({ query: listAPSTickets });

  return {
    props: {
      tickets,
    },
  };
}

export default Page;
