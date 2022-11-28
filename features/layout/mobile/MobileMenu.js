import React from 'react';
import Logo from '../../../shared/Logo';
import Link from 'next/link';
import { navMenu } from '../../../../../data/navigation';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { AnimatePresence, motion } from 'framer-motion';

const MobileMenu = ({ close, isOpen }) => {
  const menuVariants = {
    hidden: {
      x: -1050,
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
        delayChildren: 1,
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
        className='fixed z-50 top-0 left-0 right-0 bottom-0 flex drop-shadow-lg'
        variants={menuVariants}
        initial='hidden'
        animate={isOpen ? 'show' : 'hidden'}
      >
        <motion.div className='flex flex-col w-full p-6 bg-slate-700'>
          <div className='flex justify-between'>
            <div className='w-2/5'>
              <Logo />
            </div>
            <div onClick={() => close()}>
              <XMarkIcon className='w-10 h-10 stroke-white/60' />
            </div>
          </div>
          <motion.div className='flex flex-col gap-4 top-40 relative'>
            {navMenu.map((item, i) => (
              <motion.div
                key={item.name}
                variants={items}
                initial='hidden'
                animate='show'
                exit='hidden'
              >
                <Link href={item.link}>
                  <div className='font-bold text-5xl text-white'>
                    {item.name}
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default MobileMenu;
