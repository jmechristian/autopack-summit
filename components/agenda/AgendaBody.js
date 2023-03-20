import React from 'react';
import AgendaItem from './AgendaItem';
import { useSelector } from 'react-redux';

const AgendaBody = ({ sessions }) => {
  const { daySelected } = useSelector((state) => state.agenda);

  return (
    <div className='mx-auto max-w-7xl py-12 md:py-20 lg:py-24 px-8 lg:px-16'>
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
