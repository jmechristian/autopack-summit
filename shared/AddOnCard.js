import React, { useState } from 'react';
import { MdArrowDropDown, MdArticle, MdAccountBox } from 'react-icons/md';
import BrutalistButton from './BrutalistButton';

const AddOnCard = ({ title, time, description, speakers, logo }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className='border-2 border-black w-full flex flex-col'>
      {/* CARD HEADING */}
      <div
        className={`border-b-2 border-black w-full flex justify-between p-4 gap-3 items-center transition-colors ease-in ${
          open === true ? 'bg-amber-300' : 'bg-white'
        }`}
      >
        <div className='flex items-start gap-4'>
          {/* <div>
            <input
              id='comments'
              aria-describedby='comments-description'
              name='comments'
              type='checkbox'
              className='h-6 w-6 mt-1  border-black text-indigo-600 focus:ring-indigo-600'
            />
          </div> */}
          <div className='flex flex-col leading-tight gap-1'>
            <div className='font-semibold md:text-lg max-w-xl lg:leading-tight'>
              {title}
            </div>
            <div className='text-sm text-neutral-500 font-medium'>{time}</div>
          </div>
        </div>
        <div
          className={` ${
            open === true ? 'rotate-180' : 'rotate-0'
          } transition-all ease-linear cursor-pointer`}
          onClick={() => setOpen(!open)}
        >
          <MdArrowDropDown size={50} />
        </div>
      </div>
      <div
        className={`bg-white w-full px-4 pt-4 pb-6 ${
          open === true ? 'block' : 'hidden'
        }`}
      >
        <div className='flex flex-col gap-6'>
          <div className='flex flex-col gap-2'>
            <div className='flex items-center gap-1'>
              <div>
                <MdArticle color='#005892' size={20} />
              </div>
              <div className='font-semibold text-ap-darkblue'>Description</div>
            </div>
            <div className='leading-tight text-sm'>{description}</div>
          </div>
        </div>
        <div className='w-full flex justify-between bg-white mt-10 items-end'>
          {speakers ? (
            <div className='flex flex-col gap-3'>
              <div className='flex items-center gap-1'>
                <div>
                  <MdAccountBox color='#005892' size={20} />
                </div>
                <div className='font-semibold text-ap-darkblue'>Speakers</div>
              </div>
              <div className='flex items-start gap-5 mt-2'>
                {speakers.map((sp) => (
                  <div className='leading-tight flex flex-col gap-1 w-40'>
                    <div className='font-bold'>{sp.name}</div>
                    <div className='text-xs leading-tight'>{sp.title}</div>
                    <div
                      className='h-12 bg-contain bg-left w-28 bg-no-repeat'
                      style={{ backgroundImage: `url(${logo})` }}
                    ></div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div></div>
          )}
          <div className='w-fit'>
            <BrutalistButton
              bgColor={'bg-ap-blue'}
              textColor={'text-white'}
              text={'Register'}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddOnCard;
