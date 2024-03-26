import React from 'react';

const BrutalistButton = ({ bgColor, text, textColor, fn, disabled }) => {
  return (
    <button
      className={`${disabled ? 'bg-neutral-400' : bgColor} w-full ${
        disabled ? 'text-neutral-500' : textColor
      } text-base md:text-lg font-bold px-8 py-3 shadow-[5px_5px_0_black] hover:shadow-[1px_1px_0_black] hover:translate-x-[3px] hover:translate-y-[3px] transition-all`}
      onClick={(event) => fn(event)}
      disabled={disabled ? disabled : false}
    >
      {text}
    </button>
  );
};

export default BrutalistButton;
