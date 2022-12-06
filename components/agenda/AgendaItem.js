import React from 'react';
import Image from 'next/image';

const AgendaItem = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-5 gap-8 xl:gap-12 border-t border-t-slate-800 py-9 lg:py-12 md:px-4'>
      <div className='flex flex-col lg:grid lg:grid-cols-5 gap-1 lg:gap-8 xl:gap-12 md:col-span-3 lg:col-span-4'>
        <div className='flex flex-col gap-6'>
          <div className='text-slate-400 hidden lg:inline-block uppercase tracking-widest font-bold text-sm'>
            time
          </div>
          <div className='text-slate-500 lg:col-span-1'>9:00AM - 10:00AM</div>
        </div>
        <div className='flex flex-col gap-6  lg:col-span-2'>
          <div className='text-slate-400 hidden lg:inline-block uppercase tracking-widest font-bold text-sm'>
            session
          </div>
          <div className='font-bold text-xl'>
            Optional Tour at PackIQ Container Management Center
          </div>
        </div>
        <div className='flex flex-col gap-6 lg:col-span-2'>
          <div className='text-slate-400 uppercase tracking-widest font-bold text-sm hidden lg:inline-block'>
            speaker
          </div>
          <div className='flex flex-col mt-3 lg:mt-0 lg:col-span-2'>
            <div className='font-bold'>Kellen Mahoney</div>
            <div className='text-slate-500'>
              Suppliers Partnership for the Environment
            </div>
          </div>
        </div>
      </div>
      <div className=' md:col-span-2 lg:col-span-1 flex justify-end items-center lg:items-start'>
        <div className='flex flex-col gap-6 lg:col-span-2'>
          <div className='text-slate-400 uppercase tracking-widest font-bold text-sm hidden lg:inline-block'>
            sponsor
          </div>
          <div className='p-2 w-1/2 md:w-2/3 lg:w-full'>
            <Image
              src='https://res.cloudinary.com/dno7xxmmy/image/upload/v1670254640/AutoPack%20Summit/packiq_ejthac.png'
              width='500'
              height='164'
              alt='Pack IQ'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgendaItem;
