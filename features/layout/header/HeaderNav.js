import React from 'react';
import { navMenu } from '../../../data/navigation';
import { useDispatch } from 'react-redux';
import { toggleRegistrationModal } from '../layoutSlice';

const HeaderNav = ({ show }) => {
  const menuLinks = navMenu.slice(0, 8);
  const dispatch = useDispatch();

  return (
    <div className='flex gap-8 justify-between items-center'>
      <div className='flex gap-6'>
        {menuLinks.map((item, i) => (
          <div className='text-black font-bold' key={item.name}>
            <a href={item.link}>{item.name}</a>
          </div>
        ))}
        {/* <div className='text-black font-bold relative'>
          <span>Tickets</span>
          <div className='absolute top-0 left-0 transform -rotate-45 whitespace-nowrap bg-red-500 text-white px-2 py-1 text-xs font-bold'>
            Sold Out!
          </div>
        </div> */}
      </div>
      {/* <div className='flex gap-2'>
        <button
          className='bg-ap-yellow rounded drop-shadow-md'
          onClick={() => dispatch(toggleRegistrationModal())}
        >
          <div className='py-2 px-4 font-bold font-oswald uppercase tracking-wider text-slate-800'>
            Register Now!
          </div>
        </button>
      </div> */}
    </div>
  );
};

export default HeaderNav;
