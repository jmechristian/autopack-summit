import { motion } from 'framer-motion';
import { MdOutlinePowerSettingsNew } from 'react-icons/md';
import { PowerIcon } from '@heroicons/react/24/solid';

const PingIcon = () => {
  return (
    <div className='grid place-content-center overflow-hidden aspect-square rounded-full px-4 py-4'>
      <Ping />
    </div>
  );
};

const LOOP_DURATION = 4;

const Ping = () => {
  return (
    <div className='relative'>
      <Logo />
      <Band delay={0} />
      <Band delay={LOOP_DURATION * 0.25} />
      <Band delay={LOOP_DURATION * 0.5} />
      <Band delay={LOOP_DURATION * 0.75} />
    </div>
  );
};

const Logo = () => {
  // Temp logo from https://logoipsum.com/
  return (
    <motion.div
      className='relative z-10 fill-white hover:fill-amber-100'
      initial={{
        opacity: 0,
        scale: 0.85,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 1,
        ease: 'easeOut',
      }}
    >
      <PowerIcon className='fill-white hover:fill-amber-300 w-12 h-12 transition-colors ease-in' />
    </motion.div>
  );
};

const Band = ({ delay }) => {
  return (
    <motion.span
      style={{
        translateX: '-50%',
        translateY: '-50%',
      }}
      initial={{
        opacity: 0,
        scale: 0.25,
      }}
      animate={{
        opacity: [0, 1, 1, 0],
        scale: 1,
      }}
      transition={{
        repeat: Infinity,
        repeatType: 'loop',
        times: [0, 0.5, 0.75, 1],
        duration: LOOP_DURATION,
        ease: 'linear',
        delay,
      }}
      className='absolute left-[50%] top-[50%] z-0 h-56 w-56 rounded-full border-[1px] border-ap-darkblue bg-gradient-to-br from-ap-blue/50 to-ap-darkblue/50 hover:to-ap-yellow/70 shadow-xl shadow-ap-blue/40'
    />
  );
};

export default PingIcon;
