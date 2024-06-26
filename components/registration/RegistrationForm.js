import React, { useState, useEffect } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import RegistrationFormDesktop from './RegistrationFormDesktop';
import { useSelector } from 'react-redux';

const RegistrationForm = ({ params }) => {
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
      {/* <div className='lg:hidden'>
        <RegistrationFormMobile codes={codes && codes} />
      </div> */}
      {submitted ? (
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
      ) : (
        <RegistrationFormDesktop
          codes={codes && codes}
          submitted={() => setSubmitted(true)}
          params={params}
        />
      )}
    </>
  );
};

export default RegistrationForm;
