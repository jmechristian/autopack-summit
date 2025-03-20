import React from 'react';

const ConsoleItem = ({
  icon,
  title,
  color,
  hoverColor,
  iconBack,
  fn,
  soldOut,
  disabled,
  callout,
}) => {
  return (
    <div
      className={`w-full h-full ${color} ${hoverColor} relative group transition-colors ease-in px-3 py-3 flex items-center rounded-xl`}
      onClick={disabled ? () => {} : () => fn()}
    >
      <div className='flex gap-3 items-center cursor-pointer'>
        <div
          className={`w-9 h-9 rounded-full ${iconBack} flex items-center justify-center`}
        >
          <div className='group-hover:scale-125 transition-all ease-in'>
            {icon}
          </div>
        </div>
        <div className='flex flex-col gap-0'>
          <div className='font-bold text-neutral-900 text-lg leading-none'>
            {title}
          </div>
          {callout && (
            <div className='text-neutral-100 text-sm font-medium'>
              {callout}
            </div>
          )}
        </div>
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
