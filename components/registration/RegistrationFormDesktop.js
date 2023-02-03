import React, { useState, useEffect } from 'react';
import GetCodeBlock from './GetCodeBlock';
import RegBlockPricing from './RegBlockPricing';

const RegistrationFormDesktop = ({ codes, submitted, params }) => {
  const [name, setName] = useState('');
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
      <div className='grid grid-cols-1 lg:grid-cols-7 gap-12'>
        <div className='lg:col-span-4 bg-bgImage_reg bg-cover bg-center rounded-md w-full h-full hidden lg:block'>
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
        <div className='lg:col-span-3 px-5 lg:px-0'>
          <div className='grid grid-cols-1 gap-y-4'>
            <div className='flex flex-col gap-2 text-left py-3'>
              <p className='text-lg font-medium leading-6 text-gray-900'>
                1. Personal Information
              </p>
              <p className='text-slate-600 text-sm'>
                Please fill out all fields to continue.
              </p>
            </div>
            <div className='flex flex-col gap-1'>
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
            <div className='border-b border-b-slate-400 w-full my-5'></div>
            <div className='flex flex-col gap-1'>
              <div className='flex flex-col gap-2 text-left mb-5'>
                <p className='text-lg font-medium leading-6 text-gray-900'>
                  2. Registration Code
                </p>
                <p className='text-slate-600 text-sm'>
                  Please fill out all fields above and click GET CODE to
                  proceed.
                </p>
              </div>
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
            <div className='border-b border-b-slate-400 w-full my-5'></div>
            <div className='grid grid-cols-1 items-center mt-0'>
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
                setSubmit={() => submitted()}
              />
            </div>
            <div className='text-slate-600 text-xs text-center mt-4'>
              By clicking GET CODE or REGISTER you agree to accept our
              <br />
              <a href='/policies'>
                <u>Event Terms and Conditions.</u>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationFormDesktop;
