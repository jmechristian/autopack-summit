import React from 'react';

const HeroHeadline = ({ headline, subheadline }) => {
  return (
    <div className='flex flex-col justify-center gap-1'>
      <div className='white_subheadline text-xl md:text-2xl text-center'>
        {subheadline}
      </div>
      <div className='relative flex justify-center'>
        {headline.map((item, i) => (
          <div
            className={`yellow_headline text-[2.6rem] md:text-7xl lg:text-8xl xl:text-9xl leading-none text-center overflow-hidden absolute z-[${
              i + 40
            } ]`}
            key={i}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroHeadline;
