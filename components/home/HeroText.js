import React from 'react';

const HeroText = ({ text }) => {
  return (
    <div className='px-8 md:px-20 text-white text-center text-xl md:text-2xl max-w-prose'>
      {text}
    </div>
  );
};

export default HeroText;
