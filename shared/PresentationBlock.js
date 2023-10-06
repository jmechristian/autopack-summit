import React, { useState } from 'react';
import { LockClosedIcon } from '@heroicons/react/24/outline';

const PresentationBlock = ({
  backgroundColor,
  title,
  description,
  speakers,
}) => {
  const [toHover, setToHover] = useState(false);
  return (
    <div
      className='aspect-square w-full bg-indigo-200 rounded-xl bg-cover bg-center relative'
      style={{
        backgroundImage:
          'url("https://packschool.s3.amazonaws.com/demo-square-white.png")',
      }}
      onMouseEnter={() => setToHover(true)}
      onMouseLeave={() => setToHover(false)}
    >
      <div className='flex flex-1 flex-col justify-between gap-3 w-full h-full pl-6 pt-24 pr-9 pb-6 absolute z-10 inset-0'>
        <div className='flex flex-col gap-3'>
          <div className='text-white max-w-xs text-3xl font-oswald font-medium leading-none'>
            {title}
          </div>
          <div className='max-w-xs text-white text-sm leading-snug'>
            {description}
          </div>
          <div className='flex flex-col'>
            {speakers && (
              <div className='grid grid-cols-2 gap-3 mt-2'>
                {speakers.map((speaker, i) => (
                  <div key={speaker.name} className='flex flex-col'>
                    <div className='font-bold leading-tight'>
                      {speaker.name}
                    </div>
                    <div className='text-white text-sm leading-snug'>
                      {speaker.title}, {speaker.company}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <div
          className={`${
            toHover ? 'scale-115 transition ease-in shadow-xl' : ' shadow-lg '
          } cursor-pointer bg-gradient-to-r mt-4 gap-2 from-ap-darkblue to-ap-blue py-3 px-6 rounded-full h-12 w-12 flex justify-center items-center absolute -top-1 right-3 z-20`}
        >
          <div>
            <LockClosedIcon className='w-6 h-6 stroke-white' />
          </div>
        </div>
      </div>
      <div
        className={`inset-0 absolute z-5 rounded-lg ${
          backgroundColor ? backgroundColor : 'bg-ap-darkblue/60'
        }`}
      ></div>
    </div>
  );
};

export default PresentationBlock;
