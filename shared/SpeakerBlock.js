import React, { useRef } from 'react';
import { InformationCircleIcon } from '@heroicons/react/24/solid';
import { motion, useInView } from 'framer-motion';
import { useSelector, useDispatch } from 'react-redux';
import { openSpeakerModal } from '../features/layout/layoutSlice';
import SpeakerModal from './SpeakerModal';

const SpeakerBlock = () => {
  const speakerRef = useRef();
  const speakerInView = useInView(speakerRef);
  const dispatch = useDispatch();
  const { speakerOpen } = useSelector((state) => state.layout);

  const speakerVariants = {
    show: {
      opacity: 1,
      transition: {
        delay: 0.2,
        ease: 'easeInOut',
        duration: 0.3,
      },
    },
    hide: {
      opacity: 0,
    },
  };

  return (
    <motion.div
      className='h-full shadow-lg relative max-w-7xl'
      ref={speakerRef}
      variants={speakerVariants}
      initial='hide'
      animate={speakerInView ? 'show' : 'hide'}
    >
      <div className='w-64 lg:w-full h-80 bg-white'>
        <div className='grid grid-cols-12 overflow-hidden'>
          <div
            className='col-span-10 h-64 bg-ap-yellow'
            style={{
              backgroundImage: `url('https://res.cloudinary.com/dno7xxmmy/image/upload/v1669843504/AutoPack%20Summit/speaker1_gpjeap.webp')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          ></div>
          <div className='col-span-2'>
            <div
              className='bg-ap-red text-white flex w-full px-2 py-4 font-oswald font-medium tracking-widest'
              style={{ textOrientation: 'mixed', writingMode: 'vertical-rl' }}
            >
              TriEnd Holdings
            </div>
          </div>
        </div>
      </div>
      <div className='flex absolute bottom-3 pb-3 mx-4 z-30'>
        <div className='flex flex-col'>
          <div className='font-oswald font-semibold text-[1.75rem] leading-none uppercase text-ap-darkblue'>
            Gauri Awalgaonkar
          </div>
          <div className='text-sm'>Packaging Senior Supervisor</div>
        </div>
      </div>
      <div className='flex absolute bottom-1 right-1 z-[40]'>
        <button onClick={() => dispatch(openSpeakerModal())}>
          <InformationCircleIcon className='w-7 h-7 fill-ap-darkblue' />
        </button>
      </div>
      {speakerOpen && <SpeakerModal />}
    </motion.div>
  );
};

export default SpeakerBlock;
