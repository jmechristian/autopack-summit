import React, { useState, useMemo, useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import { createClient } from 'next-sanity';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import { API } from 'aws-amplify';
import { listTourists } from '../../src/graphql/queries';
import { Switch } from '@headlessui/react';
import FullAgendaItem from '../../components/agenda/FullAgendaItem';
import CompactAgenda from '../../shared/CompactAgenda';
import Logo from '../../shared/Logo';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Agenda = ({ sessionData, tourists }) => {
  const [enabled, setEnabled] = useState(false);
  const [isDay, setDay] = useState(1);

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const dayOne = useMemo(() => {
    const one =
      sessionData && sessionData.filter((s) => s.date === '2024-10-21');

    return one;
  }, [sessionData]);

  const dayTwo = useMemo(() => {
    const two =
      sessionData && sessionData.filter((s) => s.date === '2024-10-22');

    return two;
  }, [sessionData]);

  const dayThree = useMemo(() => {
    const three =
      sessionData && sessionData.filter((s) => s.date === '2024-10-23');
    return three;
  }, [sessionData]);

  const sessionByDate = useMemo(() => {
    const currentDay = () => {
      switch (isDay) {
        case 0:
          return '2024-10-21';
        case 1:
          return '2024-10-22';
        case 2:
          return '2024-10-23';
        default:
          return '2024-10-21';
      }
    };

    const dayToShow =
      sessionData && sessionData.filter((s) => s.date === currentDay(isDay));

    return dayToShow;
  }, [sessionData, isDay]);

  return (
    <>
      <Head>
        <title>Automotive Packaging Summit | Agenda</title>
        <meta
          property='og:title'
          content='Automotive Packaging Summit | Agenda'
        />
      </Head>
      {/* <div className='w-full'>
        <AgendaBody sessions={sessionData} tourists={tourists} />
      </div> */}
      <div className='max-w-lg lg:max-w-5xl xl:max-w-7xl mx-auto pt-5 lg:pt-9 pb-20 relative px-5 xl:px-0'>
        <div className='w-full flex flex-col sticky top-9 bg-white rounded-2xl shadow-xl'>
          <div className='w-full flex flex-col gap-6 lg:flex-row justify-between py-9 items-center px-8 rounded-2xl border-4 border-neutral-900'>
            <div className='flex gap-3 items-center'>
              <div className='font-oswald uppercase font-medium text-3xl lg:text-5xl'>
                2024 Agenda
              </div>
            </div>
            <div className='flex items-center gap-6'>
              <div className='flex items-center gap-3'>
                <div className='font-bold text-sm'>Compact</div>
                <Switch
                  checked={enabled}
                  onChange={setEnabled}
                  className={classNames(
                    enabled ? 'bg-ap-yellow' : 'bg-gray-200',
                    'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2'
                  )}
                >
                  <span className='sr-only'>Use setting</span>
                  <span
                    className={classNames(
                      enabled ? 'translate-x-5' : 'translate-x-0',
                      'pointer-events-none relative inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
                    )}
                  >
                    <span
                      className={classNames(
                        enabled
                          ? 'opacity-0 duration-100 ease-out'
                          : 'opacity-100 duration-200 ease-in',
                        'absolute inset-0 flex h-full w-full items-center justify-center transition-opacity'
                      )}
                      aria-hidden='true'
                    >
                      <svg
                        className='h-3 w-3 text-gray-400'
                        fill='none'
                        viewBox='0 0 12 12'
                      >
                        <path
                          d='M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2'
                          stroke='currentColor'
                          strokeWidth={2}
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                      </svg>
                    </span>
                    <span
                      className={classNames(
                        enabled
                          ? 'opacity-100 duration-200 ease-in'
                          : 'opacity-0 duration-100 ease-out',
                        'absolute inset-0 flex h-full w-full items-center justify-center transition-opacity'
                      )}
                      aria-hidden='true'
                    >
                      <svg
                        className='h-3 w-3 text-black'
                        fill='currentColor'
                        viewBox='0 0 12 12'
                      >
                        <path d='M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z' />
                      </svg>
                    </span>
                  </span>
                </Switch>
              </div>
              <div
                ref={componentRef}
                className='hidden print:flex print:flex-col gap-6 p-6'
              >
                <div className='flex w-full justify-between gap-3 items-center'>
                  <div className='w-28 md:w-32 lg:w-40 xl:w-48'>
                    <Logo />
                  </div>
                  <div className='font-oswald uppercase font-medium text-3xl lg:text-5xl'>
                    2024 Agenda
                  </div>
                </div>
                <CompactAgenda
                  dayOne={dayOne}
                  dayTwo={dayTwo}
                  dayThree={dayThree}
                  enabled={enabled}
                />
              </div>
              <button
                className='bg-ap-blue w-fit text-white text-sm md:text-sm font-medium px-4 py-1.5 shadow-[3px_3px_0_black] hover:shadow-[1px_1px_0_black] hover:translate-x-[3px] hover:translate-y-[3px] transition-all'
                onClick={handlePrint}
              >
                Download as PDF
              </button>
            </div>
          </div>
          {!enabled && (
            <AnimatePresence>
              <div className='w-full bg-neutral-900 rounded-2xl flex items-center justify-center border-4 border-neutral-900'>
                <div className='flex flex-col lg:flex-row px-6 py-6 lg:py-4 gap-3'>
                  <div className='text-sm font-bold text-white place-self-center'>
                    Select Date:
                  </div>
                  <div className='flex items-center gap-1'>
                    <div
                      className={classNames(
                        isDay === 0
                          ? 'bg-ap-yellow text-white'
                          : 'bg-gray-300 text-neutral-400',
                        'font-oswald text-lg  font-medium w-28 h-9 flex justify-center items-center cursor-pointer hover:bg-amber-300 hover:text-white/80 transition-all ease-in'
                      )}
                      onClick={() => setDay(0)}
                    >
                      <div>MON OCT 21</div>
                    </div>
                    <div
                      className={classNames(
                        isDay === 1
                          ? 'bg-ap-yellow text-white'
                          : 'bg-gray-300 text-neutral-400',
                        'font-oswald text-lg  font-medium w-28 h-9 flex justify-center items-center cursor-pointer hover:bg-amber-300 hover:text-white/80 transition-all ease-in'
                      )}
                      onClick={() => setDay(1)}
                    >
                      <div>TUE OCT 22</div>
                    </div>
                    <div
                      className={classNames(
                        isDay === 2
                          ? 'bg-ap-yellow text-white'
                          : 'bg-gray-300 text-neutral-400',
                        'font-oswald text-lg  font-medium w-28 h-9 flex justify-center items-center cursor-pointer hover:bg-amber-300 hover:text-white/80 transition-all ease-in'
                      )}
                      onClick={() => setDay(2)}
                    >
                      <div>WED OCT 23</div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatePresence>
          )}
        </div>
        <div
          className={`w-full rounded-2xl border-4 border-neutral-900 bg-amber-100 lg:px-6 lg:py-8 flex flex-col `}
        >
          {/* COMPACT VIEW */}
          <AnimatePresence>
            {enabled && (
              <CompactAgenda
                dayOne={dayOne}
                dayTwo={dayTwo}
                dayThree={dayThree}
                enabled={enabled}
              />
            )}
          </AnimatePresence>

          {/* FULL VIEW */}
          <AnimatePresence>
            {!enabled && (
              <motion.div
                className='flex flex-col gap-1 lg:gap-3'
                key={enabled}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {sessionByDate &&
                  sessionByDate
                    .sort((a, b) =>
                      a.session_start.localeCompare(b.session_start)
                    )
                    .map((s) => (
                      <motion.div key={s._id}>
                        <FullAgendaItem
                          type={s.type}
                          title={s.name}
                          startTime={s.session_start}
                          endTime={s.session_end}
                          location={s.location}
                          speakers={s.speakers}
                          sponsors={s.sponsors}
                          description={s.description}
                          details={s.details}
                        />
                      </motion.div>
                    ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
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

export async function getServerSideProps() {
  const GRAPHQL_ENDPOINT = process.env.GRAPHQL_ENDPOINT;
  const GRAPHQL_API_KEY = process.env.GRAPHQL_API_KEY;

  const getTourists = await API.graphql({ query: listTourists });
  const tourists = getTourists.data.listTourists.items;

  const sessionData = await client.fetch(
    `*[_type == "session"] | order(session_start asc) {
      _id,
      date,
      location,
      name,
      description,
      details,
      type,
      session_end,
      session_start,
      speakers[]->{_id, name, company, title, profilePic { asset -> { url}}, companyLogo { asset-> { url }}},
      sponsors[]->{logo, name, website}
    }`
  );

  return {
    props: {
      sessionData,
      tourists,
    },
  };
}

export default Agenda;
