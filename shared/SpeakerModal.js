import React, { useState, useEffect, use } from 'react';
import { createClient } from 'next-sanity';
import { XCircleIcon } from '@heroicons/react/24/outline';
import { useDispatch, useSelector } from 'react-redux';
import { closeSpeakerModal, setSpeaker } from '../features/layout/layoutSlice';
import { SocialIcon } from 'react-social-icons';
import SessionBlock from './SessionBlock';

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
          ..., "sessions": *[ _type == "session" && references(^._id)]
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
        <div className='w-11/12 h-4/5 md:h-auto overflow-scroll xl:overflow-hidden relative md:w-8/12 lg:w-10/12 xl:w-8/12 mx-auto bg-white rounded-md'>
          <div className='flex flex-col lg:flex-row lg:gap-16 gap-4 pt-4 xl:pt-8 pb-9 px-6 xl:px-8'>
            <div className='flex justify-between lg:flex-col'>
              <div
                className='w-full md:w-96 xl:w-[400px] h-72 md:h-96 lg:h-full rounded-t-lg relative'
                style={{
                  backgroundImage: `url(${
                    currentSpeaker && currentSpeaker[0].profilePic
                  })`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <div className='absolute top-3 right-3 z-50'>
                  <SocialIcon
                    url={currentSpeaker && currentSpeaker[0].linkedin}
                    className='w-16 h-16 bg-white rounded-full'
                  />
                </div>
              </div>
            </div>
            <div className='flex flex-col gap-6'>
              <div className='flex flex-col ml-2 lg:ml-0'>
                <div className='font-oswald font-semibold text-[1.75rem] md:text-4xl leading-none uppercase text-ap-darkblue'>
                  {currentSpeaker && currentSpeaker[0].name}
                </div>
                <div className='text-sm md:text-lg font-semibold'>
                  {currentSpeaker && currentSpeaker[0].company}
                </div>
                <div className='text-sm md:text-lg'>
                  {currentSpeaker && currentSpeaker[0].title}
                </div>
              </div>
              <div className='text-sm md:text-base xl:text-lg max-h-44 md:max-h-72 xl:max-h-full overflow-y-scroll xl:overflow-y-hidden relative text-slate-500 max-w-prose'>
                {currentSpeaker && currentSpeaker[0].bio}
              </div>
              <div className='flex flex-col gap-4 xl:mt-8'>
                {currentSpeaker && currentSpeaker[0].sessions.length > 0 && (
                  <>
                    <div className='font-oswald text-2xl font-medium'>
                      Featured In:
                    </div>
                    <div className='grid grid-cols-1 xl:grid-cols-2 gap-6'>
                      {currentSpeaker[0].sessions.map((sess, i) => (
                        <div key={sess._id}>
                          <SessionBlock
                            day='Thursday'
                            time={sess.time}
                            location={sess.location}
                            name={sess.name}
                          />
                        </div>
                      ))}
                    </div>
                  </>
                )}
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
