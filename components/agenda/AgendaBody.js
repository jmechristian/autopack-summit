import React, { useState, useEffect } from 'react';
import AgendaItem from './AgendaItem';
import { useSelector } from 'react-redux';

import {
  InformationCircleIcon,
  ComputerDesktopIcon,
} from '@heroicons/react/24/outline';
import { useForm } from 'react-hook-form';
import TourOneForm from './TourOneForm';
import TourTwoForm from './TourTwoForm';

const AgendaBody = ({ sessions, tourists }) => {
  const { daySelected } = useSelector((state) => state.agenda);
  const [isForm1Open, setIsForm1Open] = useState(false);
  const [isForm2Open, setIsForm2Open] = useState(false);
  const [isTour1Count, setIsTour1Count] = useState(undefined);
  const [isTour2Count, setIsTour2Count] = useState(undefined);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    tourists && setIsTour1Count(tourists.filter((t) => t.tour === 'Tour 1'));
    tourists && setIsTour2Count(tourists.filter((t) => t.tour === 'Tour 2'));
  }, [tourists]);

  const setDay = () => {
    if (daySelected === '2023-10-11') {
      return 'Wednesday';
    } else if (daySelected === '2023-10-12') {
      return 'Thursday';
    } else if (daySelected === '2023-10-13') {
      return 'Friday';
    }
  };

  const setDate = () => {
    if (daySelected === '2023-10-11') {
      return 'OCt 11, 2023';
    } else if (daySelected === '2023-10-12') {
      return 'OCt 12, 2023';
    } else if (daySelected === '2023-10-13') {
      return 'OCt 13, 2023';
    }
  };

  return (
    <div className='mx-auto max-w-7xl py-12 md:py-20 lg:py-24 px-4 lg:px-16'>
      <div className='flex flex-col md:flex-row gap-2 py-3 bg-ap-darkblue md:w-max px-6 mb-6'>
        <div className='uppercase font-medium font-oswald text-4xl text-white'>
          {setDay()}
        </div>
        <div className='uppercase text-2xl text-ap-yellow font-oswald md:text-4xl'>
          /{setDate()}
        </div>
      </div>
      <div className='flex flex-col justify-center gap-12 pb-6'>
        <div className='pb-6'>
          {sessions
            .filter((item) => item.date === daySelected)
            .map((s, i) => (
              <div key={s._id} className='flex flex-col h-full'>
                <AgendaItem
                  type={s.type}
                  title={s.name}
                  startTime={s.session_start}
                  endTime={s.session_end}
                  location={s.location}
                  speakers={s.speakers}
                  sponsors={s.sponsors}
                />
              </div>
            ))}
          <div className='scroll-mt-16' id='tours' />
          {daySelected === '2023-10-13' && (
            <div className='flex flex-col gap-6 mt-16 mb-6 scroll-mt-12'>
              <div className='flex justify-between items-center'>
                <div className='font-oswald text-3xl tracking-tight px-5 md:px-10 text-slate-400'>
                  10:00 AM Tours
                </div>
                <div className='text-sm text-gray-500'>
                  *Tour registrations are limited to one tour per attendee.
                </div>
              </div>
              {/* TOUR 1 */}
              <div className='w-full bg-indigo-100 rounded-lg flex flex-col md:grid md:grid-cols-8 gap-3 h-full'>
                <div className='md:col-span-6'>
                  <div className='flex gap-4 items-center flex-col md:flex-row'>
                    <div className='p-6'>
                      <div
                        className='aspect-[4/3] w-80 bg-cover bg-center rounded-lg'
                        style={{
                          backgroundImage: `url("https://apsmedia.s3.amazonaws.com/images/tour1.webp")`,
                        }}
                      ></div>
                    </div>
                    <div className='flex flex-col gap-3 p-6'>
                      <div className='flex flex-col gap-2'>
                        <div className='bg-indigo-500 text-white w-fit px-2 py-1 text-sm rounded-lg relative'>
                          Optional
                        </div>
                        <div className='text-3xl font-oswald'>
                          Tour #1{' '}
                          <span className='font-bold'>
                            Magna Drive Automotive
                          </span>
                        </div>
                        <div>120 Moon Acres Rd, Piedmont, SC 29673</div>
                        <div className='flex gap-1 mt-2'></div>
                        <div>Plan on 2 hours (10am-12pm)</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-span-2 bg-ap-blue rounded-lg flex items-center justify-center p-6 relative'>
                  {isForm1Open && (
                    <TourOneForm close={() => setIsForm1Open(false)} />
                  )}
                  <div className='flex flex-col gap-6 items-center'>
                    {isTour1Count && (
                      <div className='flex flex-col gap-2 items-center'>
                        <div className='text-5xl font-oswald font-bold text-white'>
                          0
                        </div>
                        <div className='text-white uppercase text-sm font-bold'>
                          Spots Remain
                        </div>
                      </div>
                    )}
                    {/* <div
                      className='px-6 py-2.5 cursor-pointer text-lg rounded-lg uppercase font-oswald bg-white/60 text-slate-900 font-medium'
                      onClick={() => setIsForm1Open(true)}
                    >
                      Save Your Spot
                    </div> */}
                  </div>
                </div>
              </div>
              {/* TOUR 2 */}
              <div className='w-full bg-indigo-100 rounded-lg flex flex-col md:grid md:grid-cols-8 gap-3 h-full'>
                <div className='md:col-span-6'>
                  <div className='flex gap-4 items-center flex-col md:flex-row'>
                    <div className='p-6'>
                      <div
                        className='aspect-[4/3] w-80 bg-cover bg-center rounded-lg'
                        style={{
                          backgroundImage: `url("https://apsmedia.s3.amazonaws.com/images/tour2.webp")`,
                        }}
                      ></div>
                    </div>
                    <div className='flex flex-col gap-2 w-full p-6'>
                      <div className='bg-indigo-500 text-white w-fit px-2 py-1 text-sm rounded-lg'>
                        Optional
                      </div>
                      <div className='text-3xl font-oswald'>
                        Tour #2 <span className='font-bold'>CU-ICAR</span>
                      </div>
                      <div>5 Research Dr, Greenville, SC 29607</div>
                      <div className='flex gap-1 mt-2'>
                        <div>
                          <ComputerDesktopIcon className='w-6 h-6 stroke-slate-900' />
                        </div>
                        <div className='font-bold'>
                          <a
                            className='font-bold'
                            href='https://cuicar.com/'
                            target='_blank'
                            rel='noreferrer'
                          >
                            cuicar.com
                          </a>
                        </div>
                      </div>
                      <div>Plan on 1 1/2 hours (10am-11:30am)</div>
                    </div>
                  </div>
                </div>
                <div className='col-span-2 bg-ap-blue rounded-lg flex justify-center items-center p-6 relative'>
                  {isForm2Open && (
                    <TourTwoForm close={() => setIsForm2Open(false)} />
                  )}
                  <div className='flex flex-col gap-6 items-center justify-center'>
                    {isTour2Count && (
                      <div className='flex flex-col gap-2 items-center'>
                        <div className='text-5xl font-oswald font-bold text-white'>
                          0
                        </div>
                        <div className='text-white uppercase text-sm font-bold'>
                          Spots Remain
                        </div>
                      </div>
                    )}
                    {/* <div
                      className='px-6 py-2.5 cursor-pointer text-lg rounded-lg uppercase font-oswald bg-white/60 text-slate-900 font-medium'
                      onClick={() => setIsForm2Open(true)}
                    >
                      Save Your Spot
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AgendaBody;
