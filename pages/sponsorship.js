import React, { useState } from 'react';
import {
  MdDiversity3,
  MdPlayArrow,
  MdPlayCircleFilled,
  MdCelebration,
  MdMapsUgc,
  MdHandshake,
  MdModelTraining,
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

const Sponsorship = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [isPlaying, setIsPlaying] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Head>
        <title>Automotive Packaging Summit | Sponsorship</title>
        <meta
          property='og:title'
          content='Automotive Packaging Summit | Sponsorship'
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
        <div className='w-full h-full flex flex-col px-5 xl:px-0'>
          <div className='w-full rounded-2xl mb-8 border-neutral-900 border-4 p-9 flex flex-col lg:flex-row gap-4 md:justify-between bg-white shadow-[12px_16px_0_black] lg:pt-24 lg:pb-12'>
            <div className='font-medium font-oswald text-5xl lg:text-6xl xl:text-7xl uppercase'>
              Sponsorship
            </div>
            <div className='w-full max-w-sm leading-snug'>
              Position yourself for this unique opportunity to offer packaging
              and logistics solutions to OEMs and Tier 1 Suppliers.
            </div>
          </div>
          <div className='w-full grid lg:grid-cols-2 gap-5 max-w-7xl mx-auto pb-20 h-full overflow-hidden'>
            <div className='w-full h-full rounded-2xl bg-amber-400 border-2 border-black shadow-[4px_6px_0_black]'>
              <div className='px-6 py-9 lg:px-9 flex-1 h-full flex flex-col gap-12 lg:gap-16 justify-between'>
                <div className='flex flex-col gap-6'>
                  <div className=' flex flex-col gap-1'>
                    <div className='w-full flex gap-5 items-center'>
                      <div>
                        <GiMuscleUp color='black' size={48} />
                      </div>
                      <div className='font-bold text-3xl lg:text-4xl max-w-lg tracking-tight leading-none'>
                        Strengthen Your
                        <br /> Brand Name
                      </div>
                    </div>
                  </div>
                  <div className=' flex flex-col gap-3'>
                    <div className='w-full flex gap-5 items-center'>
                      <div>
                        <MdHandshake color='white' size={48} />
                      </div>
                      <div className='font-bold text-white text-3xl lg:text-4xl max-w-lg tracking-tight leading-none'>
                        Evolve Your
                        <br /> Network
                      </div>
                    </div>
                  </div>
                  <div className=' flex flex-col gap-3'>
                    <div className='w-full flex gap-5 items-center'>
                      <div>
                        <MdModelTraining color='black' size={48} />
                      </div>
                      <div className='font-bold text-3xl lg:text-4xl max-w-lg tracking-tight leading-none'>
                        Stay Top
                        <br /> Of Mind
                      </div>
                    </div>
                  </div>
                </div>
                <div className='border-t border-t-neutral-500'>
                  <div className='flex flex-col gap-3 pt-6 text-lg leading-snug'>
                    <div className='flex gap-2 items-center'>
                      {/* <div className='w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center'>
                        <div className='-mt-1'>
                          <MdDiversity3 color='white' size={'24px'} />
                        </div>
                      </div> */}
                      <div className='font-oswald uppercase font-medium '>
                        Grow Trust, Generate Leads, Impress.
                      </div>
                    </div>
                    <div>
                      Establish your reputation as a reliable and trustworthy
                      partner, committed to fostering growth. Enhance your
                      organization's visibility with positive PR, and create a
                      lasting impression that resonates beyond AutoPack Summit.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='grid grid-rows-2 w-full h-full gap-4 lg:gap-6 overflow-hidden'>
              <div
                className='w-full rounded-2xl border-2 h-[200px] lg:h-auto border-black bg-neutral-200 bg-cover bg-center flex items-center justify-center relative overflow-hidden'
                style={{
                  backgroundImage: `url('https://packschool.s3.amazonaws.com/sponsor.png')`,
                }}
              >
                {isPlaying ? (
                  <div className='w-full h-full bg-black'>
                    <VideoPlayer
                      videoEmbedLink={
                        'https://player.vimeo.com/video/684795579?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479'
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
                    "Everyone here is someone we could work with"
                  </div>
                )}
              </div>
              <div className='grid grid-cols-2 gap-4 lg gap-4:lg:gap-6 w-full h-full overflow-hidden'>
                <div
                  className=' cursor-pointer w-full h-full bg-white border-2 border-black rounded-2xl relative flex items-center bg-cover bg-center'
                  style={{
                    backgroundImage: `url('https://packschool.s3.amazonaws.com/sponsor-cap.png')`,
                  }}
                  onClick={() => setIsOpen(true)}
                >
                  <div className='absolute bottom-2 left-2 w-fit px-4 py-2 rounded-2xl shadow-xl bg-black/40 backdrop-blur text-white font-oswald font-medium uppercase'>
                    Hear From TriEnda
                  </div>
                </div>
                <div className='w-full h-full bg-neutral-300 rounded-2xl border-2 border-black'>
                  <div className='flex flex-col justify-between gap-4 lg:gap-6 p-3 lg:p-6 h-full'>
                    <div className='flex gap-2 items-center'>
                      <div>
                        <PowerIcon className='w-7 h-7 lg:w-10 lg:h-10 stroke-neutral-900' />
                      </div>
                      <div className='font-medium font-oswald uppercase text-xl md:text-2xl xl:text-4xl tracking-tight text-neutral-900'>
                        Get Involved
                      </div>
                    </div>
                    <div className='flex flex-col gap-3 text-white'>
                      <div
                        className='flex gap-2 items-center cursor-pointer'
                        onClick={() => router.push('/speaker-interest')}
                      >
                        <div className='w-9 h-9 rounded-full bg-ap-yellow flex items-center justify-center'>
                          <MdMapsUgc color='white' size={'20px'} />
                        </div>
                        <div className='font-bold text-neutral-900 lg:text-lg leading-tight'>
                          I'd like to Speak
                        </div>
                      </div>
                      <div
                        className='flex gap-2 items-center cursor-pointer'
                        onClick={() => dispatch(openSponsorForm())}
                      >
                        <div className='w-9 h-9 rounded-full bg-ap-yellow flex items-center justify-center'>
                          <MdCelebration color='white' size={'20px'} />
                        </div>
                        <div className='font-bold text-neutral-900 lg:text-lg leading-tight'>
                          I'd like to Sponsor
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <SponsorshipHead />
        <SponsorshipBody /> */}
      </div>
      {/* <Callout /> */}
    </>
  );
};

export default Sponsorship;
