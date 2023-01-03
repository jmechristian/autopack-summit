import React from 'react';
import IconBlock from '../../shared/IconBlock';
import {
  MapIcon,
  TruckIcon,
  MegaphoneIcon,
  TvIcon,
} from '@heroicons/react/24/outline';
import AdvisoryBoard from './AdvisoryBoard';
import FullNPRCallout from './FullNPRCallout';

const ResourceGrid = ({ advisors }) => {
  return (
    <div className='w-full h-full overflow-hidden xl:max-w-7xl xl:mx-auto'>
      <div className='grid grid-cols-1 lg:gap-0 lg:grid-cols-12'>
        <div className='grid grid-cols-1 gap-4 md:px-16 lg:px-0 md:gap-12 lg:col-start-2 lg:col-end-9'>
          <div className='grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12 lg:gap-0'>
            <div className='aspect-square bg-ap-blue mx-auto md:rounded drop-shadow-lg'>
              <div className='flex flex-col p-8 justify-between h-full w-11/12 gap-4'>
                <div className='font-semibold capitalize text-white/80 text-3xl lg:text-4xl leading-tight'>
                  Automotive Packaging Certificate
                </div>
                <button className='w-fit bg-white px-4 py-2 rounded-md'>
                  Learn More
                </button>
              </div>
            </div>
            <FullNPRCallout />
          </div>
        </div>

        <div className='lg:hidden'>
          <AdvisoryBoard
            headline={'Board Members'}
            subheadline={'AutoPack Summit 2022'}
            advisors={advisors}
          />
        </div>
        <div className='w-full h-full py-6 md:px-12 lg:px-8 bg-slate-200 lg:border lg:border-slate-400 lg:rounded-md lg:col-start-9 lg:col-end-12'>
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
