import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from '@heroicons/react/20/solid';
import LeftTextCTA from '../../shared/LeftTextCTA';

export default function TravelVenue() {
  return (
    <div className='overflow-hidden bg-white py-24 sm:py-32'>
      <div className='mx-auto max-w-7xl md:px-6 lg:px-8'>
        <div className='grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-start'>
          <div className='px-6 lg:px-0 lg:pr-4 lg:pt-4 max-w-md'>
            <LeftTextCTA
              subColor='blue'
              subText='Venue'
              headlineColor='yellow'
              headlineText='Hyatt Regency'
              text='220 North Main Street, Greenville, South Carolina, 29601'
              textColor='gray'
              buttonText='View Venue'
              buttonColor='blue'
              hasButton={true}
              fn={() =>
                window.open(
                  'https://www.hyatt.com/en-US/hotel/south-carolina/hyatt-regency-greenville/gsprg',
                  '_blank'
                )
              }
            />
          </div>
          <div className='sm:px-6 lg:px-0'>
            <div className='relative isolate overflow-hidden bg-ap-blue px-6 pt-8 sm:mx-auto sm:max-w-2xl sm:rounded-3xl sm:pl-16 sm:pr-0 sm:pt-16 lg:mx-0 lg:max-w-none'>
              <div
                className='absolute -inset-y-px -left-3 -z-10 w-full origin-bottom-left skew-x-[-30deg] bg-ap-darkblue opacity-20 ring-1 ring-inset ring-white'
                aria-hidden='true'
              />
              <div className='mx-auto max-w-2xl sm:mx-0 sm:max-w-none shadow-xl'>
                <img
                  src='https://packschool.s3.amazonaws.com/2024exterior.jpeg'
                  alt='The Hyatt Regency Greenville South Carolina'
                  width={1024}
                  className=' w-[33rem] max-w-none rounded-tl-xl bg-gray-800 ring-1 ring-white/10'
                />
              </div>
              <div
                className='pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/10 sm:rounded-3xl'
                aria-hidden='true'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
