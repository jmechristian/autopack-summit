import React, { useState, useEffect } from 'react';
import { sendRegCode } from '../../util/sendRegCode';
import { useDispatch } from 'react-redux';
import { setThankYouMessage } from '../../features/layout/layoutSlice';
import { formSubmitClickHandler } from '../../util/tracking';

const GetCodeBlock = ({
  regCode,
  clear,
  name,
  title,
  company,
  email,
  phone,
  setSubmit,
  checkCode,
}) => {
  const [formIsValid, setFormIsValid] = useState(false);
  const [error, setError] = useState(undefined);
  const dispatch = useDispatch();

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
      // console.log('nothing is filled out.');
      setError('Please fill out all required* fields');
      return;
    }

    if (regCode && formIsValid) {
      // console.log(
      //   'Code in there and everything is filled out, just need to check code'
      // );
      checkCode();
      return;
    }

    if (!regCode && formIsValid) {
      // console.log('no code, but everything else. send for reg code');
      sendRegCode(event, name, title, company, email, phone);
      formSubmitClickHandler('code_request', email);
      clear();
      dispatch(
        setThankYouMessage(
          `Your request for a registration code has been sent. Please check your inbox, ${email}, shortly to complete registration.`
        )
      );
      setSubmit();
      return;
    }
  };

  return (
    <div className='flex flex-col gap-3 items-center text-center'>
      <button
        className='bg-ap-blue rounded-md w-full mt-6'
        onClick={(event) => codeSubmitHandler(event)}
      >
        <div className='text-white uppercase text-sm lg:text-base font-bold py-3 px-6 tracking-widest'>
          {regCode ? 'Validate Code' : 'Get Code'}
        </div>
      </button>
      {error && <p className='text-sm text-red-600'>{error}</p>}
    </div>
  );
};

export default GetCodeBlock;
