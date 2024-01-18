import React, { useState, useRef, useEffect } from 'react';
import Logo from '../../../shared/Logo';
import { Bars3Icon } from '@heroicons/react/24/solid';
import HeaderNav from './HeaderNav';
import { motion, useScroll } from 'framer-motion';

const Header = ({ openMenu }) => {
  const [showMenu, setShowMenu] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.onChange(() => updateY());
  });

  const updateY = () => {
    if (scrollY.current > 10) {
      setShowMenu(true);
    } else {
      setShowMenu(false);
    }
  };

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

  const menuVariants = {
    show: {
      backgroundColor: showMenu ? 'rgba(0, 88, 146, 1)' : 'rgba(0, 88, 146, 0)',
      boxShadow:
        '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
      transition: {
        duration: 0.2,
        ease: 'easeInOut',
      },
    },
    hidden: {
      backgroundColor: showMenu ? 'rgba(0, 88, 146, 1)' : 'rgba(0, 88, 146, 0)',
      transition: {
        duration: 0.2,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <motion.div
      className='w-full py-4 md:py-5 lg:py-7 px-4 md:px-5 xl:px-8 fixed z-50 left-0 right-0'
      variants={menuVariants}
      initial={false}
      animate={showMenu ? 'show' : 'hidden'}
    >
      <motion.div
        className='w-full flex justify-between items-center xl:max-w-7xl mx-auto'
        variants={textVariants}
        initial='hide'
        animate='show'
      >
        <div className='w-28 md:w-32 lg:w-40 xl:w-48 cursor-pointer'>
          <Logo show={showMenu} />
        </div>
        <div className='flex justify-end gap-2'>
          <div className='lg:hidden' onClick={() => openMenu()}>
            <Bars3Icon className='w-7 h-7 md:w-9 md:h-9 fill-black' />
          </div>
          <div className='hidden lg:flex text-white'>
            <HeaderNav show={showMenu} />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Header;
