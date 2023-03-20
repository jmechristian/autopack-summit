import React from 'react';
import Image from 'next/image';

const AgendaItem = ({
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
    <div className='py-3 border-t border-t-slate-200'>
      <div
        className={`grid grid-cols-1 md:grid-cols-5 gap-8 xl:gap-16  py-4 md:px-4 h-full ${
          type === 'session' ? 'bg-ap-blue/40' : ''
        }`}
      >
        <div
          className={`px-5 flex flex-col justify-center lg:grid lg:grid-cols-5 gap-1 lg:gap-8 xl:gap-12 md:col-span-3 lg:col-span-4 ${
            type === 'session' ? 'py-4' : ''
          }`}
        >
          <div className='flex flex-col gap-6 md:border-r md:border-r-slate-200 h-full'>
            <div
              className={`lg:col-span-1 font-oswald text-2xl tracking-tight ${
                type === 'session' ? 'text-white' : 'text-slate-400'
              }`}
            >
              {startTime ? `${start} - ${end}` : 'TBD'}
            </div>
          </div>
          <div
            className={`flex flex-col gap-6 ${
              !speakers ? 'lg:col-span-3' : 'lg:col-span-2'
            }`}
          >
            <div className='flex flex-col lg:mt-0'>
              <div
                className={`font-semibold text-2xl ${
                  type === 'session' ? 'text-slate-900' : 'text-slate-500'
                }`}
              >
                {title}
              </div>
              <div className='text-slate-500'>{location}</div>
            </div>
          </div>
          {speakers && (
            <div className={`flex flex-col gap-6 lg:col-span-2`}>
              <div className='flex flex-col gap-4 mt-3 lg:mt-0 lg:col-span-2'>
                {speakers.map((sp, i) => (
                  <div className='flex flex-col ' key={sp.name}>
                    <div className='font-semibold'>{sp && sp.name}</div>
                    <div className='text-slate-500'>
                      {sp && sp.title}, {sp && sp.company}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        {sponsors && (
          <div className=' md:col-span-2 lg:col-span-1 flex justify-end items-center lg:items-start'>
            <div className='flex flex-col gap-6 lg:col-span-2'>
              {sponsors.map((sp, i) => (
                <div className='p-2 w-1/2 md:w-2/3 lg:w-full' key={sp.name}>
                  <Image
                    src={sponsors && sponsors[0].logo}
                    width='500'
                    height='164'
                    alt={sponsors && sponsors[0].name}
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AgendaItem;
