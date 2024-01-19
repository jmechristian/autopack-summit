import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SpeakerModal from './SpeakerModal';

const SpeakerBlock = ({
  name,
  title,
  company,
  url,
  bio,
  linkedin,
  session,
}) => {
  const [isHover, setIsHover] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className='w-full h-full cursor-pointer relative flex flex-col'
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      onClick={() => setIsOpen(true)}
    >
      <SpeakerModal
        open={isOpen}
        close={() => setIsOpen(false)}
        name={name}
        title={title}
        company={company}
        url={url}
        bio={bio}
        linkedin={linkedin}
        session={session}
      />
      <div
        className='aspect-square w-full h-full bg-neutral-200 bg-cover bg-center grayscale group-hover:grayscale-0 transition-all ease-in'
        style={{
          backgroundImage: `url(${url ? url : ''})`,
        }}
      ></div>
      <div className='bg-neutral-900 w-full p-3 flex flex-col'>
        <div className='text-2xl font-oswald text-white group-hover:text-ap-yellow transition-colors ease-in'>
          {name}
        </div>
        <div className=' text-white group-hover:text-neutral-400 transition-colors ease-in'>
          {company}
        </div>
      </div>
    </div>
  );
};

export default SpeakerBlock;
