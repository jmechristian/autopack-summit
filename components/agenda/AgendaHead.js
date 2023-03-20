import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setDaySelected } from './agendaSlice';
import { StarIcon } from '@heroicons/react/24/solid';

const AgendaHead = () => {
  const dispatch = useDispatch();
  const { daySelected } = useSelector((state) => state.agenda);

  const setDay = () => {
    if (daySelected === '2023-10-11') {
      return 'Wednesday';
    } else if (daySelected === '2023-10-12') {
      return 'Thursday';
    } else if (daySelected === '2023-10-13') {
      return 'Friday';
    }
  };

  const setDate = () => {
    if (daySelected === '2023-10-11') {
      return 'OCt 11, 2023';
    } else if (daySelected === '2023-10-12') {
      return 'OCt 12, 2023';
    } else if (daySelected === '2023-10-13') {
      return 'OCt 13, 2023';
    }
  };

  return (
    <div className='bg-bgImage_agenda pt-16 lg:pt-20 xl:pt-28 pb-6 bg-cover bg-center'>
      <div className='flex flex-col gap-12 justify-center items-center mx-auto max-w-7xl py-12 lg:py-16 px-8 lg:px-16'>
        <div className='white_headline text-[2.7rem] md:text-7xl lg:text-7xl xl:text-8xl leading-none text-center'>
          Agenda
        </div>
        <div className='flex md:gap-4 md:mt-6'>
          <div onClick={() => dispatch(setDaySelected('2023-10-11'))}>
            <div
              className={`font-medium text-xl xl:text-3xl uppercase font-oswald ${
                daySelected === '2023-10-11'
                  ? 'text-ap-yellow'
                  : 'text-slate-400'
              } tracking-wide px-4 cursor-pointer py-1`}
            >
              Day 1
            </div>
          </div>
          <div onClick={() => dispatch(setDaySelected('2023-10-12'))}>
            <div
              className={`font-medium text-xl xl:text-3xl uppercase font-oswald ${
                daySelected === '2023-10-12'
                  ? 'text-white bg-ap-yellow'
                  : 'text-white/50 bg-white/30 backdrop-blur-sm'
              } tracking-wide  shadow-xl px-4 cursor-pointer flex justify-center items-center gap-1  py-1.5`}
            >
              <div>
                <StarIcon className='text-white/50 h-6 w-6' />
              </div>
              Day 2
            </div>
          </div>
          <div>
            <div
              className={`font-medium text-xl xl:text-3xl uppercase font-oswald ${
                daySelected === '2023-10-13' ? 'text-white' : 'text-slate-400'
              } tracking-wide px-4 cursor-pointer py-1`}
              onClick={() => dispatch(setDaySelected('2023-10-13'))}
            >
              Day 3
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgendaHead;
