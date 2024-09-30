import React from 'react';
import Head from 'next/head';
import { API } from 'aws-amplify';
import { listAPSTickets } from '../src/graphql/queries';
import TicketForm from '../components/registration/TicketForm';

const Waitlist = ({ tickets }) => {
  return (
    <>
      <Head>
        <title>Automotive Packaging Summit | Waitlist</title>
        <meta
          property='og:title'
          content='Automotive Packaging Summit | General Admission'
        />
        <meta
          name='description'
          content='Purchase your tickets for the 2024 Automotive Packaging Summit held in Greeville, South Carolina, Oct.21-23rd, 2024'
        />
        <meta property='og:type' content='website' />
        <meta
          property='og:title'
          content={'Automotive Packaging Summit | General Admission'}
        />
        <meta
          property='og:description'
          content={
            'Purchase your tickets for the 2024 Automotive Packaging Summit held in Greeville, South Carolina, Oct.21-23rd, 2024'
          }
        />
        <meta
          property='og:image'
          content={'https://packschool.s3.amazonaws.com/tickets-seoimage.png'}
        />
      </Head>
      <div className='flex flex-col max-w-6xl mx-auto px-5 xl:px-0'>
        <TicketForm
          callout={false}
          live={true}
          buttonText={'Purchase Ticket'}
        />
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

export default Waitlist;
