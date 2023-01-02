import React from 'react';
import { motion } from 'framer-motion';
import NPRCircle from './NPRCircle';
import IconBlock from '../../shared/IconBlock';
import {
  MapIcon,
  TruckIcon,
  MegaphoneIcon,
  TvIcon,
} from '@heroicons/react/24/outline';

const ResourceGrid = () => {
  return (
    <div className='w-full h-full overflow-hidden xl:max-w-7xl xl:mx-auto'>
      <div className='grid grid-cols-1 md:gap-12 lg:gap-0 lg:grid-cols-12'>
        <div className='grid grid-cols-1 gap-4 md:px-16 md:gap-12 lg:col-start-2 lg:col-end-9'>
          <div className='grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-12 lg:gap-8'>
            <div className='aspect-square bg-ap-blue mx-auto md:rounded drop-shadow-lg'>
              <div className='flex flex-col p-6 justify-end items-end h-full w-4/5 gap-4'>
                <div className='font-semibold capitalize text-white/80 text-3xl lg:text-4xl leading-none'>
                  For automotive packaging suppliers
                </div>
              </div>
            </div>
            <div className='relative p-6 w-full h-full'>
              <NPRCircle />
              <div className='absolute z-10 top-0 left-0 right-0 bottom-0 flex justify-center items-center'>
                <motion.img
                  src='https://apsmedia.s3.amazonaws.com/images/speaker.svg'
                  className='w-1/3 h-auto'
                  whileHover={{ scale: 1.15 }}
                />
              </div>
            </div>
          </div>
          {/* <div className='aspect-square md:w-full md:aspect-auto bg-ap-blue mx-auto md:rounded drop-shadow-lg'>
            <div className='flex flex-col p-6 justify-end items-end h-full w-4/5 gap-4'>
              <div className='font-semibold text-white/80 text-3xl lg:text-4xl leading-none'>
                Automotive
              </div>
            </div>
          </div> */}
        </div>
        <div className='w-full h-full py-6 lg:px-6 bg-slate-200 border border-slate-400 rounded-md lg:col-start-9 lg:col-end-12'>
          <div className='w-full p-6 flex flex-col gap-6 lg:p-2'>
            <div className='font-bold text-2xl border-b border-b-slate-400 pb-2 text-slate-700'>
              Helpful Tools
            </div>
            <div className='flex flex-col gap-4 items-center'>
              <IconBlock
                icon={<MapIcon className='w-7 h-7 stroke-slate-700' />}
                link='#'
                text={'OEM Map'}
              />
              <IconBlock
                icon={<TruckIcon className='w-7 h-7 stroke-slate-700' />}
                link='#'
                text={'Automotive Resources'}
              />
              <IconBlock
                icon={<MegaphoneIcon className='w-7 h-7 stroke-slate-700' />}
                link='#'
                text={'2022 Press Release'}
              />
              <IconBlock
                icon={<TvIcon className='w-7 h-7 stroke-slate-700' />}
                link='#'
                text={'Past Presentations'}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourceGrid;
