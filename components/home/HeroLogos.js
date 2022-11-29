import React from 'react';

const HeroLogos = ({ logos }) => {
  return (
    <div className='inline'>
      <div className='uppercase font-semibold text-xs md:text-base text-white tracking-wider w-full text-center pt-20'>
        Subject Matter Experts From:
      </div>
      <div className='overflow-scroll w-full pt-4'>
        <div className='flex flex-row  gap-5 justify-center'>
          {logos &&
            logos.map((logo, i) => (
              <div>
                <div
                  className='w-16 h-16'
                  key={logo._key}
                  style={{
                    backgroundImage: `url(${logo.url})`,
                    backgroundSize: 'contain',
                    backgroundPosition: 'center center',
                  }}
                ></div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default HeroLogos;
