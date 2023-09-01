import React from 'react';
import { motion } from 'framer-motion';
import RegisterProvider from '../components/registerProvider/RegisterProvider';
import Head from 'next/head';
import RegistrationTickets from '../components/registerProvider/RegistrationTickets';
import { API } from 'aws-amplify';
import { listAPSTickets } from '../src/graphql/queries';

const registerprovider = ({ tickets }) => {
  return (
    // <>
    //   <Head>
    //     <title>Automotive Packaging Summit | Solution Providers</title>
    //     <meta
    //       property='og:title'
    //       content='Automotive Packaging Summit | Solution Providers'
    //     />
    //   </Head>
    //   <div className='flex flex-col'>
    //     <div className='h-16 md:h-20 lg:h-24 bg-ap-darkblue'></div>
    //     <div className='py-12 md:py-24 lg:pt-12 lg:pb-24 flex flex-col gap-8 xl:gap-12'>
    //       <div className='flex flex-col items-center'>
    //         <motion.div className='blue_subheadline text-xl md:text-xl xl:text-2xl'>
    //           Solution Provider
    //         </motion.div>
    //         <motion.div className='yellow_headline text-4xl md:text-5xl xl:text-6xl xl:text-center'>
    //           Sponsorship
    //         </motion.div>
    //       </div>
    //       <div className='w-10/12 mx-auto text-center text-slate-700 lg:hidden md:text-lg'>
    //         Registration for Solution Providers is done through Sponsorship.
    //         Don't miss out on the limited opportunities to represent your brand
    //         at the Automotive Packaging Summit.
    //       </div>
    //       <div className='w-10/12 lg:max-w-6xl mx-auto border bg-slate-200 border-slate-400 lg:px-8 xl:px-12 py-8 md:py-12 lg:py-16 rounded-md shadow-xl'>
    //         <RegisterProvider />
    //       </div>
    //     </div>
    //   </div>
    // </>
    <>
      <Head>
        <title>Automotive Packaging Summit | Solution Providers</title>
        <meta
          property='og:title'
          content='Automotive Packaging Summit | Solution Providers'
        />
      </Head>
      <div className='flex flex-col'>
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

export default registerprovider;
