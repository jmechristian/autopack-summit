import React from 'react';

const ConsoleItem = ({
  icon,
  title,
  color,
  hoverColor,
  iconBack,
  fn,
  soldOut,
}) => {
  return (
    <div
      className={`w-full h-full ${color} ${hoverColor} relative group transition-colors ease-in px-3 py-3 flex items-center rounded-xl`}
      onClick={() => fn()}
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
      {soldOut && (
        <div className='absolute top-1/2 -translate-y-1/2 right-3 transform -rotate-[30deg] whitespace-nowrap bg-red-500 text-white px-2 py-1 text-xs font-bold'>
          Sold Out!
        </div>
      )}
    </div>
  );
};

export default ConsoleItem;
