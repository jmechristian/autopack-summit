import React, { useState } from 'react';
import BrutalistButton from '../shared/BrutalistButton';
import AddOnCard from '../shared/AddOnCard';
import { PowerIcon } from '@heroicons/react/24/solid';

const Page = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [title, setTitle] = useState('');
  const [setOptions, isOptions] = useState([]);
  const [isSending, setIsSending] = useState(false);

  const sendAddOnFormHandler = async () => {
    console.log(name, email, company, title);
  };

  return (
    <div className='max-w-4xl mx-auto mb-16 md:border-4 border-black rounded-xl'>
      <div className='flex flex-col py-12 gap-10 border-t-2 md:border-t-0 border-t-black border-b-2 md:border-b-0 border-b-black'>
        {/* HEADER */}
        <div className='w-full px-4 md:px-9 lg:px-12 border-b-2 border-b-black pb-12'>
          <div className='flex flex-col gap-5'>
            <div className='font-medium font-oswald text-3xl md:text-4xl lg:text-5xl uppercase'>
              Registration Add-Ons
            </div>
            <div className='max-w-xl'>
              Please choose your registration add-ons. Once submitted we will
              review availability and confirm your registration via email. For
              questions, please email Bianca@PackagingSchool.com or
              Lars@PackagingSchool.com.
            </div>
          </div>
        </div>
        {/* FORM */}
        <div className='w-full flex flex-col lg:grid lg:grid-cols-2 gap-5 px-4 md:px-9 lg:px-12 pt-6'>
          <div className='flex flex-col gap-1'>
            <div className='text-xs font-medium text-slate-500 uppercase flex justify-between'>
              <div>Full Name</div>
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
              type='email'
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
        </div>
        {/* OPTIONS WITH DESCRIPTIONS */}
        <div className='bg-amber-100 w-full p-4 md:p-9 lg:p-12 border-b-2 border-b-black'>
          <div className='flex flex-col gap-4'>
            <div className='flex items-center gap-2 mb-3'>
              <div className='w-9 h-9 bg-black rounded-full flex items-center justify-center'>
                <PowerIcon className='w-5 h-5 fill-white' />
              </div>
              <div className='text-lg lg:text-2xl font-medium font-oswald uppercase'>
                Choose Your Add-Ons
              </div>
            </div>
            <AddOnCard />
            <AddOnCard />
            <AddOnCard />
            <AddOnCard />
            <AddOnCard />
          </div>
        </div>
        <div className='w-full px-4 md:px-9 lg:px-12'>
          <BrutalistButton
            text={isSending ? 'Sending...' : 'Submit Add-On Registration'}
            bgColor={'bg-ap-darkblue'}
            textColor={'text-white'}
            fn={() => sendAddOnFormHandler()}
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
