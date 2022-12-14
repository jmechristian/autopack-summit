import React, { useState, useEffect, use } from 'react';
import { createClient } from 'next-sanity';
import { XCircleIcon } from '@heroicons/react/24/outline';
import { useDispatch, useSelector } from 'react-redux';
import { closeSpeakerModal, setSpeaker } from '../features/layout/layoutSlice';
import { SocialIcon } from 'react-social-icons';

const SpeakerModal = () => {
  const [currentSpeaker, setCurrentSpeaker] = useState(selectedSpeaker);
  const { selectedSpeaker } = useSelector((state) => state.layout);
  const client = createClient({
    projectId: 'h72r2zbr',
    dataset: 'aps',
    apiVersion: '2022-11-20',
    useCdn: false,
  });

  useEffect(() => {
    const getSpeakerInfo = async () => {
      const speaker = await client
        .fetch(
          `*[_id == '${selectedSpeaker}']{
          ..., session[]->
        }`
        )
        .then((res) => setCurrentSpeaker(res));
    };

    getSpeakerInfo();
  }, [selectedSpeaker]);

  const speakerCloseHandler = () => {
    dispatch(setSpeaker(null));
  };

  const dispatch = useDispatch();

  return (
    <div className='fixed top-0 left-0 right-0 bottom-0 bg-black/40 backdrop-blur z-[60]'>
      <div className='flex w-full h-full justify-center items-center'>
        <div className='w-11/12 md:w-7/12 lg:w-9/12 mx-auto bg-white rounded-md'>
          <div className='flex flex-col lg:flex-row lg:gap-12 gap-4 pt-4 pb-9 px-6'>
            <div className='flex justify-between lg:flex-col'>
              <div
                className='w-60 md:w-72 h-60 md:h-72 lg:h-80 rounded-t-lg'
                style={{
                  backgroundImage: `url(${
                    currentSpeaker && currentSpeaker[0].profilePic
                  })`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              ></div>
              <div className='mt-6'>
                <SocialIcon
                  url={currentSpeaker && currentSpeaker[0].linkedin}
                  style={{ height: 40, width: 40 }}
                />
              </div>
            </div>
            <div className='flex flex-col gap-6 -mt-7 lg:mt-0'>
              <div className='flex flex-col ml-2 lg:ml-0'>
                <div className='font-oswald font-semibold text-[1.75rem] md:text-3xl leading-none uppercase text-ap-darkblue'>
                  {currentSpeaker && currentSpeaker[0].name}
                </div>
                <div className='text-sm md:text-base font-semibold'>
                  {currentSpeaker && currentSpeaker[0].company}
                </div>
                <div className='text-sm md:text-base'>
                  {currentSpeaker && currentSpeaker[0].title}
                </div>
              </div>
              <div className='text-sm md:text-base max-h-44 md:max-h-72 overflow-y-scroll relative text-slate-500 max-w-prose'>
                {currentSpeaker && currentSpeaker[0].bio}
              </div>
              <div className='flex flex-col gap-2'>
                <div className='font-oswald text-2xl font-medium'>
                  Sessions:
                </div>
                {currentSpeaker &&
                  currentSpeaker[0].sessions &&
                  currentSpeaker[0].sessions.length}
                <div className='grid grid-cols-1'>
                  <div className='w-full h-full bg-ap-darkblue p-5 rounded-md'>
                    <div className='flex flex-col gap-9'>
                      <div className='flex justify-between'>
                        <div className='flex flex-col'>
                          <div className='font-bold tracking-widest uppercase text-white/70 leading-tight'>
                            Thursday
                          </div>
                          <div className='font-bold text-xl font-oswald uppercase leading-none text-ap-yellow tracking-wide'>
                            7am - 8am
                          </div>
                        </div>
                        <div className='flex flex-col justify-between'>
                          <div className='text-white text-right text-sm bg-ap-yellow py-1 px-4 rounded drop-shadow-lg'>
                            the location
                          </div>
                        </div>
                      </div>
                      <div className='text-white font-bold text-2xl leading-tight'>
                        Impacts and Factors of Reverse Logistics
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='absolute right-5 top-4 cursor-pointer'>
        <div className='flex items-center gap-1' onClick={speakerCloseHandler}>
          <XCircleIcon className='stroke-white h-5 w-5' />
          <div className='font-semibold text-white'>Close</div>
        </div>
      </div>
    </div>
  );
};

export default SpeakerModal;
