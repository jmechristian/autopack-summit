import React from 'react';
import { motion } from 'framer-motion';
import NewAgendaItem from '../components/agenda/NewAgendaItem';

const CompactAgenda = ({ dayOne, dayTwo, dayThree, enabled }) => {
  return (
    <motion.div
      className='flex flex-col'
      key={enabled}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div className='bg-black rounded-xl w-full px-6 py-4 flex'>
        <motion.div className='text-ap-yellow font-medium text-lg lg:text-xl font-oswald uppercase'>
          <span className='text-white'>Day One</span> Monday, October 21, 2024
        </motion.div>
      </motion.div>
      {dayOne &&
        dayOne.map((s) => (
          <motion.div className='w-full' key={s._id}>
            <NewAgendaItem
              type={s.type}
              title={s.name}
              startTime={s.session_start}
              endTime={s.session_end}
              location={s.location}
              speakers={s.speakers}
              sponsors={s.sponsors}
            />
          </motion.div>
        ))}
      <motion.div className='bg-black rounded-xl w-full px-6 py-4 flex'>
        <motion.div className='text-ap-yellow font-medium text-lg lg:text-xl font-oswald uppercase'>
          <span className='text-white'>Day Two</span> Tuesday, October 22, 2024
        </motion.div>
      </motion.div>
      {dayTwo &&
        dayTwo.map((s) => (
          <motion.div className='w-full' key={s._id}>
            <NewAgendaItem
              type={s.type}
              title={s.name}
              startTime={s.session_start}
              endTime={s.session_end}
              location={s.location}
              speakers={s.speakers}
              sponsors={s.sponsors}
            />
          </motion.div>
        ))}
      <motion.div className='bg-black rounded-xl w-full px-6 py-4 flex'>
        <motion.div className='text-ap-yellow font-medium text-lg lg:text-xl font-oswald uppercase'>
          <span className='text-white'>Day Three</span> Wednesday, October 23,
          2024
        </motion.div>
      </motion.div>
      {dayThree &&
        dayThree.map((s) => (
          <motion.div className='w-full' key={s._id}>
            <NewAgendaItem
              type={s.type}
              title={s.name}
              startTime={s.session_start}
              endTime={s.session_end}
              location={s.location}
              speakers={s.speakers}
              sponsors={s.sponsors}
            />
          </motion.div>
        ))}
    </motion.div>
  );
};

export default CompactAgenda;
