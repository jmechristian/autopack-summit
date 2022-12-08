import React from 'react';
import TravelAside from '../components/travel/TravelAside';
import TravelBody from '../components/travel/TravelBody';
import TravelHead from '../components/travel/TravelHead';

const travel = () => {
  return (
    <div className='w-full relative overflow-hidden'>
      <TravelHead />
      <TravelBody />
      <TravelAside />
    </div>
  );
};

export default travel;
