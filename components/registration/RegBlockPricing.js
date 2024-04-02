import React, { useRef, useEffect, useState } from 'react';
import { useCountUp } from 'react-countup';
import { sendEmail } from '../../util/sendEmail';
import { useDispatch } from 'react-redux';
import { setThankYouMessage } from '../../features/layout/layoutSlice';
import { formSubmitClickHandler } from '../../util/tracking';
import { useRouter } from 'next/router';
import { RegReceived, handleRegInit } from '../../util/api';

const RegBlockPricing = ({
  regCode,
  startCounter,
  resetCounter,
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
  const countUpRef = useRef(null);
  const router = useRouter();
  const dispatch = useDispatch();
  const { start, pauseResume, reset, update } = useCountUp({
    ref: countUpRef,
    start: 799,
    end: 0,
    duration: 1,
    startOnMount: false,
  });

  const [errors, setErrors] = useState({ message: '', isError: false });
  const [formIsValid, setFormIsValid] = useState(false);

  useEffect(() => {
    if (startCounter) {
      start();
    }
  }, [startCounter]);

  useEffect(() => {
    if (resetCounter === undefined) {
      update(1015);
    }

    if (resetCounter) {
      start();
    }
  }, [resetCounter]);

  useEffect(() => {
    if (
      name &&
      company &&
      title &&
      phone &&
      email &&
      isValid &&
      worksWith != 'none' &&
      speedNetworking != 'none' &&
      innovationWorkshop != 'none' &&
      plantTour != 'none'
    ) {
      setFormIsValid(true);
    } else {
      setFormIsValid(false);
    }
  }, [
    name,
    company,
    title,
    phone,
    email,
    isValid,
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

    router.push('/registration-thank-you');
  };

  return (
    <div className='flex flex-col gap-3 items-center justify-between w-full h-full px-6'>
      <p className='text-lg font-medium leading-6 text-gray-900'>
        Let's Innovate.
      </p>

      <div className='flex items-center justify-center text-5xl font-bold tracking-tight text-gray-900'>
        <span>$</span>

        <div ref={countUpRef} />
        <span className='ml-2 text-xl font-medium tracking-normal text-slate-500'>
          USD
        </span>
      </div>
      <button
        className={`${
          formIsValid ? 'bg-ap-yellow' : 'bg-slate-400'
        } w-full mt-2 shadow-[4px_4px_0_black] hover:shadow-[1px_1px_0_black] hover:translate-x-[3px] hover:translate-y-[3px] transition-all`}
        disabled={!regCode || !formIsValid}
        onClick={regInitHandler}
      >
        <div
          className={`${
            formIsValid ? 'text-slate-900' : 'text-slate-500'
          } uppercase text-sm lg:text-base font-bold py-3 px-6 tracking-widest`}
        >
          {formIsValid ? 'Register' : 'Enter Code'}
        </div>
      </button>
      {!formIsValid && (
        <p className='text-sm text-red-500 text-center mt-2'>
          Please fill out all required* fields.
        </p>
      )}
    </div>
  );
};

export default RegBlockPricing;
