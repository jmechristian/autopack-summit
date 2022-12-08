import React from 'react';
import TravelItem from './TravelItem';

const TravelAside = () => {
  return (
    <div className='bg-testimonial-yellow bg-cover bg-center pb-16 lg:pb-28'>
      <div className='flex flex-col gap-2 md:gap-6'>
        <div className='flex flex-col justify-center items-center gap-4 text-center pt-16 lg:pt-20 pl-16 pr-16 pb-9'>
          <div className='flex flex-col'>
            <div className='blue_subheadline text-xl md:text-xl xl:text-2xl'>
              Experience
            </div>
            <div className='white_headline text-5xl md:text-5xl xl:text-6xl'>
              Greenville
            </div>
          </div>
          <div className='text-white max-w-prose md:px-20'>
            Experience the premier open forum for OEMs to discuss their
            packaging innovations and challenges.
          </div>
        </div>
        <div
          className='grid grid-flow-col overflow-scroll gap-x-4 md:gap-x-6 px-8 md:px-16 lg:gap-x-12 lg:mx-auto'
          id='scrollers'
        >
          <TravelItem
            background='https://res.cloudinary.com/dno7xxmmy/image/upload/v1670448785/AutoPack%20Summit/visitgreenville_g3l0or.webp'
            title='For The Explorers'
          />
          <TravelItem
            background='https://res.cloudinary.com/dno7xxmmy/image/upload/v1670449562/AutoPack%20Summit/crafted_at_nose_dive_night_cap_nichole-7b01cd6e983f411daba4f1061f4a9288_szp81c.webp'
            title='For The Foodies'
          />
          <TravelItem
            background='https://res.cloudinary.com/dno7xxmmy/image/upload/v1670449797/AutoPack%20Summit/FortheFans_d3wh47.jpg'
            title='For The Artists'
          />
        </div>
      </div>
    </div>
  );
};

export default TravelAside;
