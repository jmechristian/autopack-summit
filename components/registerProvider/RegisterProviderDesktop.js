import React, { useState } from 'react';
import { ArrowLongRightIcon } from '@heroicons/react/24/solid';
import { sendSponsorForm } from '../../util/sendSponsorForm';
import { setThankYouMessage } from '../../features/layout/layoutSlice';
import { useDispatch } from 'react-redux';

const RegisterProviderDesktop = ({ submitted }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [title, setTitle] = useState('');
  const [company, setCompany] = useState('');

  const dispatch = useDispatch();

  const clear = () => {
    setName('');
    setEmail('');
    setPhone('');
    setTitle('');
    setCompany('');
  };

  return (
    <div className='p-5 lg:p-3'>
      <div className='grid grid-cols-1 lg:grid-cols-6 gap-12'>
        <div className='col-span-3 hidden lg:block bg-bgImage_reg_provider bg-cover bg-center rounded-md w-full h-full'>
          <div className='flex flex-col p-6 justify-end items-end h-full w-4/5 gap-4'>
            <div className='font-semibold text-white/80 lg:text-4xl 2xl:text-5xl leading-none'>
              Leverage the benefits of Sponsorship.
            </div>
            <div className='text-white/80 font-semibold text-lg leading-snug text-left w-full pt-4'>
              Registration for Solution Providers is done through Sponsorship.
              Don't miss out on the limited opportunities to represent your
              brand at the Automotive Packaging Summit.{' '}
              <span className='text-ap-yellow'>
                Fill out the form to find out how you can be a part of the next
                Summit.
              </span>
              <ArrowLongRightIcon className='w-7 h-7 fill-white inline ml-1' />
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
              <button
                className='bg-ap-yellow rounded-md w-full'
                onClick={(event) => {
                  sendSponsorForm(event, name, title, company, email, phone);
                  dispatch(
                    setThankYouMessage(
                      `Thank you for your Sponsorship submission. Our team will follow up by email at ${email}.`
                    )
                  );
                  clear();
                  submitted();
                }}
              >
                <div className='text-slate-800 font-oswald uppercase text-sm lg:text-lg font-bold py-3 px-6 tracking-widest'>
                  Get Involved
                </div>
              </button>
              <div className='text-slate-500 text-sm'>
                By clicking GET INVOLVED you agree to accept our{' '}
                <a href='/policies'>
                  <u>Event Terms and Conditions.</u>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterProviderDesktop;
