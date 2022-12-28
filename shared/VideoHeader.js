import React, { useRef, useState } from 'react';
import { PlayCircleIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';

const VideoHeader = ({ video, poster }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoHeaderRef = useRef();

  const videoVariants = {
    play: {
      opacity: 0,
    },
    pause: { opacity: 1 },
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
    <div className='aspect-video flex justify-center items-center relative'>
      <motion.div
        className='absolute z-10 bg-ap-blue/40 backdrop-blur top-0 left-0 right-0 bottom-0 flex  justify-center items-center'
        onClick={startVideo}
        variants={videoVariants}
        animate={isPlaying ? 'play' : 'pause'}
      >
        <PlayCircleIcon className='w-24 h-24 lg:w-40 lg:h-40 fill-white drop-shadow-xl rounded-full bg-ap-blue' />
      </motion.div>
      <video
        className='w-full h-full'
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
