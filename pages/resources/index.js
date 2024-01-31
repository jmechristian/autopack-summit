import React from 'react';
import { createClient } from 'next-sanity';
import { motion } from 'framer-motion';
import AdvisoryBoard from '../../components/resources/AdvisoryBoard';
import HeaderPadding from '../../shared/HeaderPadding';
import {
  AcademicCapIcon,
  MapIcon,
  MicrophoneIcon,
  QueueListIcon,
  Cog6ToothIcon,
  ComputerDesktopIcon,
  ArrowUpRightIcon,
} from '@heroicons/react/24/outline';
import { resourceBlockClickHandler } from '../../util/tracking';
import Head from 'next/head';
import BrutalistButton from '../../shared/BrutalistButton';
import CourseCarousel from '../../shared/CourseCarousel';
import { SwipableCourseCarousel } from '../../shared/SwipableCourseCarousel';

const actions = [
  {
    title: 'North American OEM Map',
    href: 'https://apsmedia.s3.amazonaws.com/documents/APC_Map2_changeTitleaddfourDots-1024x919.jpeg',
    icon: MapIcon,
    desc: 'North American Automotive OEMs from Canada, United States, and Mexico.',
    iconForeground: 'text-green-700',
    iconBackground: 'bg-green-50',
  },
  {
    title: 'European Interactive Map',
    href: 'https://www.acea.auto/figure/interactive-map-automobile-assembly-and-production-plants-in-europe/',
    icon: MapIcon,
    desc: 'Automobile assembly and production plants in Europe.',
    iconForeground: 'text-green-700',
    iconBackground: 'bg-green-50',
  },
  {
    title: 'NPR Interview',
    href: 'https://apsmedia.s3.amazonaws.com/audio/AndrewNPRautopack.mp3',
    icon: MicrophoneIcon,
    desc: 'Dr. Hurley on South Carolina Business Review. Track aired on August 3rd, 2022.',
    iconForeground: 'text-red-700',
    iconBackground: 'bg-red-50',
  },
  {
    title: 'Suppliers Info Form',
    href: 'resources/suppliers',
    desc: 'Fill out the form below to have your company details presented to OEMs & Tier 1 buyers.',
    icon: QueueListIcon,
    iconForeground: 'text-yellow-700',
    iconBackground: 'bg-yellow-50',
  },
  {
    title: 'Free Automotive Resources',
    href: 'https://packagingschool.com/automotive-resources/',
    desc: '100+ Free Resources from the Packaging School.',
    icon: Cog6ToothIcon,
    iconForeground: 'text-blue-700',
    iconBackground: 'bg-blue-50',
  },
  {
    title: '2022 Press Release',
    href: 'https://apsmedia.s3.amazonaws.com/documents/APS-Press-Release.pdf',
    desc: 'The 2022 AutoPack Summit Sold Out for the 7th Year in a row.',
    icon: AcademicCapIcon,
    iconForeground: 'text-orange-700',
    iconBackground: 'bg-orange-50',
  },
  // {
  //   title: 'Past Presentations',
  //   href: 'https://apsmedia.s3.amazonaws.com/documents/APS-Press-Release.pdf',
  //   desc: 'Explore expert-driven content from previous Automotive Packaging Summits.',
  //   icon: ComputerDesktopIcon,
  //   iconForeground: 'text-green-700',
  //   iconBackground: 'bg-green-50',
  // },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Page = ({ resourceData }) => {
  return (
    <>
      <Head>
        <title>Automotive Packaging Summit | Suppliers</title>
        <meta
          property='og:title'
          content='Automotive Packaging Summit | Suppliers'
        />
      </Head>
      <div className='flex flex-col max-w-7xl md:max-w-2xl lg:max-w-6xl xl:max-w-7xl mx-auto pt-6 pb-10 gap-5 md:gap-6 px-5 xl:px-0'>
        <div className='w-full mb-4 rounded-2xl border-neutral-900 border-4 p-9 flex flex-col lg:flex-row gap-4 md:justify-between bg-white shadow-[12px_16px_0_black] lg:pt-24 lg:pb-12'>
          <div className='font-medium font-oswald text-5xl lg:text-6xl xl:text-7xl uppercase'>
            Resources
          </div>
          <div className='w-full max-w-sm leading-snug'>
            Take advatage of industry-leading resources to take your automotive
            packaging knowledge to the next level.
          </div>
        </div>
        <div className='w-full h-full grid lg:grid-cols-12 gap-6'>
          <div className='lg:col-span-4 w-full rounded-2xl border-2 bg-ap-darkblue border-neutral-900 h-full shadow-[4px_6px_0_black]'>
            <div className='w-full h-full p-7 lg:p-10'>
              <div className='flex flex-col justify-center gap-6 h-full'>
                <div className='flex flex-col gap-3 text-center'>
                  <div className='font-medium uppercase text-amber-400 text-3xl font-oswald leading-none'>
                    Automotive Packaging Certificate
                  </div>
                  <div className='text-white leading-tight'>
                    The first and only 100% online academic program that will
                    enable you to develop the professional skill set you need to
                    be successful in the automotive packaging field.
                  </div>
                </div>
                <div
                  className='w-[225px] h-[275px] mx-auto bg-white bg-center bg-cover rounded border-2 border-black'
                  style={{
                    backgroundImage: `url(
                      'https://packschool.s3.amazonaws.com/aps-superheros-sm.png'
                    )`,
                  }}
                >
                  Image
                </div>
                <div>
                  <BrutalistButton
                    bgColor={'bg-white'}
                    text={'Enroll Now!'}
                    textColor={'text-black'}
                    onClick={() => window.open('', '_blank')}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className='lg:col-span-8 h-full w-full flex flex-col gap-6 overflow-hidden'>
            <div className='w-full rounded-2xl bg-amber-100 h-full border-2 border-black'>
              <CourseCarousel />
            </div>
            <div className='w-full rounded-2xl bg-amber-300 border-2 border-black'>
              <div className='w-full px-5 lg:px-10 py-5 lg:py-7 flex flex-col gap-4'>
                <div className='text-black font-bold uppercase font-oswald text-xl md:text-2xl'>
                  Industry Resources
                </div>
                <div className='grid xl:grid-cols-2 gap-2 rounded overflow-hidden'>
                  {actions.map((act) => (
                    <div
                      className='bg-white hover:bg-amber-100 transition-colors ease-in cursor-pointer w-full lg:h-16 xl:h-20 border-2 border-black rounded-xl py-2 lg:py-0'
                      key={act.href}
                      onClick={() => window.open(act.href, '_blank')}
                    >
                      <div className='flex flex-col lg:flex-row justify-between items-center w-full h-full'>
                        <div className='flex w-full h-full'>
                          <div className='w-20 flex justify-center items-center'>
                            <act.icon className='w-8 h-8' />
                          </div>
                          <div className='flex flex-col justify-center w-full border-r border-r-neutral-600'>
                            <div className='font-bold text-sm'>{act.title}</div>
                            <div className='text-xs'>{act.desc}</div>
                          </div>
                          <div className='hidden lg:flex lg:w-20 justify-center items-center'>
                            <ArrowUpRightIcon className='w-8 h-8' />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <AdvisoryBoard
          advisors={resourceData}
          headline={'Board Members'}
          subheadline={'AutoPack Summit 2024'}
        />
      </div>
    </>
  );
};

const client = createClient({
  projectId: 'h72r2zbr',
  dataset: 'aps',
  apiVersion: '2022-11-20',
  useCdn: true,
});

export async function getStaticProps() {
  const resourceData = await client.fetch(
    `*[_type == "advisory_board"] | order(name asc)`
  );

  return {
    props: {
      resourceData,
    },
    revalidate: 10,
  };
}

export default Page;
