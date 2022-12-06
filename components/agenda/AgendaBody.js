import React from 'react';
import AgendaItem from './AgendaItem';

const AgendaBody = () => {
  return (
    <div className='default_wrapper'>
      <div className='flex flex-col gap-12'>
        <div className='flex flex-col'>
          <div className='uppercase tracking-widest text-sm text-ap-darkblue font-bold'>
            Oct 12, 2023
          </div>
          <div className='uppercase font-medium font-oswald tracking-[.2em] text-3xl text-ap-yellow'>
            Wednesday
          </div>
        </div>
        <div className='border-b border-b-slate-800 pb-6'>
          <AgendaItem />
          <AgendaItem />
          <AgendaItem />
        </div>
      </div>
    </div>
  );
};

export default AgendaBody;
