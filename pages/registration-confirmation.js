import React, { useEffect, useState } from 'react';
import RegistrationConfirm from '../components/registration/RegistrationConfirm';
import { API } from 'aws-amplify';
import { createAPSTicket } from '../src/graphql/mutations';
import { useRouter } from 'next/router';
import { sendTicket } from '../util/sendTicket';
import { sendConfirmationEmail } from '../util/SendConfirmationEmail';

const Page = () => {
  const [isBody, setIsBody] = useState(null);
  const router = useRouter();

  useEffect(() => {
    if (!router) return;
    // Check to see if this is a redirect back from Checkout
    const hey = new URLSearchParams(window.location.search);
    if (router.isReady && hey.get('success')) {
      sendTicket(
        router.query.name,
        router.query.title,
        router.query.company,
        router.query.email,
        router.query.phone
      );
      sendConfirmationEmail(router.query.name, router.query.email);
      API.graphql({
        query: createAPSTicket,
        variables: {
          input: {
            name: router.query.name,
            email: router.query.title,
            company: router.query.company,
            title: router.query.title,
            phone: router.query.phone,
          },
        },
      });
      setIsBody(
        <RegistrationConfirm
          status={'Registration Successful!'}
          headline={'We will see you in Greenville.'}
          message={
            <p>
              Be sure to check your inbox for registration confirmation shortly.
              For questions please email{' '}
              <a href='mailto:lars@packagingschool.com'>
                Lars@Packagingschool.com
              </a>
            </p>
          }
        />
      );
    }

    if (router.isReady && hey.get('canceled')) {
      setIsBody(
        <RegistrationConfirm
          status={'Registration Unsuccessful!'}
          headline={'There has been an error.'}
          message={
            <p>
              For questions please email{' '}
              <a href='mailto:lars@packagingschool.com'>
                Lars@Packagingschool.com
              </a>
            </p>
          }
        />
      );
    }
  }, [router]);
  return (
    <>
      <div className='h-24 bg-ap-darkblue w-full' />
      <div className='max-w-7xl mx-auto w-full h-full py-9'>
        <div className='flex flex-col items-center'>
          <div>{isBody ? isBody : <div>Gathering data....</div>}</div>
        </div>
      </div>
    </>
  );
};

export default Page;
