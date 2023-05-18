import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from '@heroicons/react/20/solid';
import LeftTextCTA from '../../shared/LeftTextCTA';

const features = [
  {
    name: 'Push to deploy.',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'SSL certificates.',
    description:
      'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
    icon: LockClosedIcon,
  },
  {
    name: 'Database backups.',
    description:
      'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    icon: ServerIcon,
  },
];

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
              headlineText='The Huguenot Loft'
              text='101 W Broad St, Greenville, SC'
              textColor='gray'
              buttonText='View Venue'
              buttonColor='blue'
              hasButton={true}
              fn={() =>
                window.open(
                  'https://specialevents.peacecenter.org/the-huguenot-loft/',
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
              <div className='mx-auto max-w-2xl sm:mx-0 sm:max-w-none'>
                <img
                  src='https://apsmedia.s3.amazonaws.com/images/003e075a1e13048226d6e453516cf6c89a4d14b451e1d4b277b46dac26c5c783.jpeg'
                  alt='The Huguenot Loft'
                  width={2432}
                  height={1442}
                  className='-mb-12 w-[57rem] max-w-none rounded-tl-xl bg-gray-800 ring-1 ring-white/10'
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
