import { Dialog } from '@headlessui/react';
import { XCircleIcon } from '@heroicons/react/24/solid';
import BioSession from './BioSession';
import { SocialIcon } from 'react-social-icons';
import { useRouter } from 'next/router';
import { FaLinkedin } from 'react-icons/fa';

const SpeakerModal = ({
  open,
  close,
  name,
  title,
  company,
  url,
  bio,
  linkedin,
  session,
}) => {
  const router = useRouter();

  return (
    <Dialog open={open} onClose={() => close()} className='relative z-50'>
      {/* The backdrop, rendered as a fixed sibling to the panel container */}
      <div className='fixed inset-0 bg-black/70' aria-hidden='true' />

      {/* Full-screen container to center the panel */}
      <div className='fixed inset-0 flex lg:items-center p-4 overflow-y-auto py-3'>
        {/* The actual dialog panel  */}
        <Dialog.Panel className='mx-auto w-full max-w-4xl rounded-lg relative '>
          <div
            className='hidden lg:block absolute top-2 right-2 z-[60] cursor-pointer'
            onClick={() => close()}
          >
            <XCircleIcon className='w-8 h-8 fill-black/50' />
          </div>
          <div className='flex flex-col lg:flex-row justify-center w-full'>
            <div className='w-full p-6 bg-ap-darkblue rounded-t-lg lg:rounded-t-none lg:rounded-l-lg '>
              <div
                className='flex flex-1 justify-end lg:hidden'
                onClick={() => close()}
              >
                <XCircleIcon className='w-6 h-6 fill-white/70' />
              </div>
              <div className='flex flex-col lg:gap-5 justify-center items-center'>
                <div
                  className={`w-56 bg-ap-yellow h-56 rounded-full ring-4  ring-ap-yellow bg-cover bg-center`}
                  style={{ backgroundImage: `url(${url})` }}
                  onClick={() => setIsOpen(true)}
                ></div>
                <div className='flex flex-col mt-3 w-full'>
                  <div className=' flex gap-3 items-center'>
                    <div className='font-bold font-oswald uppercase text-ap-darkblue text-xl bg-white px-2 py-1 w-fit'>
                      {name}
                    </div>
                    {linkedin && (
                      <div onClick={() => window.open(linkedin, '_blank')}>
                        <FaLinkedin color='white' size={30} />
                      </div>
                    )}
                  </div>
                  <div className='flex flex-col mt-1 w-full px-3 py-1 text-white'>
                    <div className='text-sm'>{title}</div>
                    <div className='text-sm font-bold'>{company}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className='bg-white p-5 lg:p-9 text-sm flex flex-col gap-3 pb-9 lg:rounded-r-lg'>
              <div className='uppercase font-oswald text-xl text-ap-darkblue font-bold'>
                Bio
              </div>
              <div className='text-gray-700'>{bio}</div>
              {session && session.length > 0 && (
                <div>
                  <hr className='my-4' />
                  <div className='uppercase font-oswald text-lg text-ap-darkblue font-bold'>
                    Sessions
                  </div>
                  {session.map((s) => (
                    <div
                      key={s.name}
                      className='border-b border-b-gray-600 pb-2 cursor-pointer'
                      onClick={() => router.push('/agenda')}
                    >
                      <BioSession
                        startTime={s.session_start}
                        endTime={s.session_end}
                        title={s.name}
                        location={s.location}
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default SpeakerModal;
