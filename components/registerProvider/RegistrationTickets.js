import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { API } from 'aws-amplify';
import { createAPSTicket } from '../../src/graphql/mutations';

const RegistrationTickets = ({ ticketCount }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [title, setTitle] = useState('');
  const [company, setCompany] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

  //   const startProcess = async (e) => {
  //     e.preventDefault();
  //     setIsLoading(true);
  //     const res = await API.graphql({
  //       query: createAPSTicket,
  //       variables: {
  //         input: {
  //           name: name,
  //           email: email,
  //           phone: phone,
  //           company: company,
  //           title: title,
  //         },
  //       },
  //     });

  //     console.log(res);
  //     if (res.data) {
  //       try {
  //         await fetch('/api/create-checkout-session', { method: 'POST' });
  //       } catch (err) {
  //         console.log(err);
  //       }
  //     }
  //   };

  return (
    <div className='p-5 lg:p-3'>
      <div className='grid grid-cols-1 lg:grid-cols-6 gap-12'>
        <div className='col-span-3 hidden lg:block bg-bgImage_reg_provider bg-cover bg-center rounded-md w-full h-full'>
          <div className='flex flex-col justify-between p-6 h-full w-4/5'>
            <div className='flex flex-col gap-6'>
              <div className='font-semibold text-white/80 lg:text-4xl 2xl:text-5xl leading-none'>
                General Admission Registration
              </div>
              <div className='text-white font-bold text-4xl bg-ap-blue px-4 py-2 w-fit'>
                $1200
              </div>
            </div>
            <div className='flex flex-col'>
              <div className='font-oswald tracking-loose text-3xl uppercase text-ap-yellow'>
                Oct 2, 2023
              </div>
              <div className=' block font-oswald tracking-loose text-3xl uppercase text-white'>
                Huguenot Loft
                <div className='text-lg text-white leading-tight font-inter capitalize mt-1'>
                  101 W Broad St
                  <br /> Greenville, SC 29601
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='col-span-3 flex flex-col gap-6'>
          <div className='flex justify-between items-center w-full bg-ap-darkblue px-3 py-3 rounded-lg'>
            <div className='flex flex-col'>
              <div className='text-white text-xl font-bold lg:ml-3'>
                Ticket quantities are{' '}
                <span className='text-ap-yellow'>limited!</span>
              </div>
              <div className='text-sm text-white/70 lg:ml-3'>
                *2 tickets permitted per company
              </div>
            </div>
            <div className='flex flex-col justify-center items-center bg-ap-blue px-6 py-1.5 rounded-lg'>
              <div className='font-oswald font-bold text-4xl text-white'>
                {20 - ticketCount}
              </div>
              <div className='uppercase font-oswald text-sm text-white/70'>
                Available
              </div>
            </div>
          </div>
          <form
            className='grid grid-cols-1 gap-y-4'
            action={`/api/create-checkout-session?name=${name}&email=${email}&phone=${phone}&company=${company}&title=${title}`}
            method='POST'
          >
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
                type='submit'
                role='link'
              >
                <div className='text-slate-800 font-oswald uppercase text-sm lg:text-lg font-bold py-3 px-6 tracking-widest lg:leading-tight'>
                  {isLoading ? 'Sending Data' : 'Proceed to Payment'}
                </div>
              </button>
              <div className='text-slate-500 text-sm'>
                By clicking PROCEED TO PAYMENT you agree to accept our{' '}
                <a href='/policies'>
                  <u>Event Terms and Conditions.</u>
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegistrationTickets;
