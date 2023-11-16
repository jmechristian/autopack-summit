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
} from '@heroicons/react/24/outline';
import { resourceBlockClickHandler } from '../../util/tracking';
import Head from 'next/head';

const actions = [
  {
    title: 'Automotive Packaging Certificate',
    href: 'https://packagingschool.com/get-to-know-apc/?utm_source=autoPack&utm_medium=website&utm_campaign=autoPack_summit',
    desc: 'The first and only 100% online academic program that will enable you to develop the professional skill set you need to be successful in the automotive packaging field.',
    icon: AcademicCapIcon,
    iconForeground: 'text-blue-700',
    iconBackground: 'bg-blue-50',
  },
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
    desc: 'Our very own Dr. Hurley gave a shoutout on the South Carolina Business Review. Track aired on August 3rd, 2022.',
    iconForeground: 'text-red-700',
    iconBackground: 'bg-red-50',
  },
  {
    title: 'Suppliers Info Form',
    href: 'resources/suppliers',
    desc: 'We’re building a database of all packaging suppliers. Fill out the form below to have your company details presented to OEMs & Tier 1 buyers.',
    icon: QueueListIcon,
    iconForeground: 'text-yellow-700',
    iconBackground: 'bg-yellow-50',
  },
  {
    title: 'Free Automotive Resources',
    href: 'https://packagingschool.com/automotive-resources/',
    desc: '100+ Free Resources from the Packaging School to level up your autmotive packaging IQ.',
    icon: Cog6ToothIcon,
    iconForeground: 'text-blue-700',
    iconBackground: 'bg-blue-50',
  },
  {
    title: '2022 Press Release',
    href: 'https://apsmedia.s3.amazonaws.com/documents/APS-Press-Release.pdf',
    desc: 'The 2022 AutoPack Summit Sold Out for the 7th Year in a Row, The event received high marks from OEMs, Tier 1 Suppliers, and Packaging Solution Providers',
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

const resources = ({ resourceData }) => {
  return (
    <>
      <Head>
        <title>Automotive Packaging Summit | Suppliers</title>
        <meta
          property='og:title'
          content='Automotive Packaging Summit | Suppliers'
        />
      </Head>
      <HeaderPadding />
      <div className='flex flex-col items-center my-8'>
        <motion.div className='blue_subheadline text-xl md:text-xl xl:text-2xl'>
          Industry
        </motion.div>
        <motion.div className='yellow_headline text-4xl md:text-5xl xl:text-6xl xl:text-center'>
          Resources
        </motion.div>
      </div>
      <div className='w-full h-full xl:max-w-6xl xl:mx-auto divide-y bg-gray-200 divide-gray-200 overflow-hidden rounded-lg shadow sm:grid sm:grid-cols-2 sm:gap-px sm:divide-y-0 mb-12'>
        {actions.map((action, actionIdx) => (
          <div
            onClick={() => resourceBlockClickHandler(action.title)}
            key={action.title}
            className={classNames(
              actionIdx === 0
                ? 'rounded-tl-lg rounded-tr-lg sm:rounded-tr-none'
                : '',
              actionIdx === 1 ? 'sm:rounded-tr-lg' : '',
              actionIdx === actions.length - 2 ? 'sm:rounded-bl-lg' : '',
              actionIdx === actions.length - 1
                ? 'rounded-bl-lg rounded-br-lg sm:rounded-bl-none'
                : '',
              'relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500'
            )}
          >
            <div>
              <span
                className={classNames(
                  action.iconBackground,
                  action.iconForeground,
                  'rounded-lg inline-flex p-3 ring-4 ring-white'
                )}
              >
                <action.icon className='h-6 w-6' aria-hidden='true' />
              </span>
            </div>
            <div className='mt-8'>
              <h3 className='text-lg font-medium'>
                <a href={action.href} className='focus:outline-none'>
                  {/* Extend touch target to entire panel */}
                  <span className='absolute inset-0' aria-hidden='true' />
                  {action.title}
                </a>
              </h3>
              <p className='mt-2 text-sm text-gray-500'>{action.desc}</p>
            </div>
            <span
              className='pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-gray-400'
              aria-hidden='true'
            >
              <svg
                className='h-6 w-6'
                xmlns='http://www.w3.org/2000/svg'
                fill='currentColor'
                viewBox='0 0 24 24'
              >
                <path d='M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z' />
              </svg>
            </span>
          </div>
        ))}
      </div>
      {/* <AdvisoryBoard
        advisors={resourceData}
        headline={'Board Members'}
        subheadline={'AutoPack Summit 2023'}
      /> */}
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
  };
}

export default resources;
