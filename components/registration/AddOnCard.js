import React, { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const AddOnCard = ({
  id,
  addOn,
  onUpdate,
  onRegister,
  transportationError,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [registered, setRegistered] = useState(null);

  return (
    <div className='flex flex-col gap-3 justify-between bg-white border border-gray-300 p-3 rounded'>
      <div className='flex justify-between'>
        <div className='flex flex-col gap-0 max-w-[50%]'>
          <div className='font-bold text-lg leading-tight'>{addOn.title}</div>
          <div className='text-sm text-gray-500'>{addOn.location}</div>
        </div>
        <div className='flex flex-col gap-0'>
          <div className='text-sm font-bold'>{addOn.date}</div>
          <div className='text-sm text-gray-500'>{addOn.time}</div>
        </div>
      </div>
      <div className='flex flex-col gap-3'>
        <div
          className='text-sm flex flex-col gap-4'
          dangerouslySetInnerHTML={{ __html: addOn.subheadline }}
        />
        {isExpanded && (
          <div
            className='text-sm flex flex-col gap-3'
            dangerouslySetInnerHTML={{ __html: addOn.description }}
          />
        )}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className='text-blue-600 text-sm font-medium flex justify-end gap-1'
        >
          {isExpanded ? 'Show Less' : 'Show More'}
        </button>
      </div>
      <div className='flex justify-between border-t border-gray-300 pt-3'>
        {registered ? (
          <div className='flex flex-col gap-2 w-full'>
            <div className='flex items-center gap-2 p-1'>
              <input
                type='radio'
                name={`${id}-transportation`}
                id={`${id}-self-transport`}
                value='self'
                onChange={() => onUpdate('self')}
              />
              <label htmlFor='self-transport'>
                I would like to drive myself.
              </label>
            </div>
            <div className='flex items-center gap-2 p-1'>
              <input
                type='radio'
                name={`${id}-transportation`}
                id={`${id}-shuttle`}
                value='shuttle'
                onChange={() => onUpdate('shuttle')}
              />
              <label htmlFor='shuttle'>
                I would like to take the shuttle from the Hyatt.
              </label>
            </div>
            {transportationError && (
              <p className='text-red-500 text-sm mt-1'>{transportationError}</p>
            )}
          </div>
        ) : (
          <div className='flex flex-col gap-2 w-full '>
            <button
              className='bg-blue-600 text-white p-2 rounded'
              onClick={() => {
                setRegistered(true);
                onRegister();
              }}
            >
              <span className='font-bold'>
                {addOn.apsRegistrants.items.length >= addOn.limit
                  ? 'Join Waitlist'
                  : 'Register'}
              </span>{' '}
              ({addOn.apsRegistrants.items.length}/{addOn.limit})
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddOnCard;
