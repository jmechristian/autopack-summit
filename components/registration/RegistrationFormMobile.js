import React, { useState } from 'react';
import GetCodeBlock from './GetCodeBlock';
import RegBlockPricing from './RegBlockPricing';

const RegistrationFormMobile = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [title, setTitle] = useState('');
  const [company, setCompany] = useState('');
  const [regCode, setRegCode] = useState('');
  const [startCounter, setStartCounter] = useState(false);

  return (
    <form className='grid lg:grid-cols-1 gap-y-4 md:gap-y-6 px-8 xl:px-12'>
      <div className='flex flex-col md:flex-row gap-4 md:gap-6'>
        <div className='flex flex-col gap-1 md:w-1/2'>
          <div className='text-xs font-medium text-slate-500 uppercase'>
            Name*
          </div>
          <input
            name='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            type='text'
            className='w-full'
          />
        </div>
        <div className='flex flex-col gap-1 md:w-1/2'>
          <div className='text-xs font-medium text-slate-500 uppercase'>
            Email*
          </div>
          <input
            name='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type='text'
            className='w-full'
          />
        </div>
      </div>
      <div className='flex flex-col md:flex-row gap-4 md:gap-6'>
        <div className='flex flex-col gap-1 md:w-1/2'>
          <div className='flex justify-between'>
            <div className='text-xs font-medium text-slate-500 uppercase'>
              Phone*
            </div>
          </div>
          <input
            name='phone'
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            type='tel'
            className='w-full'
          />
        </div>
        <div className='flex flex-col gap-1 md:w-1/2'>
          <div className='text-xs font-medium text-slate-500 uppercase'>
            Company*
          </div>
          <input
            name='company'
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            type='text'
            className='w-full'
          />
        </div>
      </div>
      <div className='flex flex-col gap-1'>
        <div className='text-xs font-medium text-slate-500 uppercase'>
          Title*
        </div>
        <input
          name='title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type='text'
          className='w-full'
        />
      </div>
      <div className='flex flex-col gap-1'>
        <div className='text-xs font-medium text-slate-500 uppercase'>
          Registration Code*
        </div>
        <div className='relative'>
          <input
            name='regCode'
            value={regCode}
            onChange={(e) => setRegCode(e.target.value)}
            type='text'
            className='w-full placeholder:text-sm'
            placeholder='No code? See below.'
          />
          <div className='absolute right-4 top-2 cursor-pointer'>
            <span
              className={`font-bold uppercase ${
                regCode ? 'text-ap-darkblue' : 'text-white'
              } text-sm`}
              onClick={() => setStartCounter(true)}
            >
              Apply
            </span>
          </div>
        </div>
      </div>
      <div className='flex flex-col md:flex-row items-center gap-4 mt-3 w-full'>
        {regCode ? (
          <RegBlockPricing regCode={regCode} startCounter={startCounter} />
        ) : (
          <GetCodeBlock />
        )}
        <div className='text-slate-600 text-xs text-center mt-5'>
          By clicking GET CODE or REGISTER you agree to accept our{' '}
          <u>Event Terms and Conditions</u>.
        </div>
      </div>
    </form>
  );
};

export default RegistrationFormMobile;
