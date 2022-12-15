import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

const Sponsor = ({ logo, url, alt, w, h }) => {
  const router = useRouter();

  const logoClick = () => {
    window.open(`${url}`, '_blank');
  };

  return (
    <div
      className='flex justify-center items-center bg-contain bg-center aspect-video bg-no-repeat cursor-pointer'
      style={{ backgroundImage: `url(${logo})` }}
      onClick={logoClick}
    ></div>
  );
};

export default Sponsor;
