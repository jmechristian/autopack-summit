import React from 'react';
import Image from 'next/image';
import { classNames } from '../../util/helpers';

const NewAgendaItem = ({
  title,
  startTime,
  endTime,
  speakers,
  location,
  sponsors,
  type,
}) => {
  const start =
    startTime &&
    new Date(startTime).toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    });
  const end =
    endTime &&
    new Date(endTime).toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    });

  return (
    <div
      className={classNames(
        type === 'session' ? 'bg-amber-300' : 'bg-white',
        'w-full border-4 border-black rounded-2xl'
      )}
    >
      <div className='w-3xl py-3 px-6 flex flex-col gap-2 lg:grid lg:gap-6 lg:grid-cols-[7rem,_1fr,_1fr] lg:items-center'>
        <div className='font-bold tracking-tight text-sm lg:text-base'>
          {startTime ? `${start} - ${end}` : 'TBD'}
        </div>
        <div className='font-bold text-lg leading-tight'>{title}</div>
        <div className='font-medium text-neutral-600 leading-tight'>
          {location}
        </div>
      </div>
    </div>
  );
};

export default NewAgendaItem;
