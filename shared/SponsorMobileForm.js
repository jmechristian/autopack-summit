import React, { useState } from 'react';
import SponsorMobileForm_1 from './SponsorMobileForm_1';
import SponsorMobileForm_2 from './SponsorMobileForm_2';
import { ArrowLongRightIcon } from '@heroicons/react/24/outline';

const SponsorMobileForm = () => {
  const [isFormPage, setIsFormPage] = useState(1);
  return (
    <div className='flex flex-col gap-3'>
      <div className='flex flex-col gap-3'>
        <div className={`${isFormPage === 1 ? 'block' : 'hidden'}`}>
          <SponsorMobileForm_1 />
        </div>
        <div className={`${isFormPage === 2 ? 'block' : 'hidden'}`}>
          <SponsorMobileForm_2 />
        </div>
        <div className='flex justify-center gap-4 items-center pb-3'>
          <div
            className={`w-8 h-8 rounded-full flex justify-center items-center cursor-pointer ${
              isFormPage === 1 ? 'bg-ap-yellow' : 'bg-slate-300'
            }`}
            onClick={() => setIsFormPage(1)}
          >
            <div className='font-bold font-oswald text-lg text-white'>1</div>
          </div>
          <div>
            <ArrowLongRightIcon className='w-6 h-6 stroke-slate-400' />
          </div>
          <div
            className={`w-8 h-8 rounded-full flex justify-center items-center cursor-pointer ${
              isFormPage === 2 ? 'bg-ap-yellow' : 'bg-slate-300'
            }`}
            onClick={() => setIsFormPage(2)}
          >
            <div className='font-bold font-oswald text-lg text-white'>2</div>
          </div>
        </div>
      </div>
      <div className='flex flex-col md:flex-row items-center gap-4'>
        <button className='bg-ap-darkblue rounded-md w-full' disabled>
          <div className='text-white uppercase text-sm lg:text-lg font-bold py-3 px-6 tracking-widest'>
            Get Involved
          </div>
        </button>
        <div className='text-slate-500 text-sm  text-center lg:text-left'>
          By clicking GET INVOLVED you agree to accept our Event Terms and
          Conditions.
        </div>
      </div>
    </div>
  );
};

export default SponsorMobileForm;
