import React from 'react';
import { PowerIcon } from '@heroicons/react/24/solid';
import { useDispatch } from 'react-redux';
import {
  MdCelebration,
  MdMapsUgc,
  MdAirplanemodeActive,
  MdVideoCameraFront,
  MdConfirmationNumber,
  MdChevronRight,
  MdDiversity1,
} from 'react-icons/md';
import ConsoleItem from './ConsoleItem';
import { AnimatePresence, motion } from 'framer-motion';
import {
  closePowerConsole,
  openPowerConsole,
} from '../features/layout/layoutSlice';
import { useSelector } from 'react-redux';

const PowerConsole = () => {
  const dispatch = useDispatch();
  const { powerOpen } = useSelector((state) => state.layout);

  return (
    <AnimatePresence>
      {powerOpen && (
        <motion.div
          className='fixed right-0 top-0 bottom-0 w-[450px] z-50 flex flex-col justify-center items-center'
          initial={{ x: 460 }}
          animate={{ x: 0 }}
          exit={{ x: 460 }}
          key={powerOpen}
          transition={{ type: 'spring', bounce: 0 }}
        >
          <motion.div className=' bg-gradient-to-br from-amber-400/60 to-neutral-900/60 via-ap-blue/50 backdrop-blur rounded-l-2xl shadow-2xl w-full pl-4 px-8 py-6'>
            <motion.div
              className='w-full flex flex-col gap-4 bg-black rounded-2xl px-3 py-5 shadow-xl'
              initial={{ x: 460 }}
              animate={{ x: 0 }}
              exit={{ x: 460 }}
              key={powerOpen}
              transition={{ type: 'spring', bounce: 0 }}
            >
              <motion.div className='w-full flex justify-between items-center'>
                <motion.div className='flex gap-2 items-center w-fit px-3'>
                  <PowerIcon className='w-6 h-6 fill-amber-300 stroke-amber-300' />
                  <motion.div className='font-bold text-xl text-white'>
                    Start Console
                  </motion.div>
                </motion.div>
                <motion.div
                  className='w-8 h-8 bg-white/20 shadow-md rounded-full flex justify-center items-center'
                  onClick={() => dispatch(closePowerConsole())}
                >
                  <motion.div>
                    <MdChevronRight color='white' size='26px' />
                  </motion.div>
                </motion.div>
              </motion.div>
              <motion.div className='w-full px-3 py-2 flex flex-col gap-2 item-center'>
                <ConsoleItem
                  title={'Register (opening soon)'}
                  color={'bg-white'}
                  hoverColor={'hover:bg-amber-400'}
                  iconBack={'bg-black'}
                  icon={<MdConfirmationNumber color='white' size={'20px'} />}
                />
                <ConsoleItem
                  title={"I'd like to Speak"}
                  iconBack={'bg-black/30'}
                  color={'bg-amber-300'}
                  hoverColor={'hover:bg-amber-500'}
                  icon={<MdMapsUgc color='white' size={'20px'} />}
                />
                <ConsoleItem
                  title={"I'd like to Sponsor"}
                  iconBack={'bg-black/30'}
                  color={'bg-amber-300'}
                  hoverColor={'hover:bg-amber-500'}
                  icon={<MdCelebration color='white' size={'20px'} />}
                />
                {/* <ConsoleItem
                  title={'Advisory Board Interest'}
                  iconBack={'bg-black/30'}
                  color={'bg-amber-300'}
                  hoverColor={'hover:bg-amber-500'}
                  icon={<MdDiversity1 color='white' size={'20px'} />}
                /> */}
                <ConsoleItem
                  title={'Why Autopack Summit?'}
                  iconBack={'bg-black/30'}
                  color={'bg-amber-500'}
                  hoverColor={'hover:bg-white'}
                  icon={<MdVideoCameraFront color='white' size={'20px'} />}
                />

                <ConsoleItem
                  title={'Book My Travel'}
                  iconBack={'bg-white'}
                  color={'bg-ap-blue'}
                  hoverColor={'hover:bg-amber-400'}
                  icon={<MdAirplanemodeActive color='black' size={'20px'} />}
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PowerConsole;
