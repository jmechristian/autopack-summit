import { motion } from 'framer-motion';

const RibbonLogos = () => {
  return (
    <section className=' overflow-hidden'>
      <h2 className='mx-4 mb-12 text-center text-lg font-oswald uppercase font-medium text-neutral-900 md:text-4xl'>
        Featuring Subject-Matter Experts From:
      </h2>
      <div className='flex overflow-hidden border-y-4 border-neutral-900 bg-white'>
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
      <div className='h-6'></div>
      <div className='flex overflow-hidden border-y-4 border-neutral-900 bg-white'>
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

const LogoItem = ({ image, name, link }) => {
  return (
    <a
      href={link}
      rel='nofollow'
      target='_blank'
      className='flex items-center justify-center gap-3 px-4 py-4 text-black transition-colors hover:bg-neutral-200 md:py-6'
    >
      <div
        className='w-16 h-full bg-contain bg-center bg-no-repeat'
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <span className='whitespace-nowrap text-2xl font-semibold uppercase md:text-3xl'>
        {name}
      </span>
    </a>
  );
};

const LogoItemsTop = () => (
  <>
    <LogoItem
      image={'https://packschool.s3.amazonaws.com/magna.png'}
      name='Magna Mirrors'
      link={'https://www.magna.com/'}
    />
    <LogoItem
      image={'https://packschool.s3.us-east-1.amazonaws.com/opmobility2.png'}
      name='OP Mobility'
      link={'https://www.plasticomnium.com/en/'}
    />
    <LogoItem
      image={'https://packschool.s3.amazonaws.com/trienda.png'}
      name='TriEnda'
      link={'https://www.trienda.com/'}
    />
    <LogoItem
      image={'https://packschool.s3.amazonaws.com/gm.png'}
      name='GM'
      link={'https://www.gm.com/'}
    />
    <LogoItem
      image={'https://packschool.s3.amazonaws.com/SURGERE_Logo.png'}
      name='Surgere'
      link={'https://surgere.com/'}
    />
    <LogoItem
      image={'https://packschool.s3.amazonaws.com/JTEKT_only_Black.png'}
      name='JTEKT'
      link={'https://jtekt-na.com/'}
    />
    <LogoItem
      image={'https://packschool.s3.us-east-1.amazonaws.com/conteyor.png'}
      name='KTPconTeyor'
      link={'https://www.ktpconteyor.com/en'}
    />
  </>
);

const LogoItemsBottom = () => (
  <>
    <LogoItem
      image={
        'https://packschool.s3.amazonaws.com/bmw-logo-logo-png-transparent.png'
      }
      name='BMW'
      link={'https://www.bmwgroup.com/en.html'}
    />
    <LogoItem
      image={'https://packschool.s3.amazonaws.com/nissan-new.jpeg'}
      name='Nissan'
      link='https://www.nissanusa.com/'
    />
    <LogoItem
      image={'https://packschool.s3.amazonaws.com/bosch+icon.png'}
      name='Bosch'
      link={'https://www.boschautoparts.com/'}
    />
    <LogoItem
      image={'https://packschool.s3.amazonaws.com/Volvo-Iron-Mark-Black.png'}
      name='Volvo'
      link={'https://www.volvocars.com/us/'}
    />
    <LogoItem
      image={'https://packschool.s3.amazonaws.com/Lear_Corporation_logo.png'}
      name='Lear Corp.'
      link={'https://www.lear.com/'}
    />
  </>
);

export default RibbonLogos;
