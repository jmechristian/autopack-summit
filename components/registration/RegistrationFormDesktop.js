import Link from 'next/link';
import React, { useState } from 'react';
import GetCodeBlock from './GetCodeBlock';
import RegBlockPricing from './RegBlockPricing';

const RegistrationFormDesktop = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [title, setTitle] = useState('');
  const [company, setCompany] = useState('');
  const [regCode, setRegCode] = useState('');
  const [startCounter, setStartCounter] = useState(false);

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
            <div className='grid grid-cols-2 items-center mt-6'>
              <GetCodeBlock regCode={regCode} />
              <RegBlockPricing regCode={regCode} startCounter={startCounter} />
            </div>
            <div className='text-slate-600 text-xs text-center mt-4'>
              By clicking GET CODE or REGISTER you agree to accept our
              <br />
              <u>Event Terms and Conditions.</u>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationFormDesktop;
