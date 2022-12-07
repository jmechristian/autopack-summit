import React from 'react';
import TravelBody from '../components/travel/TravelBody';
import TravelHead from '../components/travel/TravelHead';

const travel = () => {
  return (
    <div className='w-full relative overflow-hidden'>
      <TravelHead />
      <TravelBody />
    </div>
  );
};

export default travel;
