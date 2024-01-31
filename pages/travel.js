import React, { useState } from 'react';
import {
  MdDiversity3,
  MdPlayArrow,
  MdPlayCircleFilled,
  MdCelebration,
  MdMapsUgc,
  MdLocationPin,
  MdPhone,
  MdHandshake,
  MdModelTraining,
  MdEmail,
  MdAirplanemodeActive,
  MdAirplaneTicket,
  MdLocalParking,
} from 'react-icons/md';
import { GiMuscleUp } from 'react-icons/gi';
import { openSponsorForm } from '../features/layout/layoutSlice';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { PowerIcon, ArrowLeftCircleIcon } from '@heroicons/react/24/solid';
import Callout from '../shared/Callout';
import Head from 'next/head';
import VideoPlayer from '../shared/VideoPlayer';
import Logo from '../shared/Logo';
const Travel = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [isPlaying, setIsPlaying] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Head>
        <title>Automotive Packaging Summit | Travel</title>
        <meta
          property='og:title'
          content='Automotive Packaging Summit | Travel'
        />
      </Head>
      <div className='w-full relative max-w-6xl mx-auto pt-6'>
        {isOpen && (
          <div className='fixed inset-0 bg-black/60 backdrop-blur-md z-[50] flex items-center justify-center'>
            <div className='w-full max-h-[100vh] max-w-2xl lg:max-w-7xl bg-ap-blue rounded-2xl pt-3  lg:px-6 pb-6 flex flex-col'>
              <div className='flex justify-between w-full h-full items-center pb-3 lg:pb-6 lg:pt-3 px-3'>
                <div className='lg:w-48 w-36'>
                  <Logo show={true} />
                </div>
                <div
                  className='bg-ap-yellow rounded-xl lg:text-lg md:px-3 md:py-2 cursor-pointer text-white font-bold flex items-center gap-1'
                  onClick={() => setIsOpen(false)}
                >
                  <div>
                    <ArrowLeftCircleIcon className='md:w-5 md:h-5 w-7 h-7 fill-white' />
                  </div>
                  <div className='hidden md:block'>Back</div>
                </div>
              </div>
              <div className='w-full h-auto aspect-video bg-ap-blue'>
                <VideoPlayer
                  videoEmbedLink={
                    'https://player.vimeo.com/video/805251742?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479'
                  }
                />
              </div>
            </div>
          </div>
        )}
        <div className='w-full h-full flex flex-col px-5 lg:px-0'>
          <div className='w-full rounded-2xl mb-8 border-neutral-900 border-4 p-9 flex flex-col lg:flex-row gap-4 md:justify-between bg-white shadow-[12px_16px_0_black] lg:pt-24 lg:pb-12'>
            <div className='font-medium font-oswald text-5xl lg:text-6xl xl:text-7xl uppercase'>
              Travel
            </div>
            <div className='w-full max-w-sm leading-snug'>
              Explore the best of this electric town – Find all the info you'll
              need to make the most of your stay in Greenville.
            </div>
          </div>
          <div className='w-full grid lg:grid-cols-2 gap-6 max-w-7xl mx-auto pb-20 h-full'>
            <div className='w-full h-full rounded-2xl bg-amber-400 border-2 border-black shadow-[4px_6px_0_black]'>
              <div className='px-6 py-9 lg:px-9 flex-1 h-full flex flex-col gap-12 justify-between'>
                <div className='flex flex-col gap-6 h-full'>
                  <div className='font-bold text-4xl max-w-lg tracking-tight leading-none'>
                    Hyatt Regency
                  </div>
                  <div className='flex flex-col gap-6'>
                    <div className='flex gap-2 items-center'>
                      <div>
                        <MdLocationPin color='black' size={36} />
                      </div>
                      <div>
                        220 North Main Street Greenville,
                        <br /> South Carolina 29601 United States
                      </div>
                    </div>
                    <div className='flex gap-2 items-center'>
                      <div>
                        <MdPhone color='black' size={36} />
                      </div>
                      <div>+1 864 235 1234</div>
                    </div>
                    <div className='flex gap-2 items-center'>
                      <div>
                        <MdEmail color='black' size={36} />
                      </div>
                      <div>concierge@hyatt.com</div>
                    </div>
                  </div>
                </div>
                <div className='border-t border-t-neutral-500'>
                  <div className='flex flex-col gap-4 pt-6 text-lg leading-snug'>
                    <div className='flex gap-2 items-center'>
                      {/* <div className='w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center'>
                        <div className='-mt-1'>
                          <MdDiversity3 color='white' size={'24px'} />
                        </div>
                      </div> */}
                      <div className='font-oswald uppercase font-medium '>
                        Rooms are limited, book today!
                      </div>
                    </div>
                    <button
                      className='bg-neutral-900 w-fit text-white text-base md:text-xl font-medium px-8 py-2 shadow-[4px_4px_0_white] hover:shadow-[1px_1px_0_white] hover:translate-x-[3px] hover:translate-y-[3px] transition-all'
                      animate={{ opacity: 1 }}
                      initial={{ opacity: 0 }}
                      transition={{
                        delay: 0.45,
                        ease: 'easeIn',
                        duration: 0.5,
                      }}
                      onClick={() =>
                        window.open(
                          'https://www.hyatt.com/en-US/group-booking/GSPRG/G-PAC4',
                          '_blank'
                        )
                      }
                    >
                      Book My Stay
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className='grid grid-rows-2 w-full h-full gap-5 overflow-hidden'>
              <div
                className='w-full rounded-2xl bg-neutral-200 border-2 border-black h-[200px] bg-cover bg-center flex items-center justify-center relative overflow-hidden'
                style={{
                  backgroundImage: `url('https://packschool.s3.amazonaws.com/greenville.png')`,
                }}
              >
                {isPlaying ? (
                  <div className='w-full h-full bg-black'>
                    <VideoPlayer
                      videoEmbedLink={
                        'https://www.youtube.com/embed/xZA252lotHM?si=TqLgReXBLVx-UQR8'
                      }
                      playing={true}
                    />
                  </div>
                ) : (
                  <button
                    className='bg-white/50 backdrop-blur w-28 h-28 rounded-full text-white text-base md:text-lg font-medium shadow-[3px_3px_0_black] hover:shadow-[1px_1px_0_black] hover:translate-x-[3px] hover:translate-y-[3px] transition-all flex justify-center items-center'
                    onClick={() => setIsPlaying(true)}
                  >
                    <MdPlayArrow color='white' size={'75px'} />
                  </button>
                )}
                {!isPlaying && (
                  <div className='absolute bottom-2 left-2 w-fit px-4 py-2 rounded-2xl shadow-xl bg-black/40 backdrop-blur text-white font-oswald font-medium uppercase'>
                    Experience Greenville
                  </div>
                )}
              </div>
              <div className='grid grid-cols-2 gap-5 w-full h-full overflow-hidden'>
                <div
                  className=' cursor-pointer w-full h-full bg-white border-2 border-black rounded-2xl relative flex items-center bg-cover bg-center'
                  style={{
                    backgroundImage: `url('https://packschool.s3.amazonaws.com/locals.png')`,
                  }}
                  onClick={() =>
                    window.open(
                      'https://www.visitgreenvillesc.com/blog/home/',
                      '_blank'
                    )
                  }
                >
                  <div className='absolute bottom-2 left-2 w-fit px-4 py-2 rounded-2xl shadow-xl bg-black/40 backdrop-blur text-white font-oswald font-medium uppercase'>
                    GO WHERE THE LOCALS GO
                  </div>
                </div>
                <div className='w-full h-full bg-neutral-300 rounded-2xl border-2 border-black'>
                  <div className='flex flex-col justify-between p-4 lg:p-6 h-full'>
                    <div className='flex gap-2 items-center'>
                      <div>
                        <MdAirplanemodeActive color='black' size={40} />
                      </div>
                      <div className='font-medium font-oswald uppercase text-xl lg:text-4xl tracking-tight text-neutral-900'>
                        Resources
                      </div>
                    </div>
                    <div className='flex flex-col gap-3 text-white'>
                      <div
                        className='flex gap-2 items-center cursor-pointer'
                        onClick={() =>
                          window.open('https://gspairport.com/', '_blank')
                        }
                      >
                        <div className='w-9 h-9 rounded-full bg-ap-yellow flex items-center justify-center'>
                          <MdAirplaneTicket color='white' size={'20px'} />
                        </div>
                        <div className='font-bold text-neutral-900 text-lg'>
                          Airport
                        </div>
                      </div>
                      <div
                        className='flex gap-2 items-center cursor-pointer'
                        onClick={() =>
                          window.open(
                            'https://www.greenvillesc.gov/513/Parking',
                            '_blank'
                          )
                        }
                      >
                        <div className='w-9 h-9 rounded-full bg-ap-yellow flex items-center justify-center'>
                          <MdLocalParking color='white' size={'20px'} />
                        </div>
                        <div className='font-bold text-neutral-900 text-lg'>
                          Parking
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Travel;
