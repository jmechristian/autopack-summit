import React, { useState } from 'react';

const RegistrationFormMobile = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [title, setTitle] = useState('');
  const [company, setCompany] = useState('');
  const [regCode, setRegCode] = useState('');

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
        <input
          name='regCode'
          value={regCode}
          onChange={(e) => setRegCode(e.target.value)}
          type='text'
          className='w-full'
        />
      </div>
      <div className='flex flex-col md:flex-row items-center gap-4 mt-3'>
        <button className='bg-ap-yellow rounded-md w-full'>
          <div className='text-slate-800 font-oswald uppercase text-lg font-bold py-3 px-6 tracking-widest'>
            Register
          </div>
        </button>
        <button className='bg-ap-yellow rounded-md w-full'>
          <div className='text-slate-800 font-oswald uppercase text-lg font-bold py-3 px-6 tracking-widest'>
            Register
          </div>
        </button>
        <div className='text-slate-500 text-sm'>
          By clicking REGISTER you agree to accept our Event Terms and
          Conditions.
        </div>
      </div>
    </form>
  );
};

export default RegistrationFormMobile;
