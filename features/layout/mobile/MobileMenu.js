import React from 'react';
import Logo from '../../../shared/Logo';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { navMenu } from '../../../data/navigation';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { AnimatePresence, motion } from 'framer-motion';
import { toggleRegistrationModal } from '../layoutSlice';

const MobileMenu = ({ close, isOpen }) => {
  const dispatch = useDispatch();
  const menuVariants = {
    hidden: {
      x: -1000,
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
      },
    },
    show: {
      x: 0,
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
      },
    },
  };

  const items = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
    },
  };

  return (
    <AnimatePresence>
      <motion.div
        className='lg:hidden fixed z-50 top-0 left-0 right-0 bottom-0 flex drop-shadow-lg'
        variants={menuVariants}
        initial='hidden'
        animate={isOpen ? 'show' : 'hidden'}
      >
        <motion.div className='flex flex-col w-full p-6 md:p-10 bg-slate-700'>
          <div className='flex justify-between'>
            <div className='w-2/5'>
              <Logo />
            </div>
            <div onClick={() => close()}>
              <XMarkIcon className='w-10 h-10 stroke-white/60' />
            </div>
          </div>
          <motion.div className='flex flex-col gap-4 md:gap-5 top-40 relative'>
            {navMenu.map((item, i) => (
              <motion.div key={item.name} onClick={() => close()}>
                <Link href={item.link}>
                  <motion.div
                    className='font-bold text-4xl md:text-7xl text-white'
                    key={isOpen}
                    variants={items}
                    initial='hidden'
                    animate='show'
                    transition={{ delay: 0.4 + i * 0.05 }}
                  >
                    {item.name}
                  </motion.div>
                </Link>
              </motion.div>
            ))}
            <div className='flex gap-2 mt-12'>
              <button
                className='bg-ap-yellow rounded drop-shadow-md'
                onClick={() => {
                  dispatch(toggleRegistrationModal());
                  close();
                }}
              >
                <div className='py-4 px-5 font-bold text-4xl text-slate-800 text-left'>
                  Register Now!
                </div>
              </button>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default MobileMenu;
