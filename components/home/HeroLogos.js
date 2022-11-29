import React from 'react';
import { motion } from 'framer-motion';

const HeroLogos = ({ logos }) => {
  const textVariants = {
    show: {
      opacity: 1,
      transition: {
        ease: 'easeIn',
        duration: 0.4,
        delay: 0.4,
      },
    },
    hide: {
      opacity: 0,
    },
  };

  return (
    <motion.div
      className='flex flex-col relative lg:w-1/2 px-6'
      variants={textVariants}
      initial='hide'
      animate='show'
    >
      <div className='uppercase font-semibold text-xs md:text-sm text-white tracking-wider w-full text-center lg:text-left'>
        Subject Matter Experts From:
      </div>
      <div
        className='absolute left-0 top-0 z-30 w-full overflow-scroll pt-8'
        id='scrollers'
      >
        <div className='flex flex-row gap-5 justify-center lg:justify-start w-full'>
          {logos &&
            logos.map((logo, i) => (
              <div key={logo._key}>
                <div
                  className='w-16 h-16'
                  style={{
                    backgroundImage: `url(${logo.url})`,
                    backgroundSize: 'contain',
                    backgroundPosition: 'center center',
                  }}
                ></div>
              </div>
            ))}
        </div>
      </div>
    </motion.div>
  );
};

export default HeroLogos;
