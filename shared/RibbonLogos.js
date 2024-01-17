import { motion } from 'framer-motion';
import {
  SiNike,
  Si3M,
  SiAbstract,
  SiAdobe,
  SiAirtable,
  SiAmazon,
  SiBox,
  SiBytedance,
  SiChase,
  SiCloudbees,
  SiBurton,
  SiBmw,
  SiHeroku,
  SiBuildkite,
  SiCouchbase,
  SiDailymotion,
  SiDeliveroo,
  SiEpicgames,
  SiGenius,
  SiGodaddy,
} from 'react-icons/si';

const RibbonLogos = () => {
  return (
    <section className='py-36 overflow-hidden'>
      <h2 className='mx-4 mb-12 text-center text-lg font-oswald uppercase font-medium text-neutral-900 md:text-3xl'>
        Subject Matter Experts From:
      </h2>
      <div className='flex translate-y-[50%] rotate-[7deg] scale-110 overflow-hidden border-y-4 border-neutral-900 bg-neutral-50'>
        <TranslateWrapper>
          <LogoItemsTop />
        </TranslateWrapper>
        <TranslateWrapper>
          <LogoItemsTop />
        </TranslateWrapper>
        <TranslateWrapper>
          <LogoItemsTop />
        </TranslateWrapper>
      </div>
      <div className='flex -translate-y-[50%] -rotate-[7deg] scale-110 overflow-hidden border-y-4 border-neutral-900 bg-neutral-50'>
        <TranslateWrapper reverse>
          <LogoItemsBottom />
        </TranslateWrapper>
        <TranslateWrapper reverse>
          <LogoItemsBottom />
        </TranslateWrapper>
        <TranslateWrapper reverse>
          <LogoItemsBottom />
        </TranslateWrapper>
      </div>
    </section>
  );
};

const TranslateWrapper = ({ children, reverse }) => {
  return (
    <motion.div
      initial={{ translateX: reverse ? '-100%' : '0%' }}
      animate={{ translateX: reverse ? '0%' : '-100%' }}
      transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
      className='flex px-2'
    >
      {children}
    </motion.div>
  );
};

const LogoItem = ({ Icon, name }) => {
  return (
    <a
      href='/'
      rel='nofollow'
      target='_blank'
      className='flex items-center justify-center gap-4 px-4 py-4 text-black transition-colors hover:bg-neutral-200 md:py-6'
    >
      <Icon className='text-3xl md:text-4xl' />
      <span className='whitespace-nowrap text-2xl font-semibold uppercase md:text-3xl'>
        {name}
      </span>
    </a>
  );
};

const LogoItemsTop = () => (
  <>
    <LogoItem Icon={SiNike} name='Nike' />
    <LogoItem Icon={Si3M} name='3M' />
    <LogoItem Icon={SiAbstract} name='Abstract' />
    <LogoItem Icon={SiAdobe} name='Adobe' />
    <LogoItem Icon={SiAirtable} name='Airtable' />
    <LogoItem Icon={SiAmazon} name='Amazon' />
    <LogoItem Icon={SiBox} name='Box' />
    <LogoItem Icon={SiBytedance} name='Bytedance' />
    <LogoItem Icon={SiChase} name='Chase' />
    <LogoItem Icon={SiCloudbees} name='Cloudebees' />
  </>
);

const LogoItemsBottom = () => (
  <>
    <LogoItem Icon={SiBmw} name='BMW' />
    <LogoItem Icon={SiBurton} name='Burton' />
    <LogoItem Icon={SiBuildkite} name='Buildkite' />
    <LogoItem Icon={SiCouchbase} name='Couchbase' />
    <LogoItem Icon={SiDailymotion} name='Dailymotion' />
    <LogoItem Icon={SiDeliveroo} name='deliveroo' />
    <LogoItem Icon={SiEpicgames} name='Epic Games' />
    <LogoItem Icon={SiGenius} name='Genius' />
    <LogoItem Icon={SiGodaddy} name='GoDaddy' />
    <LogoItem Icon={SiHeroku} name='Heroku' />
  </>
);

export default RibbonLogos;
