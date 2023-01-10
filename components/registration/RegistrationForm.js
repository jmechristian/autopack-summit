import React, { useState, useEffect } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { getAPS } from '../../src/graphql/queries';
import RegistrationFormDesktop from './RegistrationFormDesktop';
import RegistrationFormMobile from './RegistrationFormMobile';

const RegistrationForm = () => {
  const [codes, setCodes] = useState([]);

  useEffect(() => {
    const getAllCodes = async () => {
      const allCodes = await API.graphql(
        graphqlOperation(getAPS, { id: '76fe4980-a8d8-485c-9747-93b20cb08bfd' })
      );
      const { codes } = allCodes.data.getAPS;
      for (let c in codes) {
        setCodes((prev) => [...prev, codes[c].code.toUpperCase()]);
      }
    };

    getAllCodes();
  }, []);

  return (
    <>
      <div className='lg:hidden'>
        <RegistrationFormMobile codes={codes} />
      </div>
      <div className='hidden lg:block'>
        <RegistrationFormDesktop codes={codes} />
      </div>
    </>
  );
};

export default RegistrationForm;
