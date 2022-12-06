import React from 'react';
import Image from 'next/image';

const AgendaItem = () => {
  return (
    <div className='flex flex-col gap-8 border-t border-t-slate-800 py-9'>
      <div className='flex flex-col gap-1'>
        <div className='text-slate-500'>9:00 AM - 10:00 AM</div>
        <div className='font-bold text-2xl'>
          Optional Tour at PackIQ Container Management Center
        </div>
        <div className='flex flex-col mt-3'>
          <div className='font-bold'>Kellen Mahoney</div>
          <div className='text-slate-500'>
            Suppliers Partnership for the Environment
          </div>
        </div>
      </div>
      <div className='w-1/2'>
        <div className='p-2'>
          <Image
            src='https://res.cloudinary.com/dno7xxmmy/image/upload/v1670254640/AutoPack%20Summit/packiq_ejthac.png'
            width='500'
            height='164'
            alt='Pack IQ'
          />
        </div>
      </div>
    </div>
  );
};

export default AgendaItem;
