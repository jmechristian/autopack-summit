import React from 'react';

const TravelItem = ({ background, title, url }) => {
  return (
    <div
      className='relative cursor-pointer'
      onClick={() => window.open(url, '_blank')}
    >
      <div
        className={`bg-white rounded-md md:rounded-lg drop-shadow-xl w-72 aspect-square`}
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>
      <div className='text-xl tracking-wide font-oswald font-medium uppercase absolute bottom-4 left-4 z-40 bg-white/10 backdrop-blur-md text-white drop-shadow-lg px-4 py-4 rounded-md'>
        {title}
      </div>
    </div>
  );
};

export default TravelItem;
