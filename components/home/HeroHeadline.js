import React from 'react';

const HeroHeadline = ({ headline, subheadline }) => {
  return (
    <div className='flex flex-col justify-center gap-1'>
      <div className='white_subheadline text-xl text-center'>{subheadline}</div>
      {headline.map((item, i) => (
        <div
          className='yellow_headline text-[2.6rem] leading-none text-center overflow-hidden'
          key={i}
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default HeroHeadline;
