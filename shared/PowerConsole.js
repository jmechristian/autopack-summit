import React from 'react';
import { PowerIcon } from '@heroicons/react/24/solid';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import {
  MdCelebration,
  MdMapsUgc,
  MdAirplanemodeActive,
  MdVideoCameraFront,
  MdConfirmationNumber,
  MdChevronRight,
  MdDiversity1,
  MdAccessAlarm,
} from 'react-icons/md';
import ConsoleItem from './ConsoleItem';
import { AnimatePresence, motion } from 'framer-motion';
import {
  closePowerConsole,
  openPowerConsole,
  openSponsorForm,
} from '../features/layout/layoutSlice';
import { useSelector } from 'react-redux';

const PowerConsole = () => {
  const dispatch = useDispatch();
  const { powerOpen } = useSelector((state) => state.layout);
  const router = useRouter();

  return (
    <AnimatePresence>
      {powerOpen && (
        <motion.div
          className='fixed right-0 top-0 bottom-0 w-full max-w-md md:w-[450px] z-50 flex flex-col justify-center items-center'
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
                  title={'General Admission Tickets'}
                  color={'bg-neutral-500'}
                  hoverColor={'hover:bg-amber-400'}
                  iconBack={'bg-black/50'}
                  icon={<MdConfirmationNumber color='gray' size={'20px'} />}
                  fn={() => router.push('/')}
                  soldOut={true}
                />
                <ConsoleItem
                  title={'Join the Ticket Waitlist'}
                  color={'bg-white'}
                  hoverColor={'hover:bg-amber-400'}
                  iconBack={'bg-black'}
                  icon={<MdAccessAlarm color='white' size={'20px'} />}
                  fn={() =>
                    window.open('https://forms.gle/k4KFagWajT7WACBx5', '_blank')
                  }
                />
                <ConsoleItem
                  title={'OEM/ Tier 1 Registration'}
                  color={'bg-white'}
                  hoverColor={'hover:bg-amber-400'}
                  iconBack={'bg-black'}
                  icon={<MdConfirmationNumber color='white' size={'20px'} />}
                  fn={() => router.push('/register')}
                />
                <ConsoleItem
                  title={'Registration Add-Ons'}
                  color={'bg-white'}
                  hoverColor={'hover:bg-amber-400'}
                  iconBack={'bg-black'}
                  icon={<MdConfirmationNumber color='white' size={'20px'} />}
                  fn={() => router.push('/add-ons')}
                />
                <ConsoleItem
                  title={"I'd like to Speak"}
                  iconBack={'bg-black/30'}
                  color={'bg-amber-300'}
                  hoverColor={'hover:bg-amber-500'}
                  icon={<MdMapsUgc color='white' size={'20px'} />}
                  fn={() => router.push('/speaker-interest')}
                />
                <ConsoleItem
                  title={"I'd like to Sponsor"}
                  iconBack={'bg-black/30'}
                  color={'bg-amber-300'}
                  hoverColor={'hover:bg-amber-500'}
                  icon={<MdCelebration color='white' size={'20px'} />}
                  fn={() => dispatch(openSponsorForm())}
                />
                {/* <ConsoleItem
                  title={'Advisory Board Interest'}
                  iconBack={'bg-black/30'}
                  color={'bg-amber-300'}
                  hoverColor={'hover:bg-amber-500'}
                  icon={<MdDiversity1 color='white' size={'20px'} />}
                /> */}
                {/* <ConsoleItem
                  title={'Why Autopack Summit?'}
                  iconBack={'bg-black/30'}
                  color={'bg-amber-500'}
                  hoverColor={'hover:bg-white'}
                  icon={<MdVideoCameraFront color='white' size={'20px'} />}
                /> */}

                <ConsoleItem
                  title={'Book My Travel'}
                  iconBack={'bg-white'}
                  color={'bg-ap-blue'}
                  hoverColor={'hover:bg-amber-400'}
                  icon={<MdAirplanemodeActive color='black' size={'20px'} />}
                  fn={() =>
                    window.open(
                      'https://www.hyatt.com/en-US/group-booking/GSPRG/G-PAC4',
                      '_blank'
                    )
                  }
                />
              </motion.div>
              <div
                className='mx-auto w-full md:px-3'
                dangerouslySetInnerHTML={{
                  __html: `<div style="line-height:1.4em;background-color:#eee;padding:10px;width:100%;height:212px;border-top-left-radius: 1rem;border-bottom-left-radius: 1rem;border-bottom-right-radius: 1rem;border-top-right-radius: 1rem;text-align:center;" data-reactroot=""><div style="height:150px"><div style="text-align:center;font-size:16px"><span>Get our official<a href="https://whova.com/whova-event-app/" style="text-decoration:none;color:#333"> event </a>app</span><div style="margin:10px 0px;"><img style="height:32px;margin:0 auto;" src="https://whova.com/xems/apis/get_whova_tracking_image/?event_id=autom_202410&amp;track_id=use_small_widget&amp;image_type=whova_logo" title="whova-logo"/></div></div><div style="margin-top:20px;clear:both;text-align:center;padding:0 0 5px 0"><a href="https://itunes.apple.com/app/apple-store/id716979741?pt=1944835&amp;ct=download_widget&amp;mt=8" target="_blank" rel="noreferrer" style="line-height:1.4em;font-size:14px;background-color:#2dacee;padding:10px;color:#fff;min-width:80px;display:inline-block;text-decoration:none;margin-right:5px">iOS</a><a href="https://play.google.com/store/apps/details?id=com.whova.event&amp;referrer=utm_source%3Ddownload_widget%26utm_medium%3Dwidget%26utm_content%3Dautom_202410" target="_blank" rel="noreferrer" style="line-height:1.4em;font-size:14px;background-color:#2dacee;padding:10px;color:#fff;min-width:80px;display:inline-block;text-decoration:none">Android</a></div><span style="font-size:13px">For Blackberry or Windows Phone,</span> <a target="_blank" rel="noreferrer" style="font-size:13px;text-decoration:none;color:#3c8dbc" href="https://whova.com/portal/webapp/autom_202410/">Click here</a></div><div><div style="text-align:center;font-size:13px">For feature details, visit<!-- --> <a target="_blank" rel="noreferrer" style="text-decoration:none;color:#3c8dbc" href="https://whova.com/">Whova</a></div></div></div>`,
                }}
              ></div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PowerConsole;
