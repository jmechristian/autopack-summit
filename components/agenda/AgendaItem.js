import React from 'react';
import Image from 'next/image';

const AgendaItem = ({
  title,
  startTime,
  endTime,
  speaker,
  location,
  sponsor,
}) => {
  const start = startTime && new Date(startTime).toLocaleTimeString();
  const end = endTime && new Date(endTime).toLocaleTimeString();

  return (
    <div className='grid grid-cols-1 md:grid-cols-5 gap-8 xl:gap-16 d border-t border-t-slate-800 py-9 lg:py-12 md:px-4'>
      <div className='flex flex-col lg:grid lg:grid-cols-5 gap-1 lg:gap-8 xl:gap-12 md:col-span-3 lg:col-span-4'>
        <div className='flex flex-col gap-6'>
          <div className='text-slate-400 hidden lg:inline-block uppercase tracking-widest font-semibold text-sm'>
            time
          </div>
          <div className='text-slate-500 lg:col-span-1'>
            {start} - {end}
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
          <div className='flex flex-col mt-3 lg:mt-0 lg:col-span-2'>
            <div className='font-semibold'>{speaker && speaker.name}</div>
            <div className='text-slate-500'>{speaker && speaker.name}</div>
          </div>
        </div>
      </div>
      <div className=' md:col-span-2 lg:col-span-1 flex justify-end items-center lg:items-start'>
        <div className='flex flex-col gap-6 lg:col-span-2'>
          <div className='text-slate-400 uppercase tracking-widest font-semibold text-sm hidden lg:inline-block'>
            sponsor
          </div>
          {sponsor && (
            <div className='p-2 w-1/2 md:w-2/3 lg:w-full'>
              <Image
                src={sponsor && sponsor.src}
                width='500'
                height='164'
                alt={sponsor && sponsor.name}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AgendaItem;
