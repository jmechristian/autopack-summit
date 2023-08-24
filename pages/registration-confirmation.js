import React, { useEffect, useState } from 'react';
import RegistrationConfirm from '../components/registration/RegistrationConfirm';

const Page = () => {
  const [isBody, setIsBody] = useState(null);

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);
    if (query.get('success')) {
      setIsBody(
        <RegistrationConfirm
          status={'Registration Successful!'}
          headline={'We will see you in Greenville.'}
          message={
            <p>
              Be sure to check your inbox for registration confirmation shortly.
              For questions please email{' '}
              <a href='mailto:diana@packagingschool.com'>
                Diana@Packagingschool.com
              </a>
            </p>
          }
        />
      );
    }

    if (query.get('canceled')) {
      setIsBody(
        <RegistrationConfirm
          status={'Registration Unsuccessful!'}
          headline={'There has been an error.'}
          message={
            <p>
              For questions please email{' '}
              <a href='mailto:diana@packagingschool.com'>
                Diana@Packagingschool.com
              </a>
            </p>
          }
        />
      );
    }
  }, []);
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
