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
      className='flex flex-col relative gap-7 w-full'
      variants={textVariants}
      initial='hide'
      animate='show'
    >
      <div className='uppercase font-semibold text-xs md:text-sm text-white tracking-wider w-full text-center'>
        Subject Matter Experts From:
      </div>
      <div className='w-full overflow-scroll' id='scrollers'>
        <div className='flex flex-row gap-10 justify-left lg:justify-center w-full ml-6'>
          {logos &&
            logos.map((logo, i) => (
              <div key={logo._key}>
                <div
                  className='w-[60px] h-[60px] md:w-[65px] md:h-[65px]'
                  style={{
                    backgroundImage: `url(${logo.url})`,
                    backgroundSize: 'contain',
                    backgroundPosition: 'center center',
                    backgroundRepeat: 'no-repeat',
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
