import React, { useState, useEffect } from 'react';
import GetCodeBlock from './GetCodeBlock';
import RegBlockPricing from './RegBlockPricing';

const RegistrationFormDesktop = ({ codes, submitted, params }) => {
  const [name, setName] = useState('');
  const [worksWith, setWorksWith] = useState('Please Select Answer');
  const [speedNetworking, setSpeedNetworking] = useState(
    'Please Select Answer'
  );
  const [innovationWorkshop, setInnovationWorkshop] = useState(
    'Please Select Answer'
  );
  const [plantTour, setPlantTour] = useState('Please Select Answer');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [title, setTitle] = useState('');
  const [company, setCompany] = useState('');
  const [regCode, setRegCode] = useState('');
  const [startCounter, setStartCounter] = useState(false);
  const [isValid, setIsValid] = useState(undefined);

  useEffect(() => {
    if (params.name) {
      setName(params.name);
    }

    if (params.email) {
      setEmail(params.email);
    }

    if (params.company) {
      setCompany(params.company);
    }

    if (params.phone) {
      setPhone(params.phone);
    }

    if (params.title) {
      setTitle(params.title);
    }

    if (params.code) {
      setRegCode(params.code.toUpperCase());
    }
  }, [params]);

  const clearForm = () => {
    setName('');
    setEmail('');
    setPhone('');
    setTitle('');
    setCompany('');
  };

  const checkRegCode = async () => {
    const check = await codes.includes(regCode);
    if (check) {
      setIsValid(true);
      setStartCounter(true);
    } else {
      setIsValid(false);
    }
  };

  const validateText = () => {
    if (isValid === undefined) {
      return '';
    }

    if (isValid === true) {
      return 'PASS';
    }

    if (isValid === false) {
      return 'FAIL';
    }
  };

  return (
    <div className='p-0'>
      <div className='grid grid-cols-1 lg:grid-cols-12 md:gap-9'>
        <div className='lg:col-span-12 xl:col-span-8 rounded-2xl md:border md:border-neutral-900 w-full h-full bg-white md:shadow-[4px_6px_0_black]'>
          <div className='grid md:grid-cols-2 gap-x-5 md:gap-x-10 gap-y-8 px-5 xl:px-10 py-5 overflow-hidden'>
            <div className='flex flex-col gap-2 text-left py-3 lg:col-span-2'>
              <p className='text-lg font-medium leading-6 text-gray-900'>
                1. Personal Information
              </p>
              <p className='text-slate-600 text-sm'>
                Please fill out all fields to continue.
              </p>
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
            <div className='flex flex-col gap-1'>
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
            <div className='flex flex-col gap-1'>
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
            <div className='flex flex-col gap-1'>
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
            <div className='flex flex-col gap-1'>
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
            <div className='flex flex-col gap-3'>
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
                  <option>Please Select Answer</option>
                  <option>Production and Returnable Packaging</option>
                  <option>Aftersales and Expendable Packaging</option>
                </select>
              </div>
            </div>
            <div className='flex gap-1 md:col-span-2 lg:col-span-1 xl:col-span-2 bg-amber-100 -mx-6 p-7 rounded-b-2xl'>
              <div className='flex flex-col gap-2 text-left mb-5'>
                <p className='text-lg font-medium leading-6 text-gray-900'>
                  2. Registration Code
                </p>
                <p className='text-slate-600 text-sm'>
                  Please fill out all fields above and click GET CODE to
                  proceed.
                </p>
                <div className='relative'>
                  <input
                    name='regCode'
                    value={regCode}
                    onChange={(e) => {
                      setRegCode(e.target.value.toUpperCase());
                      setIsValid(undefined);
                    }}
                    type='text'
                    className='w-full placeholder:text-sm'
                    placeholder='No code? Click below.'
                  />
                  <div className='absolute right-4 top-2 cursor-pointer'>
                    <span>{validateText()}</span>
                  </div>
                  <GetCodeBlock
                    regCode={regCode}
                    isValid={isValid}
                    clear={clearForm}
                    checkCode={checkRegCode}
                    name={name}
                    title={title}
                    company={company}
                    email={email}
                    phone={phone}
                    setSubmit={() => submitted()}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='xl:col-span-4 lg:col-span-12 w-full h-full bg-ap-blue/10 rounded-2xl md:border-2 md:border-black'>
          <div className='flex flex-col lg:flex-row xl:flex-col gap-6 justify-between lg:items-center '>
            <div className='bg-ap-darkblue w-full text-white px-6 pt-6 pb-9 rounded-t-xl overflow-hidden'>
              <div className='flex flex-col gap-1'>
                <div className='font-bold text-lg text-amber-300'>
                  Optional Tours
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
                    <div>Icon</div>
                  </div>
                  <select
                    id='speedNetworking'
                    name='speedNetworking'
                    className='mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6'
                    defaultValue='Please Select Answer'
                    onChange={(e) => setSpeedNetworking(e.target.value)}
                  >
                    <option>Please Select Answer</option>
                    <option>
                      Yes, I am interested in attending the Speed Networking
                      Event.
                    </option>
                    <option>
                      No, I am not interested in attending the Speed Networking
                      Event.
                    </option>
                  </select>
                </div>
                <div className='relative w-full flex flex-col gap-2 mt-3'>
                  <div className='font-bold flex items-center gap-5 justify-between'>
                    <div>Bosch Rexroth Packaging Innovation Workshop</div>
                    <div>Icon</div>
                  </div>
                  <select
                    id='innovationWorkshop'
                    name='innovationWorkshop'
                    className='mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6'
                    defaultValue='Please Select Answer'
                    onChange={(e) => setInnovationWorkshop(e.target.value)}
                  >
                    <option>Please Select Answer</option>
                    <option>
                      Yes, I am interested in attending the Innovation Workshop.
                    </option>
                    <option>
                      No, I am not interested in attending the Innovation
                      Workshop.
                    </option>
                  </select>
                </div>
                <div className='relative w-full flex flex-col gap-2 mt-3'>
                  <div className='font-bold flex items-center justify-between'>
                    <div>Packaging Provider Plant Tour</div>
                    <div>Icon</div>
                  </div>
                  <select
                    id='plantTour'
                    name='plantTour'
                    className='mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6'
                    defaultValue='Please Select Answer'
                    onChange={(e) => setPlantTour(e.target.value)}
                  >
                    <option>Please Select Answer</option>
                    <option>
                      Yes, I am interested in attending the Packaging Provider
                      Plant Tour.
                    </option>
                    <option>
                      No, I am not interested in attending the Packaging
                      Provider Plant Tour.
                    </option>
                  </select>
                </div>
              </div>
            </div>
            <div className='flex flex-col items-center justify-center lg:h-full'>
              <div className='flex items-center xl:mt-5'>
                <RegBlockPricing
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
                  plantTour={plantTour}
                  setSubmit={() => submitted()}
                />
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

export default RegistrationFormDesktop;
