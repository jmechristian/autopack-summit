import React from 'react';
import Image from 'next/image';

const AgendaItem = ({
  title,
  startTime,
  endTime,
  speakers,
  location,
  sponsors,
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
  console.log(speakers);

  return (
    <div className='grid grid-cols-1 md:grid-cols-5 gap-8 xl:gap-16 d border-t border-t-slate-800 py-9 lg:py-12 md:px-4'>
      <div className='flex flex-col lg:grid lg:grid-cols-5 gap-1 lg:gap-8 xl:gap-12 md:col-span-3 lg:col-span-4'>
        <div className='flex flex-col gap-6'>
          <div className='text-slate-400 hidden lg:inline-block uppercase tracking-widest font-semibold text-sm'>
            time
          </div>
          <div className='text-slate-500 lg:col-span-1'>
            {startTime ? `${start} - ${end}` : 'TBD'}
          </div>
        </div>
        <div className='flex flex-col gap-6  lg:col-span-2'>
          <div className='text-slate-400 hidden lg:inline-block uppercase tracking-widest font-semibold text-sm'>
            session
          </div>
          <div className='flex flex-col mt-3 lg:mt-0 lg:col-span-2'>
            <div className='font-semibold'>{title}</div>
            <div className='text-slate-500'>{location}</div>
          </div>
        </div>
        <div className='flex flex-col gap-6 lg:col-span-2'>
          <div className='text-slate-400 uppercase tracking-widest font-semibold text-sm hidden lg:inline-block'>
            speaker
          </div>
          {speakers && (
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
          )}
        </div>
      </div>
      <div className=' md:col-span-2 lg:col-span-1 flex justify-end items-center lg:items-start'>
        <div className='flex flex-col gap-6 lg:col-span-2'>
          <div className='text-slate-400 uppercase tracking-widest font-semibold text-sm hidden lg:inline-block'>
            sponsor
          </div>
          {sponsors &&
            sponsors.map((sp, i) => (
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
    </div>
  );
};

export default AgendaItem;
