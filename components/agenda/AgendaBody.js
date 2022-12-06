import React from 'react';
import AgendaItem from './AgendaItem';

const AgendaBody = () => {
  return (
    <div className='mx-auto max-w-7xl py-12 md:py-20 lg:py-24 px-8 lg:px-16'>
      <div className='flex flex-col gap-12 pb-6'>
        <div className='border-b border-b-slate-800 pb-6'>
          <AgendaItem />
          <AgendaItem />
          <AgendaItem />
          <AgendaItem />
          <AgendaItem />
        </div>
      </div>
    </div>
  );
};

export default AgendaBody;
