import React from 'react';

const AgendaHead = () => {
  return (
    <div className='bg-bgImage_blue pt-16 lg:pt-20 bg-cover bg-center'>
      <div className='flex flex-col gap-8 justify-center items-center mx-auto max-w-7xl py-12 lg:py-16 px-8 lg:px-16'>
        <div className='white_headline text-[2.7rem] md:text-7xl lg:text-7xl xl:text-8xl leading-none text-center'>
          Agenda
        </div>
        <div className='grid grid-cols-3 md:mt-6'>
          <div className='border-b-4 border-b-ap-yellow pb-2'>
            <div className='font-medium text-xl uppercase font-oswald text-white tracking-widest px-4'>
              Day 1
            </div>
          </div>
          <div className='border-b-2 border-b-slate-400 pb-2'>
            <div className='font-medium text-xl uppercase font-oswald text-slate-400 tracking-widest px-4'>
              Day 2
            </div>
          </div>
          <div className='border-b-2 border-b-slate-400 pb-2'>
            <div className='font-medium text-xl uppercase font-oswald text-slate-400 tracking-widest px-4'>
              Day 3
            </div>
          </div>
        </div>
        <div className='flex flex-col text-center'>
          <div className='uppercase tracking-widest text-sm lg:text-base text-white font-bold'>
            Oct 12, 2023
          </div>
          <div className='uppercase font-medium font-oswald tracking-[.2em] text-2xl lg:text-3xl text-ap-yellow'>
            Wednesday
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgendaHead;
