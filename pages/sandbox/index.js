import React from 'react';
import HeaderPadding from '../../shared/HeaderPadding';
import LogoHero from '../../shared/LogoHero';
import RibbonLogos from '../../shared/RibbonLogos';
import PingIcon from '../../shared/PingIcon';
import {
  MdDiversity3,
  MdPlayArrow,
  MdPlayCircleFilled,
  MdCelebration,
  MdMapsUgc,
} from 'react-icons/md';
import ScrollingTestimonials from '../../shared/ScrollingTestimonial';

const Page = () => {
  return (
    <div className='w-full h-full flex flex-col'>
      <HeaderPadding />
      <div className='w-full grid lg:grid-cols-2 gap-20 py-24 max-w-7xl mx-auto relative overflow-hidden'>
        <div className='flex flex-col justify-between'>
          <div className='flex flex-col gap-6 max-w-xl'>
            <div>
              <h1 className='font-medium text-6xl tracking-tight font-oswald uppercase'>
                The premier open forum for{' '}
                <span className='text-ap-darkblue'>
                  Automotive Packaging Professionals
                </span>
              </h1>
            </div>
            <div className='text-xl'>
              Discover cutting-edge solutions at the Automotive Packaging
              Summit, where industry veterans and packaging experts unite to
              tackle the unique challenges in OEM and Tier1 part supplier
              logistics.
            </div>
            <button className='bg-ap-yellow w-fit text-white text-base md:text-lg font-medium px-8 py-2 shadow-[3px_3px_0_black] hover:shadow-[1px_1px_0_black] hover:translate-x-[3px] hover:translate-y-[3px] transition-all'>
              Registration Opens Soon!
            </button>
          </div>
          <div className='flex gap-3'>
            <div className='text-5xl font-medium text-ap-blue font-oswald tracking-tight'>
              OCT 21-23, 2024
            </div>
            <div className='flex flex-col font-medium'>
              <div>Hyatt Regency</div>
              <div>Greenville, SC</div>
            </div>
          </div>
        </div>
        <div className='w-full flex justify-center items-center'>
          <div className='grid grid-cols-3 overflow-hidden gap-3 w-full h-full'>
            <div className='aspect-square rounded-full'>
              <PingIcon />
            </div>
            <div
              className='bg-neutral-600 aspect-square rounded-full bg-cover bg-center'
              style={{
                backgroundImage: `url('https://packschool.s3.amazonaws.com/circle.png')`,
              }}
            ></div>
            <div
              className='bg-neutral-600 aspect-square rounded-bl-[50%] bg-cover bg-center'
              style={{
                backgroundImage: `url('https://packschool.s3.amazonaws.com/tour.png')`,
              }}
            ></div>
            <div className='border-black border-dashed border-4 aspect-square rounded-bl-[50%] flex flex-col gap-0.5 justify-center items-center'>
              <div className='text-4xl text-ap-blue font-oswald font-medium tracking-tighter -mt-5'>
                500+
              </div>
              <div className='font-bold text-center leading-tight'>
                Industry
                <br /> Professionals
              </div>
            </div>
            <div
              className='bg-neutral-600 aspect-square rounded-tr-[50%] bg-cover bg-center'
              style={{
                backgroundImage: `url('https://packschool.s3.amazonaws.com/group-2.png')`,
              }}
            ></div>
            <div
              className='bg-neutral-600 aspect-square rounded-full bg-cover bg-center'
              style={{
                backgroundImage: `url('https://packschool.s3.amazonaws.com/crowd.png')`,
              }}
            ></div>
            <div
              className='bg-neutral-600 aspect-square rounded-tl-[50%] bg-center bg-cover'
              style={{
                backgroundImage: `url('https://packschool.s3.amazonaws.com/group.png')`,
              }}
            ></div>
            <div
              className='bg-neutral-600 aspect-square rounded-bl-[50%] bg-cover bg-center'
              style={{
                backgroundImage: `url('https://packschool.s3.amazonaws.com/social.png')`,
              }}
            ></div>
            <div
              className='bg-neutral-600 aspect-square rounded-2xl bg-center bg-cover'
              style={{
                backgroundImage: `url('https://packschool.s3.amazonaws.com/bl.png')`,
              }}
            ></div>
          </div>
        </div>
      </div>
      <RibbonLogos />
      <div className='w-full grid lg:grid-cols-2 gap-6 max-w-7xl mx-auto py-24 mb-12 overflow-hidden'>
        <div className='w-full h-full rounded-2xl bg-amber-400 aspect-square'>
          <div className='p-9 flex-1 h-full flex flex-col justify-between'>
            <div className='font-bold text-4xl max-w-lg tracking-tight leading-none'>
              An average production automobile has{' '}
              <span className='text-white inline-flex'> 30,000 parts</span> and
              tens of thousands of associated packages throughout the vehicle’s
              life cycle.
            </div>
            <div className='border-t border-t-neutral-500'>
              <div className='flex flex-col gap-3 pt-6 text-lg leading-snug'>
                <div className='flex gap-2 items-center'>
                  <div className='w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center'>
                    <div className='-mt-1'>
                      <MdDiversity3 color='white' size={'24px'} />
                    </div>
                  </div>
                  <div className='font-oswald uppercase font-medium '>
                    All the right folks, gathered in ONE room
                  </div>
                </div>
                <div>
                  At the Automotive Packaging Summit, we explore the specific
                  packaging and logistics challenges faced by OEMs and Tier1
                  Part Suppliers, and their impact on Transportation and
                  Logistics. Industry veterans and Packaging Experts
                  specializing in Automotive Packaging Solutions share insights
                  to streamline this process through knowledge sharing.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='grid grid-rows-2 w-full h-full gap-6 overflow-hidden'>
          <div
            className='w-full rounded-2xl bg-neutral-200 bg-cover bg-center flex items-center justify-center relative'
            style={{
              backgroundImage: `url('https://packschool.s3.amazonaws.com/recap.png')`,
            }}
          >
            <button className='bg-white/50 backdrop-blur w-28 h-28 rounded-full text-white text-base md:text-lg font-medium shadow-[3px_3px_0_black] hover:shadow-[1px_1px_0_black] hover:translate-x-[3px] hover:translate-y-[3px] transition-all flex justify-center items-center'>
              <MdPlayArrow color='white' size={'75px'} />
            </button>
            <div className='absolute bottom-4 left-4 w-fit px-4 py-2 rounded-2xl shadow-xl bg-black/40 backdrop-blur text-white font-oswald font-medium uppercase'>
              2023 Highlights
            </div>
          </div>
          <div className='grid grid-cols-2 gap-6 w-full'>
            <div
              className='w-full h-full bg-white border-4 border-black rounded-2xl relative flex items-center bg-cover bg-center'
              style={{
                backgroundImage: `url('https://packschool.s3.amazonaws.com/gallant-2.png')`,
              }}
            >
              <div className='absolute bottom-4 left-4 w-fit px-4 py-2 rounded-2xl shadow-xl bg-black/40 backdrop-blur text-white font-oswald font-medium uppercase'>
                From Your Peers
              </div>
            </div>
            <div className='w-full h-full bg-neutral-300 rounded-2xl'>
              <div className='flex flex-col justify-between p-6 h-full'>
                <div className='font-medium font-oswald uppercase text-4xl tracking-tight text-neutral-900'>
                  Get Involved
                </div>
                <div className='flex flex-col gap-3 text-white'>
                  <div className='flex gap-2 items-center'>
                    <div className='w-9 h-9 rounded-full bg-ap-yellow flex items-center justify-center'>
                      <MdMapsUgc color='white' size={'20px'} />
                    </div>
                    <div className='font-bold text-neutral-900 text-lg'>
                      I'd like to Speak
                    </div>
                  </div>
                  <div className='flex gap-2 items-center'>
                    <div className='w-9 h-9 rounded-full bg-ap-yellow flex items-center justify-center'>
                      <MdCelebration color='white' size={'20px'} />
                    </div>
                    <div className='font-bold text-neutral-900 text-lg'>
                      I'd like to Sponsor
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ScrollingTestimonials />
      <div className='py-24 mt-12 max-w-7xl mx-auto w-full'>
        <div className='bg-neutral-200 w-full h-[800px] rounded-2xl flex justify-center items-center'>
          Speakers
        </div>
      </div>
      <div className='py-24 mt-12 max-w-7xl mx-auto w-full'>
        <div className='bg-neutral-200 w-full h-[800px] rounded-2xl flex justify-center items-center'>
          Sponsors
        </div>
      </div>
    </div>
  );
};

export default Page;
