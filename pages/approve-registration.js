import React, { useState, useEffect } from 'react';
import {
  CheckIcon,
  PaperAirplaneIcon,
  XMarkIcon,
  MegaphoneIcon,
} from '@heroicons/react/24/solid';

import { useRouter } from 'next/router';
import {
  approveRegistrant,
  getRegistrantByEmail,
  sendWelcomeEmail,
} from '../util/api';
import { AnimatePresence, motion } from 'framer-motion';

const Page = () => {
  const router = useRouter();
  const params = router.query;

  const [isLoading, setIsLoading] = useState(false);
  const [helperText, setHelperText] = useState(
    params.email ? 'Finding Registrant' : 'No Registrant Data'
  );
  const [isRegistrant, setIsRegistrant] = useState({});
  const [isError, setIsError] = useState('');
  const [isSent, setIsSent] = useState(false);

  useEffect(() => {
    const setRegistrant = async (email) => {
      setIsLoading(true);
      const reg = await getRegistrantByEmail(email);
      if (reg.error) {
        setIsError(reg.error);
        setHelperText(`Error finding registrant`);
      } else if (reg.registrant) {
        setIsRegistrant(reg.registrant);
        if (reg.registrant[0].welcomeEmailSent === true) {
          setHelperText(`Welcome Email Already Sent to ${params.email}`);
          setIsSent(true);
        }
        if (reg.registrant[0].welcomeEmailSent === false) {
          const send = await sendWelcomeEmail(params.name, params.email);
          if (send === 200) {
            setHelperText(`Welcome Email Sent to ${params.email}`);
            approveRegistrant(reg.registrant[0].id);
            setIsSent(true);
          } else {
            setHelperText(`Error sending email to ${params.email}`);
          }
        }
      }
      setIsLoading(false);
    };

    params && params.email && setRegistrant(params.email);
  }, [params]);

  return (
    <div className='w-full max-w-4xl px-5 xl:px-0 pt-10 pb-32 mx-auto'>
      <div className='rounded-2xl border-2 border-black shadow-[6px_8px_0_black] bg-white'>
        <div className='w-full max-w-2xl mx-auto flex flex-col gap-12 lg:gap-16 justify-center items-center px-5 py-20'>
          <div className='font-medium font-oswald text-4xl lg:text-5xl uppercase text-center'>
            Registration Request Approved.
          </div>
          <div className='w-full relative'>
            <div className='grid grid-cols-2 md:grid-cols-4 mx-1'>
              <div className='aspect-square rounded-full w-full h-28 flex items-center justify-center'>
                <div className='h-2 bg-black w-full'></div>
              </div>
              <div className='aspect-square rounded-full w-full h-28 flex items-center justify-center'>
                <div className='h-2 bg-black w-full'></div>
              </div>
              <div className='aspect-square rounded-full w-full h-28 flex items-center justify-center'>
                <div className='h-2 bg-black w-full'></div>
              </div>
              <div className='aspect-square rounded-full w-full h-28 flex items-center justify-center'>
                <div className='h-2 bg-black w-full'></div>
              </div>
            </div>
            <div className='flex items-center justify-between gap-12 absolute z-10 inset-0'>
              <div className=' relative aspect-square transition-colors ease-in bg-green-600 border-2 border-black rounded-full w-24 h-24 flex justify-center items-center'>
                <CheckIcon className='fill-white w-16 h-16' />
                <div className='absolute inset-x-0 top-full bg-white border-2 border-black px-2 py-1 flex justify-center items-center text-center'>
                  <div className='text-sm leading-tight font-medium'>
                    Code Requested
                  </div>
                </div>
              </div>

              <div className=' relative aspect-square bg-green-600 border-2 border-black rounded-full w-24 h-24 flex justify-center items-center'>
                <CheckIcon className='fill-white w-16 h-16' />
                <div className='absolute inset-x-0 top-full bg-white border-2 border-black px-2 py-1 flex justify-center items-center text-center'>
                  <div className='text-sm leading-tight font-medium'>
                    Registration Received
                  </div>
                </div>
              </div>
              <div className=' relative aspect-square bg-green-600 border-2 border-black rounded-full w-24 h-24 flex justify-center items-center'>
                <CheckIcon className='fill-white w-16 h-16' />
                <div className='absolute inset-x-0 top-full bg-white border-2 border-black px-2 py-1 flex justify-center items-center text-center'>
                  <div className='text-sm leading-tight font-medium'>
                    Welcome Email Sent
                  </div>
                </div>
              </div>
              <div
                className={`relative aspect-square ${
                  isSent ? 'bg-green-600' : 'bg-amber-300'
                } border-2 border-black rounded-full w-24 h-24 flex justify-center items-center`}
              >
                <AnimatePresence>
                  {isSent ? (
                    <motion.div>
                      <CheckIcon className='fill-white w-16 h-16' />
                    </motion.div>
                  ) : (
                    <motion.div>
                      <PaperAirplaneIcon
                        className={`text-white h-12 w-12 ${
                          isLoading ? 'animate-bounce' : ''
                        }`}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className='absolute inset-x-0 top-full bg-white border-2 border-black px-2 py-1 flex justify-center items-center text-center'>
                  <div className='text-sm leading-tight font-medium'>
                    Reg Code Sent
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='w-full leading-tight mt-16 text-lg flex items-center gap-4 max-w-2xl py-2 px-2 mx-auto bg-amber-100 border-2 border-black shadow-[3px_5px_0_black]'>
            <div className='w-10 h-10 bg-white border border-black flex items-center justify-center'>
              <MegaphoneIcon className='w-7 h-7 fill-black' />
            </div>
            <div className={`w-full ${isLoading ? 'animate-pulse' : ''}`}>
              {isError ? isError : helperText}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
