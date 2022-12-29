import React, { useState } from 'react';

const RegistrationFormDesktop = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [title, setTitle] = useState('');
  const [company, setCompany] = useState('');
  const [message, setMessage] = useState('');

  return (
    <div className='p-3'>
      <div className='grid grid-cols-6 gap-20'>
        <div className='col-span-3 bg-bgImage_blue bg-cover bg-center rounded-md w-full h-full'>
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
            <div className='flex flex-col md:flex-row items-center gap-4 mt-3'>
              <button className='bg-ap-darkblue rounded-md w-full'>
                <div className='text-white uppercase text-sm lg:text-lg font-bold py-3 px-6 tracking-widest'>
                  Register
                </div>
              </button>
              <div className='text-slate-500 text-sm'>
                By clicking REGISTER you agree to accept our Event Terms and
                Conditions.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationFormDesktop;
