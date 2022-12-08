import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { openSponsorForm } from '../features/layout/layoutSlice';
import { XMarkIcon } from '@heroicons/react/24/solid';

const SponsorshipFormModal = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [message, setMessage] = useState('');

  const dispatch = useDispatch();

  return (
    <div className='bg-black/60 backdrop-blur-md fixed left-0 right-0 top-0 bottom-0 z-50'>
      <div className='flex h-full justify-center items-center px-4 py-8'>
        <div className='bg-white w-full max-w-2xl rounded-md relative'>
          <div className='flex flex-col gap-6 p-6 md:p-8 xl:gap-8'>
            <div className='blue_subheadline text-3xl'>
              Join The Sponsor Lineup
            </div>
            <div className='text-slate-500 font-semibold'>
              Have a question about Sponsorship? Email{' '}
              <a href='mailto:bianca@packagingschool.com' className='underline'>
                Bianca Hurley{' '}
              </a>
              or{' '}
              <a href='mailto:diana@packagingschool.com' className='underline'>
                Diana Whitaker
              </a>
            </div>
            <form className='grid grid-cols-1 gap-y-4 md:gap-y-6'>
              <div className='flex flex-col md:flex-row gap-4 md:gap-6'>
                <div className='flex flex-col gap-1 md:w-1/2'>
                  <div className='text-sm font-medium text-slate-500 uppercase'>
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
                  <div className='text-sm font-medium text-slate-500 uppercase'>
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
              </div>
              <div className='flex flex-col md:flex-row gap-4 md:gap-6'>
                <div className='flex flex-col gap-1 md:w-1/2'>
                  <div className='text-sm font-medium text-slate-500 uppercase'>
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
                <div className='flex flex-col gap-1 md:w-1/2'>
                  <div className='flex justify-between'>
                    <div className='text-sm font-medium text-slate-500 uppercase'>
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
              </div>
              <div className='flex flex-col gap-1'>
                <div className='text-sm font-medium text-slate-500 uppercase'>
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
                <div className='text-sm font-medium text-slate-500 uppercase'>
                  Message
                </div>
                <textarea
                  name='message'
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className='w-full'
                  rows={4}
                />
              </div>
              <div className='flex flex-col md:flex-row items-center gap-4'>
                <button className='bg-ap-darkblue rounded-md w-full'>
                  <div className='text-white uppercase text-sm lg:text-lg font-bold py-3 px-6 tracking-widest'>
                    Get Involved
                  </div>
                </button>
                <div className='text-slate-500 text-sm'>
                  By clicking GET INVOLVED you agree to accept our Event Terms
                  and Conditions.
                </div>
              </div>
            </form>
          </div>
          <div
            className='absolute top-4 right-4'
            onClick={() => dispatch(openSponsorForm())}
          >
            <XMarkIcon className='w-7 h-7 fill-slate-700' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SponsorshipFormModal;
