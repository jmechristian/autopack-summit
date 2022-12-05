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
      className='h-full flex justify-center items-center'
      onClick={logoClick}
    >
      <div className='max-h-16'>
        <Image src={logo} width={w} height={h} alt={alt} />
      </div>
    </div>
  );
};

export default Sponsor;
