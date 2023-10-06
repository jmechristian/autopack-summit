import React, { useState } from 'react';
import HeaderPadding from '../shared/HeaderPadding';
import { BoltIcon, LockClosedIcon } from '@heroicons/react/24/outline/';
import PresentationBlock from '../shared/PresentationBlock';

const presentations = [
  {
    backgroundColor: 'bg-ap-yellow/80',
    title: 'Tactical approaches for Optimizing Returnability',
    speakers: [
      {
        name: 'Nate Franck',
        company: 'TriEnda',
        title: 'Vice President of Sales',
      },
      {
        name: 'David Krueger',
        company: 'TriEnda',
        title: 'President',
      },
    ],
    description:
      "Underestimate Tauriel servant pierce tower pulled shells rotten breach weren't. ",
  },
  {
    backgroundColor: 'bg-ap-darkblue/70',
    title: 'Powering the future: Driving Towards a Circular Economy',
    speakers: [
      {
        name: 'Bridget Grewal',
        company: 'Magna',
        title: 'Director of Packaging Continuous Improvement',
      },
      {
        name: 'Linda Balwinski',
        company: 'Primex Plastics',
        title: 'Regional Manager',
      },
      {
        name: 'Camille Chism',
        company: 'TrueFleet, LLC',
        title: 'CEO',
      },
    ],
    description:
      "Underestimate Tauriel servant pierce tower pulled shells rotten breach weren't. ",
  },
  {
    backgroundColor: 'bg-ap-red/70',
    title: 'Introduction to High Complexity Parts',
    speakers: [
      {
        name: 'Dr. Andrew Hurley',
        company: 'Packaging School',
        title: 'Founder',
      },
    ],
    description:
      "Underestimate Tauriel servant pierce tower pulled shells rotten breach weren't. ",
  },
  {
    backgroundColor: 'bg-ap-blue/60',
    title: 'Bumper to Bumper Complexities from Production through Assembly',
    speakers: [
      {
        name: 'Brad Meredith',
        company: 'BMW',
        title: 'Packaging Planning Specialist',
      },
      {
        name: 'Ashley Barnes',
        company: 'Plastic Omnium',
        title: 'Program Packaging Engineer',
      },
    ],
    description:
      "Underestimate Tauriel servant pierce tower pulled shells rotten breach weren't. ",
  },
  {
    backgroundColor: 'bg-ap-yellow/80',
    title:
      'Aftermarket Design: Eliminate waste, Reduce Cost, and Improve Process Efficiency',
    speakers: [
      {
        name: 'Patrick Graham',
        company: 'Magna',
        title: 'Account Manager',
      },
      {
        name: 'Ashley Barnes',
        company: 'Plastic Omnium',
        title: 'Program Packaging Engineer',
      },
    ],
    description:
      "Underestimate Tauriel servant pierce tower pulled shells rotten breach weren't. ",
  },
  {
    backgroundColor: 'bg-ap-darkblue/80',
    title:
      'Leveraging Localization: Techniques for Tracking Assets Indoors and Out',
    speakers: [
      {
        name: 'Thomas Strain',
        company: 'Surgere',
        title: 'Vice President, Technology and Product Management',
      },
    ],
    description:
      "Underestimate Tauriel servant pierce tower pulled shells rotten breach weren't. ",
  },
  {
    backgroundColor: 'bg-ap-red/70',
    title:
      'Cross functional Seating Case Study: How a Volvo whiteboard sketch drove a successful design competition',
    speakers: [
      {
        name: 'Jody Owens',
        company: 'C-P-S Automotive LP',
        title: 'CEO',
      },
      {
        name: 'Tim Kinross',
        company: 'Lear Corporation',
        title: 'Engineering Director',
      },
    ],
    description:
      "Underestimate Tauriel servant pierce tower pulled shells rotten breach weren't. ",
  },
  {
    backgroundColor: 'bg-ap-blue/60',
    title:
      'EV Battery Packaging - Achieving Resilience for the Battery Supply Chain',
    speakers: [
      {
        name: 'Mike Pagel',
        company: 'HazMat Safety Consulting',
        title: 'Senior Consultant',
      },
    ],
    description:
      "Underestimate Tauriel servant pierce tower pulled shells rotten breach weren't. ",
  },
  {
    backgroundColor: 'bg-ap-yellow/80',
    title:
      'Technology Solutions: How to choose the correct Sensor Technology for Automotive Asset Tracking',
    speakers: [
      {
        name: 'Bridget Grewal',
        company: 'Magna',
        title: 'Director of Packaging Continuous Improvement',
      },
    ],
    description:
      "Underestimate Tauriel servant pierce tower pulled shells rotten breach weren't. ",
  },
];

const Page = () => {
  const [toHover, setToHover] = useState(false);
  return (
    <div className='w-full h-full flex flex-col pb-16'>
      <HeaderPadding />

      <div className='w-full max-w-7xl mx-auto px-6 lg:px-0 pb-12 pt-12'>
        <div className='w-full h-full border-2 border-neutral-900 bg-neutral-900 flex flex-col p-0.5 gap-1 '>
          <div className='w-full  bg-neutral-800 rounded-t-lg'>
            <div className='w-full flex justify-between items-center px-12 py-4'>
              <div className='font-oswald uppercase text-white text-2xl tracking-wide'>
                <span className='text-ap-yellow'>
                  Autopack Summit Presentations
                </span>{' '}
                / 2023
              </div>
              <div
                className={`cursor-pointer bg-gradient-to-r gap-2 from-ap-darkblue to-ap-yellow w-fit py-2 px-6 rounded-lg flex items-center`}
              >
                <div>
                  <LockClosedIcon className='w-5 h-5 stroke-white' />
                </div>
                <div className='text-white font-semibold'>Unlock All</div>
              </div>
            </div>
          </div>
          <div
            className='w-full aspect-square md:h-[500px] bg-neutral-100 rounded-b-xl bg-cover bg-right relative'
            style={{
              backgroundImage:
                'url("https://packschool.s3.amazonaws.com/demo-header.png")',
            }}
            onMouseEnter={() => setToHover(true)}
            onMouseLeave={() => setToHover(false)}
          >
            <div
              className={`${
                toHover
                  ? 'scale-115 transition-all ease-in shadow-xl bg-white'
                  : ' shadow-lg'
              } cursor-pointer bg-gradient-to-r mt-4 gap-2 from-ap-darkblue to-ap-blue py-3 px-6 rounded-full h-12 w-12 flex justify-center items-center absolute -top-1 right-3 z-20`}
            >
              <div className={`${toHover ? 'scale-115' : ''}`}>
                <LockClosedIcon className='w-6 h-6 stroke-white' />
              </div>
            </div>
            <div className='max-w-5xl mx-auto flex flex-1 flex-col gap-4 w-full h-full justify-end lg:justify-center p-6 lg:p-0 relative'>
              <div className='flex items-center gap-1  py-2 px-3 bg-ap-yellow w-fit rounded'>
                <div>
                  <BoltIcon className='w-5 h-5 stroke-white' />
                </div>
                <div className='text-sm text-white font-bold rounded-lg'>
                  KEYNOTE
                </div>
              </div>
              <div className='text-white max-w-xl text-4xl lg:text-5xl font-oswald font-bold leading-none'>
                GM’s 2030 Packaging Sustainability Roadmap
              </div>
              <div className='max-w-xl text-white'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                quis nisl vehicula, laoreet nisi et, condimentum quam. Donec
                suscipit arcu iaculis, tristique lacus lacinia, facilisis purus.
              </div>
              <div className='flex flex-col'>
                <div className='font-bold text-lg text-black'>
                  Jeremy Galanty
                </div>
                <div className=' text-white italic'>
                  Sustainability Analyst, GM Motors
                </div>
              </div>
            </div>
          </div>
          <div className='w-full h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 rounded-xl gap-1'>
            {presentations.map((pres, i) => (
              <PresentationBlock
                key={pres.title}
                backgroundColor={pres.backgroundColor}
                title={pres.title}
                speakers={pres.speakers}
                description={pres.description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
