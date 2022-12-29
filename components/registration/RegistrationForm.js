import React from 'react';
import RegistrationFormDesktop from './RegistrationFormDesktop';
import RegistrationFormMobile from './RegistrationFormMobile';

const RegistrationForm = () => {
  return (
    <>
      <div className='lg:hidden'>
        <RegistrationFormMobile />
      </div>
      <div className='hidden lg:block'>
        <RegistrationFormDesktop />
      </div>
    </>
  );
};

export default RegistrationForm;
