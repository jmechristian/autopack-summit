import React, { useState, useEffect } from 'react';
import { sendRegCode } from '../../util/sendRegCode';

const GetCodeBlock = ({
  regCode,
  clear,
  name,
  title,
  company,
  email,
  phone,
  setSubmit,
}) => {
  const [formIsValid, setFormIsValid] = useState(false);
  const [error, setError] = useState(undefined);

  useEffect(() => {
    if (name && company && title && phone && email) {
      setFormIsValid(true);
    } else {
      setFormIsValid(false);
    }
  }, [name, company, title, phone, email]);

  const codeSubmitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      setError('Please fill out all required* fields');
      return;
    } else {
      sendRegCode(event, name, title, company, email, phone);
      clear();
      setSubmit({
        message:
          'Code request submitted! Please check you email for your registration code.',
      });
    }
  };

  return (
    <div className='flex flex-col gap-3 items-center p-6 text-center'>
      <p className='text-lg font-medium leading-6 text-gray-900 text-center'>
        Registration Code
      </p>
      <p className='text-slate-600 text-sm'>
        Please fill out all fields and submit below if you have not received a
        registration code.
      </p>
      <button
        className={`${
          regCode ? 'bg-slate-500' : 'bg-ap-blue'
        } rounded-md w-full mt-2`}
        onClick={(event) => codeSubmitHandler(event)}
      >
        <div className='text-white uppercase text-sm lg:text-base font-bold py-3 px-6 tracking-widest'>
          Get Code
        </div>
      </button>
      {error && <p className='text-sm text-red-600'>{error}</p>}
    </div>
  );
};

export default GetCodeBlock;
