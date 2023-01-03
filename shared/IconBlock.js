import React from 'react';

const IconBlock = ({ icon, link, text }) => {
  return (
    <div className='w-full flex gap-2 lg:gap-4 items-center'>
      <div>{icon}</div>
      <div className='text-slate-700 text-lg'>
        <a href={link} target='_blank' />
        {text}
      </div>
    </div>
  );
};

export default IconBlock;
