import React from 'react';

const BioSession = ({ startTime, endTime, title, location }) => {
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
    <div className='flex flex-col py-6 gap-0.5'>
      <div>{startTime ? `${start} - ${end}` : 'TBD'}</div>
      <div className='text-lg font-bold leading-snug'>{title}</div>
      <div className='text-gray-600'>{location}</div>
    </div>
  );
};

export default BioSession;
