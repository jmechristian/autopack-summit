import React, { useState } from 'react';

const RegistrationFormDesktop = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [title, setTitle] = useState('');
  const [company, setCompany] = useState('');
  const [regCode, setRegCode] = useState('');

  return (
    <div className='p-3'>
      <div className='grid grid-cols-6 gap-16'>
        <div className='col-span-3 bg-bgImage_reg bg-cover bg-center rounded-md w-full h-full'>
          <div className='flex flex-col p-6 justify-end items-end h-full w-4/5'>
            <div className='font-semibold text-white/80 text-4xl leading-none'>
              "AutoPack Summit gives us networking with the automotive world
              exclusively"
            </div>
            <div className='text-white/80 font-bold text-left w-full pt-4'>
              - 2019 Sponsor
            </div>
          </div>
        </div>
        <div className='col-span-3'>
          <div className='grid grid-cols-1 gap-y-4'>
            <div className='flex flex-col gap-1'>
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
            <div className='flex flex-col gap-1'>
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
            <div className='flex flex-col gap-1'>
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
                className='w-full placeholder:text-sm'
                placeholder='No registration code? Continue below to get yours.'
              />
            </div>
            <div className='grid grid-cols-2 items-center mt-6'>
              <div className='flex flex-col gap-3 items-center p-6 text-center'>
                <p className='text-lg font-medium leading-6 text-gray-900 text-center'>
                  Get My Code
                </p>
                <p className='text-slate-600'>
                  Please fill out all fields and submit below.
                </p>
                <button className='bg-ap-blue rounded-md w-full mt-2'>
                  <div className='text-white uppercase text-sm lg:text-base font-bold py-3 px-6 tracking-widest'>
                    Get Code
                  </div>
                </button>
              </div>
              <div
                className={`flex flex-col gap-3 items-center p-6 bg-slate-100 ${
                  regCode ? 'shadow-2xl' : 'shadow-none'
                }`}
              >
                <p className='text-lg font-medium leading-6 text-gray-900'>
                  Let's Innovate.
                </p>
                <div className='flex items-center justify-center text-5xl font-bold tracking-tight text-gray-900'>
                  <span>$799</span>
                  <span className='ml-2 text-xl font-medium tracking-normal text-slate-500'>
                    USD
                  </span>
                </div>
                <button
                  className={`${
                    regCode ? 'bg-ap-yellow' : 'bg-slate-400'
                  } rounded-md w-full mt-2`}
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationFormDesktop;
