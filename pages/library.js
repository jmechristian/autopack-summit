import React, { useState } from 'react';
import HeaderPadding from '../shared/HeaderPadding';
import {
  ArrowRightIcon,
  BoltIcon,
  LockClosedIcon,
  LockOpenIcon,
} from '@heroicons/react/24/outline/';
import PresentationBlock from '../shared/PresentationBlock';
import Logo from '../shared/Logo';
import { ArrowLeftCircleIcon } from '@heroicons/react/24/solid';
import VideoPlayer from '../shared/VideoPlayer';

const presentations = [
  {
    backgroundColor: 'bg-ap-yellow/70',
    backgroundImage: 'https://packschool.s3.amazonaws.com/trienda-aps-2.png',
    title: 'Tactical approaches for Optimizing Returnability',
    video:
      'https://player.vimeo.com/video/893772942?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
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
    backgroundColor: 'bg-ap-darkblue/60',
    title: 'Powering the future: Driving Towards a Circular Economy',
    backgroundImage: 'https://packschool.s3.amazonaws.com/campfire-2.png',
    video:
      'https://player.vimeo.com/video/893845442?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
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
    backgroundColor: 'bg-ap-red/60',
    title: 'Bumper to Bumper Complexities from Production through Assembly',
    backgroundImage: 'https://packschool.s3.amazonaws.com/barnes.png',
    video:
      'https://player.vimeo.com/video/892652116?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
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
    backgroundColor: 'bg-ap-blue/60',
    title:
      'Aftermarket Design: Eliminate waste, Reduce Cost, and Improve Process Efficiency',
    backgroundImage: 'https://packschool.s3.amazonaws.com/patrick-aps.png',
    video:
      'https://player.vimeo.com/video/893484299?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
    speakers: [
      {
        name: 'Patrick Graham',
        company: 'Magna',
        title: 'Account Manager',
      },
    ],
    description:
      "Underestimate Tauriel servant pierce tower pulled shells rotten breach weren't. ",
  },
  {
    backgroundColor: 'bg-ap-red/70',
    title:
      'Cross functional Seating Case Study: How a Volvo whiteboard sketch drove a successful design competition',
    backgroundImage: 'https://packschool.s3.amazonaws.com/jody-aps.png',
    video:
      'https://player.vimeo.com/video/894197500?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
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
    backgroundColor: 'bg-ap-yellow/70',
    title:
      'EV Battery Packaging - Achieving Resilience for the Battery Supply Chain',
    backgroundImage: 'https://packschool.s3.amazonaws.com/mike-aps-2.png',
    video:
      'https://player.vimeo.com/video/895829382?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
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
    backgroundColor: 'bg-ap-darkblue/70',
    title:
      'Technology Solutions: How to choose the correct Sensor Technology for Automotive Asset Tracking',
    backgroundImage: 'https://packschool.s3.amazonaws.com/bridge-aps.png',
    video:
      'https://player.vimeo.com/video/894117116?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
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
  const [isLocked, setIsLocked] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [isPassword, setIsPassword] = useState('');
  const [isUnlocking, setIsUnlocking] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSelectedVid, setIsSelectedVid] = useState('');

  const clickHandler = (vid) => {
    if (!isLocked) {
      setIsSelectedVid(vid);
      setIsOpen(true);
    }
  };

  const validatePasswordHandler = () => {
    if (isPassword.toLowerCase() === 'packpresentations23') {
      setIsPassword('');
      setIsUnlocking(false);
      setIsLocked(false);
    } else {
      setIsPassword('Invalid Password!');
    }
  };

  const unlockHandler = () => {
    setIsUnlocking(!isUnlocking);
  };

  return (
    <div className='w-full h-full flex flex-col pb-16 relative'>
      <HeaderPadding />
      {isOpen && (
        <div className='fixed inset-0 bg-black/60 backdrop-blur-md z-[50] flex items-center justify-center'>
          <div className='w-full max-h-[100vh] max-w-2xl lg:max-w-7xl bg-ap-blue rounded-2xl pt-3  lg:px-6 pb-6 flex flex-col'>
            <div className='flex justify-between w-full h-full items-center pb-3 lg:pb-6 lg:pt-3 px-3'>
              <div className='lg:w-48 w-36'>
                <Logo />
              </div>
              <div
                className='bg-ap-yellow rounded-xl lg:text-lg md:px-3 md:py-2 cursor-pointer text-white font-bold flex items-center gap-1'
                onClick={() => setIsOpen(false)}
              >
                <div>
                  <ArrowLeftCircleIcon className='md:w-5 md:h-5 w-7 h-7 fill-white' />
                </div>
                <div className='hidden md:block'>Back to Library</div>
              </div>
            </div>
            <div className='w-full h-auto aspect-video bg-ap-blue'>
              <VideoPlayer videoEmbedLink={isSelectedVid} />
            </div>
          </div>
        </div>
      )}
      <div className='w-full max-w-7xl mx-auto px-3 lg:px-0 pb-12 pt-12'>
        <div className='w-full h-full border-2 border-neutral-900 bg-neutral-900 flex flex-col p-0.5 gap-1 '>
          <div className='w-full  bg-neutral-800 rounded-t-lg'>
            <div className='w-full flex justify-between items-center px-6 md:px-12 py-4'>
              <div className='font-oswald uppercase text-white text-xl md:text-2xl tracking-wide'>
                <span className='text-ap-yellow'>
                  Autopack Summit Presentations
                </span>{' '}
                / 2023
              </div>
              <div className='flex gap-3 items-center h-full -mr-3 md:mr-0'>
                <div
                  className={`cursor-pointer bg-gradient-to-r gap-2 from-ap-darkblue to-ap-yellow w-fit p-4 rounded-full md:py-2 md:px-6 md:rounded-lg flex items-center`}
                  onClick={unlockHandler}
                >
                  <div className='w-5 h-5'>
                    {isLocked ? (
                      <LockClosedIcon className='w-5 h-5 stroke-white' />
                    ) : (
                      <LockOpenIcon className='w-5 h-5 stroke-white' />
                    )}
                  </div>
                  <div className='text-white font-semibold hidden md:block'>
                    {isLocked ? 'Unlock' : 'Unlocked!'}
                  </div>
                </div>
                {isLocked && isUnlocking && (
                  <div className='flex items-center h-full bg-ap-blue rounded-lg'>
                    <div>
                      <input
                        type='text'
                        placeholder='Enter Password'
                        className='text-neutral-600 placeholder:text-neutral-400 bg-neutral-300 rounded-l-lg border-0'
                        value={isPassword}
                        onChange={(e) => setIsPassword(e.target.value)}
                      />
                    </div>
                    <div
                      className='bg-ap-blue text-white px-3 py-2 h-full cursor-pointer rounded-lg'
                      onClick={validatePasswordHandler}
                    >
                      <div className='w-5 h-5 rounded-r-xl'>
                        <ArrowRightIcon className='w-5 h-5 stroke-white' />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* START CONTENT */}

          <div
            className='w-full rounded-b-xl relative bg-neutral-900 flex flex-col lg:flex-row items-center cursor-pointer'
            onClick={() =>
              clickHandler(
                'https://player.vimeo.com/video/891978699?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479'
              )
            }
          >
            <div
              className={`${
                toHover
                  ? 'scale-115 transition-all ease-in shadow-xl bg-white'
                  : ' shadow-lg'
              } cursor-pointer bg-gradient-to-r mt-4 gap-2 from-ap-darkblue to-ap-blue py-3 px-6 rounded-full h-12 w-12 flex justify-center items-center absolute -top-1 right-3 z-20`}
            >
              <div className={`${toHover ? 'scale-115' : ''}`}>
                {isLocked ? (
                  <LockClosedIcon className='w-5 h-5 stroke-white' />
                ) : (
                  <LockOpenIcon className='w-5 h-5 stroke-white' />
                )}
              </div>
            </div>
            <div className='max-w-5xl flex flex-col mx-auto gap-4 w-fit h-full justify-end lg:justify-center p-6 md:py-12 lg:p-0 relative'>
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
              <div className='flex flex-col'>
                <div className='font-bold text-lg text-ap-blue'>
                  Jeremy Galanty
                </div>
                <div className=' text-white italic'>
                  Sustainability Analyst, GM Motors
                </div>
              </div>
            </div>
            <div
              className='aspect-square w-full lg:aspect-auto lg:h-[400px] lg:w-[400px] rounded-xl bg-white bg-contain bg-center'
              style={{
                backgroundImage: `url('https://packschool.s3.amazonaws.com/gallant-2.png')`,
              }}
            ></div>
          </div>

          <div className='w-full h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 rounded-xl gap-1'>
            {presentations.map((pres, i) => (
              <div key={pres.title} onClick={() => clickHandler(pres.video)}>
                <PresentationBlock
                  backgroundColor={pres.backgroundColor}
                  title={pres.title}
                  speakers={pres.speakers}
                  description={pres.description}
                  backgroundImage={pres.backgroundImage}
                  locked={isLocked}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
