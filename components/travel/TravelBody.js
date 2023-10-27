import React from 'react';
import LeftTextCTA from '../../shared/LeftTextCTA';
import OverlayWithText from '../../shared/OverlayWithText';
import TravelBlock from './TravelBlock';
import TravelVenue from './TravelVenue';

const TravelBody = () => {
  return (
    <div className='w-full'>
      <TravelVenue />
      <div className='smaller_wrapper flex flex-col md:flex-row gap-16 md:gap-16 lg:gap-32 xl:gap-48'>
        {/* <div className='flex flex-col gap-16 md:gap-28 lg:gap-52 lg:w-1/2'>
          <LeftTextCTA
            subColor='blue'
            subText='Small Town'
            headlineColor='yellow'
            headlineText='Big Energy'
            text='Experience what turned America’s 4th fastest-growing city into one of America’s hottest destinations.'
            textColor='gray'
            buttonText='Join the Sponsorship Roster'
            buttonColor='blue'
            hasButton={false}
          />
          <TravelBlock
            background='https://res.cloudinary.com/dno7xxmmy/image/upload/v1670463568/AutoPack%20Summit/gspgs-exterior-0881-hor-clsc_bidhsh.webp'
            headline='Springhill Suites'
            headlineColor='text-ap-yellow'
            group='189'
            bookNow='https://www.marriott.com/event-reservations/reservation-link.mi?id=1668182963572&key=GRP&app=resvlink'
            bookDate='9/20/2023'
            line1='200 East Washington Street'
            line2='Greenville, South Carolina 29601'
          />
        </div>
        <div className='flex flex-col gap-16 md:gap-24 lg:gap-40 md:mt-32 lg:mt-64 lg:w-1/2'>
          <TravelBlock
            background='https://res.cloudinary.com/dno7xxmmy/image/upload/v1670463568/AutoPack%20Summit/gspal-exterior-7344-hor-clsc_vth9ui.webp'
            headline='Aloft Greenville Downtown'
            headlineColor='text-ap-yellow'
            group='169'
            bookNow='https://www.marriott.com/events/start.mi?id=1668436286086&key=GRP'
            bookDate='9/17/2023'
            line1='5 North Laurens Street'
            line2='Greenville, South Carolina 29601'
          />
        </div> */}
      </div>
    </div>
  );
};

export default TravelBody;
