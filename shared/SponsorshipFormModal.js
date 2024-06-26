import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { openSponsorForm } from '../features/layout/layoutSlice';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { sendSponsorForm } from '../util/sendSponsorForm';
import { setThankYouMessage } from '../features/layout/layoutSlice';
import { formSubmitClickHandler } from '../util/tracking';

const SponsorshipFormModal = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [title, setTitle] = useState('');
  const [error, setError] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const clear = () => {
    setName('');
    setEmail('');
    setPhone('');
    setCompany('');
    setTitle('');
  };

  const formSubmitHandler = (event) => {
    if (name && email && phone && title && company) {
      sendSponsorForm(name, title, company, email, phone);
      // formSubmitClickHandler('sponsor_form', email);
      setSubmitted(true);
      clear();
      dispatch(
        setThankYouMessage(
          `Thank you for your Sponsorship submission. Our team will follow up by email at ${email}.`
        )
      );
    } else {
      setError(true);
    }
  };

  const dispatch = useDispatch();

  return (
    <div className='bg-black/60 backdrop-blur-md fixed left-0 right-0 top-0 bottom-0 z-50 flex justify-center items-start sm:items-center'>
      <div className='flex justify-center px-2 overflow-hidden'>
        <div className='bg-white w-full max-w-2xl rounded-md relative py-3 px-2'>
          <div className='flex flex-col gap-5 p-5 md:p-8 xl:gap-12 mt-2'>
            <div className='flex flex-col gap-3'>
              <div className=' text-2xl sm:text-3xl xl:text-5xl max-w-fit leading-none uppercase font-oswald font-bold text-ap-darkblue tracking-widest text-center lg:text-left'>
                Join The Sponsor Lineup
              </div>
              <div className='text-slate-500 font-semibold text-center text-sm xl:text-base lg:text-left'>
                Fill out the form and our team will follow up with you via
                email. Have a question about Sponsorship? Email{' '}
                <a
                  href='mailto:bianca@packagingschool.com'
                  className='underline'
                >
                  Bianca Hurley{' '}
                </a>
                or{' '}
                <a href='mailto:lars@packagingschool.com' className='underline'>
                  Lars Nikolaus
                </a>
              </div>
            </div>
            {/* <form className='lg:grid lg:grid-cols-1 gap-y-4 md:gap-y-6 hidden'>
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
              </div>
              <div className='flex flex-col md:flex-row gap-4 md:gap-6'>
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
            </form> */}
            <div className='grid grid-cols-1 gap-y-4'>
              <div className='flex flex-col gap-1'>
                <div className='flex justify-between'>
                  <div className='text-xs font-medium text-slate-500 uppercase'>
                    Name
                  </div>
                  <div className='text-slate-500 text-xs uppercase'>
                    *required
                  </div>
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
                <div className='flex justify-between'>
                  <div className='text-xs font-medium text-slate-500 uppercase'>
                    Email
                  </div>
                  <div className='text-slate-500 text-xs uppercase'>
                    *required
                  </div>
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
                    Phone
                  </div>
                  <div className='text-slate-500 text-xs uppercase'>
                    *required
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
                <div className='flex justify-between'>
                  <div className='text-xs font-medium text-slate-500 uppercase'>
                    Company
                  </div>
                  <div className='text-slate-500 text-xs uppercase'>
                    *required
                  </div>
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
                <div className='flex justify-between'>
                  <div className='text-xs font-medium text-slate-500 uppercase'>
                    Title
                  </div>
                  <div className='text-slate-500 text-xs uppercase'>
                    *required
                  </div>
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
                  disabled={submitted}
                  onClick={(event) => formSubmitHandler(event)}
                >
                  <div className='text-slate-800 font-oswald uppercase text-sm lg:text-lg font-bold py-3 px-6 tracking-widest'>
                    {submitted ? 'Submitted!' : 'Get Involved'}
                  </div>
                </button>
                <div className='text-slate-500 text-sm'>
                  By clicking GET INVOLVED you agree to accept our{' '}
                  <a href='/policies'>
                    <u>Event Terms and Conditions.</u>
                  </a>
                </div>
              </div>
              {error && (
                <div className='bg-red-200 py-2 px-3 text-center'>
                  <div className='text-red-800'>
                    Please fill out all required* fields.
                  </div>
                </div>
              )}
            </div>
          </div>
          <div
            className='absolute top-1 right-1'
            onClick={() => dispatch(openSponsorForm())}
          >
            <XMarkIcon className='w-6 h-6 fill-slate-900' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SponsorshipFormModal;
