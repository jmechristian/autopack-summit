import React, { useRef, useState } from 'react';
import { PlayCircleIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';
import { SocialIcon } from 'react-social-icons';

const VideoHeader = ({ video, poster, overlay }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoHeaderRef = useRef();

  const videoVariants = {
    play: {
      x: '100%',
      transition: {
        type: 'spring',
        stiffness: 200,
        damping: 30,
        mass: 1.5,
      },
    },
    pause: { x: '0%' },
  };

  const startVideo = () => {
    if (!isPlaying) {
      setIsPlaying(true);
      videoHeaderRef.current.play();
    } else {
      setIsPlaying(false);
      videoHeaderRef.current.pause();
    }
  };

  return (
    <div className='aspect-video flex justify-center items-center relative cursor-pointer'>
      <motion.div
        className='absolute z-30 bg-ap-blue/40 backdrop-blur top-0 left-0 right-0 bottom-0 flex  justify-center items-center'
        onClick={startVideo}
        variants={videoVariants}
        animate={isPlaying ? 'play' : 'pause'}
      >
        <PlayCircleIcon className='w-20 h-20 md:h-28 md:w-28 lg:w-40 lg:h-40 fill-white drop-shadow-xl rounded-full bg-ap-blue' />
      </motion.div>
      {overlay && !isPlaying && (
        <div className='absolute z-40 bottom-4 left-4  flex gap-1 lg:gap-2 items-end lg:items-center'>
          <div className='w-6 h-6 lg:w-8 lg:h-8'>
            <SocialIcon
              url='https://youtube.com/watch?v=xZA252lotHM'
              bgColor='#fff'
              style={{ width: '100%', height: '100%' }}
            />
          </div>
          <div className='text-white font-medium text-xs md:text-sm lg:text-base'>
            @VisitGreenvilleSC
          </div>
        </div>
      )}
      <video
        className='w-full h-full relative z-20'
        controls
        controlsList='nodownload'
        playsInline
        poster={poster}
        ref={videoHeaderRef}
      >
        <source src={video} type='video/mp4'></source>
      </video>
    </div>
  );
};

export default VideoHeader;
