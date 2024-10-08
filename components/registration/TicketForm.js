import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { MdCellTower } from 'react-icons/md';
import { createAPSUserFromCodeRequest } from '../../util/api';
import TicketPricingBlock from './TicketPricingBlock';

const TicketForm = ({
  codes,
  submitted,
  params,
  callout,
  live,
  buttonText,
}) => {
  const router = useRouter();
  const [name, setName] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [isCodeRequestError, setIsCodeRequestError] = useState('');
  const [worksWith, setWorksWith] = useState('none');
  const [speedNetworking, setSpeedNetworking] = useState('none');
  const [innovationWorkshop, setInnovationWorkshop] = useState('none');
  const [plantTour, setPlantTour] = useState('none');
  const [clemsonTour, setClemsonTour] = useState('none');
  const [bmwTour, setBmwTour] = useState('none');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [title, setTitle] = useState('');
  const [company, setCompany] = useState('');
  const [regCode, setRegCode] = useState('');
  const [startCounter, setStartCounter] = useState(false);
  const [isValid, setIsValid] = useState(undefined);

  const clearForm = () => {
    setName('');
    setEmail('');
    setPhone('');
    setTitle('');
    setCompany('');
  };

  return (
    <div className='flex flex-col gap-10 mb-20'>
      <div className='w-full rounded-2xl border-neutral-900 border-4 p-9 flex flex-col-reverse gap-2 lg:flex-row lg:items-center lg:justify-between bg-white shadow-[12px_16px_0_black] lg:pt-24 lg:pb-12'>
        <div className='font-medium font-oswald text-5xl md:text-6xl lg:text-7xl uppercase'>
          Registration
        </div>
        <div className='w-full max-w-sm leading-snug flex lg:justify-end items-center'>
          <div className='bg-black rounded-2xl font-bold text-sm md:text-xl text-white border border-neutral-900 px-3 py-1.5'>
            General Admission
          </div>
        </div>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-12 md:gap-9'>
        <div className='lg:col-span-12 xl:col-span-8 rounded-2xl md:border md:border-neutral-900 w-full h-full bg-white md:shadow-[4px_6px_0_black]'>
          <div className='grid md:grid-cols-2 gap-x-5 md:gap-x-10 gap-y-8 px-5 xl:px-10 py-5 overflow-hidden w-full'>
            {callout && (
              <div
                className='bg-yellow-300 border-2 border-black  w-full p-4 flex items-center gap-5 col-span-full cursor-pointer'
                onClick={() =>
                  window.open('https://forms.gle/k4KFagWajT7WACBx5', '_blank')
                }
              >
                <div>
                  <MdCellTower color='black' size='40px' />
                </div>
                <div>
                  <div className='text-lg font-bold'>
                    Join the Ticket Waitlist
                  </div>
                  <div className='leading-tight'>
                    Tickets for 2024 are sold out, but you can join the
                    waitlist. We'll notify you when tickets are available.
                  </div>
                </div>
              </div>
            )}
            <div className='flex flex-col gap-2 text-left py-3 lg:col-span-2'>
              <p className='text-xl font-medium leading-6 text-gray-900'>
                1. Personal Information
              </p>
              <p className='text-slate-600'>
                Please make sure to add the information of the attendee that is
                planning to attend the conference. Please fill out all fields to
                continue.
              </p>
              <div className='font-semibold mt-2'>
                Ticket sales are limited to 2 per company.
              </div>
            </div>
            <div className='flex flex-col gap-1 lg:col-span-2'>
              <div className='text-xs font-medium text-slate-500 uppercase flex justify-between'>
                <div>Name</div>
                <div>*Required</div>
              </div>
              <input
                name='name'
                value={name}
                onChange={(e) => setName(e.target.value)}
                type='text'
                className='w-full'
              />
            </div>
            <div className='flex flex-col gap-1 lg:col-span-2'>
              <div className='text-xs font-medium text-slate-500 uppercase flex justify-between'>
                <div>Email</div>
                <div>*Required</div>
              </div>
              <input
                name='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type='text'
                className='w-full'
              />
            </div>
            <div className='flex flex-col gap-1 lg:col-span-2'>
              <div className='text-xs font-medium text-slate-500 uppercase flex justify-between'>
                <div>Phone</div>
                <div>*Required</div>
              </div>
              <input
                name='phone'
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                type='tel'
                className='w-full'
              />
            </div>
            <div className='flex flex-col gap-1 lg:col-span-2'>
              <div className='text-xs font-medium text-slate-500 uppercase flex justify-between'>
                <div>Company</div>
                <div>*Required</div>
              </div>
              <input
                name='company'
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                type='text'
                className='w-full'
              />
            </div>
            <div className='flex flex-col gap-1 lg:col-span-2'>
              <div className='text-xs font-medium text-slate-500 uppercase flex justify-between'>
                <div>Title</div>
                <div>*Required</div>
              </div>
              <input
                name='title'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                type='text'
                className='w-full'
              />
            </div>
            <div className='flex flex-col gap-3 col-span-full'>
              <div className='w-full flex justify-end'>
                <div className='text-xs font-medium text-slate-500 uppercase'>
                  *Required
                </div>
              </div>
              <div className='leading-snug text-sm text-neutral-700'>
                Are you mostly working with production and returnable packaging
                or Aftersales and expendable packaging? Please select:
              </div>
              <div>
                <select
                  id='worksWith'
                  name='worksWith'
                  className='mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6'
                  defaultValue='Please Select Answer'
                  onChange={(e) => setWorksWith(e.target.value)}
                >
                  <option value={'none'}>Please Select Answer</option>
                  <option value={'production'}>
                    Production and Returnable Packaging
                  </option>
                  <option value={'aftersales'}>
                    Aftersales and Expendable Packaging
                  </option>
                </select>
              </div>
            </div>
            {/* <div className='flex gap-1 md:col-span-2 xl:col-span-2 bg-amber-300 -mx-6 p-7 rounded-2xl border-black border-2'>
              <div className='flex flex-col gap-2 w-full'>
                <div className='flex gap-9 items-center justify-center w-full h-[250px]'>
                  <div>Something fun is coming here.</div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
        {/* SIDEBAR */}
        <div className='xl:col-span-4 lg:col-span-12 w-full h-full bg-ap-blue/10 rounded-2xl md:border-2 md:border-black'>
          <div className='flex flex-col lg:flex-row xl:flex-col gap-6 justify-between lg:items-center '>
            {/* TOURS */}
            <div className='bg-ap-darkblue w-full text-white px-6 pt-6 pb-9 rounded-t-xl overflow-hidden'>
              <div className='flex flex-col gap-1'>
                <div className='flex items-center justify-between'>
                  <div className='font-bold text-lg text-amber-300'>Tours</div>
                </div>
                <div className='text-sm leading-tight text-neutral-200'>
                  Please indicate below if you are interested in participating
                  in special networking events outlined below. These events are
                  space limited and complimentary. The APS team will contact you
                  with registration details on each event as indicated.
                </div>
                <div className='relative w-full flex flex-col gap-2 mt-3'>
                  <div className='font-bold flex items-center justify-between'>
                    <div>Speed Networking Event</div>
                    <div className='text-xs font-medium text-red-100 uppercase'>
                      *Required
                    </div>
                  </div>
                  <select
                    id='speedNetworking'
                    name='speedNetworking'
                    className='mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6'
                    defaultValue='Please Select Answer'
                    onChange={(e) => setSpeedNetworking(e.target.value)}
                  >
                    <option value={'none'}>Please Select Answer</option>
                    <option value={'yes'}>
                      Yes, I am interested in attending the Speed Networking
                      Event.
                    </option>
                    <option value={'no'}>
                      No, I am not interested in attending the Speed Networking
                      Event.
                    </option>
                  </select>
                </div>
                <div className='relative w-full flex flex-col gap-2 mt-3'>
                  <div className='font-bold flex items-center gap-5 justify-between'>
                    <div>Bosch Rexroth Packaging Innovation Workshop</div>
                    <div className='text-xs font-medium text-red-100 uppercase'>
                      *Required
                    </div>
                  </div>
                  <select
                    id='innovationWorkshop'
                    name='innovationWorkshop'
                    className='mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6'
                    defaultValue='Please Select Answer'
                    onChange={(e) => setInnovationWorkshop(e.target.value)}
                  >
                    <option value={'none'}>Please Select Answer</option>
                    <option value={'yes'}>
                      Yes, I am interested in attending the Innovation Workshop.
                    </option>
                    <option value={'no'}>
                      No, I am not interested in attending the Innovation
                      Workshop.
                    </option>
                  </select>
                </div>
                <div className='relative w-full flex flex-col gap-2 mt-3'>
                  <div className='font-bold flex items-center justify-between'>
                    <div>
                      Packaging Provider <br /> Plant Tour
                    </div>
                    <div className='text-xs font-medium text-red-100 uppercase'>
                      *Required
                    </div>
                  </div>
                  <select
                    id='plantTour'
                    name='plantTour'
                    className='mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6'
                    defaultValue='Please Select Answer'
                    onChange={(e) => setPlantTour(e.target.value)}
                  >
                    <option value={'none'}>Please Select Answer</option>
                    <option value={'yes'}>
                      Yes, I am interested in attending the Packaging Provider
                      Plant Tour.
                    </option>
                    <option value={'no'}>
                      No, I am not interested in attending the Packaging
                      Provider Plant Tour.
                    </option>
                  </select>
                </div>
                <div className='relative w-full flex flex-col gap-2 mt-3'>
                  <div className='font-bold flex items-center justify-between'>
                    <div>Clemson University Tour</div>
                    <div className='text-xs font-medium text-red-100 uppercase'>
                      *Required
                    </div>
                  </div>
                  <select
                    id='clemsonTour'
                    name='clemsonTour'
                    className='mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6'
                    defaultValue='Please Select Answer'
                    onChange={(e) => setClemsonTour(e.target.value)}
                  >
                    <option value={'none'}>Please Select Answer</option>
                    <option value={'yes'}>
                      Yes, I am interested in attending the Clemson University
                      Tour.
                    </option>
                    <option value={'no'}>
                      No, I am not interested in attending the Clemson
                      University Tour.
                    </option>
                  </select>
                </div>
                <div className='relative w-full flex flex-col gap-2 mt-3'>
                  <div className='font-bold flex items-center justify-between'>
                    <div>BWM Exclusive Tour</div>
                    <div className='text-xs font-medium text-red-100 uppercase'>
                      *Required
                    </div>
                  </div>
                  <select
                    id='bmwTour'
                    name='bmwTour'
                    className='mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6'
                    defaultValue='Please Select Answer'
                    onChange={(e) => setBmwTour(e.target.value)}
                  >
                    <option value={'none'}>Please Select Answer</option>
                    <option value={'yes'}>
                      Yes, I am interested in attending the BMW Exclusive Tour.
                    </option>
                    <option value={'no'}>
                      No, I am not interested in attending the BMW Exclusive
                      Tour.
                    </option>
                  </select>
                </div>
              </div>
            </div>
            {/* REGISTRATION BUTTON */}
            <div className='flex flex-col items-center justify-center lg:h-full mb-6'>
              <div className='flex items-center xl:mt-5'>
                <TicketPricingBlock
                  regCode={regCode}
                  startCounter={startCounter}
                  resetCounter={isValid}
                  clear={clearForm}
                  name={name}
                  title={title}
                  company={company}
                  email={email}
                  phone={phone}
                  isValid={isValid}
                  worksWith={worksWith}
                  speedNetworking={speedNetworking}
                  innovationWorkshop={innovationWorkshop}
                  clemsonTour={clemsonTour}
                  bmwTour={bmwTour}
                  plantTour={plantTour}
                  setSubmit={() => submitted()}
                  live={live}
                  buttonText={buttonText}
                />
              </div>
              <div className='text-sm px-6 text-center mt-5'>
                Once availability is confirmed and if space permits, you will
                receive a confirmation email within a few days. We appreciate
                your patience and look forward to hosting you!
              </div>
              <div className='text-slate-600 text-xs text-center mt-4 px-6 font-medium pb-9 md:pt-6 lg:pb-0'>
                By clicking GET CODE or REGISTER you agree to accept our{' '}
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

export default TicketForm;
