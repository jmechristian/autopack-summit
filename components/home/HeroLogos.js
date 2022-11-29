import React from 'react';

const HeroLogos = ({ logos }) => {
  return (
    <div className='flex flex-col relative'>
      <div className='uppercase font-semibold text-xs md:text-base text-white tracking-wider w-full text-center'>
        Subject Matter Experts From:
      </div>
      <div className='absolute left-0 top-0 z-30 w-full overflow-scroll pt-8'>
        <div className='flex flex-row gap-5 justify-center w-full px-6'>
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
