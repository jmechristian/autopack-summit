import React, { useState } from 'react';

const Page = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [title, setTitle] = useState('');

  return (
    <div className='max-w-6xl mx-auto px-5 xl:px-0'>
      <div className='flex flex-col py-10'>
        {/* HEADER */}
        <div className='w-full'>Header</div>
        {/* FORM */}
        <div className='w-full flex flex-col gap-6'>
          <div className='flex flex-col gap-1 lg:col-span-2'>
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
          <div className='flex flex-col gap-1 lg:col-span-2'>
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
        </div>
        {/* OPTIONS WITH DESCRIPTIONS */}
      </div>
    </div>
  );
};

export default Page;
