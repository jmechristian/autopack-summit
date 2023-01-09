import React, { useRef, useEffect } from 'react';
import { useCountUp } from 'react-countup';

const RegBlockPricing = ({ regCode, startCounter }) => {
  const countUpRef = useRef(null);
  const { start, pauseResume, reset, update } = useCountUp({
    ref: countUpRef,
    start: 799,
    end: 0,
    duration: 1,
    startOnMount: false,
  });

  useEffect(() => {
    if (startCounter) {
      start();
    }
  }, [startCounter]);

  return (
    <div
      className={`flex flex-col gap-3 items-center p-6 w-full bg-slate-100 ${
        regCode ? 'shadow-xl' : 'shadow-none'
      }`}
    >
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
          regCode ? 'bg-ap-yellow' : 'bg-slate-400'
        } rounded-md w-full mt-2`}
        disabled={regCode ? false : true}
      >
        <div
          className={`${
            regCode ? 'text-slate-900' : 'text-slate-500'
          } uppercase text-sm lg:text-base font-bold py-3 px-6 tracking-widest`}
        >
          Register
        </div>
      </button>
    </div>
  );
};

export default RegBlockPricing;
