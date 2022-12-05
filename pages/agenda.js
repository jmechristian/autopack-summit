import React from 'react';
import AgendaBody from '../components/agenda/AgendaBody';
import AgendaHead from '../components/agenda/AgendaHead';

const agenda = () => {
  return (
    <div className='w-full'>
      <AgendaHead />
      <AgendaBody />
    </div>
  );
};

export default agenda;
