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
      className='w-full h-full shadow-md rounded-full bg-ap-blue cursor-pointer relative'
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
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
      <div className='flex flex-col justify-center items-center'>
        <div
          className={`w-56 bg-ap-yellow h-56 rounded-full ${
            isHover ? 'ring-8' : 'ring-4'
          } ring-ap-yellow bg-cover bg-center`}
          style={{ backgroundImage: `url(${url})` }}
          onClick={() => setIsOpen(true)}
        ></div>
        <div className='flex flex-col mt-3 w-full'>
          <motion.div
            className='font-bold font-oswald uppercase text-ap-darkblue text-xl bg-white px-2 py-1 w-fit'
            animate={isHover ? { scale: 1.1 } : { scale: 1 }}
          >
            {name}
          </motion.div>
          <div className='flex flex-col mt-1 ml-3 w-full px-3 py-1 text-white'>
            <div className='text-sm'>{title}</div>
            <div className='text-sm font-bold'>{company}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpeakerBlock;
