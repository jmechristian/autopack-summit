import React, { useState, useEffect } from 'react';
import Head from 'next/head';

import { useRouter } from 'next/router';
import { API, graphqlOperation } from 'aws-amplify';
import { useSelector } from 'react-redux';
import { AnimatePresence } from 'framer-motion';

import RegistrationForm2024 from '../components/registration/RegistrationForm2024';

const Page = () => {
  const router = useRouter();
  const params = router.query;

  const message = useSelector((state) => state.layout.formSubmissionText);

  const [codes, setCodes] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  const getCodesQuery = /* GraphQL */ `
    query MyQuery {
      getAPS(id: "76fe4980-a8d8-485c-9747-93b20cb08bfd") {
        codes {
          code
        }
      }
    }
  `;

  useEffect(() => {
    getAllCodes();
  }, []);

  const getAllCodes = async () => {
    try {
      const allCodes = await API.graphql(graphqlOperation(getCodesQuery));
      const { codes } = allCodes.data.getAPS;
      for (let c in codes) {
        setCodes((prev) => [...prev, codes[c].code.toUpperCase()]);
      }
    } catch (error) {
      console.log('error', error);
    }
  };

  return (
    <>
      <Head>
        <title>Automotive Packaging Summit | Register</title>
        <meta
          property='og:title'
          content='Automotive Packaging Summit | Register'
        />
      </Head>
      {/* <div className='lg:hidden'>
        <RegistrationFormMobile codes={codes && codes} />
      </div> */}
      {submitted ? (
        <AnimatePresence>
          <div className='max-w-xl lg:max-w-3xl text-center px-10 my-24 mx-auto'>
            <h2 className='text-3xl font-bold tracking-tight text-ap-darkblue sm:text-5xl lg:text-5xl'>
              Thank You!
            </h2>
            <p className='mt-5 md:text-lg leading-relaxed lg:leading-relaxed lg:text-xl text-gray-500'>
              {message} We look forward to collaborating with you in Greenville.
              For any questions, please email{' '}
              <a href='mailto:lars@packagingschool.com' className='font-bold'>
                Lars Nikolaus
              </a>{' '}
              or{' '}
              <a href='mailto:bianca@packagingschool.com' className='font-bold'>
                Bianca Hurley.{' '}
              </a>
            </p>
          </div>
        </AnimatePresence>
      ) : (
        <AnimatePresence>
          <div className='max-w-7xl mx-auto px-5 xl:px-0 pt-5 lg:pb-16 pb-10'>
            <RegistrationForm2024
              codes={codes && codes}
              submitted={() => setSubmitted(true)}
              params={params}
            />
          </div>
        </AnimatePresence>
      )}
    </>
  );
};

export default Page;
