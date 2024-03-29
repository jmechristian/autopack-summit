import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import NewAgendaItem from '../components/agenda/NewAgendaItem';

const PrintableCompactAgenda = ({
  dayOne,
  dayTwo,
  dayThree,
  enabled,
  print,
}) => {
  return (
    <div className='flex flex-col '>
      <div className='bg-black rounded-xl w-full px-6 py-4 flex'>
        <div className='text-ap-yellow font-medium text-lg lg:text-xl font-oswald uppercase'>
          <span className='text-white'>Day One</span> Monday, October 21, 2024
        </div>
      </div>
      {dayOne &&
        dayOne.map((s) => (
          <div className='w-full' key={s._id}>
            <NewAgendaItem
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
      <div className='bg-black rounded-xl w-full px-6 py-4 flex'>
        <div className='text-ap-yellow font-medium text-lg lg:text-xl font-oswald uppercase'>
          <span className='text-white'>Day Two</span> Tuesday, October 22, 2024
        </div>
      </div>
      {dayTwo &&
        dayTwo.map((s) => (
          <div className='w-full' key={s._id}>
            <NewAgendaItem
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
      <div className='bg-black rounded-xl w-full px-6 py-4 flex'>
        <div className='text-ap-yellow font-medium text-lg lg:text-xl font-oswald uppercase'>
          <span className='text-white'>Day Three</span> Wednesday, October 23,
          2024
        </div>
      </div>
      {dayThree &&
        dayThree.map((s) => (
          <div className='w-full' key={s._id}>
            <NewAgendaItem
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
  );
};

export default PrintableCompactAgenda;
