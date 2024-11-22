import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { openNavMenu, closeNavMenu } from '../../features/layout/layoutSlice';
import RegisterModal from '../../shared/RegisterModal';
import SponsorshipFormModal from '../../shared/SponsorshipFormModal';
import VideoModal from '../../shared/VideoModal';
import Footer from './footer/Footer';
import Header from './header/Header';
import MobileMenu from './mobile/MobileMenu';
import CookieConsent from '../../shared/CookieConsent';
import { motion, AnimatePresence } from 'framer-motion';
import PowerConsole from '../../shared/PowerConsole';

const Layout = ({ client, children }) => {
  const [footerImages, setFooterImages] = useState(null);
  const dispatch = useDispatch();
  const { navOpen, videoOpen, sponsorFormOpen, registrationOpen, powerOpen } =
    useSelector((state) => state.layout);

  useEffect(() => {
    const getData = async () => {
      const footerImages =
        await client.fetch(`*[_type == "footerImages" && name == "Footer Main"] {
        footerGallery[]
      }`);

      setFooterImages(footerImages[0].footerGallery);
    };

    getData();
  }, []);

  return (
    <div>
      <CookieConsent />
      <motion.div className='relative w-full h-28 lg:h-12'>
        <motion.div className='fixed z-50 w-full h-28 lg:h-12'>
          <motion.div
            className='flex flex-col lg:flex-row gap-1 h-full bg-black leading-none justify-center items-center w-full py-4'
            initial={{ y: '-100px' }}
            animate={{ y: 0 }}
            transition={{ delay: 1.5, ease: 'easeInOut', duration: 1 }}
          >
            <motion.div className='font-medium text-ap-yellow text-lg leading-none uppercase font-oswald'>
              Oct 15-17, 2025
            </motion.div>
            <motion.div className='text-white/80 text-lg font-oswald'>
              Hyatt Regency, Greenville SC
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
      <Header openMenu={() => dispatch(openNavMenu())} />
      <MobileMenu close={() => dispatch(closeNavMenu())} isOpen={navOpen} />
      <PowerConsole />
      {videoOpen && <VideoModal />}
      {sponsorFormOpen && <SponsorshipFormModal />}
      {registrationOpen && <RegisterModal />}
      {children}
      <Footer footerImages={footerImages} />
    </div>
  );
};

export default Layout;
