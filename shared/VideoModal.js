import React from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { useDispatch, useSelector } from 'react-redux';
import { closeVideoEmbed } from '../features/layout/layoutSlice';

const VideoModal = () => {
  const dispatch = useDispatch();
  const { videoUrl } = useSelector((state) => state.layout);

  return (
    <div className='fixed top-0 left-0 right-0 bottom-0 bg-black/80 z-[60] backdrop-blur-md'>
      <div className='flex w-full h-full justify-center items-center'>
        <div className='aspect-video bg-slate-400 w-full max-w-7xl'>
          <video
            className='w-full h-full shadow-xl'
            controls
            controlsList='nodownload'
            autoPlay
          >
            <source src={videoUrl} type='video/mp4'></source>
          </video>
        </div>
      </div>
      <div className='absolute right-5 top-4'>
        <div
          className='flex items-center gap-1'
          onClick={() => dispatch(closeVideoEmbed())}
        >
          <XMarkIcon className='stroke-white h-7 w-7' />
        </div>
      </div>
    </div>
  );
};

export default VideoModal;
