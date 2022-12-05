import React from 'react';
import { XCircleIcon } from '@heroicons/react/24/outline';
import { useDispatch, useSelector } from 'react-redux';
import { closeSpeakerModal } from '../features/layout/layoutSlice';
import { SocialIcon } from 'react-social-icons';

const SpeakerModal = () => {
  const dispatch = useDispatch();

  return (
    <div className='fixed top-0 left-0 right-0 bottom-0 bg-black/60 z-[60]'>
      <div className='flex w-full h-full justify-center items-center'>
        <div className='w-11/12 md:w-7/12 lg:w-9/12 mx-auto bg-white rounded-md'>
          <div className='flex flex-col lg:flex-row lg:gap-12 gap-4 pt-4 pb-9 px-6'>
            <div className='flex justify-between lg:flex-col'>
              <div
                className='w-60 md:w-72 h-60 md:h-72 lg:h-80 rounded-t-lg'
                style={{
                  backgroundImage: `url('https://res.cloudinary.com/dno7xxmmy/image/upload/v1669843504/AutoPack%20Summit/speaker1_gpjeap.webp')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              ></div>
              <div className='mt-6'>
                <SocialIcon
                  url='https://www.linkedin.com/school/the-packaging-school-llc'
                  style={{ height: 40, width: 40 }}
                />
              </div>
            </div>
            <div className='flex flex-col gap-6 -mt-7 lg:mt-0'>
              <div className='flex flex-col ml-5 lg:ml-0'>
                <div className='font-oswald font-semibold text-[1.75rem] md:text-3xl leading-none uppercase text-ap-darkblue'>
                  Gauri Awalgaonkar
                </div>
                <div className='text-sm md:text-base font-semibold'>Nissan</div>
                <div className='text-sm md:text-base'>
                  Packaging Senior Supervisor
                </div>
              </div>
              <div className='text-sm md:text-base max-h-44 md:max-h-72 overflow-y-scroll relative text-slate-500 max-w-prose'>
                Nate Franck has been involved in the reusable packaging industry
                for nearly 20 years. He graduated from the University of Kansas
                with a BS in Mechanical Engineering. Nate has utilized his
                technical skills and helped develop many new products that may
                be familiar to many companies across nearly every industry. Over
                the last ten years, he has held various executive roles as head
                of New Product Development and CEO of a large injection molding
                company. As the VP of Sales at Trienda, Nate and his team have
                launched an aggressive product development campaign to help find
                solutions for the automotive sector, especially to help develop
                new products to help ship batteries safely and securely ship
                many automotive components anywhere in the World.
                <div className='sticky left-0 right-0 bottom-0 bg-gradient-to-t from-white h-12 lg:hidden'></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='absolute right-5 top-4 cursor-pointer'>
        <div
          className='flex items-center gap-1'
          onClick={() => dispatch(closeSpeakerModal())}
        >
          <XCircleIcon className='stroke-white h-5 w-5' />
          <div className='font-semibold text-white'>Close</div>
        </div>
      </div>
    </div>
  );
};

export default SpeakerModal;
