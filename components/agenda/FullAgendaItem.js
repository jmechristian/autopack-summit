import React, { useState } from 'react';
import Image from 'next/image';
import { MinusCircleIcon, PlusCircleIcon } from '@heroicons/react/24/solid';
import { motion, AnimatePresence } from 'framer-motion';

const FullAgendaItem = ({
  title,
  startTime,
  endTime,
  speakers,
  location,
  description,
  sponsors,
  details,
  type,
}) => {
  const formatter = new Intl.DateTimeFormat('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    timeZone: 'America/New_York',
    hour12: true,
  });

  const start = startTime && formatter.format(new Date(startTime));
  const end = endTime && formatter.format(new Date(endTime));

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div
        className={`grid grid-cols-1 md:grid-cols-5 gap-8 xl:gap-16 h-full rounded-2xl  ${
          type === 'session'
            ? 'bg-ap-darkblue lg:min-h-[176px] pt-3 pr-2 lg:pt-2 lg:pr-3 border-4 border-ap-darkblue'
            : 'hover:bg-white pt-6 pb-9 lg:pt-3 lg:pb-3'
        }`}
      >
        <div
          className={`flex flex-col justify-center lg:grid lg:grid-cols-5 gap-1 lg:gap-8 xl:gap-12 col-span-8`}
        >
          <div
            className={`flex flex-col gap-6 lg:pl-6 py-3 lg:py-6 lg:border-r pr-8 md:border-r-slate-500 h-full w-full `}
          >
            <div
              className={`lg:col-span-1 font-oswald text-xl lg:text-2xl tracking-tight px-6 lg:px-0 ${
                type === 'session' ? 'text-white' : 'text-neutral-900'
              }`}
            >
              {startTime ? `${start} - ${end}` : 'TBD'}
            </div>
          </div>
          <div
            className={`flex flex-col gap-6 px-6 lg:px-0 ${
              !speakers ? 'lg:col-span-3' : 'lg:col-span-2'
            }`}
          >
            <div className='flex flex-col lg:mt-0 py-6'>
              <div
                className={`font-semibold text-lg lg:text-xl lg:leading-tight xl:text-2xl leading-tight ${
                  type === 'session' ? 'text-amber-400' : 'text-neutral-900'
                }`}
              >
                {title}
              </div>
              <div
                className={`${
                  type === 'session'
                    ? 'text-neutral-300 pb-5 lg:pb-0'
                    : 'text-neutral-600'
                }`}
              >
                {location}
              </div>
              <div
                className={`mt-5 pb-3 text-sm ${
                  type === 'session' ? 'text-white' : 'text-black'
                }`}
              >
                {!isOpen && description}
              </div>
              {details ? (
                <div className='flex flex-col gap-2'>
                  <div
                    className='flex items-center gap-1 pb-3 cursor-pointer'
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    <div>
                      {isOpen ? (
                        <MinusCircleIcon className='fill-ap-yellow w-5 h-5' />
                      ) : (
                        <PlusCircleIcon className='fill-ap-yellow w-5 h-5' />
                      )}
                    </div>
                    <div className='text-sm font-semibold text-white'>
                      View {isOpen ? 'Less' : 'More'}
                    </div>
                  </div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div className='flex flex-col gap-3 pb-3'>
                        {details.map((detail, i) => (
                          <motion.div
                            className={`text-white text-sm ${
                              detail.children[0].marks &&
                              detail.children[0].marks.includes('strong')
                                ? 'font-bold'
                                : 'font-base'
                            }`}
                          >
                            {detail.children[0].text}
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <></>
              )}
            </div>
          </div>
          {speakers && speakers.length > 0 && (
            <div
              className={`flex flex-col gap-6 lg:col-span-2 bg-white w-full px-5 py-6 rounded-xl lg:rounded-r-xl mx-1 mb-2`}
            >
              <div className='grid md:grid-cols-2 gap-4 mt-3 lg:mt-0 lg:col-span-4'>
                {speakers.map((sp, i) => (
                  <div className='flex flex-col ' key={sp.name}>
                    <div className='font-semibold'>{sp && sp.name}</div>
                    <div className='text-sm leading-tight text-neutral-900'>
                      {sp && sp.title}, {sp && sp.company}
                    </div>
                    {sp.companyLogo && (
                      <div
                        className='w-[120px] h-[40px] bg-contain bg-no-repeat mt-3'
                        style={{
                          backgroundImage: `url(${sp.companyLogo.asset.url})`,
                        }}
                      ></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        {/* {sponsors && (
          <div className=' md:col-span-2 lg:col-span-1 flex justify-end items-center lg:items-start'>
            <div className='flex flex-col gap-6 lg:col-span-2'>
              {sponsors.map((sp, i) => (
                <div className='p-2 w-1/2 md:w-2/3 lg:w-full' key={sp.name}>
                  <Image
                    src={sponsors && sponsors[0].logo}
                    width='500'
                    height='164'
                    alt={sponsors && sponsors[0].name}
                  />
                </div>
              ))}
            </div>
          </div>
        )} */}
      </div>
    </div>
  );
};

export default FullAgendaItem;
