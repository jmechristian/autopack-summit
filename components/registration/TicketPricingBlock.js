import React, { useRef, useEffect, useState } from 'react';
import { sendEmail } from '../../util/sendEmail';
import { useDispatch } from 'react-redux';
import { setThankYouMessage } from '../../features/layout/layoutSlice';
import { formSubmitClickHandler } from '../../util/tracking';
import { useRouter } from 'next/router';
import {
  RegReceived,
  handleRegInit,
  handleTicketRegInit,
} from '../../util/api';

const TicketPricingBlock = ({
  company,
  name,
  title,
  email,
  phone,
  isValid,
  clear,
  setSubmit,
  worksWith,
  speedNetworking,
  innovationWorkshop,
  plantTour,
}) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const [errors, setErrors] = useState({ message: '', isError: false });
  const [formIsValid, setFormIsValid] = useState('INIT');
  const regCode = 'TICKET';

  useEffect(() => {
    if (
      name &&
      company &&
      title &&
      phone &&
      email &&
      worksWith != 'none' &&
      speedNetworking != 'none' &&
      innovationWorkshop != 'none' &&
      plantTour != 'none'
    ) {
      setFormIsValid('VALID');
    } else {
      setFormIsValid('NOTVALID');
    }
  }, [
    name,
    company,
    title,
    phone,
    email,
    worksWith,
    plantTour,
    innovationWorkshop,
    speedNetworking,
  ]);

  const regInitHandler = async () => {
    await handleRegInit(
      name,
      title,
      company,
      email,
      phone,
      regCode,
      worksWith,
      speedNetworking,
      innovationWorkshop,
      plantTour
    );
    await sendEmail(
      name,
      title,
      company,
      email,
      phone,
      regCode,
      worksWith,
      speedNetworking,
      innovationWorkshop,
      plantTour
    );

    // const response = await fetch('/api/create-early-bird-checkout', {
    //   method: 'POST',
    //   headers: {
    //     Accept: 'application/json',
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     email: email,
    //   }),
    // });
    router.push('https://buy.stripe.com/28o00W2REdXWb049AB');
  };

  return (
    <div className='flex flex-col gap-3 items-center justify-between w-full h-full px-6'>
      <p className='font-medium bg-ap-yellow px-3 py-1 rounded text-white text-sm'>
        Limited Early-Bird Discount!
      </p>
      <div className='flex flex-col gap-2 justify-center'>
        <div className='flex items-center justify-center text-5xl font-bold tracking-tight text-gray-900'>
          <span>$846</span>

          <span className='ml-2 text-sm font-medium tracking-normal text-gray-900'>
            USD
          </span>
        </div>
        <div>
          <div className='flex items-center justify-center text-3xl font-medium tracking-tight text-gray-500'>
            <span className='line-through'>$1015</span>

            <span className='ml-2 text-xs font-medium tracking-normal text-slate-500'>
              USD
            </span>
          </div>
        </div>
      </div>
      <button
        className={`${
          formIsValid === 'VALID' ? 'bg-ap-yellow' : 'bg-slate-400'
        } w-full mt-2 shadow-[4px_4px_0_black] hover:shadow-[1px_1px_0_black] hover:translate-x-[3px] hover:translate-y-[3px] transition-all`}
        disabled={
          formIsValid === 'NOTVALID'
            ? true
            : formIsValid === 'VALID'
            ? false
            : true
        }
        onClick={regInitHandler}
      >
        <div
          className={`${
            formIsValid === 'VALID' ? 'text-slate-900' : 'text-slate-500'
          } uppercase text-sm lg:text-base font-bold py-3 px-6 tracking-widest`}
        >
          {formIsValid === 'VALID' ? 'Register' : 'Complete Form'}
        </div>
      </button>
      {/* {formIsValid === 'NOTVALID' && (
        <p className='text-sm text-red-500 text-center mt-2'>
          Please fill out all required* fields.
        </p>
      )} */}
    </div>
  );
};

export default TicketPricingBlock;
