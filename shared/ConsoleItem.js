import React from 'react';

const ConsoleItem = ({ icon, title, color, hoverColor, iconBack }) => {
  return (
    <div
      className={`w-full h-full ${color} ${hoverColor} group transition-colors ease-in px-3 py-3 flex items-center rounded-xl`}
    >
      <div className='flex gap-3 items-center cursor-pointer'>
        <div
          className={`w-9 h-9 rounded-full ${iconBack} flex items-center justify-center`}
        >
          <div className='group-hover:scale-125 transition-all ease-in'>
            {icon}
          </div>
        </div>
        <div className='font-bold text-neutral-900 text-lg'>{title}</div>
      </div>
    </div>
  );
};

export default ConsoleItem;
