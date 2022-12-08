import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setDaySelected } from './agendaSlice';

const AgendaHead = () => {
  const dispatch = useDispatch();
  const { daySelected } = useSelector((state) => state.agenda);

  const setDay = () => {
    if (daySelected === 1) {
      return 'Wednesday';
    } else if (daySelected === 2) {
      return 'Thursday';
    } else if (daySelected === 3) {
      return 'Friday';
    }
  };

  const setDate = () => {
    if (daySelected === 1) {
      return 'OCt 12, 2023';
    } else if (daySelected === 2) {
      return 'OCt 13, 2023';
    } else if (daySelected === 3) {
      return 'OCt 14, 2023';
    }
  };

  return (
    <div className='bg-bgImage_agenda pt-16 lg:pt-20 xl:pt-28 bg-cover bg-center'>
      <div className='flex flex-col gap-8 justify-center items-center mx-auto max-w-7xl py-12 lg:py-16 px-8 lg:px-16'>
        <div className='white_headline text-[2.7rem] md:text-7xl lg:text-7xl xl:text-8xl leading-none text-center'>
          Agenda
        </div>
        <div className='grid grid-cols-3 md:mt-6'>
          <div
            className={` ${
              daySelected === 1
                ? 'border-b-ap-yellow border-b-4'
                : 'border-b-2 border-b-slate-400'
            }  pb-2`}
            onClick={() => dispatch(setDaySelected(1))}
          >
            <div
              className={`font-medium text-xl xl:text-2xl uppercase font-oswald ${
                daySelected === 1 ? 'text-white' : 'text-slate-400'
              } tracking-widest px-4 cursor-pointer`}
            >
              Day 1
            </div>
          </div>
          <div
            className={` ${
              daySelected === 2
                ? 'border-b-ap-yellow border-b-4'
                : 'border-b-2 border-b-slate-400'
            }  pb-2`}
            onClick={() => dispatch(setDaySelected(2))}
          >
            <div
              className={`font-medium text-xl xl:text-2xl uppercase font-oswald ${
                daySelected === 2 ? 'text-white' : 'text-slate-400'
              } tracking-widest px-4 cursor-pointer`}
            >
              Day 2
            </div>
          </div>
          <div
            className={` ${
              daySelected === 3
                ? 'border-b-ap-yellow border-b-4'
                : 'border-b-2 border-b-slate-400'
            }  pb-2`}
          >
            <div
              className={`font-medium text-xl xl:text-2xl uppercase font-oswald ${
                daySelected === 3 ? 'text-white' : 'text-slate-400'
              } tracking-widest px-4 cursor-pointer`}
              onClick={() => dispatch(setDaySelected(3))}
            >
              Day 3
            </div>
          </div>
        </div>
        <div className='flex flex-col text-center'>
          <div className='uppercase tracking-widest text-sm lg:text-base text-white font-bold'>
            {setDate()}
          </div>
          <div className='uppercase font-medium font-oswald tracking-[.2em] text-2xl lg:text-3xl xl:text-4xl text-ap-yellow'>
            {setDay()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgendaHead;
