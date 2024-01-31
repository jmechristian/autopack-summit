import React, { useState } from 'react';
import { API } from 'aws-amplify';
import { listTestimonials } from '../../src/graphql/queries';
import { createClient } from 'next-sanity';
import { useRouter } from 'next/router';
import { AnimatePresence, motion } from 'framer-motion';

import {
  MdDiversity3,
  MdPlayArrow,
  MdPlayCircleFilled,
  MdCelebration,
  MdMapsUgc,
} from 'react-icons/md';
import { Reveal } from '../../shared/Reveal';
import { useDispatch } from 'react-redux';
import {
  openPowerConsole,
  closePowerConsole,
  openSponsorForm,
} from '../../features/layout/layoutSlice';
import { useSelector } from 'react-redux';
import { PowerIcon } from '@heroicons/react/24/solid';

import ScrollingTestimonials from '../../shared/ScrollingTestimonial';
import HeaderPadding from '../../shared/HeaderPadding';
import SpeakersMain from '../../components/home/SpeakersMain';
import SponsorsMain from '../../components/home/sponsors/SponsorsMain';
import RibbonLogos from '../../shared/RibbonLogos';
import PingIcon from '../../shared/PingIcon';
import NewSpeakersMain from '../../components/home/NewSpeakersMain';
import NewSponsorsMain from '../../components/home/NewSponsorsMain';
import VideoPlayer from '../../shared/VideoPlayer';

const Page = ({ homepageData, speakers, testimonials }) => {
  const dispatch = useDispatch();
  const { powerOpen } = useSelector((state) => state.layout);
  const router = useRouter();
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className='w-full h-full'>
      <div className='w-full px-5 xl:px-0 grid gap-16 lg:gap-12 lg:grid-cols-2 pt-10 md:pt-20 lg:pt-10 pb-6 max-w-7xl mx-auto relative overflow-hidden'>
        <div className='flex flex-col justify-between'>
          <div className='flex flex-col gap-6 max-w-xl md:mx-auto'>
            <div>
              <Reveal delay={0} bgColor={'white'}>
                <h1 className='font-medium text-5xl xl:text-6xl tracking-tight font-oswald uppercase'>
                  The premier open forum for{' '}
                  <span className='text-ap-darkblue'>
                    Automotive Packaging Professionals
                  </span>
                </h1>
              </Reveal>
            </div>
            <Reveal delay={0.25} bgColor={'white'}>
              <div className='text-lg xl:text-xl'>
                Discover cutting-edge solutions at the Automotive Packaging
                Summit, where industry veterans and packaging experts unite to
                tackle the unique challenges in OEM and Tier1 part supplier
                logistics.
              </div>
            </Reveal>
            <motion.button
              className='bg-ap-yellow w-fit text-white text-base md:text-lg font-medium px-8 py-2 shadow-[3px_3px_0_black] hover:shadow-[1px_1px_0_black] hover:translate-x-[3px] hover:translate-y-[3px] transition-all'
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ delay: 0.45, ease: 'easeIn', duration: 0.5 }}
            >
              Registration Opens Soon!
            </motion.button>
          </div>
          <Reveal delay={0.55} bgColor={'white'}>
            <div className='flex flex-col lg:flex-row gap-3 pt-12 lg:pt-0 max-w-xl md:mx-auto w-full'>
              <div className='text-5xl font-medium text-ap-blue font-oswald tracking-tight'>
                OCT 21-23, 2024
              </div>
              <div className='flex gap-2 lg:flex-col lg:gap-0 font-medium'>
                <div>Hyatt Regency</div>
                <div>Greenville, SC</div>
              </div>
            </div>
          </Reveal>
        </div>

        <motion.div className='w-full flex justify-center items-center md:mt-10 lg:mt-0'>
          <motion.div className='grid grid-cols-2 md:grid-cols-3 overflow-hidden gap-3 w-full h-full'>
            <motion.div
              className='aspect-square rounded-full'
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ delay: 1.6, ease: 'easeInOut', duration: 0.75 }}
              onClick={() =>
                dispatch(powerOpen ? closePowerConsole() : openPowerConsole())
              }
            >
              <PingIcon />
            </motion.div>
            <motion.div
              className='bg-neutral-600 aspect-square rounded-full bg-cover bg-center'
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ delay: 1.4, ease: 'easeInOut', duration: 0.75 }}
              style={{
                backgroundImage: `url('https://packschool.s3.amazonaws.com/circle.png')`,
              }}
            ></motion.div>
            <motion.div
              className='bg-neutral-600 aspect-square rounded-bl-[50%] bg-cover bg-center'
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ delay: 1.2, ease: 'easeInOut', duration: 0.75 }}
              style={{
                backgroundImage: `url('https://packschool.s3.amazonaws.com/tour.png')`,
              }}
            ></motion.div>
            <motion.div
              className='border-black border-dashed border-4 aspect-square rounded-bl-[50%] flex flex-col gap-0.5 justify-center items-center'
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ delay: 1, ease: 'easeInOut', duration: 0.75 }}
            >
              <motion.div className='text-4xl text-ap-blue font-oswald font-medium tracking-tighter -mt-5'>
                500+
              </motion.div>
              <motion.div className='font-bold text-center leading-tight'>
                Industry
                <br /> Professionals
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, ease: 'easeInOut', duration: 0.75 }}
              className='bg-neutral-600 aspect-square rounded-tr-[50%] bg-cover bg-center'
              style={{
                backgroundImage: `url('https://packschool.s3.amazonaws.com/group-2.png')`,
              }}
            ></motion.div>
            <motion.div
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ delay: 0.6, ease: 'easeInOut', duration: 0.75 }}
              className='bg-neutral-600 aspect-square rounded-full bg-cover bg-center'
              style={{
                backgroundImage: `url('https://packschool.s3.amazonaws.com/crowd.png')`,
              }}
            ></motion.div>
            <motion.div
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ delay: 0.4, ease: 'easeInOut', duration: 0.75 }}
              className='bg-neutral-600 aspect-square rounded-tl-[50%] bg-center bg-cover'
              style={{
                backgroundImage: `url('https://packschool.s3.amazonaws.com/group.png')`,
              }}
            ></motion.div>
            <motion.div
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ delay: 0.2, ease: 'easeInOut', duration: 0.75 }}
              className='bg-neutral-600 aspect-square rounded-bl-[50%] bg-cover bg-center'
              style={{
                backgroundImage: `url('https://packschool.s3.amazonaws.com/social.png')`,
              }}
            ></motion.div>
            <motion.div
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{
                delay: 0,
                ease: 'easeInOut',
                ease: 'easeInOut',
                duration: 0.75,
              }}
              className='bg-neutral-600 aspect-square rounded-2xl bg-center bg-cover'
              style={{
                backgroundImage: `url('https://packschool.s3.amazonaws.com/bl.png')`,
              }}
            ></motion.div>
          </motion.div>
        </motion.div>
      </div>
      <RibbonLogos />
      <div className='w-full grid px-5 xl:px-0 lg:grid-cols-2 gap-6 md:max-w-xl lg:max-w-7xl mx-auto pt-16 pb-20 h-full overflow-hidden '>
        <div className='w-full h-full rounded-2xl bg-amber-400 xl:aspect-square'>
          <div className='p-9 flex-1 h-full flex flex-col justify-between gap-12 xl:gap-0'>
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
            className='w-full rounded-2xl md:aspect-video lg:aspect-auto bg-neutral-200 bg-cover bg-center flex items-center justify-center relative overflow-hidden'
            style={{
              backgroundImage: `url('https://packschool.s3.amazonaws.com/recap.png')`,
            }}
          >
            {isPlaying ? (
              <div className='w-full h-full bg-black'>
                <VideoPlayer
                  videoEmbedLink={
                    'https://www.youtube.com/embed/6xNwXZt3Wa8?si=ibW3QcLncKjXbp9x'
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
              <div className='absolute bottom-4 left-4 w-fit px-4 py-2 rounded-2xl shadow-xl bg-black/40 backdrop-blur text-white font-oswald font-medium uppercase'>
                2023 Highlights
              </div>
            )}
          </div>
          <div className='grid grid-cols-2 gap-6 w-full h-full overflow-hidden'>
            <div
              className='w-full h-full bg-white border-4 border-black rounded-2xl relative flex items-center bg-cover bg-center'
              style={{
                backgroundImage: `url('https://packschool.s3.amazonaws.com/gallant-2.png')`,
              }}
            >
              <div className='absolute bottom-4 left-4 w-fit px-4 py-2 rounded-2xl shadow-xl bg-black/40 backdrop-blur text-white font-oswald font-medium uppercase'>
                What Makes APS Unique?
              </div>
            </div>
            <div className='w-full h-full bg-neutral-300 rounded-2xl'>
              <div className='flex flex-col justify-between p-4 lg:p-6 h-full gap-3 lg:gap-0'>
                <div className='flex gap-2 items-center'>
                  <div>
                    <PowerIcon className='w-6 h-6 lg:w-10 lg:h-10 stroke-neutral-900' />
                  </div>
                  <div className='font-medium font-oswald uppercase text-2xl lg:text-4xl tracking-tight text-neutral-900'>
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
                    <div className='font-bold text-neutral-900 lg:text-lg'>
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
                    <div className='font-bold text-neutral-900 lg:text-lg'>
                      I'd like to Sponsor
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ScrollingTestimonials
        testimonials={testimonials.listTestimonials.items}
      />
      <div className='py-24 mt-12 md:mt-0 max-w-7xl mx-auto w-full'>
        <NewSpeakersMain
          headline={homepageData[0].speakersHeadline}
          subheadline={homepageData[0].speakersSubheadline}
          text={homepageData[0].speakersBodyContent}
          speakers={speakers}
        />
      </div>
      <div className='lg:py-24 md:max-w-lg lg:max-w-7xl mx-auto w-full'>
        <NewSponsorsMain sponsors={homepageData[0].sponsorList} />
      </div>
    </div>
  );
};

export default Page;

const client = createClient({
  projectId: 'h72r2zbr',
  dataset: 'aps',
  apiVersion: '2022-11-20',
  useCdn: true,
});

export async function getStaticProps() {
  const homepageData = await client.fetch(`*[_type == "homepage"]{
    ..., speakers[]->, "sponsorList": *[_type == "sponsor"]{
      logo { asset-> { url }}, name, teir, website
    }
  }`);

  const speakers = await client.fetch(`*[_type == "speaker"] {
    ..., companyLogo { asset-> {url}}, profilePic { asset-> {url}}, speakerSessions[]->{ name, location, session_start, session_end, date, linkedin}
  }`);

  const testimonialsData = await API.graphql({
    query: listTestimonials,
    variables: { filter: { tags: { contains: 'APS' } } },
  });
  const testimonials = testimonialsData.data;

  return {
    props: {
      homepageData,
      speakers,
      testimonials,
    },
  };
}
