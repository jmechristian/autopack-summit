import React from 'react';
import { ArrowLongRightIcon, XMarkIcon } from '@heroicons/react/24/solid';
import { useDispatch } from 'react-redux';
import { toggleRegistrationModal } from '../features/layout/layoutSlice';

const RegisterModal = () => {
  const dispatch = useDispatch();

  return (
    <div className='bg-black/20 backdrop-blur-md fixed left-0 right-0 top-0 bottom-0 z-50'>
      <div className='flex h-full justify-center items-center px-4 py-8 lg:py-16'>
        <div className='bg-white w-full md:w-1/2 lg:w-2/5 max-w-2xl rounded-md relative drop-shadow-lg'>
          <div className='flex flex-col gap-6 px-6 py-8 md:p-8 xl:gap-8 text-center'>
            <div className='flex flex-col gap-2'>
              <div className='blue_headline text-2xl lg:text-4xl'>
                Registration
              </div>
              <div className='text-slate-500 text-lg'>
                Find your perfect path to get into the action by choosing below.
              </div>
            </div>
            <button className='flex mt-6 bg-ap-darkblue hover:bg-ap-blue rounded-md items-center justify-between px-6'>
              <div className='blue_headline text-xl lg:text-2xl text-white py-5'>
                OEM/ Teir 1
              </div>
              <div>
                <ArrowLongRightIcon className='w-7 h-7 fill-white' />
              </div>
            </button>
            <button className='flex w-full bg-ap-darkblue hover:bg-ap-blue rounded-md items-center justify-between px-6'>
              <div className='blue_headline text-xl lg:text-2xl text-white py-5 w-full text-left'>
                Solution Provider
              </div>
              <div>
                <ArrowLongRightIcon className='w-7 h-7 fill-white' />
              </div>
            </button>
          </div>
          <div
            className='absolute top-3 right-3'
            onClick={() => dispatch(toggleRegistrationModal())}
          >
            <XMarkIcon className='w-7 h-7 fill-slate-700' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterModal;
