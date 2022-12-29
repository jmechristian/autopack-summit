import React from 'react';
import RegisterProviderDesktop from './RegisterProviderDesktop';
import RegistrationProviderMobile from './RegistrationProviderMobile';

const RegisterProvider = () => {
  return (
    <>
      <div className='lg:hidden'>
        <RegistrationProviderMobile />
      </div>
      <div className='hidden lg:block'>
        <RegisterProviderDesktop />
      </div>
    </>
  );
};

export default RegisterProvider;
