import React from 'react';
import Sponsor from './Sponsor';

const SilverSponsorBlock = () => {
  return (
    <div className='flex flex-col gap-5 md:gap-6'>
      <div className='border-b border-b-slate-500 pb-2 font-bold tracking-widest uppercase text-sm lg:text-lg'>
        Silver
      </div>
      <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-10 md:gap-x-16 gap-y-5 md:gap-y-10 w-full overflow-hidden'>
        <Sponsor
          logo='https://res.cloudinary.com/dno7xxmmy/image/upload/v1670261559/AutoPack%20Summit/big3_n1girf.png'
          w={400}
          h={134}
          url='https://www.big3precision.com/'
          alt='Big 3 Logo'
        />
        <Sponsor
          logo='https://res.cloudinary.com/dno7xxmmy/image/upload/v1670261651/AutoPack%20Summit/ntic_twepwd.png'
          w={405}
          h={96}
          alt='NTI Logo'
          url='#'
        />
        <Sponsor
          logo='https://res.cloudinary.com/dno7xxmmy/image/upload/v1670261710/AutoPack%20Summit/logoOrbis_xtf9qe.gif'
          w={159}
          h={51}
          alt='Orbis'
          url='https://www.orbiscorporation.com/en-us/'
        />
        <Sponsor
          logo='https://res.cloudinary.com/dno7xxmmy/image/upload/v1670261784/AutoPack%20Summit/PolyFlex-logo-1_gaklqy.png'
          w={403}
          h={160}
          alt='Polyflex Logo'
          url='https://polyflexpro.com/'
        />
        <Sponsor
          logo='https://res.cloudinary.com/dno7xxmmy/image/upload/v1670261846/AutoPack%20Summit/zatkoff_egc30d.png'
          w={400}
          h={130}
          alt='Zatkoff Logo'
          url='https://www.zatkoff.com/'
        />
        <Sponsor
          logo='https://res.cloudinary.com/dno7xxmmy/image/upload/v1670261920/AutoPack%20Summit/LotisLogo_ugtex6.jpg'
          w={400}
          h={137}
          alt='Lotis Logo'
          url='https://lotistechnologies.com/'
        />
        <Sponsor
          logo='https://res.cloudinary.com/dno7xxmmy/image/upload/v1670254640/AutoPack%20Summit/packiq_ejthac.png'
          w={500}
          h={164}
          alt='Pack IQ Logo'
          url='https://www.packiq.com/'
        />
        <Sponsor
          logo='https://res.cloudinary.com/dno7xxmmy/image/upload/v1670262072/AutoPack%20Summit/db-logo2.fw_3_sh0jau.png'
          w={293}
          h={72}
          alt='Doug Brown Logo'
          url='https://dbpackaging.com/'
        />
        <Sponsor
          logo='https://res.cloudinary.com/dno7xxmmy/image/upload/v1670262242/AutoPack%20Summit/Tree-Brand-Logo_sp6smm.png'
          w={402}
          h={221}
          alt='Tree Brand Packaging Logo'
          url='https://treebrand.com/'
        />
      </div>
    </div>
  );
};

export default SilverSponsorBlock;
