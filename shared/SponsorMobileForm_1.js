import React, { useState } from 'react';

const SponsorMobileForm_1 = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  return (
    <div className='flex flex-col md:flex-row gap-4 md:gap-6'>
      <div className='flex flex-col gap-1 md:w-1/2'>
        <div className='text-xs font-medium text-slate-500 uppercase'>
          First Name*
        </div>
        <input
          name='firstName'
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          type='text'
          className='w-full'
        />
      </div>
      <div className='flex flex-col gap-1 md:w-1/2'>
        <div className='text-xs font-medium text-slate-500 uppercase'>
          Last Name*
        </div>
        <input
          name='lastName'
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
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

export default SponsorMobileForm_1;
