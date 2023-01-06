import React from 'react';
import TravelItem from './TravelItem';
import { MapIcon, RocketLaunchIcon } from '@heroicons/react/24/solid';

const TravelAside = () => {
  return (
    <div className='bg-testimonial-yellow bg-cover bg-center pb-16 lg:pb-28'>
      <div className='flex flex-col gap-12 md:gap-16'>
        <div className='flex flex-col justify-center items-center gap-4 text-center pt-16 lg:pt-20 pl-16 pr-16'>
          <div className='flex flex-col'>
            <div className='blue_subheadline text-xl md:text-xl xl:text-2xl'>
              Experience
            </div>
            <div className='white_headline text-5xl md:text-5xl xl:text-6xl'>
              Greenville
            </div>
          </div>
        </div>
        <div
          className='grid grid-flow-col overflow-scroll gap-x-4 md:gap-x-6 px-8 md:px-16 lg:gap-x-12 lg:mx-auto'
          id='scrollers'
        >
          <TravelItem
            background='https://res.cloudinary.com/dno7xxmmy/image/upload/v1670448785/AutoPack%20Summit/visitgreenville_g3l0or.webp'
            title='For The Explorers'
            url='https://www.visitgreenvillesc.com/'
          />
          <TravelItem
            background='https://res.cloudinary.com/dno7xxmmy/image/upload/v1670449562/AutoPack%20Summit/crafted_at_nose_dive_night_cap_nichole-7b01cd6e983f411daba4f1061f4a9288_szp81c.webp'
            title='For The Foodies'
            url='https://www.southernliving.com/travel/greenville-restaurants'
          />
          <TravelItem
            background='https://res.cloudinary.com/dno7xxmmy/image/upload/v1670449797/AutoPack%20Summit/FortheFans_d3wh47.jpg'
            title='For The Artists'
            url='https://www.fallforgreenville.net/'
          />
        </div>
        <div className='flex flex-col md:flex-row gap-3 md:gap-5 md:mx-auto'>
          <div className='flex flex-col mx-auto md:mx-0'>
            <div
              className='flex gap-4 items-center cursor-pointer bg-white/30 backdrop-blur-md drop-shadow-md rounded-md py-3 px-5'
              onClick={() =>
                window.open(
                  'https://www.greenvillesc.gov/513/Parking',
                  '_blank'
                )
              }
            >
              <div>
                <MapIcon className='w-6 h-6 fill-white' />
              </div>
              <div className='font-oswald font-medium text-2xl lg:text-3xl text-white uppercase tracking-wider'>
                Parking
              </div>
            </div>
          </div>
          <div className='flex flex-col mx-auto md:mx-0'>
            <div
              className='flex gap-4 cursor-pointer items-center bg-white/30 backdrop-blur-md drop-shadow-md rounded-md py-3 px-5'
              onClick={() => window.open('https://gspairport.com/', '_blank')}
            >
              <div>
                <RocketLaunchIcon className='w-6 h-6 fill-white' />
              </div>
              <div className='font-oswald font-medium text-2xl lg:text-3xl text-white uppercase tracking-wider'>
                Airport
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelAside;
