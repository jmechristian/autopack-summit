import React from 'react';

const BrutalistButton = ({ bgColor, text, textColor, fn }) => {
  return (
    <button
      className={`${bgColor} w-full ${textColor} text-base md:text-lg font-bold px-8 py-2 shadow-[5px_5px_0_black] hover:shadow-[1px_1px_0_black] hover:translate-x-[3px] hover:translate-y-[3px] transition-all`}
      onClick={(event) => fn(event)}
    >
      {text}
    </button>
  );
};

export default BrutalistButton;
