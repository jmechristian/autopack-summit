import React from 'react';
import { motion } from 'framer-motion';
import RegisterProvider from '../../../components/registerProvider/RegisterProvider';
import Head from 'next/head';
import RegistrationTickets from '../../../components/registerProvider/RegistrationTickets';
import { API } from 'aws-amplify';
import { listAPSTickets } from '../../../src/graphql/queries';
import TicketForm from '../../../components/registration/TicketForm';

const Tickets = ({ tickets }) => {
  return (
    <>
      <Head>
        <title>Automotive Packaging Summit | Solution Providers</title>
        <meta
          property='og:title'
          content='Automotive Packaging Summit | Solution Providers'
        />
      </Head>
      <div className='flex flex-col max-w-6xl mx-auto px-5 xl:px-0'>
        <TicketForm />
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

export default Tickets;
