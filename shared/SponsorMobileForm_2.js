import React, { useState } from 'react';

const SponsorMobileForm_2 = () => {
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  return (
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
      <div className='flex flex-col gap-1'>
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
      <div className='flex flex-col gap-1 md:w-1/2'>
        <div className='text-xs font-medium text-slate-500 uppercase'>
          Email*
        </div>
        <input
          name='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type='email'
          className='w-full'
        />
      </div>
    </div>
  );
};

export default SponsorMobileForm_2;
