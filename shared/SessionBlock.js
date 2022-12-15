import React from 'react';

const SessionBlock = ({ day, time, location, name }) => {
  return (
    <div className='w-full h-full bg-ap-darkblue p-5 rounded-md'>
      <div className='flex flex-col gap-9 h-full justify-between'>
        <div className='flex justify-between xl:flex-col-reverse xl:gap-2'>
          <div className='flex flex-col'>
            <div className='font-bold text-xl font-oswald uppercase leading-none text-white'>
              {day}
            </div>
            <div className='font-bold text-xl font-oswald uppercase leading-none text-ap-yellow tracking-wide'>
              {time}
            </div>
          </div>
          <div className='flex flex-col justify-between'>
            <div className='text-white text-right text-xs bg-ap-yellow py-1 px-2 rounded w-fit'>
              {location}
            </div>
          </div>
        </div>
        <div className='text-white font-bold text-xl leading-tight'>{name}</div>
      </div>
    </div>
  );
};

export default SessionBlock;
