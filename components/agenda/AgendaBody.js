import React from 'react';
import AgendaItem from './AgendaItem';
import { useSelector } from 'react-redux';

const AgendaBody = ({ sessions }) => {
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
    <div className='mx-auto max-w-7xl py-12 md:py-20 lg:py-24 px-4 lg:px-16'>
      <div className='flex flex-col md:flex-row gap-2 py-3 bg-ap-darkblue md:w-max px-6 mb-6'>
        <div className='uppercase font-medium font-oswald text-4xl text-white'>
          {setDay()}
        </div>
        <div className='uppercase text-2xl text-ap-yellow font-oswald md:text-4xl'>
          /{setDate()}
        </div>
      </div>
      <div className='flex flex-col justify-center gap-12 pb-6'>
        <div className='pb-6'>
          {sessions
            .filter((item) => item.date === daySelected)
            .map((s, i) => (
              <div key={s._id} className='flex flex-col h-full'>
                <AgendaItem
                  type={s.type}
                  title={s.name}
                  startTime={s.session_start}
                  endTime={s.session_end}
                  location={s.location}
                  speakers={s.speakers}
                  sponsors={s.sponsors}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default AgendaBody;
