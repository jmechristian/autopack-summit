import React from 'react';
import { XCircleIcon } from '@heroicons/react/24/outline';
import { useDispatch, useSelector } from 'react-redux';
import { closeVideoEmbed } from '../features/layout/layoutSlice';

const VideoModal = () => {
  const dispatch = useDispatch();
  const { videoUrl } = useSelector((state) => state.layout);

  return (
    <div className='fixed top-0 left-0 right-0 bottom-0 bg-black/70 z-[60] backdrop-blur-md'>
      <div className='flex w-full h-full justify-center items-center'>
        <div className='aspect-video bg-slate-400 w-full max-w-7xl'>
          <div className='text-white'>{videoUrl}</div>
        </div>
      </div>
      <div className='absolute right-5 top-4'>
        <div
          className='flex items-center gap-1'
          onClick={() => dispatch(closeVideoEmbed())}
        >
          <XCircleIcon className='stroke-white h-5 w-5' />
          <div className='font-semibold text-white'>Close</div>
        </div>
      </div>
    </div>
  );
};

export default VideoModal;
