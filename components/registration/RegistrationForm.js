import React, { useState } from 'react';
import RegistrationFormDesktop from './RegistrationFormDesktop';
import RegistrationFormMobile from './RegistrationFormMobile';

const RegistrationForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [title, setTitle] = useState('');
  const [company, setCompany] = useState('');
  const [message, setMessage] = useState('');

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
