import React from 'react';

const HeroLogos = ({ logos }) => {
  return (
    <div className='flex flex-col items-center gap-6 overflow-hidden'>
      <div className='uppercase font-semibold text-xs text-white tracking-wider'>
        Subject Matter Experts From:
      </div>
      <div className='flex flex-row  gap-5 overflow-scroll w-full'>
        {logos &&
          logos.map((logo, i) => (
            <div
              className='w-16 h-16'
              key={logo._key}
              style={{
                backgroundImage: `url(${logo.url})`,
                backgroundSize: 'contain',
                backgroundPosition: 'center center',
              }}
            ></div>
          ))}
      </div>
    </div>
  );
};

export default HeroLogos;
